
import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import { select as d3Select, mouse as d3Mouse, touches as d3Touches } from 'd3';
import { Stage, Layer } from 'react-konva';

import Particles from './Particles';
import Footer from './Footer';
import Header from './Header';

class App extends Component {
    componentDidMount() {
        let svg = d3Select(this.refs.svgWrap);

        svg.on('mousedown', () => {
            this.updateMousePos();
            this.props.startParticles();
        });
        svg.on('touchstart', () => {
            this.updateTouchPos();
            this.props.startParticles();
        });
        svg.on('mousemove', () => {
            this.updateMousePos();
        });
        svg.on('touchmove', () => {
            this.updateTouchPos();
        });
        svg.on('mouseup', () => {
            this.props.stopParticles();
        });
        svg.on('touchend', () => {
            this.props.stopParticles();
        });
        svg.on('mouseleave', () => {
            this.props.stopParticles();
        });

    }

    updateMousePos() {
        let [x, y] = d3Mouse(this.refs.svgWrap);
        this.props.updateMousePos(x, y);
    }

    updateTouchPos() {
        let [x, y] = d3Touches(this.refs.svgWrap)[0];
        this.props.updateMousePos(x, y);
    }

    render() {
        return (
            <div onMouseDown={e => this.props.startTicker()} style={{overflow: 'hidden'}}>
                 <Header />
                 <div style={{width: this.props.svgWidth,
                              height: this.props.svgHeight,
                              position: 'absolute',
                              top: '0px',
                              left: '0px',
                              background: 'rgba(124, 224, 249, .3)'}}
                      ref="svgWrap">
                     <Stage width={this.props.svgWidth} height={this.props.svgHeight}>
                         <Layer>
                             <Particles particles={this.props.particles} />
                         </Layer>
                     </Stage>
                 </div>
                 <Footer N={this.props.particles.length} />
             </div>
        );
    }
}

App.propTypes = {
    svgWidth: PropTypes.number.isRequired,
    svgHeight: PropTypes.number.isRequired,
    startTicker: PropTypes.func.isRequired,
    startParticles: PropTypes.func.isRequired,
    stopParticles: PropTypes.func.isRequired,
    updateMousePos: PropTypes.func.isRequired
};

export default App;
