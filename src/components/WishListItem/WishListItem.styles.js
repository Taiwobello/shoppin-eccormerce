import styled, { keyframes }from "styled-components";
import { device } from "../../screenSize";

const slideFromRight = keyframes`
    from{
        width: 0;
    }

    to{
        width: 100%;
    }
`

export const StyledWishListItem = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    margin: 3rem auto;

    @media ${device.tablet}{
        margin: 1rem auto;
        width: 90%;
    }

    @media ${device.mobileL}{
        margin: 1rem auto;
        width: 100%;
        /* margin-left: 5px; */
    }
    

    & .add-to-cart{
        font-size: 1.5rem;
        margin-top: 1rem;
        width: 120px;
            @media ${device.tablet}{
            font-size: 1.4rem;
            padding: 1rem .8rem;
            width: 100%;
        }
    }
`

export const WishListImage = styled.img`
    width: 30%;
    height: 100px;
    object-fit:cover;
    margin-right: 3rem;

    @media ${device.tablet}{
        margin-right: 1rem;
    }

    /* animation: ${slideFromRight} 4s linear; */
`

export const Image = styled.img`
    /* justify-self: flex-end; */
    
`

export const WishListDescription = styled.div`
    font-size: 1.6rem;
    display: flex;
    justify-content: space-between;

    @media ${device.mobileL}{
        font-size: 1.3rem;
    }

    /* animation: ${slideFromRight} 4s linear; */

    & .delete-icon{
        margin-left: 3rem;

        @media ${device.mobileL}{
        margin-left: 1rem;
    }
    }
`

export const WishListName = styled.p`
    margin-bottom: 1rem;

    @media ${device.mobileL}{
        margin-left: .3rem;
    }

    /* animation: ${slideFromRight} 4s linear; */
`

export const WishListPrice = styled.p``