import styled from "styled-components";

export const StyledHeader = styled.div`
    display: flex;
    width: 100%;
    position:-webkit-sticky;
    top:0;
    align-items: center;
    justify-content: space-between;
    position:sticky;
    transition: all .2s ease-in-out;
    background-color:
    ${
        props => props.pageY >  0 ? 'black' :'transparent'
    };
    h2{
        text-decoration: none;
        align-self: flex-end;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        color: white;
        transition: all .8s ease-in-out;
        :hover{
            transform: scale3d(5px, 10px, 23px);
            color: #249ba3c5;
        }
    }
`