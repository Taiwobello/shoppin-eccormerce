import { shopItemes } from "../cart/cartReducer"
import { ADD_TO_WISHlIST, REMOVE_FROM_WISHlIST, TOGGLE_WISHlIST } from "./wishListTypes"
const shopItems = shopItemes
const initialState ={
    wishList: [],
    wishListToggle: false,
}
const wishListReducer = (state=initialState, action) => {
    switch(action.type) {

        case ADD_TO_WISHlIST:
            const wishItemToAdd = shopItems.find(item => item.id === action.payload)
            const existedWish = state.wishList.find(item => item.id === wishItemToAdd.id)
            if (existedWish){
                return{
                    ...state
                }
            }else{
                return{
                    ...state,
                    wishList: [...state.wishList, wishItemToAdd]
                }
            }
            
        case REMOVE_FROM_WISHlIST:
            return{
                ...state,
                wishList: state.wishList.filter(item => item.id !== action.payload)
            }

        case TOGGLE_WISHlIST:
            return{
                ...state,
                wishListToggle: !state.wishListToggle
            }

        default:
            return state
    }
}

export default wishListReducer;