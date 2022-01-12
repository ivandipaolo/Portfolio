import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { StyledHeader } from './HeaderStyles';

export const Header = () => {
    const [y, setY] = useState(0)

    const changeBackground = () => {
        setY(window.scrollY);
        console.log(window.scrollY)
    };
    window.addEventListener('scroll', changeBackground);

    return (
        <StyledHeader pageY={y}>
            <Link style={{ textDecoration: 'none' }} to="/"><h2>{`< PORTFOLIO />`}</h2></Link>
            <Link style={{ textDecoration: 'none' }} to="/"><h2>{`< SKILLS />`}</h2></Link>
            <Link style={{ textDecoration: 'none' }} to="/"><h2>{`< PROYECTOS />`}</h2></Link>
            <Link style={{ textDecoration: 'none' }} to="/"><h2>{`< CONTACTO />`}</h2></Link>
        </StyledHeader>
    )
}
