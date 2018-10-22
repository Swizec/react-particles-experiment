import { connect } from "react-redux";
import React, { Component } from "react";
import * as d3 from "d3";

import App from "../components";
import {
    tickTime,
    tickerStarted,
    startParticles,
    stopParticles,
    updateMousePos,
    createParticles
} from "../actions";

class AppContainer extends Component {
    startTicker = () => {
        const { isTickerStarted } = this.props;

        if (!isTickerStarted) {
            console.log("Starting ticker");
            this.props.tickerStarted();
            d3.timer(this.props.tickTime);
        }
    };

    render() {
        const { svgWidth, svgHeight, particles } = this.props;

        return (
            <App
                svgWidth={svgWidth}
                svgHeight={svgHeight}
                particles={particles}
                startTicker={this.startTicker}
                startParticles={this.props.startParticles}
                stopParticles={this.props.stopParticles}
                updateMousePos={this.props.updateMousePos}
            />
        );
    }
}

const mapStateToProps = ({
    generateParticles,
    mousePos,
    particlesPerTick,
    isTickerStarted,
    svgWidth,
    svgHeight,
    particles
}) => ({
    generateParticles,
    mousePos,
    particlesPerTick,
    isTickerStarted,
    svgWidth,
    svgHeight,
    particles
});

const mapDispatchToProps = {
    tickTime,
    tickerStarted,
    startParticles,
    stopParticles,
    updateMousePos,
    createParticles
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
