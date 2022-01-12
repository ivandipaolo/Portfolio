import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import React from 'react'
import { SocialStyled } from './SocialStyles'
import { colors } from '../../constants/colors';

export const Social = () => {
    return (
        <SocialStyled>
            <AiFillGithub color={colors.backgroundBorders} size={25} />
            <AiFillLinkedin color={colors.backgroundBorders} size={25} />
            <AiFillInstagram color={colors.backgroundBorders} size={25} />
            <div class='vertical-line' />
        </SocialStyled>
    )
}
