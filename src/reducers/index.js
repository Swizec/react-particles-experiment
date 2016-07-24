
import { combineReducers } from 'redux';

import { randomNormal } from 'd3';

const Gravity = 0.5,
      randNormal = randomNormal(0.3, 2),
      randNormal2 = randomNormal(0.5, 1.8);

const initialState = {
    particles: [],
    removedParticles: [],
    particleIndex: 0,
    particlesPerTick: 1000,
    svgWidth: 800,
    svgHeight: 600,
    tickerStarted: false,
    generateParticles: false,
    mousePos: [null, null],
    lastFrameTime: null
};

function particlesApp(state = initialState, action) {
    switch (action.type) {
        case 'TICKER_STARTED':
            return Object.assign({}, state, {
                tickerStarted: true,
                lastFrameTime: new Date()
            });
        case 'START_PARTICLES':
            return Object.assign({}, state, {
                generateParticles: true
            });
        case 'STOP_PARTICLES':
            return Object.assign({}, state, {
                generateParticles: false
            });
        case 'CREATE_PARTICLES':
            let newParticles = state.particles.slice(0),
                i;

            for (i = 0; i < action.N; i++) {
                let particle = {id: state.particleIndex+i,
                                x: action.x,
                                y: action.y};

                particle.vector = [particle.id%2 ? -randNormal() : randNormal(),
                                   -randNormal2()*3.3];

                newParticles.unshift(particle);
            }

            return Object.assign({}, state, {
                particles: newParticles,
                particleIndex: state.particleIndex+i+1
            });
        case 'UPDATE_MOUSE_POS':
            return Object.assign({}, state, {
                mousePos: [action.x, action.y]
            });
        case 'TIME_TICK':
            let {svgWidth, svgHeight, lastFrameTime} = state,
                newFrameTime = new Date(),
                multiplier = (newFrameTime-lastFrameTime)/(1000/60)

            let movedParticles = state.particles
                                      .filter((p) => {
                                          return !(p.y > svgHeight || p.x < 0 || p.x > svgWidth);
                                      })
                                      .map((p) => {
                                          let [vx, vy] = p.vector;
                                          p.x += vx*multiplier;
                                          p.y += vy*multiplier;
                                          p.vector[1] += Gravity*multiplier;
                                          return p;
                                      });

            return Object.assign({}, state, {
                particles: movedParticles,
                lastFrameTime: new Date()
            });
        case 'RESIZE_SCREEN':
            return Object.assign({}, state, {
                svgWidth: action.width,
                svgHeight: action.height
            });
        default:
            return state;
    }
}

export default particlesApp;
