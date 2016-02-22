
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Particles from './Particles';

const App = ({svgWidth, svgHeight}) => (
    <div>
        <h1>Click anywhere</h1>
        <svg width={svgWidth} height={svgHeight}>

        </svg>
    </div>
);

App.propTypes = {
    svgWidth: PropTypes.number.isRequired,
    svgHeight: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
    return {
        svgWidth: state.svgWidth,
        svgHeight: state.svgHeight
    };
};

export default connect(
    mapStateToProps
)(App);
