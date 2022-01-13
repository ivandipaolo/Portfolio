import { colors } from "../../../constants/colors";
import styled from "styled-components";

export const StyledAboutMe = styled.div`
display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 2.5rem;
    h2{
        color: ${colors.textDefault};
        font-family: 'Roboto Mono', monospace;
        font-weight: 500;
        padding: 2rem;
        font-size: 2rem;
    }
    p{
        
        color: ${colors.textDefault};
        font-family: 'Roboto Mono', monospace;
        font-weight: 100;
        padding: 0rem 4rem 4rem 4rem;
        font-size: 1.1rem;
    }
`