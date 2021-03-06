import React, {Component} from 'react';
import { connect } from 'react-redux'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { SlideToggle } from 'react-slide-toggle';

import {Link} from 'react-router-dom';
import {getBrands, getColors, getMinMaxPrice} from '../../../services';
import {filterBrand, filterColor, filterPrice} from '../../../actions'

class Filter extends Component {

    constructor(props) {
        super(props);
        console.log('this is props');
        console.log(props);
        this.state = {
            openFilter: false
        }
    }

   

    closeFilter = () => {
        document.querySelector(".collection-filter").style = "left: -365px";
    }

    clickInitialBrandHendle(initialBrand, brands) {
        
        
        brands = [];
        console.log('initialBrand');
        console.log(initialBrand);
        brands.push(initialBrand); // push in array checked value
       
        /* var index = brands.indexOf(event.target.value);
        if (event.target.checked)
         else
            brands.splice(index, 1); // removed in array unchecked value  */
        
        
        this.props.filterBrand(brands);
        
    }

    clickBrandHendle(event, brands) {
        
        window.location.reload();
        brands = [];
        let windowWidth = window.innerWidth;
        let brand = event.target.value;
        console.log('brands');
        console.log(event.target.value);
        brands.push(event.target.value); // push in array checked value
       
        /* var index = brands.indexOf(event.target.value);
        if (event.target.checked)
         else
            brands.splice(index, 1); // removed in array unchecked value  */
        console.log('history push');
        //this.props.history.push(`${process.env.PUBLIC_URL}/collection?=${brand}`);
        console.log(window.innerWidth);
        
        this.props.filterBrand(brands);

        /* if(windowWidth < 990){
            window.location.reload();
        } */
        
        
    }

    colorHandle(event, color){
        var elems = document.querySelectorAll(".color-selector ul li");
        [].forEach.call(elems, function(el) {
            el.classList.remove("active");
        });
        event.target.classList.add('active');
        this.props.filterColor(color)
    }

    render (){
        const filteredBrands = this.props.filters.brand;
        //console.log(this.props.brands);
        return (
                <div className="collection-filter-block">
                    {/*brand filter start*/}
                    <div className="collection-mobile-back">
                        <span className="filter-back" onClick={(e) => this.closeFilter(e)} >
                            <i className="fa fa-angle-left" aria-hidden="true"></i> back
                        </span>
                    </div>
                    <SlideToggle>
                        {({onToggle, setCollapsibleElement}) => (
                            <div className="collection-collapse-block">
                                <h3 className="collapse-block-title" onClick={onToggle}>brands</h3>
                                <div className="collection-collapse-block-content"  ref={setCollapsibleElement}>
                                    <div className="collection-brand-filter">
                        
                                        {this.props.brands.map((brand, index) => {
                                            
                                            return (
                                                <div className="custom-checkbox collection-filter-checkbox" key={index}>
                                                    
                                                
                                                <input type="text"  onClick={(e) => this.clickBrandHendle(e,filteredBrands)}   value={brand} defaultChecked={filteredBrands.includes(brand)? true : false}  className="custom-control-input" id={brand} >
                                                    
                                                </input>
                                                {brand == filteredBrands ? <label className="custom-control-label"
                                                       htmlFor={brand} style={{color:'pink'}}>{brand}</label>

                                                    :<label className="custom-control-label"
                                                    htmlFor={brand}>{brand}</label>}
                                                
                                            </div>  )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </SlideToggle>

                    {/*color filter start here*/}
                    {/* <SlideToggle>
                        {({onToggle, setCollapsibleElement}) => (
                            <div className="collection-collapse-block">
                                <h3 className="collapse-block-title" onClick={onToggle}>colors</h3>
                                <div className="collection-collapse-block-content" ref={setCollapsibleElement}>
                                    <div className="color-selector">
                                        <ul>
                                            {this.props.colors.map((color, index) => {
                                                return (
                                                    <li className={color} title={color} onClick={(e) => this.colorHandle(e, color)} key={index}></li> )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SlideToggle> */}
                    {/*price filter start here */}
                    {/* <SlideToggle>
                        {({onToggle, setCollapsibleElement}) => (
                            <div className="collection-collapse-block open">
                                <h3 className="collapse-block-title" onClick={onToggle}>price</h3>
                                <div className="collection-collapse-block-content block-price-content" ref={setCollapsibleElement}>
                                    <div className="collection-brand-filter">
                                        <div className="custom-control custom-checkbox collection-filter-checkbox">
                                            <InputRange
                                                maxValue={this.props.prices.max}
                                                minValue={this.props.prices.min}
                                                value={this.props.filters.value}
                                                onChange={value => this.props.filterPrice({ value })} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SlideToggle> */}
                </div>
        )
    }
}


const mapStateToProps = state => ({
    brands: getBrands(state.data.products),
    colors: getColors(state.data.products),
    prices: getMinMaxPrice(state.data.products),
    filters: state.filters
})

export default connect(
    mapStateToProps,
    { filterBrand, filterColor, filterPrice }
)(Filter);