
import React, { Component } from 'react';
import Slider from 'react-slick';

class SmallImages extends Component {
    constructor (props) {
        super(props);
        this.state = {
            nav2: null
        }
    }
    componentDidMount() {
        this.setState({
            nav2: this.slider2
        });
    }

    render() {
        const { item, settings } = this.props;

        var productsnav = settings;

        return (
            <div className="row">
                <div className="col-12 p-0">
                    <Slider {...productsnav} asNavFor={this.props.navOne} ref={slider => (this.slider2 = slider)} className="slider-nav">
                        {item.variants?
                        /*item.variants.map((vari, index) =>
                            <div key={index}>
                                <img src={`${vari.images}`} key={index} alt=""  className="img-fluid" />
                            </div>
                        )*/null:
                            item.Pictures.map((vari, index) =>
                                <div key={index}>
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/kids/product/${vari.name}`} key={index} alt=""  className="img-fluid"   style={{maxHeight:'100%',maxWidth:'100%',width:'250px',height:'150px',objectFit:'cover',objectPosition:'center'}}
                                   />
                                </div>
                            )}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default SmallImages;