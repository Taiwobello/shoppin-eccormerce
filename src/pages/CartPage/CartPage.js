import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Underline } from '../ShopPage/ShopPage.styles'
import { CartDetails, CartPageContainer, CartPageTitle, CartDetail, ClearCart, EmptyCart, ShoppingPageLink } from './CartPage.styles'
import CartItems from '../../components/CartItems/CartItems';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../redux/cart/cartActions';
import WishList from '../../components/WishListItems/WishListItems';
import { Container } from '../../App.styles';

function CartPage(props) {
    const cartItemsLength = useSelector(state => state.cart.cartItems.length)
    const dispatch = useDispatch()
    return (
        <CartPageContainer>
            <Container>
                <NavBar />
                <Underline />
                <CartPageTitle>Shopping Cart</CartPageTitle>
                {
                    cartItemsLength > 0 ? (
                        <div>
                            <CartDetails>
                                <CartDetail className="product-details">
                                    Product details
                                </CartDetail>
                                <CartDetail>
                                    Price
                                </CartDetail>
                                <CartDetail>
                                    Quantity
                                </CartDetail>
                                <CartDetail>
                                    Amount
                                </CartDetail>
                            </CartDetails>
                            <Underline />
                            <CartItems />
                            <ClearCart onClick={() => dispatch(clearCart())} text="Clear Text">
                                Clear Cart
                            </ClearCart>
                        </div>
                        ) : (
                            <div>
                                <EmptyCart>Your cart is Currently Empty</EmptyCart>
                                <ShoppingPageLink to="/shop">Continue Shopping</ShoppingPageLink>

                            </div>
                            
                        )
                }
                
            </Container>
            <WishList />
        </CartPageContainer>     
    )
}

export default CartPage
