import React from 'react';
import {Link} from 'react-router-dom'

function LogoImage(props) {

    return <Link to={`${process.env.PUBLIC_URL}/`} >
                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/${props.logo}`} style={{minHeight:'100px',minWidth:'100px',maxHeight:'100px',objectToFit:'cover'}} alt=""  className="img-fluid" />
            </Link>;
}

export default LogoImage;