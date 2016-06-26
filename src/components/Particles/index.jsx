
import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import Particle from './Particle';

//const Particles = ({ particles }) => (
//    <g>{particles.map(particle =>
//        <Particle key={particle.id}
//                  {...particle} />
//        )}
//    </g>
//);

const Particles = ({ particles }) => (
    <g>
        {particles.map(particle =>
            <circle style={{transform: `translate3d(${particle.x}px, ${particle.y}px, 0px) scale(1)`}}
            r="1.8"
            key={particle.id} />)}
    </g>
)

Particles.propTypes = {
    particles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }).isRequired).isRequired
};

export default Particles;
