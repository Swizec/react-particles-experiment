
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

    componentDidUpdate() {
        let layer = this.refs.the_thing,
            particles = this.props.particles,
            removedParticles = this.props.removedParticles;

        // add or move particles
        for (let i = 0; i < particles.length; i++) {
            let { id, x, y } = particles[i];

            if (this._particles[id]) {
                // move particle
                this._particles[id].position({
                    x: x,
                    y: y
                });
            }else{
                // create new particle
                let c = new Circle({
                    radius: 1.8,
                    x: x,
                    y: y,
                    fill: 'black'
                });
                this._particles[id] = c;
                layer.add(c);
            }
        };

        // remove removed particles
        for (let i = 0; i < removedParticles.length; i++) {
            let { id } = removedParticles[i];

            if (this._particles[id]) {
                this._particles[id].remove();
                delete this._particles[id];
            }
        }

        layer.batchDraw();

        //console.timeEnd('flag1');

        /* {particles.map(particle =>
           <Circle radius="1.8" x={particle.x} y={particle.y} key={particle.id} fill="black" />
           )} */
    }

    render() {
        return (
            <FastLayer ref="the_thing">

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
