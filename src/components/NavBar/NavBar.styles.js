import styled from "styled-components";

import {Link} from "react-router-dom"
import { Container } from "../../App.styles";
import { device } from "../../screenSize";

export const NavContainer = styled.div`
    width: 100%;
    padding: 1.5rem 0;
    margin: 0 auto;
    /* margin-right: 0; */

    & ${Container}{
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media ${device.mobileL}{
            flex-direction: column;
        }
    }

    @media ${device.mobileL}{
        width: 90%;
    }
`

export const NavLogo = styled.h1`
    font-weight: 400;
    @media ${device.mobileL}{
        margin-bottom: 2rem;
    }
`


export const NavLogoSpan = styled.span`
   color:  ${props => props.theme.colorPrimary};
   font-weight: 450;
`
export const NavLinkList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${device.mobileL}{
        /* display: ${props => props.toggleNav ? "none" : "block"}; */
    }
`

export const NavLinkContainer = styled.li`
    font-weight: 400;
    font-size: 1.9rem;
    padding: 0 2rem;
    position: relative;

    & .wishList-icon{
        transition: all .3s;

        &:hover{
            color: ${props => props.theme.colorPrimary};
        }
    }

    
`

export const NavLink = styled(Link)`
    color:  ${props => props.theme.colorBlack};
    transition: all .3s;

    &:hover{
        color: ${props => props.theme.colorPrimary};
    }
`

export const ToggleNav = styled.div`
    display: ${props => props.toggleNav ? "block" : "none"};

    @media ${device.mobileL}{
        display: block;
    }
`