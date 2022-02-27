import { colors } from "../../constants/colors";
import styled from "styled-components";

export const StyledTimeline = styled.div`
    margin-top: 1.5rem;
    font-family: Simple-Light;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;
    h1 {
        font-size: 50px;
        font-weight: 400;
        text-align: center;
        color: ${colors.textDefault};
        border: 3px solid ${colors.deitals};
        width: 500px;
        padding: 1rem;
    }
    .timeline {
        position: relative;
        margin: 0 50px 0px 50px ;
        padding: 40px 0;
        width: 1000px;
        box-sizing: border-box;
        :before {
            /* content: ""; */
            position: absolute;
            left: 50%;
            width: 5px;
            /* height: 1000px; */
            background: ${colors.backgroundOrange};
        }
    ul {
        padding: 0;
        margin: 0;
        li {
            list-style: none;
            position: relative;
            width: 50%;
            padding: 20px 40px;
            box-sizing: border-box;
            background: rgba( 255, 255, 255, 0.83 );
            box-shadow: 0 2px 10px 0 ${colors.backgroundOrange};
            backdrop-filter: blur( 0px );
            -webkit-backdrop-filter: blur( 0px );
            border-radius: 2px;
            border: 1px solid ${colors.backgroundOrange};
            :nth-child(odd) {
                /* border-right: 5px solid ${colors.deitals}; */
                float: left;
                text-align: right;
                clear: both;
                :before {
                    content: "";
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    top: 63px;
                    right: -16px;
                    background: ${colors.deitals};
                    border-radius: 50%;
                }
                .time {
                    position: absolute;
                    top: 40px;
                    right: -115px;
                    width: 4rem;
                    margin: 0;
                    padding: 8px 16px;
                    background: ${colors.backgroundOrange};
                    color: ${colors.textDefault};
                    border-radius: 2px;
                    box-shadow: 0 0 0 3px rgba(32, 147, 156, 0.3);
                    text-align: center;
                }
            }
            :nth-child(even) {
                /* border-left: 5px solid ${colors.deitals}; */
                float: right;
                text-align: left;
                clear: both;
                :before {
                    content: "";
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    top: 68px;
                    left: -17px;
                    background: ${colors.deitals};
                    border-radius: 50%;
                }
                .time {
                    position: absolute;
                    top: 45px;
                    left: -115px;
                    width: 4rem;
                    margin: 0;
                    padding: 8px 16px;
                    background: ${colors.backgroundOrange};
                    color: ${colors.textDefault};
                    border-radius: 2px;
                    box-shadow: 0 0 0 3px rgba(32, 147, 156, 0.3);
                    text-align: center;
                }
            }
            h3 {
                padding: 0;
                margin: 0;
                color: ${colors.backgroundOrange};
                font-weight: 600;
            }
            p {
                font-size: 0.85rem;
                margin: 10px 0 0;
                padding: 0;
            }
            .time h4 {
                margin: 0;
                padding: 0;
                font-size: 0.9rem;
            }
        }
    }
    @media (max-width: 1000px) {
        .timeline {
            width: 100%;
        }
    }
    @media (max-width: 767px) {
        .timeline {
            width: 100%;
            padding-bottom: 0;
            :before {
                left: 20px;
                height: 100%;
                ul {
                    li {
                        :nth-child(odd),
                        :nth-child(even) {
                            width: 100%;
                            text-align: left;
                            padding-left: 50px;
                            padding-bottom: 50px;
                            :before {
                                top: -18px;
                                left: 16px;
                            }
                            .time {
                                top: -30px;
                                left: 50px;
                                right: inherit;
                            }
                        }
                    }
                }
            }
            h1 {
                font-size: 0.5rem;
                text-align: center;
            }
        }
    }
    
}
    #vertical-line {   
        width: 3px;
        height: 100%;
        background-color: ${colors.deitals};
        position: absolute;
        z-index: 1;
        top: 0%;
        left: 497px;
    }
    ` 