
import React, { Component } from 'react';

import Particle from './Particle';

const Particles = ({ particles }) => (
    <g>
        {particles.map(particle => <Particle {...particle} key={particle.id} />)}
    </g>
)

export default Particles;
