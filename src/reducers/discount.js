import {
    ADD_COUPON_TO_CART
     } from "../constants/ActionTypes";


export default function discountReducer(state = {
    cart: []
}, action) {
    switch (action.type) {
        case ADD_COUPON_TO_CART:
            const _discount = action.discount
            return _discount

        

        default:
    }
    return state;
}
