import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { withTranslate } from 'react-redux-multilingual'
import { connect } from 'react-redux';
import {logoutUser} from '../../../../actions/user_actions';
import { bindActionCreators } from 'redux'

class TopBar extends Component {

    componentDidMount() {
        console.log("a+topbar");
        console.log(this.props.user);   
    }

    render() {
        const {translate} = this.props;
        return (
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="header-contact">
                                <ul>
                                   {/*  <li>{translate('topbar_title', { theme_name: ' Kidz Barn' })}</li>
                                    */}{/*  <li><i className="fa fa-phone" aria-hidden="true"></i>{translate('call_us')}:  123 - 456 - 78901</li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 text-right">
                            <ul className="header-dropdown">
                                {/*  <li className="mobile-wishlist compare-mobile"><Link to={`${process.env.PUBLIC_URL}/compare`}><i className="fa fa-random" aria-hidden="true"></i>{translate('compare')}</Link></li>
                                 */}<li className="mobile-wishlist"><Link to={`${process.env.PUBLIC_URL}/wishlist`}><i className="fa fa-heart" aria-hidden="true"></i>wishlist</Link></li>
                                 <li className="onhover-dropdown mobile-account">
                                    <i className="fa fa-user" aria-hidden="true"></i> 
                                    {this.props.user.userData.data == null? 'My Account':this.props.user.userData.data.firstname}

                                    {this.props.user.userData.data  == null ? 
                                    <ul className="onhover-show-div">
                                        
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/pages/login`} data-lng="en">Login</Link>
                                    </li>
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/pages/register`} data-lng="en">Register</Link>
                                    </li>
                                </ul>
                                :<ul className="onhover-show-div">
                                        
                                <li onClick={()=> {
                                    this.props.logoutUser()
                                    }}>
                                        <Link to={`${process.env.PUBLIC_URL}/`} data-lng="en">Logout</Link>
                                   
                                </li>
                               
                            </ul>}

                                    
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({ logoutUser }, dispatch)
  }

const mapStateToProps = (state)=>{
    return{
      user: state.user
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(TopBar);