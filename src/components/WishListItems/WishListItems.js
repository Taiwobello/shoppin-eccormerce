import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Underline } from '../../pages/ShopPage/ShopPage.styles'
import { toggleWishList } from '../../redux/wishList/wishListAction'
import WishListItem from '../WishListItem/WishListItem'
import { StyledWishList, WhisListContainer, WishListBackground, WishListTitle } from './WishListItems.styles'

function WishList() {
    const wishList = useSelector(state => state.wishList.wishList)
    const isWishList = useSelector(state => state.wishList.wishListToggle)
    const dispatch = useDispatch()
    console.log(isWishList)
    return (
        <WhisListContainer isWishList={isWishList}>
            <WishListBackground onClick={() => dispatch(toggleWishList())}>

            </WishListBackground>
            <StyledWishList>
                <WishListTitle>Wish List Product</WishListTitle>
                {wishList.map((item, index) => {return(
                    <div key={item.id * 100}>
                        <WishListItem item={item} key={item.id} />
                        <Underline key={index * 10} />
                    </div>
                        
                    )})}
            </StyledWishList>
            
        </WhisListContainer>
        
    )
}

export default WishList
