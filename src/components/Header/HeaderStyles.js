import { colors } from "../../constants/colors";
import styled from "styled-components";

export const StyledHeader = styled.div`
    display: flex;
    width: 100%;
    position: sticky;
    top: 0;
    justify-content: center;
    gap: 10rem;
    align-items: center;
    transition: all .9s ease-in-out;
    /* margin: 0px; */
    padding: 1rem 0rem 1rem 0rem;
    background-color: ${props => props.pageY > 0 ? colors.navBackground : colors.navBackgroundDefault};
h2{
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        color: ${props => props.pageY > 0 ? '#ffffff' : colors.navTextDefault};
        transition: all .3s ease-in-out;
        :hover{
            cursor: pointer;
            text-shadow: 0px 0px 3px ${colors.navTextDefault};
            color: ${colors.navTextSelected};
            font-weight: 300;
        }
        ::selection{
            background: transparent
        }
    }
`