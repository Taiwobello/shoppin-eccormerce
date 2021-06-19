import styled from "styled-components";
import { Container } from "../../App.styles";
import { device } from "../../screenSize";

export const CategoriesContainer = styled(Container)`
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    grid-template-rows: repeat(2, 350px);
    gap: 3rem;
    margin: 3rem auto;
    padding-bottom: 3rem;
    @media ${device.tabletL}{
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 300px);
        gap: 2rem;
    }
    @media ${device.mobileL}{
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(4, 300px);
        gap: 0;
    }
`