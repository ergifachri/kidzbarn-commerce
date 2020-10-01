import * as types from '../constants/ActionTypes'




const ongkirReducer = (state = {}, action) => {
    // console.log('Action Result');
    // console.log(action);
    switch (action.type) {
        case types.RECEIVE_ONGKIR:
            return {
                ...state,
                ongkir: action.ongkir
            };
        default:
            return state;
    }
}

export default ongkirReducer;