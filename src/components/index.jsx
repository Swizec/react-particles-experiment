
import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

import Particles from './Particles';
import Footer from './Footer';
import Header from './Header';

class App extends Component {
    componentDidMount() {
        let svg = d3.select(this.refs.svg);

        svg.on('mousedown', () => {
            this.updateMousePos();
            this.props.startParticles();
        });
        svg.on('mousemove', () => {
            this.updateMousePos();
        });
        svg.on('mouseup', () => {
            this.props.stopParticles();
        });
        svg.on('mouseleave', () => {
            this.props.stopParticles();
        });
    }

    updateMousePos() {
        let [x, y] = d3.mouse(this.refs.svg);
        this.props.updateMousePos(x, y);
    }

    render() {
        return (
            <div onMouseDown={e => this.props.startTicker()}>
                 <Header />
                 <svg width={this.props.svgWidth}
                      height={this.props.svgHeight}
                      ref="svg">
                     <Particles particles={this.props.particles} />
                 </svg>
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
