import React from 'react'
import { toggleCategory } from '../../redux/shop/shopActions'
import { useDispatch, useSelector } from 'react-redux'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


// import { NavLink } from 'react-router-dom'

import {NavContainer, NavLinkContainer, NavLinkList, NavLink, NavLogoSpan, NavLogo} from "./NavBar.styles"
import Count  from '../Count/Count';
import { Container } from '../../App.styles';
import { toggleWishList } from '../../redux/wishList/wishListAction';

function NavBar() {
    const dispatch = useDispatch()
    const cartItemsLength = useSelector(state => state.cart.cartItems.length)
    const wishListLength = useSelector(state => state.wishList.wishList.length)
    return (
        <NavContainer>
            <Container>
                <NavLink to="/"> <NavLogo><NavLogoSpan>Shop</NavLogoSpan>in</NavLogo></NavLink>
                <NavLinkList>
                    <NavLinkContainer>
                        <NavLink to="/shop" onClick={() => dispatch(toggleCategory("all"))} >Shop</NavLink>
                    </NavLinkContainer>
                    <NavLinkContainer>
                        <Count count={cartItemsLength} />
                        <NavLink to="/cart" ><ShoppingCartIcon style={{ fontSize: 30 }} /></NavLink>
                    </NavLinkContainer>
                    <NavLinkContainer>
                        <Count count={wishListLength} />
                        <FavoriteBorderIcon className="wishList-icon" style={{ 
                            fontSize: 30,
                            cursor: "pointer"
                            }}
                            onClick={() => dispatch(toggleWishList())}
                        />
                    </NavLinkContainer>
                </NavLinkList>
            </Container>
        </NavContainer>
    )
}

export default NavBar
