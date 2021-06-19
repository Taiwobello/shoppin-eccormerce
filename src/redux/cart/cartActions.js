import { ADD_QUANTITY, ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, SUB_QUANTITY } from "./cartTypes"

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}

export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        payload: id
    }
}

export const subQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        payload: id
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART,
    }
}