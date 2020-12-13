import * as types from '../constants/ActionTypes'
import jabodetabek from '../api/jabodetabek.json';



const ongkirReducer = (state = {}, action) => {
    // console.log('Action Result');
    // console.log(action);
    switch (action.type) {
        case types.RECEIVE_ONGKIR:
            console.log("a+ jabodetabek");
            console.log(jabodetabek);
            var jabodetabekArray = jabodetabek;
            var cityCode = action.city;
            var _ongkir = 30000;
            for(var i=0;i<jabodetabekArray.length;i++){
                
                if(jabodetabekArray[i].id==cityCode){
                    console.log('set ongkir to zero');
                    _ongkir = 0;
                }
            }
            return {
                ...state,
                ongkir: _ongkir
            };
        default:
            return state;
    }
}

export default ongkirReducer;