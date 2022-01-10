import React from 'react'
import { StyledBackgroundVideo, StyledBackgroundVideoContainer } from './BackgroundVideoStyles';
import Video from './Video/Video.mp4';

export const BackgroundVideo = () => {
    return (
        <StyledBackgroundVideoContainer>
            <StyledBackgroundVideo src={Video} autoPlay loop muted/>
        </StyledBackgroundVideoContainer>
    )
}
