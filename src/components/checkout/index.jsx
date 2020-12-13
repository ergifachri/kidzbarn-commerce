import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
import axios from 'axios';
import { connect } from 'react-redux'
import {Link, Redirect } from 'react-router-dom'
import PaypalExpressBtn from 'react-paypal-express-checkout';
import SimpleReactValidator from 'simple-react-validator';
import { API_URL } from '../../components/utils/misc';
import Breadcrumb from "../common/breadcrumb";
import {removeFromWishlist} from '../../actions'
import {ongkirCalculation} from '../../actions/ongkir_action'
import {couponCheck} from '../../actions/discount_action'
import {getCartTotal,getProvince,getCity,getCartTotalDisc} from "../../services";
import Modal from 'react-responsive-modal';
import { bindActionCreators } from 'redux';

class checkOut extends Component {

    constructor (props) {
        super (props)

        this.state = {
            open: false,
            payment:'stripe',
            first_name:'',
            last_name:'',
            phone:'',
            email:'',
            country:'Indonesia',
            address:'',
            city:'',
            state:'',
            pincode:'',
            create_account: '',
            provinces:[],
            cities:[],
            coupon:''
        }
        this.validator = new SimpleReactValidator();
        this.getProvinsi();
    }

    getProvinsi = async()=>{
        let result = await getProvince();
        console.log("a+provinsi");
        console.log(result);
        this.setState({
            provinces : result
        },()=>{
            this.getKota(1);
        })
        this.setState({
            province:result[0].province
        })
    }

