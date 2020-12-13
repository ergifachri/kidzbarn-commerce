import axios from 'axios';
import {
    
} from '../actions/';

import { toast  } from 'react-toastify';
import { USER_SERVER, PRODUCT_SERVER, AUTH_SERVER,COUPON_SERVER } from '../components/utils/misc';
import { RECEIVE_ONGKIR } from '../constants/ActionTypes';


export function ongkirCalculation(cityCode){
    return (dispatch)=>{
        const response = {};
        dispatch(calculate(cityCode));
       
    }
    
    
   
        function calculate(_cityCode){
            return {
                type: RECEIVE_ONGKIR,
                city: _cityCode
            }
        }
    
}
