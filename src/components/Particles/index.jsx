
import React, { Component, PropTypes } from 'react';
import { Circle, Group } from 'react-konva';

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

    componentWillUpdate() {
        console.time('flag1');
    }

    componentDidUpdate() {
        console.timeEnd('flag1');
    }

    render() {
        let { particles } = this.props;

        return (
            <Group>
            {particles.map(particle =>
                <Circle radius="1.8" x={particle.x} y={particle.y} key={particle.id} fill="black" />
             )}
            </Group>
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
