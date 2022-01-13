import { Route, Routes } from 'react-router-dom'

import { AboutMe } from './Categories/AboutMe/AboutMe'
import { Portfolio } from './Categories/Portfolio/Portfolio'
import React from 'react'
import { StyledContent } from './ContentStyles'

// import Tags from '../TagCloud/Tags'

export const Content = () => {
    return (
        <StyledContent>
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/AboutMe" element={<AboutMe />} />
                {/* <Route path="about" element={<About />} /> */}
            </Routes>
            {/* <Tags /> */}
        </StyledContent>
    )
}
