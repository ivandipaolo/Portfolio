import { colors } from "./constants/colors";
import styled from "styled-components";

export const StyledApp = styled.div`
    box-sizing: border-box;
    background-color: ${colors.background};
    height: 100vh;
    scroll-behavior: smooth;
    max-width: 100%;
    max-height: 100vh;
    
    overflow: auto;
    border: 6px solid;
    border-image-source: linear-gradient(180deg ,${colors.background} ,${colors.backgroundBorders} 134%);
    border-image-slice: 1;
`