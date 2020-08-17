import React, { Component } from 'react';
import Slider from 'react-slick';

import {Slider6} from "../../../services/script";

class LogoBlock extends Component {

    render (){
        return (
            <section className="section-b-space">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-md-12">
                            <Slider {...Slider6} className="slide-6 no-arrow">
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/1.jpg`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/2.jpg`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/3.jpg`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/4.jpg`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/5.jpg`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/6.jpg`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/7.jpg`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/8.jpg`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/9.jpg`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/10.jpg`} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default LogoBlock;