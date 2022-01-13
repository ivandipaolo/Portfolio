import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import React from 'react'
import { SocialStyled } from './SocialStyles'
import { colors } from '../../constants/colors';

// import { SiGmail } from 'react-icons/si';



export const Social = () => {
    return (
        <SocialStyled>
            <a target="_blank" href='https://www.linkedin.com/in/ivandipaolo/' rel="noreferrer">
                <AiFillLinkedin color={colors.backgroundOrange} size={25} />
            </a>
            <a target="_blank" href='https://github.com/ivanaridipaolo' rel="noreferrer">
                <AiFillGithub color={colors.backgroundOrange} size={25} />
            </a>
            <a target="_blank" href='https://www.instagram.com/ivandipa/' rel="noreferrer">
                <AiFillInstagram color={colors.backgroundOrange} size={25} />
            </a>
            {
            /* Todo: Mail
            /* <a target="_blank" href='' rel="noreferrer">
                <SiGmail color={colors.backgroundOrange} size={25} />
            </a> */}
            <div className='vertical-line' />
        </SocialStyled>
    )
}
