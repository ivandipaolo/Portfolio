import React, {useEffect, useState} from 'react';
import {StyledHeader} from './HeaderStyles';
// import {Link} from 'react-router-dom';
export const Header = () => {
const [y, setY] = useState(0)

    const changeBackground = () =>{
        setY(window.scrollY);
    };
    window.addEventListener('scroll' , changeBackground);

    return (
        <StyledHeader pageY={y}>
            <h2 id='portfolio'>{`<PORTFOLIO/>`}</h2>
            <h2>ABOUT ME</h2>
            <h2>SKILLS</h2>
            <h2>PROYECTS</h2>
            <h2>CONTACT</h2>
        </StyledHeader>
    )
}
