import { Route, Routes } from 'react-router-dom'

import { Portfolio } from './Categories/Portfolio'
import React from 'react'
import { StyledContent } from './ContentStyles'
import Tags from '../TagCloud/Tags'

export const Content = () => {
    return (
        <StyledContent>
            <Routes>
                <Route path="/" element={<Portfolio />} />
                {/* <Route path="about" element={<About />} /> */}
            </Routes>
            <Tags />
        </StyledContent>
    )
}
