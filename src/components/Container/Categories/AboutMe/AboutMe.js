import React from 'react'
import { StyledAboutMe } from './StyledAboutMe'
import Tags from '../../../TagCloud/Tags'

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Tags />
            <div>
                <h2>About-Me</h2>
                <p>
                    I am a Front-End Developer, with knowledge in the MERN Stack of web development.
                </p>
                <p>
                    I started my programming journey at 18 years
                    with my first codes on Python and Java. And at 21 started exploring
                    the world of HTML, CSS and JS.
                </p>
                <p>
                    Nowadays I aim to domain more technologies of the applications developing
                    and with dedication and persistence reach some day the 'Senior Developer' tag.
                </p>
            </div>
        </StyledAboutMe>
    )
}
