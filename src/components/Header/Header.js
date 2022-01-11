import React, { useState } from 'react';

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
            <h2 id='portfolio'>{`< PORTFOLIO />`}</h2>
            {/* <h2>{`< ABOUT ME />`}</h2> */}
            <h2>{`< SKILLS />`}</h2>
            <h2>{`< PROYECTOS />`}</h2>
            <h2>{`< CONTACTO />`}</h2>
        </StyledHeader>
    )
}
