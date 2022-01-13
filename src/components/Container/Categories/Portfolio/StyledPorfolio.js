import { colors } from "../../../../constants/colors";
import styled from "styled-components";

export const StyledPortfolio = styled.div`
cursor: default;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
/* align-items: center; */
div{
    width: 50%;
    right: 0px;
    h2{
        font-family: 'Roboto Mono', monospace;
        font-weight: 600;
        font-size: 3rem;
        /* height: auto; */
        inline-size: 15rem;
        overflow-wrap: break-word;
        color: ${colors.textDefault};
    }
    p{
        color: ${colors.textSelected};
    }
}
img{
    height: 500px;
    /* opacity: 50%; */
    -moz-window-dragging: false;
    border-radius: 5px;
    opacity: 85%;
    filter: grayscale(0.3) drop-shadow(1px 1px 2px ${colors.backgroundOrange});
    

}
`