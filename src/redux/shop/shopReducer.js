import SHOP_DATA from "../../data/shopData";
import { TOGGLE_CATEGORY } from "./shopTypes";

const initialShopData = {
    shopData: SHOP_DATA,
    products: "all"
}

const shopReducer = (state = initialShopData, action) => {

    switch (action.type){

        case TOGGLE_CATEGORY:
            return {
                ...state,
                products: action.payload
            }

        default:
            return state
    }
}

export default shopReducer;