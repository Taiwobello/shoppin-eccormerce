import styled, { keyframes } from "styled-components";
import { Underline } from "../../pages/ShopPage/ShopPage.styles";
import { device } from "../../screenSize";

const slideFromRight = keyframes`
    from{
        width: 0;
    }

    to{
        width: 30%;
    }
`

export const WhisListContainer = styled.div`
    background-color: rgba(0, 0, 0, .7);
    position: absolute;
    visibility: ${props => props.isWishList ? "visible" : "hidden"};
    display: none;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`

export const StyledWishList = styled.div`
    background-color: white;
    /* height: 100vh; */
    width: 30%;
    position: relative;

    overflow: scroll;
    /* animation: ${slideFromRight} 3s linear; */

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