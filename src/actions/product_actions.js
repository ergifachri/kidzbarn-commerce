import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    ADD_TO_CART_USER,
    GET_CART_ITEMS_USER,
    REMOVE_CART_ITEM_USER,
    ON_SUCCESS_BUY_USER,
    UPDATE_DATA_USER,
    CLEAR_UPDATE_USER_DATA
} from './types';
import * as types from '../constants/ActionTypes';
import { toast  } from 'react-toastify';
import {PRODUCT_SERVER} from '../components/utils/misc';

export const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
})

export  function getProducts (){
    const products;
    const request = axios.get(`${PRODUCT_SERVER}/showall`)
                .then(response => {
                    console.log("a+resultproduct");
                    console.log(response.data);
                    products = response.data;
                    
                })
                .catch(error =>{
                 });
    
    return {
        type: types.RECEIVE_PRODUCTS,
        products
    }
}
