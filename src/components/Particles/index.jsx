
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import Particle from './Particle';

const Particles = ({ particles }) => (
    <g>
        {particles.map(particle =>
            <circle style={{transform: `translate3d(${particle.x}px, ${particle.y}px, 0px) scale(1)`}}
            r="1.8"
            key={particle.id} />)}
    </g>
)

export default Particles;
