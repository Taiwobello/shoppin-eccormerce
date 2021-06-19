import SHOP_DATA from "../../data/shopData"
import { ADD_QUANTITY, ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, SUB_QUANTITY } from "./cartTypes"

export let shopItemes = []
SHOP_DATA.forEach(data => {
    data.items.forEach(item => {
        shopItemes.push(item)
    })
})

const initialCart = {
    shopItemes,
    cartItems: [],
    total: 0
}

const cartReducer = (state=initialCart, action) => {
    switch(action.type){

        case ADD_TO_CART:
            let itemToAdd = state.shopItemes.find(item => item.id === action.payload)
            let existedItem = state.cartItems.find(item => action.payload === item.id)
            if (existedItem){
                itemToAdd.quantity += 1
                return{
                    ...state,
                    total: state.total + itemToAdd.price
                }
            }else{
                itemToAdd.quantity = 1
                return{
                    ...state,
                    cartItems: [...state.cartItems, itemToAdd],
                    total: state.total + itemToAdd.price
                }
            }
        
        case ADD_QUANTITY:
            return{
                ...state,
                cartItems: state.cartItems.map(item => 
                    item.id === action.payload ? 
                        {...item, quantity: item.quantity + 1} :
                        item
                )
            }

        case SUB_QUANTITY:
            return{
                ...state,
                cartItems: state.cartItems.map(item => 
                    item.quantity > 1 && item.id === action.payload ? 
                        {...item, quantity: item.quantity - 1} :
                        item
                )
            }

        case REMOVE_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(item => 
                        item.id !== action.payload
                    )
            }

        case CLEAR_CART:
            return{
                ...state,
                cartItems: []
            }

        

        default:
            return state
    }
}

export default cartReducer