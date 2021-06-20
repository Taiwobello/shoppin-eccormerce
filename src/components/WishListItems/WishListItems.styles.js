import styled from "styled-components";
import { Underline } from "../../pages/ShopPage/ShopPage.styles";
import { device } from "../../screenSize";


export const WhisListContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    visibility: ${props => props.isWishList ? "visible" : "hidden"};
`

export const WishListBackground = styled.div`
    width: 70%;
    height: 100%;
    background-color: rgba(0,0,0,.7);
    
`

export const StyledWishList = styled.div`
    background-color: white;
    width: 30%;
    position: relative;
    background-color: white;
    overflow: scroll;

    ${Underline}{
        margin: 1rem 0;
    }

    @media ${device.laptop}{
        width: 40%;
    }
    @media ${device.tablet}{
        width: 60%;
    }
`

export const WishListTitle = styled.h2`
    background-color: #EDEAE4;
    font-weight: 450;
    font-size: 2rem;
    padding: 1.5rem 0;
    padding-left: 5rem;
    margin-bottom: 3rem;
    @media ${device.mobileL}{
        margin-bottom: 1rem;
        padding-left: 2rem;
        font-size: 1.5rem;
    }
`