
import React, { Component, PropTypes } from 'react';
import { Group, FastLayer } from 'react-konva';
import { Circle } from 'konva';

import Particle from './Particle';

//const Particles = ({ particles }) => (
//    <g>{particles.map(particle =>
//        <Particle key={particle.id}
//                  {...particle} />
//        )}
//    </g>
//);
/* const Particles = ({ particles }) => (
   <Group>
   {particles.map(particle =>
   <Circle radius="1.8" x={particle.x} y={particle.y} key={particle.id} fill="black" />
   )}
   </Group>
   ) */

class Particles extends Component {

    _particles = {};

    componentDidMount() {
        this.canvas = this.refs.layer.canvas._canvas;
        this.context = this.canvas.getContext('2d');
    }

    drawParticle(particle) {
        let { x, y } = particle;

        this.context.beginPath();
        this.context.arc(x, y, 1, 0, 2*Math.PI, false);
        this.context.lineWidth = 1;
        this.context.strokeStyle = 'black';
        this.context.stroke();
    }

    componentDidUpdate() {
        let particles = this.props.particles,
            removedParticles = this.props.removedParticles;

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < particles.length; i++) {
            this.drawParticle(particles[i]);
        }
    }

    render() {
        return (
            <FastLayer ref="layer" transformsEnabled="position" listening="false">

            </FastLayer>
        );
    }
}


Particles.propTypes = {
    particles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }).isRequired).isRequired
};

export default Particles;
