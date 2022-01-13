import { AiFillEmail, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import React from 'react'
import { SiGmail } from 'react-icons/si';
import { SocialStyled } from './SocialStyles'
import { colors } from '../../constants/colors';

export const Social = () => {
    return (
        <SocialStyled>
            <AiFillGithub color={colors.backgroundOrange} size={25} />
            <AiFillLinkedin color={colors.backgroundOrange} size={25} />
            <AiFillInstagram color={colors.backgroundOrange} size={25} />
            <SiGmail color={colors.backgroundOrange} size={25} />
            <div class='vertical-line' />
        </SocialStyled>
    )
}
