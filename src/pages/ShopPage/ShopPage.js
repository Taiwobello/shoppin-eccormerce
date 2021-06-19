import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '../../App.styles'
import NavBar from '../../components/NavBar/NavBar'
import ProductItems from '../../components/ProductItems/ProductItems'
import WishList from '../../components/WishListItems/WishListItems'
import { toggleCategory } from '../../redux/shop/shopActions'
import { ShopContainer, ProductList, Product, Underline } from './ShopPage.styles'

function ShopPage() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.shop.products)
    return (
        <ShopContainer>
            <Container>
                <NavBar />
                <Underline />
                <ProductList>
                    <Product 
                        onClick={() => dispatch(toggleCategory("all"))}
                        className={`${products === "all" ? "active" : null}`}
                    >
                        Products
                    </Product>
                    <Product 
                        onClick={() => dispatch(toggleCategory("women")) }
                        className={`${products === "women" ? "active" : null}`}
                    >
                        Women
                    </Product>
                    <Product 
                        onClick={() => dispatch(toggleCategory("men")) }
                        className={`${products === "men" ? "active" : null}`}
                    >
                        Men
                    </Product>
                    <Product 
                        onClick={() => dispatch(toggleCategory("shoes")) }
                        className={`${products === "shoes" ? "active" : null}`}
                    >
                        Shoes
                    </Product>
                    <Product 
                        onClick={() => dispatch(toggleCategory("hats")) }
                        className={`${products === "hats" ? "active" : null}`}
                    >
                        Hats
                    </Product>
                </ProductList>
                <ProductItems />
            </Container>
            <WishList />
        </ShopContainer>
    )
}

export default ShopPage
