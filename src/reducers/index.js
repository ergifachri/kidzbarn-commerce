import { combineReducers } from 'redux';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'

// Import custom components
import productReducer from './products';
import userReducer from './user_reducer';
import cartReducer from './cart';
import filtersReducer from './filters';
import wishlistReducer from './wishlist';
import compareReducer from './compare';
import ongkirReducer from './ongkir';
import discountReducer from './discount';


const rootReducer = combineReducers({
    user:userReducer,
    data: productReducer,
    discount:discountReducer,
    cartList: cartReducer,
    filters: filtersReducer,
    wishlist: wishlistReducer,
    compare: compareReducer,
    ongkir:ongkirReducer,
    Intl
});

export default rootReducer;