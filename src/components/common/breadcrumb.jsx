import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Breadcrumb extends Component {
    render (){
        const {title, parent} = this.props;
        return (
            <div className="breadcrumb-section">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-md-6">
                            <div className="page-title">
                                <h2>{title}</h2>
                            </div>
                        </div> */}
                        <div className="col-md-6">
                            <nav aria-label="breadcrumb" className="theme-breadcrumb">
                                <ol style={{
                                    backgroundColor:'transparent',
                                    textTransform:'uppercase',
                                    fontSize:'14px',
                                    color:'#555555',
                                    fontSize:'14px',
                                    fontWeight:'600' }}>
                                    <li className="breadcrumb-item" style={{color:'#555555'}}><Link to={`${process.env.PUBLIC_URL}`}>Home</Link></li>
                                    {parent? 
                                    <li className="breadcrumb-item" aria-current="page" style={{color:'#555555'}}><Link to={`${process.env.PUBLIC_URL}/${parent}`}>{parent}</Link></li>:''}
                                    <li className="breadcrumb-item active" aria-current="page" style={{color:'#555555'}}>{title}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Breadcrumb;