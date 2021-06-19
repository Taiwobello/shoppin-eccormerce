import styled from "styled-components";
import {Link} from "react-router-dom"
import { device } from "../../screenSize";


export const HeroContainer = styled.div`

    & .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 90vh;
        overflow: hidden;
        padding-bottom: 2rem;

        @media ${device.tablet}{
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
    }
    @media ${device.tablet}{
        background-image: url("images/jon-ly-Xn7GvimQrk8-unsplash (1).jpg");
        background-size: cover;
        color: white;
    }
`

export const HeroTextContainer = styled.div`
    width: 30%;

    @media ${device.laptopL}{
        width: 500px;
    }
    @media ${device.tablet}{
        width: 70%;
        text-align: center;
        margin-top: 2rem;
    }
    @media ${device.mobileL}{
        width: 90%;
    }
`
export const HeroTitle = styled.h1`
    font-weight: 400;
    font-size: 3rem;
    letter-spacing: 5px;

    @media ${device.mobileL}{
        font-size: 2.5rem;
    }
`

export const HeroTitleTwo = styled.h1`
    color: ${props => props.theme.colorPrimary};
    font-size: 4rem;
    font-weight: 500;
    letter-spacing: 2px;

    @media ${device.mobileL}{
        font-size: 3rem;
        letter-spacing: 1px;
    }
`

export const HeroText = styled.p`
    font-size: 1.7rem;
    margin-top: 1rem;
    line-height: 2.5rem;

    @media ${device.mobileL}{
        font-size: 1.5rem;
        line-height: 2rem;
    }
`

export const HeroImage = styled.img`
    object-fit:cover;
    height: 100%;
    width: 50%;

    @media ${device.laptopL}{
        width: 50%;
    }
    @media ${device.tablet}{
        display: none;
    }
`

export const ButtonLink = styled(Link)`
    font-size: 2rem;
    padding: 1rem 2rem;
    background-color:  ${props => props.backgroundColor || props.theme.colorPrimary};
    border: none;
    color: ${props => props.color || "white"};
    margin-top: 2rem;
    display: inline-block;
    cursor: pointer;
    transition: all .2s;
    border-radius: 10px;

    &:hover{
        opacity: .9;
    }
`