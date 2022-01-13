import React, { useEffect, useState } from 'react'

import { StyledPortfolio } from './StyledPorfolio'
import perfil from '../../../../assets/Perfil.jpg'
import writeAndDelete from 'write-and-delete'

export const Portfolio = () => {
    const [loop, setLoop] = useState(true)

    useEffect(() => {
        writeAndDelete("#header", [
            "Full-Stack MERN Developer.",
            "Back-End junior explorer.",
            "ReactJS lover.",
            "Mobile apps developer with React-Native.",
            "programming teacher.",
        ], {
            timeout: 1000,
            loop: loop,
            speed: 90,
            errorQuota: 0.02,
            cursor: '|',
            cursorSpeed: 300,
        });
        return () => {
            setLoop(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <StyledPortfolio>
            <div>
                <h2> Ivan Ari {'\n'} Di Paolo </h2>
                <p id='header' />
            </div>
            <img src={perfil} alt='' />
        </StyledPortfolio>
    )
}
