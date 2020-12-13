import React, {Component} from 'react';
import Slider from 'react-slick';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import {getBestSeller,getRelatedItems} from "../../services";


class NewProduct extends Component {

    constructor(props){
        super(props);
    }

    render (){
        const {items, symbol} = this.props;
        
        var arrays = [];
        while (items.length > 0) {
            arrays.push(items.splice(0, 4));
        }

        return (
            <div className="theme-card">
                <h1></h1>
                <h5 className="title-border">Related Product</h5>
                <Slider className="offer-slider slide-1">
                    {arrays.map((products, index) =>
                        <div key={index}>
                            {products.map((product, i) =>
                                <div className="media" key={i} onClick={()=>window.location.reload()}>
                                    <Link to={`${process.env.PUBLIC_URL}/product/${product.id}`}><img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/kids/product/${product.Pictures[0].name}`} alt="" /></Link>
                                    <div className="media-body align-self-center">
                                        {/* <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div> */}
                                        <Link to={`${process.env.PUBLIC_URL}/product/${product.id}`}><h6>{product.name}</h6></Link>
                                        {product.stock == 0 ? <h7>Out of stock</h7> : product.discount > 0 ?  <h4>{symbol}{(product.price*product.discount/100)}
                                            <del><span className="money">{'IDR'}{product.price}</span></del></h4>:
                                            <span className="money">{'IDR'}{product.price}</span>}



                                       
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </Slider>
            </div>
        )
    }
}

function mapStateToProps(state,ownProps) {
    
    return {
        items: getRelatedItems(state.data.products,ownProps.productItem.tags[0]),
        symbol: state.data.symbol
    }
}

export default connect(mapStateToProps, null)(NewProduct);
