
import React, { PropTypes } from 'react';

const Particle = ({ x, y }) => (
    <circle cx={x} cy={y} r="1.8" />
);

Particle.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
};

export default Particle;
