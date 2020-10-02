import React, {Component} from 'react';
import SimpleReactValidator from 'simple-react-validator';
import Breadcrumb from "../common/breadcrumb";
import { connect } from 'react-redux';
import {registerUser} from '../../actions/user_actions';

class Register extends Component {

    constructor (props) {
        super (props)
        this.state = {
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            confirmpassword:'',
            phone:''
        }
        this.validator = new SimpleReactValidator();
    }

    setStateFromInput = (event) => {
        var obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);

      }

    submitForm= (event) =>{
        event.preventDefault();
        let registerData = this.state;
        if (this.validator.allValid()) {
            
            this.props.dispatch(registerUser(registerData,this.props.history))
           
            

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
              }) */
        } else {
          this.validator.showMessages();
          // rerender to show messages for the first time
          this.forceUpdate();
        }
        /* 
        let dataToSubmit = generateData(this.state.formdata,'register');
        let formIsValid = isFormValid(this.state.formdata,'register')

        if(formIsValid){
            this.props.dispatch(registerUser(dataToSubmit))
            .then(response =>{ 
                if(response.payload.success){
                    this.setState({
                        formError: false,
                        formSuccess: true
                    });
                    setTimeout(()=>{
                        this.props.history.push('/register_login');
                    },3000)
                } else {
                    this.setState({formError: true})
                }
            }).catch(e => {
                this.setState({formError: true})
            })
        } else {
            this.setState({
                formError: true
            })
        } */
    }

    render (){


        return (
            <div>
                <Breadcrumb title={'create account'}/>
                
                
                {/*Regsiter section*/}
                <section className="register-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>create account</h3>
                                <div className="theme-card">
                                    <form className="theme-form">
                                        <div className="form-row">
                                            <div className="col-md-4">
                                                <label htmlFor="email">First Name</label>
                                                <input type="text"  className="form-control" name="firstname" value={this.state.firstname} onChange={this.setStateFromInput} />
                                                    {this.validator.message('firstname', this.state.firstname, 'required|alpha')}
                                                
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="review">Last Name</label>
                                                <input type="text" className="form-control" name="lastname" value={this.state.lastname} onChange={this.setStateFromInput} />
                                                    {this.validator.message('lastname', this.state.lastname, 'required|alpha')}
                                             
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="email">email</label>
                                                <input type="text" name="email" className="form-control" value={this.state.email} onChange={this.setStateFromInput} />
                                                    {this.validator.message('email', this.state.email, 'required|email')}
                                               
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-4">
                                                <label htmlFor="review">Password</label>
                                                <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.setStateFromInput} />
                                                    {this.validator.message('password', this.state.password, 'required|password required|min:8',)}
                                             
                                            
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="review">Confirm Password</label>
                                                <input type="password" name="confirmpassword" className="form-control" value={this.state.confirmpassword} onChange={this.setStateFromInput} />
                                                {this.validator.message('confirm_password', this.state.confirmpassword, `required|in:${this.state.password}`, {messages: {in: 'Passwords need to match!'}})}
                                            
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="review">Phonenumber</label>
                                                <input type="text" name="phone" className="form-control" value={this.state.phone} onChange={this.setStateFromInput} />
                                                    {this.validator.message('phone', this.state.phone, 'required|phone')}
                                             
                                            
                                            </div>
                                            <button onClick={(e)=> this.submitForm(e)} className="btn btn-solid">create Account</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default connect()(Register);