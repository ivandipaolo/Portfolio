import { colors } from "../../constants/colors";
import styled from "styled-components";

export const SocialStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
bottom: 0px;
left: 7rem;
position: absolute;
#socialNetwork{
    cursor: pointer;
}
.vertical-line {
    width: 3px;
    height: 6rem;
    background-color: ${colors.deitals};
}
`