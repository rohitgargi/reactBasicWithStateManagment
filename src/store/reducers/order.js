
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders:[],
    loading: false,
    purchased:false
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case actionTypes.FETCH_ORDER_START:
            return{
                ...state,
                loading:true
            }
        case actionTypes.FETCH_ORDER_SUCCESS:
            return{
                ...state,
                loading:false,
                orders:action.orders
            }
        case actionTypes.FETCH_ORDER_FAIL:
            return{
                ...state,
                loading:false
            }
        case actionTypes.PURCHASE_INIT:
            return{
                ...state,
                purchased:false
            }
        case actionTypes.PURCHASE_BURGER_START:
            return{
                ...state,
                loading: true
            }

        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderdata,
                id:action.orderId,
                
            }
            return {
                ...state,
                loading:false,
                orders: state.orders.concat(newOrder),
                purchased:true
            }
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading:false
            }
        default:
            return state;
    }
}

export default reducer;