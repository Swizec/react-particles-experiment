
import { combineReducers } from 'redux';
import particles from './particles';

const initialState = {
    particles: [],
    svgWidth: 800,
    svgHeight: 600,
    tickerStarted: false,
    generateParticles: false
};

function particlesApp(state = initialState, action) {
    switch (action.type) {
        case 'TICKER_STARTED':
            return Object.assign({}, state, {
                tickerStarted: true
            });
        case 'START_PARTICLES':
            return Object.assign({}, state, {
                generateParticles: true
            });
        case 'STOP_PARTICLES':
            return Object.assign({}, state, {
                generateParticles: false
            });
        case 'CREATE_PARTICLE':
            let newParticles = state.particles.slice(0);
            newParticles.push(action.particle);

            console.log("creating", action);

            return Object.assign({}, state, {
                particles: newParticles
            });
        default:
            return state;
    }
}

export default particlesApp;
