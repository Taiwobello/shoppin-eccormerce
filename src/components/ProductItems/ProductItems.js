import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../ProductItem/ProductItem'
import { StyledProductItems } from './ProductItems.styles'

function ProductItems() {
    const productItems = useSelector(state => state.shop.shopData.map(({items, category}) => (
        {
            items,
            category
        }
    ))) 

    const product = useSelector(state => state.shop.products)

    let products = []
    productItems.forEach(item => {
        if (product === item.category.toLowerCase()){
            console.log(item.items)
            products = item.items
        }
        
        else if (product === "all"){
            item.items.forEach((item, index) => {
                if (index < 4){
                    products.push(item)
                }
            })
        }
    })
    
    return (
        <StyledProductItems>
            {products.map(product => {
                return <ProductItem product={product} key={product.id} />
            } )}
        </StyledProductItems>
    )
}

export default ProductItems
