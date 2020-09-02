import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
import Breadcrumb from "../common/breadcrumb";
import NewProduct from "../common/new-product";
import Filter from "./common/filter";
import HeaderBrand from "./common/header-brand";
import FilterBar from "./common/filter-bar";
import ProductListing from "./common/product-listing";
import StickyBox from "react-sticky-box";
import queryString from 'query-string';
import { connect } from 'react-redux'
import {filterBrand} from '../../actions'

class CollectionLeftSidebar extends Component {

    componentDidMount(){
        const _values = queryString.parse(this.props.location.search);
        
        
        if(_values.brand){
            console.log('initials')
            //this.clickInitialBrandHendle(_values.brand)
            
        }

       
        
    }

    clickInitialBrandHendle(initialBrand) {
        
        
        const brands = [];
        console.log('initialBrand');
        console.log(initialBrand);
        brands.push(initialBrand); // push in array checked value
       
        /* var index = brands.indexOf(event.target.value);
        if (event.target.checked)
         else
            brands.splice(index, 1); // removed in array unchecked value  */

        this.props.filterBrand(brands);
        
    }

    state = {
        layoutColumns:3,
    }

    LayoutViewClicked(colums) {
        this.setState({
            layoutColumns:colums
        })
    }

    openFilter = () => {
        document.querySelector(".collection-filter").style = "left: -15px";
    }
    
    render (){
        const {initialBrand} = this.state
        return (
            <div>
                {/*SEO Support*/}
                <Helmet>
                    <title>Kidz Barn | Sites</title>
                    <meta name="description" content="Kidz Barn | Sites" />
                </Helmet>
                {/*SEO Support End */}

                <Breadcrumb title={'Collection'}/>

                <section className="section-b-space">
                    <div className="collection-wrapper">
                        <div className="container">
                            <div className="row" >
                                <div  className="col-sm-3 collection-filter">

                                    <StickyBox offsetTop={20} offsetBottom={20}>
                                     
                                        <div>
                                            <Filter history={this.props.history}/>
                                            {/* <NewProduct/> */}
                                            {/* <div className="collection-sidebar-banner">
                                                <a href="#">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/side-banner.png`} className="img-fluid" alt="" />
                                                </a>
                                            </div> */}
                                        </div>
                                    </StickyBox>
                                    {/*side-bar banner end here*/}
                                </div>
                                <div className="collection-content col">
                                    <div className="page-main-content ">
                                        <div className="">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="top-banner-wrapper">
                                                       {/*  <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/mega-menu/TOYS TIFF.jpg`} className="img-fluid" alt=""/></a>
                                                         */}
                                                            <HeaderBrand></HeaderBrand>
                                                        
                                                    </div>
                                                    <div className="collection-product-wrapper">
                                                        <div className="product-top-filter">
                                                            <div className="container-fluid p-0">
                                                                <div className="row">
                                                                    <div className="col-xl-12">
                                                                        <div className="filter-main-btn">
                                                                            <span onClick={this.openFilter}
                                                                                className="filter-btn btn btn-theme"><i
                                                                                className="fa fa-filter"
                                                                                aria-hidden="true"></i> Filter</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <FilterBar onLayoutViewClicked={(colmuns) => this.LayoutViewClicked(colmuns)}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/*Products Listing Component*/}
                                                        <ProductListing colSize={this.state.layoutColumns}/>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

const mapStateToProps = state => ({
   filters: state.filters
})



export default connect(mapStateToProps,{ filterBrand })(CollectionLeftSidebar);