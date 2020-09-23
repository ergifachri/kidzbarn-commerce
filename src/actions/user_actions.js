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

import { toast  } from 'react-toastify';
import { USER_SERVER, PRODUCT_SERVER, AUTH_SERVER } from '../components/utils/misc';


export function registerUser(dataToSubmit){
     const response = {};
    const request = axios.post(`${USER_SERVER}/register`,dataToSubmit)
        .then(response => {
           if(response.data.status == 'success'){
            toast.success('Your user has been created');
            
           }
        })
        .catch(err => {
            toast.error(err.response.data.message);
            
        });
    
        return {
            type: REGISTER_USER,
            payload: request
        }
    
}

function saveToLocalStorage(request) {
    try {
        const serializedState = JSON.stringify(request)
        
        localStorage.setItem('user', serializedState)
    }catch(e){
    }
}

export  function loginUser (dataToSubmit,history){
    const request = axios.post(`${AUTH_SERVER}/loginUser`,dataToSubmit)
                .then(response => {
                    
                    if (response.data.message == 'User has been logged-in successfully'){
                        saveToLocalStorage(response.data);
                        history.push({
                            pathname: '/kids',
                        })
                    }
                    
                    else{
                        toast.error(response.data.message);
            
                    }
                })
                .catch(error =>{
                 });
    
    const requesta = {status: "success", message: "User has been logged-in successfully", data: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZ…xMjJ9.gBMGxL0qL3pOFORFlUCXFZUzpiudDE7Ubc9uLHY-rxY"}
    return {
        type: LOGIN_USER,
        payload: requesta
    }
}

function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));
    
    if (user && user.data) {
         return { 'Authorization': 'Bearer '+user.data};
    } else {
        return {};
    }
}

export function auth(){
    return (dispatch)=>{
        const requestOptions = {
            headers:authHeader()
        };

        const request = axios.get(`${USER_SERVER}/showuser`,requestOptions)
        .then(response =>{
             if(response.data.status == 'success'){
                dispatch(success(response.data));
            }
            else{
                logoutUser();
            }
            
        })

       
        
    }
    
    function success(request){
        return {
            type: AUTH_USER,
            payload: request
        }
    }

    
        

}


export function logoutUser(){

    localStorage.removeItem('user');
    const request = {};

    return {
        type: LOGOUT_USER,
        payload: request
    }

}

export function addToCart(_id){

    const request = axios.post( `${USER_SERVER}/addToCart?productId=${_id}`)
    .then(response => response.data)

    return {
        type: ADD_TO_CART_USER,
        payload: request
    }
}

export function getCartItems(cartItems, userCart){

    const request = axios.get(`${PRODUCT_SERVER}/articles_by_id?id=${cartItems}&type=array`)
                    .then(response => {
     
                        userCart.forEach(item=>{
                            response.data.forEach((k,i)=>{
                                if(item.id === k._id){
                                    response.data[i].quantity = item.quantity;
                                }
                            })
                        })
                        return response.data;
                    })
                 

    return {
        type: GET_CART_ITEMS_USER,
        payload: request
    }

}


export function removeCartItem(id){

    const request = axios.get(`${USER_SERVER}/removeFromCart?_id=${id}`)
                    .then(response => {

                        response.data.cart.forEach(item=>{
                            response.data.cartDetail.forEach((k,i)=>{
                                if(item.id === k._id){
                                    response.data.cartDetail[i].quantity = item.quantity;
                                }
                            })
                        })
                            return response.data;
                    })

    return {
        type: REMOVE_CART_ITEM_USER,
        payload: request
    }

}



export function onSuccessBuy(data){ 
    const request = axios.post(`${USER_SERVER}/successBuy`,data)
                    .then(response => response.data);

    return {
        type: ON_SUCCESS_BUY_USER,
        payload: request
    }
}

export function updateUserData(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/update_profile`,dataToSubmit)
                    .then(response => {
                        return response.data
                    });
    
    return {
        type: UPDATE_DATA_USER,
        payload: request
    }
}

export function clearUpdateUser(){
    return {
        type: CLEAR_UPDATE_USER_DATA,
        payload: ''
    }
}