import styled from "styled-components";
import { device } from "./screenSize";

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    @media ${device.laptopL}{
        max-width: 1000px;
    }
    @media ${device.laptop}{
        max-width: 900px;
    }
    @media ${device.tabletL}{
        max-width: 95%;
    }
`