    getKota = async(cityCode)=>{
        let result = await getCity(cityCode);
        console.log("a+provinsi");
        console.log(result);
        this.setState({
            cities : result
        })
        this.setState({
            city:result[0].city_name
        })
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    confirmPayment = async (userData) =>{
        this.onCloseModal();
        
        console.log("a+ confirmPayment");
        console.log(userData);
        axios.post(`${API_URL}/api/v1/kidzbarn/transactions/addNewTransaction`,userData).then(result=>{
            const form = axios.post(`${API_URL}/api/v1/kidzbarn/mail/confirmationEmail`,{
                userData:userData,
                items:this.props.cartItems,
                orderTotal:this.props.totalDisc,
                curr:'IDR'
            }) 
        }).catch(error=>{
            console.log(error.response);
        })

        
        this.props.history.push({
            pathname: '/order-success',
                state: {ongkir:this.props.ongkir,userData:userData, payment: '123456',
                porder:userData.user.porder,discount:this.props.discount,items: this.props.cartItems, orderTotal: this.props.totalDisc,subtotal:this.props.total, symbol: 'IDR' }
        })
    }

    setStateFromInput = (event) => {
        var obj = {};
        
        obj[event.target.name] = event.target.value;
        this.setState(obj);

        if(event.target.name=='province'){
            this.getKota(event.target.value);
        }

        if(event.target.name=='city'){
            //dispatchOngkir(cityCode)
            this.props.ongkirCalculation(event.target.value)
        }

    }

    setStateFromCheckbox = (event) => {
          var obj = {};
          obj[event.target.name] = event.target.checked;
          this.setState(obj);

          if(!this.validator.fieldValid(event.target.name))
          {
              this.validator.showMessages();
          }
    }

    checkhandle(value) {
        this.setState({
            payment: value
        })
    }

    StripeClick = () => {

        if (this.validator.allValid()) {
            alert('You submitted the form and stuff!');
            
            const _cartItems = this.props.cartItems;
            const cartItems = [];
            _cartItems.map(item=>{
                const cartItem={
                    id:item.id,
                    price:item.price,
                    qty:item.qty,
                    subtotal:item.sum,
                    productname:item.name
                }
                cartItems.push(cartItem);
            })

            const date = new Date();
            let x = Math.floor((Math.random() * 1000) + 1);
            const _porder = `${date.getSeconds()}${date.getMilliseconds()}${(x)}`;
            const uploadData = {
                "cartItems":cartItems,
                "user":{
                    firstname:this.state.first_name,
                    lastname:this.state.last_name,
                    email:this.state.email,
                    phone:this.state.phone,
                    id:this.props.user.id,
                    total:this.props.total,
                    status:'NOT PAID',
                    totaldisc:this.props.totalDisc,
                    ongkir:this.props.ongkir,
                    discount:this.props.discount,
                    realTotal:this.props.total,
                    address:this.state.address,
                    porder:_porder
                }
                
            };            

            

           

            this.confirmPayment(uploadData);
            /* var handler = (window).StripeCheckout.configure({
                key: 'pk_test_glxk17KhP7poKIawsaSgKtsL',
                locale: 'auto',
                token: (token: any) => {
                       this.props.history.push({
                          pathname: '/order-success',
                              state: { payment: token, items: this.props.cartItems, orderTotal: this.props.total, symbol: this.props.symbol }
                      })
                }
              });
              handler.open({
                name: 'Kidzbarn',
                description: 'Online Toy Store',
                amount: this.amount * 100
              })   */
        } else {
          this.validator.showMessages();
          // rerender to show messages for the first time
          this.forceUpdate();
        }
    }

    couponCheck = ()=>{
        console.log("a+ check coupon");
        console.log(this.state.coupon);
        const coupon = this.state.coupon;
        this.props.couponCheck(coupon);
        /* console.log("a+ totcal coopun");
        console.log(this.props.total);
        axios.get(`${API_URL}/api/v1/kidzbarn/coupon/findbycode/${coupon}`).then(result=>{
            alert('Coupoun Success');
            console.log('success');
            console.log(result.data);
        }).catch(err=>{
            alert('Coupon Not Found');
            console.log(err);
        }) */
    }

    render (){
        const {cartItems, symbol, total,ongkir,discount,totalDisc} = this.props;
        const {provinces,cities}=this.state;
        // Paypal Integration
        const onSuccess = (payment) => {
            console.log("The payment was succeeded!", payment);
            this.props.history.push({
                pathname: '/order-success',
                    state: { ongkir:ongkir, payment: payment, items: cartItems, orderTotal: total, symbol: symbol }
            })

        }

        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }

        const onError = (err) => {
            console.log("Error!", err);
        }

        const client = {
            sandbox:    'AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_',
            production: 'AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_',
        }


        return (
            <div>
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div className="modal-content quick-view-modal">
                                <div className="modal-body">
                                    <div className="row">
                                        {/* <div className="col-lg-6  col-xs-12">
                                            <div className="quick-view-img">
                                                <h1>Test</h1>
                                            </div>
                                        </div> */}
                                        <div className="col-lg-12 col-xs-12">
                                            <div className="product-right">
                                                <h4>Please confirm your payment to our Whatsapp :)</h4>
                                                
                                                <div className="product-description border-product">
                                                    
                                                </div>
                                                <div className="product-buttons" style={{display:'flex',flex:'1',alignItems:'center',justifyContent:'center'}}>
                                                    <button  className="btn btn-solid" onClick={() => this.confirmPayment()} >Confirm Payment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                {/*SEO Support*/}
                <Helmet>
                    <title>Kidz Barn | Sites</title>
                    <meta name="description" content="Kidz Barn | Sites" /> 
                </Helmet>
                {/*SEO Support End */}

                <Breadcrumb  title={'Checkout'}/>

                <section className="section-b-space">
                    <div className="container padding-cls">
                        <div className="checkout-page">
                            <div className="checkout-form">
                                <form>
                                    <div className="checkout row">
                                        <div className="col-lg-6 col-sm-12 col-xs-12">
                                            <div className="checkout-title">
                                                <h3>Billing Details</h3>
                                            </div>
                                            <div className="row check-out">
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">First Name</div>
                                                    <input type="text" name="first_name" value={this.state.first_name} onChange={this.setStateFromInput} />
                                                    {this.validator.message('first_name', this.state.first_name, 'required|alpha')}
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">Last Name</div>
                                                    <input type="text" name="last_name" value={this.state.last_name} onChange={this.setStateFromInput} />
                                                    {this.validator.message('last_name', this.state.last_name, 'required|alpha')}
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">Phone</div>
                                                    <input type="text" name="phone"  value={this.state.phone} onChange={this.setStateFromInput} />
                                                    {this.validator.message('phone', this.state.phone, 'required|phone')}
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">Email Address</div>
                                                    <input type="text" name="email" value={this.state.email} onChange={this.setStateFromInput} />
                                                    {this.validator.message('email', this.state.email, 'required|email')}
                                                </div>
                                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                    <div className="field-label">Country</div>
                                                    <select name="country" value={this.state.country} onChange={this.setStateFromInput}>
                                                        <option>Indonesia</option>
                                                    </select>
                                                    {this.validator.message('country', this.state.country, 'required')}
                                                </div>
                                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                    <div className="field-label">Province</div>
                                                    <select name="province" value={this.state.province} onChange={this.setStateFromInput}>
                                                        {provinces.map(provinsi =>{
                                                            return(
                                                                <option value={provinsi.province_id}>{provinsi.province}</option>
                                                    
                                                            )
                                                        })}
                                                     </select>
                                                    {this.validator.message('province', this.state.province, 'required')}
                                                </div>
                                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                    <div className="field-label">City</div>
                                                    <select name="city" value={this.state.city} onChange={this.setStateFromInput}>
                                                        {cities.map(city =>{
                                                            return(
                                                                <option value={city.city_id}>{city.city_name}</option>
                                                    
                                                            )
                                                        })}
                                                    </select>
                                                    {this.validator.message('province', this.state.city, 'required')}
                                                </div>
                                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                    <div className="field-label">Address</div>
                                                    <input type="text" name="address" value={this.state.address} onChange={this.setStateFromInput} placeholder="Street address" />
                                                    {this.validator.message('address', this.state.address, 'required|min:20|max:120')}
                                                </div>
                                                
                                                {/* <div className="form-group col-md-12 col-sm-6 col-xs-12">
                                                    <div className="field-label">State / County</div>
                                                    <input type="text" name="state" value={this.state.state} onChange={this.setStateFromInput} />
                                                    {this.validator.message('state', this.state.state, 'required|alpha')}
                                                </div> */}
                                                <div className="form-group col-md-12 col-sm-6 col-xs-12">
                                                    <div className="field-label">Postal Code</div>
                                                    <input type="text" name="pincode" value={this.state.spincode} onChange={this.setStateFromInput} />
                                                    {this.validator.message('pincode', this.state.pincode, 'required|integer')}
                                                </div>
                                                <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <input type="checkbox" name="create_account" id="account-option"  checked={this.state.create_account} onChange={this.setStateFromCheckbox}/>
                                                    &ensp; <label htmlFor="account-option">Create An Account?</label>
                                                    {this.validator.message('checkbox', this.state.create_account, 'create_account')}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12 col-xs-12">
                                            <div className="checkout-details">
                                                <div className="order-box">
                                                    <div className="title-box">
                                                        <div>Product <span> Total</span></div>
                                                    </div>
                                                    <ul className="qty">
                                                        {cartItems.map((item, index) => {
                                                     return <li key={index}>{item.name} × {item.qty} <span>{'IDR'} {item.sum}</span></li> })
                                                        }
                                                    </ul>
                                                    <ul className="sub-total">
                                                        <li>Subtotal <span className="count">{'IDR'}{total}</span></li>
                                                        <li>Ongkir (JNE) <span className="ongkir">{'IDR'}{ongkir}</span></li>
                                                       {/*  <li>Shipping <div className="shipping">
                                                            <div className="shopping-option">
                                                                <input type="checkbox" name="free-shipping" id="free-shipping" />
                                                                    <label htmlFor="free-shipping">Free Shipping</label>
                                                            </div>
                                                            <div className="shopping-option">
                                                                <input type="checkbox" name="local-pickup" id="local-pickup" />
                                                                    <label htmlFor="local-pickup">Local Pickup</label>
                                                            </div>
                                                        </div>
                                                        </li> */}
                                                    </ul>

                                                    <ul className="sub-total">
                                                        <h6>Coupon Valid</h6>
                                                        <li>Coupon</li>
                                                        <li> <input type="text" name="coupon" value={this.state.coupon} onChange={this.setStateFromInput} />
                                                    <span className="count"><button type="button" style={{padding:'10px 30px',marginTop:'10px'}} className="btn-solid btn" onClick={() => this.couponCheck()} >Apply</button></span></li>
                                                       {/*  <li>Shipping <div className="shipping">
                                                            <div className="shopping-option">
                                                                <input type="checkbox" name="free-shipping" id="free-shipping" />
                                                                    <label htmlFor="free-shipping">Free Shipping</label>
                                                            </div>
                                                            <div className="shopping-option">
                                                                <input type="checkbox" name="local-pickup" id="local-pickup" />
                                                                    <label htmlFor="local-pickup">Local Pickup</label>
                                                            </div>
                                                        </div>
                                                        </li> */}
                                                    </ul>
                                                    <ul className="total">
                                                        <li>Discount <span className="count">{discount}{'%'}</span></li>
                                                    </ul>
                                                    <ul className="total">
                                                        <li>Total <span className="count">{'IDR'}{totalDisc}</span></li>
                                                    </ul>
                                                </div>

                                                <div className="payment-box">
                                                    <div className="upper-box">
                                                        <div className="payment-options">
                                                            <ul>
                                                                <li>
                                                                    <div className="radio-option stripe">
                                                                        <input type="radio" name="payment-group" id="payment-2" defaultChecked={true} onClick={() => this.checkhandle('stripe')} />
                                                                        <label htmlFor="payment-2">Bank Transfer {/* <span className="image"><img src={`${process.env.PUBLIC_URL}/assets/images/bca.jpg`} style={{maxHeight:'200px',maxWidth:'200px',objectFit:'scale-down'}} alt=""/></span> */}</label>
                                                                        
                                                                    </div>
                                                                </li>
                                                                {/*  <li>
                                                                    <div className="radio-option paypal">
                                                                            <label htmlFor="payment-1" style={{marginLeft:'-40px'}}>12345678 a.n Ergi Nurfachri</label>
                                                                    </div>
                                                                </li>  */}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {(total !== 0)?
                                                    <div className="text-right">
                                                        {(this.state.payment === 'stripe')? <button type="button" className="btn-solid btn" onClick={() => this.StripeClick()} >Place Order</button>:
                                                         <PaypalExpressBtn env={'sandbox'} client={client} currency={'USD'} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />}
                                                    </div>
                                                    : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="row section-t-space">
                                        <div className="col-lg-6">
                                            <div className="stripe-section">
                                                <h5>stripe js example</h5>
                                                <div>
                                                    <h5 className="checkout_class">dummy test</h5>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>cart number</td>
                                                                <td>4242424242424242</td>
                                                            </tr>
                                                            <tr>
                                                                <td>mm/yy</td>
                                                                <td>2/2020</td>
                                                            </tr>
                                                            <tr>
                                                                <td>cvc</td>
                                                                <td>2222</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 m-sm-t-2">
                                            <div className="stripe-section">
                                                <h5>paypal example</h5>
                                                <div>
                                                    <h5 className="checkout_class">dummy test</h5>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>cart number</td>
                                                                <td>4152521541244</td>
                                                            </tr>
                                                            <tr>
                                                                <td>mm/yy</td>
                                                                <td>11/18</td>
                                                            </tr>
                                                            <tr>
                                                                <td>cvc</td>
                                                                <td>521</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    cartItems: state.cartList.cart,
    symbol: state.data.symbol,
    totalDisc: getCartTotalDisc(state.cartList.cart,state.discount,state.ongkir.ongkir),
    total: getCartTotal(state.cartList.cart,state.discount,state.ongkir.ongkir),
    ongkir:state.ongkir.ongkir,
    discount:state.discount,
    user:state.user.userData.data
})

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({ ongkirCalculation,couponCheck}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(checkOut)



