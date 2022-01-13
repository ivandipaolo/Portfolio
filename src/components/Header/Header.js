import React, { useState } from 'react';
import { StyledHeader, StyledSpan } from './HeaderStyles';

import { Link } from 'react-router-dom';

export const Header = () => {
    const [y, setY] = useState(0)

    const changeBackground = () => {
        setY(window.scrollY);
        console.log(window.scrollY)
    };
    window.addEventListener('scroll', changeBackground);

    return (
        <StyledHeader pageY={y}>
            <Link style={{ textDecoration: 'none' }} to="/">
                <h2>
                    <StyledSpan>{'< '}</StyledSpan>PORTFOLIO<StyledSpan>{' />'}</StyledSpan>
                </h2>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/AboutMe">
                <h2>
                    <StyledSpan>{'< '}</StyledSpan>ABOUT-ME<StyledSpan>{' />'}</StyledSpan>
                </h2>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/">
                <h2>
                    <StyledSpan>{'< '}</StyledSpan>TRAJECTORY<StyledSpan>{' />'}</StyledSpan>
                </h2>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/">
                <h2>
                    <StyledSpan>{'< '}</StyledSpan>PROJECTS<StyledSpan>{' />'}</StyledSpan>
                </h2>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/">
                <h2>
                    <StyledSpan>{'< '}</StyledSpan>CONTACT<StyledSpan>{' />'}</StyledSpan>
                </h2>
            </Link>
        </StyledHeader>
    )
}
