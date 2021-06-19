import styled from "styled-components";

export const StyledCount = styled.div`
    background-color: ${props => props.theme.colorPrimary};
    width: 1.5rem;
    height: 1.5rem;
    display: inline-block;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -5px;
    right: 18px;
`

export const Value = styled.p`
    color: #fff;
    font-size: 1rem;
`