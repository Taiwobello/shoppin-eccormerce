import styled from "styled-components";

export const StyledButton = styled.button`
    font-size: 2rem;
    padding: 1rem 2rem;
    background-color:  ${props => props.backgroundColor || props.theme.colorPrimary};
    border: none;
    color: ${props => props.color || "white"};
    margin-top: 2rem;
    cursor: pointer;
    transition: all .2s;
    border-radius: 10px;

    &:hover{
        opacity: .9;
    }
`