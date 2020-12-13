import axios from 'axios';
import {
    
} from '../actions/';

import { toast  } from 'react-toastify';
import { USER_SERVER, PRODUCT_SERVER, AUTH_SERVER,COUPON_SERVER } from '../components/utils/misc';
import { ADD_COUPON_TO_CART } from '../constants/ActionTypes';


export function couponCheck(coupon){
    return (dispatch)=>{
        const response = {};
        const request = axios.get(`${COUPON_SERVER}/findbycode/${coupon}`)
        .then(response => {
           if(response.data.status == 'success'){
            console.log("a+ response data");
            console.log(response.data.message.discount);
            alert('Coupon Found');
            dispatch(success(10));
           }
        })
        .catch(err => {
            alert(err.response);
            
        });
    }
    
    
   
        function success(request){
            return {
                type: ADD_COUPON_TO_CART,
                discount: request
            }
        }
    
}
