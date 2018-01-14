import React, { Component } from "react";
import { Group, FastLayer } from "react-konva";
import { Circle } from "konva";

class Particles extends Component {
    _particles = {};

    componentDidMount() {
        this.canvas = this.refs.layer.canvas._canvas;
        this.canvasContext = this.canvas.getContext("2d");
        console.log(this.canvasContext);

        this.sprite = new Image();
        this.sprite.src = "http://i.imgur.com/m5l6lhr.png";
    }

    drawParticle(particle) {
        let { x, y } = particle;

        this.canvasContext.drawImage(this.sprite, 0, 0, 128, 128, x, y, 35, 35);
    }

    componentDidUpdate() {
        let particles = this.props.particles;

        console.time("drawing");
        this.canvasContext.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

        this.canvasContext.lineWidth = 1;
        this.canvasContext.strokeStyle = "black";

        for (let i = 0; i < particles.length; i++) {
            this.drawParticle(particles[i]);
        }
        console.timeEnd("drawing");
    }

    render() {
        return (
            <FastLayer
                ref="layer"
                transformsEnabled="position"
                listening="false"
            />
        );
    }
}

export default Particles;
