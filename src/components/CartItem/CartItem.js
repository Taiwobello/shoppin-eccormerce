import React from 'react'
import { Underline } from '../../pages/ShopPage/ShopPage.styles'
import { CartItemImage, CartItemName, CartItemPrice, StyledCartItem, CartItemQuantity, CartItemAmount, CartItemQuantityContainer } from './CartItem.styles'
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from "@material-ui/icons/Add"
import RemoveIcon from "@material-ui/icons/Remove"
import { useDispatch } from 'react-redux';
import { addQuantity, removeFromCart, subQuantity } from '../../redux/cart/cartActions';


function CartItem({cartItem}) {
    const {image, name, price, quantity, id} = cartItem
    const dispatch = useDispatch()
    return (
        <StyledCartItem>
            <div className="text-image">
                <CartItemImage src={image} />
                <CartItemName>
                    {name}
                </CartItemName>
            </div>
            
            <CartItemPrice>
                {price}
            </CartItemPrice>
            <CartItemQuantityContainer>
                <AddIcon className="add-icon" onClick={() => dispatch(addQuantity(id))} />
                <CartItemQuantity>
                    {quantity}
                </CartItemQuantity>
                <RemoveIcon className="remove-icon" onClick={() => dispatch(subQuantity(id))} />
            </CartItemQuantityContainer>
            
            <CartItemAmount>
                {quantity * price}
            </CartItemAmount>
            <ClearIcon className="delete--icon" fontSize="large" onClick={() => dispatch(removeFromCart(id))} />
            <Underline/>
        </StyledCartItem>
    )
}

export default CartItem
