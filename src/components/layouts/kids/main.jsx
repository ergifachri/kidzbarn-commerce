import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import ThemeSettings from "../../common/theme-settings";
import Breadcrumb from "../../common/breadcrumb";
// Import custom components
import TopCollection from "../common/collection"
import HeaderOne from "../../common/headers/header-one"
import FooterOne from "../../common/footers/footer-one"
import AboutUsOne from "../../common/footers/aboutus-one"
import Instagram from "../common/instagram"
import LogoBlock from "../common/logo-block"
import MultiSlider from "./multiple-slider";
import { connect } from 'react-redux'
import {filterBrand} from '../../../actions'

class Kids extends Component {

    componentDidMount() {
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color10.css` );
    }

    clickInitialBrandHendle(initialBrand) {
        
        
        const brands = [];
        const upperCase = initialBrand.toUpperCase();
        brands.push(upperCase); // push in array checked value
       
        /* var index = brands.indexOf(event.target.value);
        if (event.target.checked)
         else
            brands.splice(index, 1); // removed in array unchecked value  */

        this.props.filterBrand(brands);
        
    }

    render(){

        return (
            <div>
                <Helmet>
                    <title>Kidz Barn| Kids Store</title>
                </Helmet>
                <HeaderOne logoName={'logo/6.png'}/>

                <section className="p-0">
                    <Slider className="slide-1 home-slider">
                        <div>
                            <div className="home home21 text-center p-right">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>for kids</h4>
                                                    <h1>Best collection</h1><a href="#" className="btn btn-solid">shop now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home22 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>30% off</h4>
                                                    <h1>lowest price</h1><a href="#" className="btn btn-solid">shop now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>

                
                <Breadcrumb title={'Brands'}/>
                
                
                {/*Collection section*/}{/* 
                <section className="collection section-b-space">
                    <div className="container">
                        <div className="row partition-collection" style={{display:'flex',justifyContent:'center'}}>
                            <div className="col-lg-2 col-md-6" >
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/kids/banner/Avdar.png`} className="img-fluid" alt="" />
                                        <div className="collection-content">
                                           <h4>AVDAR</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/kids/banner/Clicques.png`} className="img-fluid" alt="" />
                                        <div className="collection-content">
                                            <h4>CLICQUES</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/kids/banner/Connetix.png`} className="img-fluid" alt="" />
                                        <div className="collection-content">
                                            <h4>CONNETIX</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/kids/banner/Flockmen.png`} className="img-fluid" alt="" />
                                        <div className="collection-content">
                                            <h4>FLOCKMEN</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/kids/banner/Grapat.png`} className="img-fluid" alt="" />
                                        <div className="collection-content">
                                           <h4>GRAPAT</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                         </div>
                                </div>
                            </div>
                        </div>
                        <div className="row partition-collection section-b-space " style={{backgroundColor:'red',display:'flex',justifyContent:'center'}}>
                            <div className="col-lg-2 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/kids/banner/Grimms.png`} className="img-fluid" alt="" />
                                        <div className="collection-content">
                                            <h4>GRIMMS</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                       </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/kids/banner/SumBlox.png`} className="img-fluid" alt="" />
                                        <div className="collection-content">
                                            <h4>SUMBLOX</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/kids/banner/Tegu.png`} className="img-fluid" alt="" />
                                        <div className="collection-content">
                                            <h4>TEGU</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                       </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/kids/banner/WayToPlay.png`} className="img-fluid" alt="" />
                                        <div className="collection-content">
                                            <h4>WAYTOPLAN</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                         </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/kids/banner/YellowDoor.png`} className="img-fluid" alt="" />
                                        <div className="collection-content">
                                            <h4>YELLOWDOOR</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                

                {/*Banner Section*/}
                <section className="pt-0 banner-6 ratio2_1">
                    <div >
                        <div className="row partition3 banner-top-cls" style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center',height:'auto'}}>
                            <div className="col-md-3" >
                            <Link to={`${process.env.PUBLIC_URL}/collection`} onClick={()=>this.clickInitialBrandHendle('avdar')}>
                                     
                                    <div className="collection-banner p-left">
                                        <div className="img-part">
                                        
                                            <img  src={`${process.env.PUBLIC_URL}/assets/images/kids/product/BannerAvdar.png`}
                                                 className="img-fluid blur-up lazyload bg-img" style={{maxHeight:'200px'}} alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{textAlign:'center'}}
                                    >
                                        <h3>Avdar</h3>
                                    </div>
                                    
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to={`${process.env.PUBLIC_URL}/collection`} onClick={()=>this.clickInitialBrandHendle('clicques')}>
                                 
                                    <div className="collection-banner p-right text-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/kids/product/BannerClicques.png`}
                                                 className="img-fluid blur-up lazyload bg-img" style={{maxHeight:'200px'}} alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{textAlign:'center'}}>
                                        <h3>Clicques</h3>
                                    </div>
                                    
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to={`${process.env.PUBLIC_URL}/collection`} onClick={()=>this.clickInitialBrandHendle('connetix')}>
                                    <div className="collection-banner p-left">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/kids/product/BannerConnetix.png`}
                                                 className="img-fluid blur-up lazyload bg-img" style={{maxHeight:'200px'}} alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{textAlign:'center'}}>
                                        <h3>Connetix</h3>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to={`${process.env.PUBLIC_URL}/collection`} onClick={()=>this.clickInitialBrandHendle('flockmen')}>
                                    <div className="collection-banner p-right text-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/kids/product/BannerFlockmen.png`}
                                                 className="img-fluid blur-up lazyload bg-img" style={{maxHeight:'200px'}} alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{textAlign:'center'}}>
                                        <h3>Groom</h3>
                                    </div>
                                </Link>
                            </div>
                          
                        </div>
                        <div className="row partition3 banner-top-cls"  style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center'}}>
                            <div className="col-md-3">
                                <Link to={`${process.env.PUBLIC_URL}/collection`} onClick={()=>this.clickInitialBrandHendle('grapat')}>
                                    <div className="collection-banner p-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/kids/product/BannerGrapat.png`}
                                                 className="img-fluid blur-up lazyload bg-img" style={{maxHeight:'200px'}} alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{textAlign:'center'}}>
                                        <h3>Grapat</h3>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to={`${process.env.PUBLIC_URL}/collection`} onClick={()=>this.clickInitialBrandHendle('grimms')}>
                                    <div className="collection-banner p-right text-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/kids/product/BannerGrimms.png`}
                                                 className="img-fluid blur-up lazyload bg-img" style={{maxHeight:'200px'}} alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{textAlign:'center'}}>
                                        <h3>Grimms</h3>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to={`${process.env.PUBLIC_URL}/collection`} onClick={()=>this.clickInitialBrandHendle('sumblox')}>
                                    <div className="collection-banner p-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/kids/product/BannerSumBlox.png`}
                                                 className="img-fluid blur-up lazyload bg-img" style={{maxHeight:'200px'}} alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{textAlign:'center'}}>
                                        <h3>SumBlox</h3>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to={`${process.env.PUBLIC_URL}/collection`} onClick={()=>this.clickInitialBrandHendle('tegu')}>
                                    <div className="collection-banner p-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/kids/product/BannerTegu.png`}
                                                 className="img-fluid blur-up lazyload bg-img" style={{maxHeight:'200px'}} alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{textAlign:'center'}}>
                                        <h3>Tegu</h3>
                                    </div>
                                </Link>
                            </div>
                           
                        </div>
                        <div className="row partition3 banner-top-cls"  style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center'}}>
                            <div className="col-md-3">
                                <Link to={`${process.env.PUBLIC_URL}/collection`} onClick={()=>this.clickInitialBrandHendle('way to play')} >
                                    <div className="collection-banner p-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/kids/product/BannerWayToPlay.png`}
                                                 className="img-fluid blur-up lazyload bg-img" style={{maxHeight:'200px'}} alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{textAlign:'center'}}>
                                        <h3>WayToPlay</h3>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to={`${process.env.PUBLIC_URL}/collection`} onClick={()=>this.clickInitialBrandHendle('yellow door')} >
                                    <div className="collection-banner p-right text-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/kids/product/BannerYellowDoor.png`}
                                                 className="img-fluid blur-up lazyload bg-img" style={{maxHeight:'200px'}} alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{textAlign:'center'}}>
                                        <h3>YellowDoor</h3>
                                    </div>
                                </Link>
                            </div>
                           
                           
                        </div>
                    </div>
                </section>
                {/*Banner Section End*/}

                {/*collection banner layout*/}
                {/* <section className="banner-padding absolute-banner pb-0 ratio2_1">
                    <div className="container absolute-bg">
                        <div className="row partition2">
                            <div className="col-md-6">
                                <a href="#">
                                    <div className="collection-banner p-right text-center">
                                        <div>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/kids/2.jpg`}
                                                 className="img-fluid  bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner">
                                            <div>
                                                <h4>save 30%</h4>
                                                <h2>outfits</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6">
                                <a href="#">
                                    <div className="collection-banner p-right text-center">
                                        <div>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/kids/1.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner">
                                            <div>
                                                <h4>save 60%</h4>
                                                <h2>toys</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/*collection banner layout end*/}

                {/*Product slider}
                <TopCollection type={'kids'} />
                {/*Product slider End*/}

                {/*Parallax banner*/}
               {/*  <section className="p-0">
                    <div className="full-banner parallax parallax-banner11 text-center p-left">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="banner-contain">
                                            <h2>2018</h2>
                                            <h3>top trends</h3>
                                            <h4>special offear</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </section> */}
                {/*Parallax banner end*/}

                {/*Product Slider*/}
                {/* <MultiSlider type={'kids'} /> */}
                {/*Product Slider End*/}
                <AboutUsOne logoName={'logo/6.png'}/>
                {/*Instagram Section*/}
                <Instagram />
                {/*Instagram Section End*/}

                {/* Logo Block Section*/}
                 <LogoBlock /> 
                {/* Logo Block Section End*/}

                <FooterOne /* logoName={'logo/6.png'} *//>

                {/* <ThemeSettings /> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    filters: state.filters
 })
 
 
 
export default connect(mapStateToProps,{ filterBrand })(Kids);



