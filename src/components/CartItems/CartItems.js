import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem/CartItem'
import { CartItemsContainer } from './CartItems.styles'

function CartItems() {
    const cartItems = useSelector(state => state.cart.cartItems)
    return (
        <CartItemsContainer>
            {
                cartItems.map(cartItem => 
                        <CartItem cartItem={cartItem} key={cartItem.id} />
                    )
            }
        </CartItemsContainer>
    )
}

export default CartItems
