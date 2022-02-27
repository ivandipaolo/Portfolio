import React, { useEffect } from 'react'

import { StyledTags } from './StyledTags';
import TagCloud from 'TagCloud';

function Tags() {

    const options = {
        radius: 250,
        direction: Math.random() * (180 - 1),
        initSpeed: 'slow',
        maxSpeed: 'normal',
        keep: true
    };
    const container = '.tagcloud';
    const texts = [
        'CSS3', `HTML`, 'JavaScript',
        'ReactJS', 'Redux', 'Unit \n Tests',
        'SASS', 'Styled \n Components',
        'NodeJS', 'MongoDB', 'SQL', 'JSON', 'Firebase',
        'TypeScript', 'Git & GitHub', 'RESTful \n WebServices',
        'Python', 'Java'
    ];

    useEffect(() => {
        TagCloud(container, texts, options);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <StyledTags className='tagcloud' />
    )
}

export default Tags
