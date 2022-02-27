import { colors } from "../../constants/colors";
import styled from "styled-components";

export const StyledTags = styled.div`
        .tagcloud {
        }
        
        .tagcloud--item {
            font-family: Simple-Light;
            font-size: 1.2rem;
            text-align: center;
            padding: 2px 4px;
            background-color: transparent;
            border: 1px solid transparent;
            color: ${colors.textDefault};
            background: linear-gradient(to right, ${colors.textDefault}, ${colors.textSelected} 50%, ${colors.textDefault} 50%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 200% 100%;
            background-position: 100%;
            transition: background-position 275ms ease;
            text-decoration: none;
            
            ::selection{
                background: transparent
            }
        }

        .tagcloud--item:hover {
            color: ${colors.textSelected};
            opacity: 1 !important;
            z-index: 100 !important;
            background-position: 0 100%;
        }

        .light .tagcloud--item {
            color: #fff;
        }

        .light .tagcloud--item:hover {
            background-color: rgba(255, 255, 255, .1);
            border: 1px solid #fff;
        }
`