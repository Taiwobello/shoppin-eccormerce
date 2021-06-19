import styled from "styled-components";
import { device } from "../../screenSize";

export const ShopContainer = styled.div`
    position: relative;
`

export const ProductList = styled.ul`
    display: flex;
    margin-top: 2rem;
    /* border-top: 1px solid black; */
`

export const ProductContainer = styled.li`
    
`

export const Product = styled.p`
    margin-right: 3rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all .2s;

    @media ${device.mobileL}{
        margin-right: 2rem;
    }

    &:hover{
        color: ${props => props.theme.colorPrimary};
        border-bottom: 1.8px solid ${props => props.theme.colorPrimary};
    }
`

export const Underline = styled.div`
    width: 100%;
    /* height: 1.3px; */
    padding: 1px;
    background-color: ${props => props.theme.colorBlack};
`