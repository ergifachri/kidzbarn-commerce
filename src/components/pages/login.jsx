import React, {Component} from 'react';
import SimpleReactValidator from 'simple-react-validator';
import Breadcrumb from "../common/breadcrumb";
import { connect } from 'react-redux';
import {loginUser} from '../../actions/user_actions';
class Login extends Component {

    constructor (props) {
        super (props)
        this.state = { email:'',
        password:''
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
        let loginData = this.state;
        if (this.validator.allValid()) {
            console.log(loginData);
            this.props.dispatch(loginUser(loginData,this.props.history))
            /* .then(response=>{
                if(response.payload.success){
                    alert('Success register');
                }
                else{
                    alert('Failed register');
                }
            })
            .catch(e => {
                alert('Failed resgiter');
            }) */
           
             

            /* var handler = (window).StripeCheckout.configure({
                key: 'pk_test_glxk17KhP7poKIawsaSgKtsL',
                locale: 'auto',
                token: (token: any) => {
                    console.log(token)
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
        /* let dataToSubmit = generateData(this.state.formdata,'login');
        let formIsValid = isFormValid(this.state.formdata,'login')

        if(formIsValid){
            this.props.dispatch(loginUser(dataToSubmit)).then(response =>{
                if(response.payload.loginSuccess){
                    console.log(response.payload);
                }else{
                    this.setState({
                        formError: true
                    })
                }
            });

        } else {
            this.setState({
                formError: true
            })
        } */
    }

    render (){


        return (
            <div>
                <Breadcrumb title={'Login'}/>
                
                
                {/*Login section*/}
                <section className="login-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Login</h3>
                                <div className="theme-card">
                                    <form className="theme-form">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" name="email" value={this.state.email} className="form-control"  onChange={this.setStateFromInput} />
                                                    {this.validator.message('email', this.state.email, 'required|email')}
                                         </div>
                                        <div className="form-group">
                                            <label htmlFor="review">Password</label>
                                            <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.setStateFromInput} />
                                                    {this.validator.message('password', this.state.password, 'required|password')}
                                             
                                        </div>
                                        <button onClick={(e)=> this.submitForm(e)} className="btn btn-solid">Login</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 right-login">
                                <h3>New Customer</h3>
                                <div className="theme-card authentication-right">
                                    <h6 className="title-font">Create A Account</h6>
                                    <p>Sign up for a free account at our store. Registration is quick and easy. It
                                        allows you to be able to order from our shop. To start shopping click
                                        register.</p>
                                    <a href="#" className="btn btn-solid">Create an Account</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default connect()(Login);