import { colors } from "../../../../constants/colors";
import styled from "styled-components";

export const StyledAboutMe = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h2{
            color: ${colors.textDefault};
            font-family: Simple-Medium;
            font-weight: 500;
            padding: 2rem;
            font-size: 2rem;
        }
        p{
            color: ${colors.textDefault};
            font-family: Simple-Light;
            font-weight: 100;
            margin-left: 4rem;
            font-size: 1.1rem;
            line-break: auto;
        }
    }
`