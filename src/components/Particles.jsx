
import React, { Component, PropTypes } from 'react';
import { Group, FastLayer } from 'react-konva';
import { Circle } from 'konva';

class Particles extends Component {

    _particles = {};

    componentDidMount() {
        this.canvas = this.refs.layer.canvas._canvas;
        this.context = this.canvas.getContext('2d');

        this.sprite = new Image();
        this.sprite.src = 'http://1.bp.blogspot.com/-sgRdkb1Eu0M/UioQc6yWCXI/AAAAAAAACkE/3lkhQhiFAcA/s1600/minion_icon_image_picfishblogspotcom+%252814%2529.png';
    }

    drawParticle(particle) {
        let { x, y } = particle;

        this.context.drawImage(this.sprite, 0, 0, 128, 128, x, y, 15, 15);
    }

    componentDidUpdate() {
        let particles = this.props.particles;

        console.time('drawing');
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.context.lineWidth = 1;
        this.context.strokeStyle = 'black';

        for (let i = 0; i < particles.length; i++) {
            this.drawParticle(particles[i]);
        }
        console.timeEnd('drawing');
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
