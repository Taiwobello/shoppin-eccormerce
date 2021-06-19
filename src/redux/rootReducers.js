import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';
import shopReducer from './shop/shopReducer';
import wishListReducer from './wishList/wishListReducer';


const rootReducer = combineReducers({
    shop: shopReducer,
    cart: cartReducer,
    wishList: wishListReducer
})

export default rootReducer