import React, {Component} from 'react';
import { Link} from 'react-router-dom';

import {SlideUpDown} from "../../../services/script"
import LogoImage from "../headers/common/logo"

class AboutUs extends Component {

    componentDidMount(){
        var contentwidth = window.innerWidth;
        if ((contentwidth) < 750) {
            SlideUpDown('footer-title');
        } else {
            var elems = document.querySelectorAll(".footer-title");
            [].forEach.call(elems, function(elemt) {
                let el = elemt.nextElementSibling;
                el.style = "display: block";
            });
        }
    }


    render () {

        return (
            <footer className="footer-light">
                <div className="light-layout">
                    <div className="container">
                        <section className="small-section border-section border-top-0">
                        <div style={{display:'flex',flex:'1',justifyContent:'center',alignItems:'center'}}>
                            <h3>About Us</h3>
                        </div>
                        
                            <div className="row" style={{marginTop:'15px'}}>
                                <div className="col-lg-12">
                                    <div className="subscribe" style={{dispay:'flex',flexDirection:'column'}}>
                                        <div style={{lineHeight:'200%',opacity:0.85,textAlign:'center' ,maxWidth:'900px'}}>
                                            
                                            Welcome to our store. Here, you can find numerous high quality children books as well as curated educational toys.  

                                            Our story began in 2017, when we initially offered imported Children books from world's most famous publishers.

                                            
                                        </div>
                                        <div style={{lineHeight:'200%',opacity:0.85,textAlign:'center',marginTop:'20px',maxWidth:'900px'}}>
                                            
                                        Our deep interest in children books flourished as we personally acquired some of these books for our very own daughter, born just a year before.

Our hope at the time had always been for her to grow the habit of reading high quality children books and playing less with toys. 

As for toys, we didn't spend a lot in her early years. However, she initially had a few toys made from magnetic wooden blocks, namely TEGU.    
                                        </div>

                                        <div style={{lineHeight:'200%',opacity:0.85,textAlign:'center',marginTop:'20px',maxWidth:'900px'}}>
                                            
                                        This has been one of her favorite toys since then. 
Along with this, we discovered that in the market, there were many sophisticated block toys and wooden toys that provide open-ended gameplay.
We thus started to source and market some of the toys in 2019, in addition to our book business. 

Therefore we continue to stay true to our course and expand it by providing best educational experiences to both parents and children, through great books and educational toys.
 </div>


                                        
                                    </div>
                                </div>
                               
                            </div>
                        </section>
                    </div>
                </div>
                
            </footer>
        )
    }
}

export default AboutUs;