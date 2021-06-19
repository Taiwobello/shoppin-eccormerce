import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCategory } from '../../redux/shop/shopActions'


import {Image, StyledCategory, CategoryLink, ImageContainer} from "./Category.styles"

function Category({image, category}) {
    const dispatch = useDispatch()
    return (
        <StyledCategory className={category.toLowerCase()}>
            <ImageContainer>
                <Image src={image} />
            </ImageContainer>
            <CategoryLink to={`/shop`} onClick={() => dispatch(toggleCategory(category.toLowerCase()))} >{category}</CategoryLink>
        </StyledCategory>
    )
}

export default Category
