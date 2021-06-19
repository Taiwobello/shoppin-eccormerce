import styled from "styled-components";
import { Underline } from "../ShopPage/ShopPage.styles";
import { Link } from "react-router-dom";
import { device } from "../../screenSize";

export const CartPageContainer = styled.div`
    position: relative;
    display: block;
    min-height: 100vh;
    & ${Underline}{
        height: 1px;
        margin-top: 2rem;
        margin-bottom: 2rem;

        @media ${device.mobileL}{
            margin-top: 0;
        }
    }
`

export const CartPageTitle = styled.h1`
    text-align: center;
    font-size: 4rem;
    font-weight: 400;
    margin-top: 3rem;

    @media ${device.mobileL}{
        font-size: 3rem;
    } 
`

export const CartDetails = styled.div`
    font-size: 1.8rem;
    display: grid;
    grid-template-columns: minmax(100px, 1fr) repeat(4, 1fr);
    margin-top: 4.5rem;
`
export const ProductDetails = styled.p`

`

export const CartDetail = styled.p`
    margin-left: 1rem;
    &.product-detail{
        margin-left: 2rem;
    }
    @media ${device.mobileL}{
        font-size: 1.3rem;
    }
`

export const ClearCart = styled.button`
    display: block;
    text-align: center;
    font-size: 2rem;
    min-width: 20%;
    padding: 1.5rem;
    background-color:  black;
    border: none;
    color: white;
    margin: 0 auto;
    margin-top: 2rem;
    cursor: pointer;
    transition: all .2s;
    border-radius: 10px;
    margin-bottom: 4rem;

    &:hover{
        opacity: .9;
    }
`
export const EmptyCart = styled.p`
        text-align: center;
        font-size: 1.8rem;
        opacity: .6;
        margin: 3rem;
`

export const ShoppingPageLink = styled(Link)`
    background-color: black;
    color: white;
    padding: 2rem 0;
    font-size: 2rem;
    display: block;
    width: 30%;
    margin: 0 auto;
    margin-top: 10rem;
    border-radius: 10px;
    text-align: center;

    transition: all .3s;
    border-radius: 10px;

    &:hover{
        opacity: .8;
    }
`
