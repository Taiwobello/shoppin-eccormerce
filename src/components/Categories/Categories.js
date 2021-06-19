import React from 'react'
import { useSelector } from 'react-redux'

// import categories from '../../data/categoriesData'
import Category from '../Category/Category'

import {CategoriesContainer} from "./Categories.styles"

function Categories() {
    const categories = useSelector(state => state.shop.shopData.map(({id, category, image, routeName}) => ({
        id,
        category,
        image,
        routeName
    })))
    return (
        <CategoriesContainer>
                {
                    categories.map(category => {
                        return <Category image={category.image} category={category.category} routeName={category.routeName} key={category.id} />
                    })
                }
        </CategoriesContainer>
    )
}

export default Categories