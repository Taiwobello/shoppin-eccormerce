import styled from "styled-components";

import {Link} from "react-router-dom"
import { device } from "../../screenSize";

export const StyledCategory = styled.div`
    position: relative;

    &.hats {
        grid-column: 1 / 2;
    }
    &.women {
        grid-column: 3 / -1;
        grid-row: 1 / span 2;
    }

    &.men {
        grid-column: 1 / span 2;
    }
    @media ${device.tabletL}{
        &.hats {
            grid-column: 1 / span 2;
        }

        &.shoes{
            grid-column: 3 / span 2;
        }

        &.women {
            grid-column: 3 / -1;
            grid-row: 2 / 3;
        }
    }

    @media ${device.mobileL}{
        &.hats {
            grid-column: 1 / -1;
            grid-row: 1 / 2;
        }

        &.shoes{
            grid-column: 1 / -1;
            grid-row: 2 / 3;
        }

        &.women {
            grid-column: 1 / -1;
            grid-row: 3 / 4;
        }
    }

    @media ${device.mobileL}{
        margin-bottom: 2rem;
    }
`

export const CategoryLink = styled(Link)`
    font-size: 1.8rem;
    font-weight: 500;
    border-radius: 5px;
    padding: 1rem 2rem;
    color: black;
    background-color: white;
    position: absolute;
    left: 50%;
    bottom: 3%;
    transform: translate(-50%, -50%);
    box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.3);
    transition: all .2s ease-in-out;

    &:hover{
        box-shadow: 1px 0px 5px 0px rgba(0, 0, 0, 0.3);
    }
`



export const CategoryText = styled.h2`

`
export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;

    
`
export const Image = styled.img`
    object-fit:cover;
    width: 100%;
    height: 100%;
    transition: all 500ms ease;

    &:hover{
        transform: scale(1.2);
    }
`