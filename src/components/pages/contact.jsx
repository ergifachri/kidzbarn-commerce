import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";
import axios from 'axios';
class Contact extends Component {

    constructor (props) {
        super (props)

        this.state={
            firstname:'',
            lastname:'',
            email:'',
            phone:'',
            message:'',
          }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e =>{
        this.setState({
          [e.target.name]:e.target.value
        })
        
    }

    async handleSubmit(e){
        e.preventDefault()
    
        const {firstname,email,message}= this.state
        console.log(firstname,email,message);
        const form = await axios.post('localhost:3001/api/form',{
          firstname,
          email,
          message
        })
      }

    render (){


        return (
            <div>
                <Breadcrumb title={'Contact Us'}/>
                
                
                {/*Forget Password section*/}
                <section className=" contact-page section-b-space">
                    <div className="container">
                        <div className="row section-b-space">
                            {/* <div className="col-lg-7 map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d50059.12775918716!2d72.78534673554945!3d21.16564923510817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1533793756956"
                                    allowFullScreen></iframe>
                            </div> */}
                            <div className="col-lg-5">
                                {/* <div className="contact-right">
                                    <ul>
                                        <li>
                                            <div className="contact-icon">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/phone.png`} alt="Generic placeholder image" />
                                                    <h6>Contact Us</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>+91 123 - 456 - 7890</p>
                                                <p>+86 163 - 451 - 7894</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact-icon">
                                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                <h6>Address</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>ABC Complex,Near xyz, New York</p>
                                                <p>USA 123456</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact-icon">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/email.png`} alt="Generic placeholder image" />
                                                    <h6>Address</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>Support@Shopcart.com</p>
                                                <p>info@shopcart.com</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact-icon">
                                                <i className="fa fa-fax" aria-hidden="true"></i>
                                                <h6>Fax</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>Support@Shopcart.com</p>
                                                <p>info@shopcart.com</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <form className="theme-form">
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <label htmlFor="firstname">First Name</label>
                                            <input type="text" className="form-control" id="name" name="firstname"
                                                   placeholder="Enter Your name" required="" onChange={this.handleChange}/>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="lastname">Last Name</label>
                                            <input type="text" className="form-control" id="last-name" name="lastname"
                                                   placeholder="Email" required="" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="phone">Phone number</label>
                                            <input type="text" className="form-control" id="phone" name="phone"
                                                   placeholder="Enter your number" required="" onChange={this.handleChange}/>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" placeholder="Email" name="email"
                                                   required="" onChange={this.handleChange}/>
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="message">Write Your Message</label>
                                            <textarea className="form-control" placeholder="Write Your Message" name="message"
                                                      id="exampleFormControlTextarea1" rows="6" onChange={this.handleChange}></textarea>
                                        </div>
                                        <div className="col-md-12">
                                          </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <button className="btn btn-solid" type="submit" onClick={this.handleSubmit}>Send Your Message</button>
                                       
                    </div>
                </section>

            </div>
        )
    }
}

export default Contact