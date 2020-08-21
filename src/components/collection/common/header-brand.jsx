import React, {Component} from 'react';
import { connect } from 'react-redux'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { SlideToggle } from 'react-slide-toggle';


import {getBrands, getColors, getMinMaxPrice} from '../../../services';
import {filterBrand, filterColor, filterPrice} from '../../../actions'

class HeaderBrand extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    

    

    

    render (){
        const filteredBrands = this.props.filters.brand;
        
        return (
        <div className="top-banner-content small-section">
            <h4>
                {filteredBrands}
            </h4>
         {/*    <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
       */}  </div>
        )
    }
}


const mapStateToProps = state => ({
    
    filters: state.filters
})

export default connect(
    mapStateToProps,
    { filterBrand, filterColor, filterPrice }
)(HeaderBrand);