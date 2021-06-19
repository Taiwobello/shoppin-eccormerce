import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart/cartActions'
import Button from '../Button/Button'
import { WishListDescription, WishListImage, WishListName, WishListPrice } from './WishListItem.styles'
import { StyledWishListItem } from './WishListItem.styles'
import ClearIcon from '@material-ui/icons/Clear';
import { removeFromWishList, toggleWishList } from '../../redux/wishList/wishListAction'

function WishListItem({item}) {
    const {id, name, image, price} = item
    const dispatch = useDispatch()
    return (
        <StyledWishListItem>
            <WishListImage src={image} />
            <WishListDescription>
                <div>
                    <WishListName>
                        {name}
                    </WishListName>
                    <WishListPrice>
                        {price}
                    </WishListPrice>
                    <div onClick={() => dispatch(addToCart(id))}>
                        <Button className="add-to-cart" text="Add to cart" />
                    </div>
                </div>                
                <ClearIcon style={{cursor: 'pointer'}} className="delete-icon" fontSize="large" onClick={() => {
                    dispatch(removeFromWishList(id))
                    dispatch(toggleWishList(true))
                }} />
            </WishListDescription>
        </StyledWishListItem>
    )
}

export default WishListItem
