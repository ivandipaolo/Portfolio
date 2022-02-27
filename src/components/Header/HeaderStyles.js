import { colors } from "../../constants/colors";
import styled from "styled-components";

export const StyledHeader = styled.div`
    z-index: 2;
    display: flex;
    width: 100%;
    position: sticky;
    top: 0;
    justify-content: center;
    gap: 8rem;
    align-items: center;
    transition: all .9s ease-in-out;
    padding: 2rem 0rem 2rem 0rem;
    background-color: ${props => props.pageY > 0 ? colors.navBackground : colors.background};
    border-bottom: 3px solid;
    border-image-source: linear-gradient(to left, ${colors.background}, ${colors.backgroundOrange} 25%, ${colors.backgroundOrange} 75%, ${colors.background} 100%);
    border-image-slice: 1;
    h2{
        font-family: Simple-Light;
        font-weight: 500;
        color: ${props => props.pageY > 0 ? '#ffffff' : colors.textDefault};
        transition: all .3s ease-in-out;
        :hover{
            cursor: pointer;
            text-shadow: 0px 0px 3px ${colors.textDefault};
            color: ${colors.textSelected};
        }
        ::selection{
            background: transparent
        }
        :visited {
            color: #ffffff;
            text-decoration: none;
            /* text-decoration: none; */
        }
    }
`

export const StyledSpan = styled.span`
    font-family: Simple-Light;
    color: ${colors.deitals};
    transition: all .2s ease-in-out;
    :hover{
            cursor: pointer;
        }
`
