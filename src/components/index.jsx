
import React, { PropTypes, Component } from 'react';

import Particles from './Particles';
import { tickTime } from '../actions';


const App = ({svgWidth, svgHeight, startTicker}) => (
    <div onClick={e => startTicker()}>
        <h1>Click anywhere</h1>
        <svg width={svgWidth} height={svgHeight}>

        </svg>
    </div>
);

App.propTypes = {
    svgWidth: PropTypes.number.isRequired,
    svgHeight: PropTypes.number.isRequired,
    startTicker: PropTypes.func.isRequired
};

export default App;
