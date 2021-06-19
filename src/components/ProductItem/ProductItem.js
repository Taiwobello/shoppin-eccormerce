import React from 'react'
import { AddCart, ProductItemImage, ProductItemName, ProductItemOverlay, ProductItemPrice, StyledProductItem, AddWishList } from './ProductItem.styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { addToCart } from '../../redux/cart/cartActions';
import { useDispatch } from 'react-redux';
import {addToWishList} from "../../redux/wishList/wishListAction"


function ProductItem({product}) {
    const {image, name, price, id} = product
    const dispatch = useDispatch()
    return (
        <StyledProductItem>
            <ProductItemOverlay>
                <AddCart title="Add to cart" onClick={() => dispatch(addToCart(id))} >
                    <ShoppingCartIcon  style={{ fontSize: 25 }} />
                </AddCart>
                <AddWishList title="Add to wish list" onClick={() => dispatch(addToWishList(id))}>
                    <FavoriteBorderIcon style={{ fontSize: 25 }} />
                </AddWishList>
            </ProductItemOverlay>
            <ProductItemImage src={image} />
            <ProductItemName>
                {name}
            </ProductItemName>
            <ProductItemPrice>
                $ {price}
            </ProductItemPrice>
        </StyledProductItem>
    )
}

export default ProductItem
