import { Route, Routes } from 'react-router-dom'

import { AboutMe } from './Categories/AboutMe/AboutMe'
import { Portfolio } from './Categories/Portfolio/Portfolio'
import React from 'react'
import { StyledContent } from './ContentStyles'
import { Trajectory } from './Categories/Trajectory/Trajectory'

// import Tags from '../TagCloud/Tags'

export const Content = () => {
    return (
        <StyledContent>
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/trajectory" element={<Trajectory />} />
            </Routes>
            {/* <Tags /> */}
        </StyledContent>
    )
}
