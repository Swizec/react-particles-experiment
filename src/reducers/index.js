
import { combineReducers } from 'redux';
import particles from './particles';

const initialState = {
    particles: [],
    particleIndex: 0,
    svgWidth: 800,
    svgHeight: 600,
    tickerStarted: false,
    generateParticles: false,
    mousePos: [null, null]
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

            return Object.assign({}, state, {
                particles: newParticles,
                particleIndex: state.particleIndex+1
            });
        case 'UPDATE_MOUSE_POS':
            return Object.assign({}, state, {
                mousePos: [action.x, action.y]
            });
        default:
            return state;
    }
}

export default particlesApp;
