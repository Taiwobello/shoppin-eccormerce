import { ADD_TO_WISHlIST, REMOVE_FROM_WISHlIST, TOGGLE_WISHlIST } from "./wishListTypes"

export const addToWishList = (id) => {
    return {
        type: ADD_TO_WISHlIST,
        payload: id
    }
        
}

export const removeFromWishList = (id) => {
    return {
        type: REMOVE_FROM_WISHlIST,
        payload: id
    }
        
}

export const toggleWishList = (isWishList) => {
    return{
        type: TOGGLE_WISHlIST
    }
}