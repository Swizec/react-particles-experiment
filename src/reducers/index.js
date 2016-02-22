
import { combineReducers } from 'redux';
import particles from './particles';

const initialState = {
    particles: [],
    svgWidth: 800,
    svgHeight: 600,
    tickerStarted: false
};

function particlesApp(state = initialState, action) {
    switch (action.type) {
        case 'TICKER_STARTED':
            return Object.assign({}, state, {
                tickerStarted: true
            });
        default:
            return state;
    }
}

export default particlesApp;
