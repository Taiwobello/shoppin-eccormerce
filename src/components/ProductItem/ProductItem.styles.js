import styled from "styled-components";

export const ProductItemOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 300px;
    background-color: rgba(108, 122, 224, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all .3s ease-in-out;
`


export const StyledProductItem = styled.div`
    text-align: center;
    font-size: 1.6rem;
    position: relative;

    &:hover ${ProductItemOverlay}{
        opacity: 1;
    }
`


export const ProductItemImage = styled.img`
    object-fit:cover;
    width: 100%;
    height: 300px;
    transition: all 500ms ease;
`

export const ProductItemPrice = styled.p`
    /* margin-bottom: 1rem; */
`

export const ProductItemName = styled.p`
    margin-top: 1rem;
`



export const AddCart = styled.div`
    background-color: white;
    display: inline-block;
    padding: .5rem 3rem;
    margin-bottom: .8rem;
    border-radius: 20px;
    cursor: pointer;
    position: relative;
    transition: all .3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    

    &:hover{
        background-color: black;
        color: white;
    }
`

export const QuickView = styled(AddCart)`
    /* margin-bottom: 0; */
`

export const AddWishList = styled(AddCart)`
    margin-bottom: 0;
`
