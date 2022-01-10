import { colors } from "../../constants/colors";
import styled from "styled-components";

export const StyledHeader = styled.div`
    display: flex;
    width: 100%;
    position: sticky;
    top: 0;
    justify-content: space-around;
    align-items: center;
    transition: all .9s ease-in-out;
    margin: 0px;
    padding: 1rem 0rem 1rem 0rem;
    background-color: ${props => props.pageY > 0 ? colors.navBackground : colors.navBackgroundDefault};
h2{
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        color: ${props => props.pageY > 0 ? '#ffffff' : colors.navTextDefault};
        transition: all .8s ease-in-out;
        :hover{
            cursor: pointer;
            color: ${colors.navTextSelected};
        }
    }
`