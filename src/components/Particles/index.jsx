
import React, { PropTypes } from 'react';

import Particle from './Particle';

const Particles = ({ particles }) => (
    <g>{particles.map(particle =>
        <Particle key={particle.id}
                  {...particle} />
        )}
    </g>
);

Particles.propTypes = {
    particles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }).isRequired).isRequired
};

export default Particles;
