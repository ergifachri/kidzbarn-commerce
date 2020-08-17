import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Slider from 'react-slick';
import ig from 'fetch-instagram';

import {Slider5, Slider7} from "../../../services/script"

class Instagram extends Component {

    constructor (props) {
        super (props)

        this.state = {
            InstaData: []
        }
    }

    componentWillMount() {
        const instagram = ig({
            accessToken: 'IGQVJXMzNXUVk1UlNMU2VKTUREUVpRZA05ZAckNlZA0ZARUEZAOZAmh1X1Q3WWVyby0yLUVlU3V1YXFKQTZAaRmhhWmNtQVBRakZAMVl9wbmhMdlhQQXNEdjNYa1FlVU8yMkFTdzNRcXJNU1B6ZAG5wT0hLeW1DbgZDZD',
        });

        const users = instagram.media();
        users.then(res => {
            console.log('accessing instagram');
           
            this.setState({InstaData:res.data})
        })
        .catch(err =>{
            
        });

    }

    render (){

        const {InstaData} = this.state;
        const {type} = this.props;

        var Sliders = {};
        if(type === 'watch'){
            Sliders = Slider5;
        }else{
            Sliders = Slider7;
        }


        return (
            <section className={`instagram`}>
                <div className={`container${(type === 'watch')?'':'-fluid'}`}>
                    <div className="row">
                        <div className="col-md-12 p-0">
                            <h2 className="title-borderless"># instagram
                                </h2>
                                <Slider {...Sliders} className="slide-7 no-arrow slick-instagram">
                                    {InstaData.map((pic,i) =>
                                        <div key={i}>
                                            <a href={pic.link} target="_blank">
                                                <div className="instagram-box">
                                                    <img src={`${pic.images.standard_resolution.url}`} alt="Avatar" className="w-100" />
                                                    <div className="overlay">
                                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    )}
                                </Slider>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Instagram;