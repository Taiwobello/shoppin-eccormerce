import styled from "styled-components";
import { Underline } from "../../pages/ShopPage/ShopPage.styles";
import { device } from "../../screenSize";

export const StyledCartItem = styled.div`
    display: grid;
    grid-template-columns: minmax(100px, 1fr) repeat(4, 1fr);
    grid-template-rows: 120px;
    font-size: 1.5rem;
    column-gap: 2rem;
    transition: all .2s;
    /* align-items: center; */

    @media ${device.mobileL}{
        grid-template-rows: 80px;
        font-size: 1.3rem;
    }

    & ${Underline}{
        grid-column: 1 / -1;
        height: 1px;
    }

    & .text-image{
        grid-column: 1 / 2;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .delete--icon{
        align-self: center;
        cursor: pointer;
    }
    /* margin: 2rem 0; */
`

export const CartItemImage = styled.img`
    object-fit:cover;
    height: 100%;
    width: 120px;
    margin-right: 2rem;
    @media ${device.mobileL}{
        margin-right: 1rem;
        width: 70%;
    }
    /* @media ${device.mobileL}{
        margin-right: 1rem;
        width: 100px;
    } */
`

export const CartItemName = styled.p`

`

export const CartItemPrice = styled.p`
    align-self: center;
`
export const CartItemQuantityContainer = styled.div`
    align-self: center;
    border: 1px solid black;
    width: max-content;
    height: max-content;
    display: flex;
    align-items: center;
    padding: 1rem;

    @media ${device.tablet}{
        padding: .5rem;
    }

    & .remove-icon, & .add-icon{
        cursor: pointer;
    }
`


export const CartItemQuantity = styled(CartItemPrice)`
    margin: 0 3rem;

    @media ${device.tablet}{
        margin: 0 1rem;
    }
`

export const CartItemAmount = styled(CartItemPrice)``