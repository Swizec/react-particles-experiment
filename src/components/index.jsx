
import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

import Particles from './Particles';

class App extends Component {
    componentDidMount() {
        let svg = d3.select(this.refs.svg);

        svg.on('mousedown', () => {
            this.props.startParticles();
            this.props.createParticle();
        });
        svg.on('mousemove', () => {
            this.createParticle();
        });
        svg.on('mouseup', () => {
            this.props.endParticles();
        });
    }

    createParticle() {
        if (this.props.generateParticles) {
            let [x, y] = d3.mouse(this.refs.svg);
            this.props.createParticle(x, y);
        }
    }

    render() {
        console.log(this.props.particles.length, this.props.generateParticles);
        return (
             <div onClick={e => this.props.startTicker()}>
                 <h1>Click anywhere</h1>
                 <svg width={this.props.svgWidth}
                      height={this.props.svgHeight}
                      ref="svg">

                 </svg>
             </div>
        );
    }
}

App.propTypes = {
    svgWidth: PropTypes.number.isRequired,
    svgHeight: PropTypes.number.isRequired,
    startTicker: PropTypes.func.isRequired,
    startParticles: PropTypes.func.isRequired,
    endParticles: PropTypes.func.isRequired,
    createParticle: PropTypes.func.isRequired
};

export default App;
