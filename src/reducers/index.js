
import { combineReducers } from 'redux';
import particles from './particles';

const initialState = {
    particles: [],
    svgWidth: 800,
    svgHeight: 600
};

function particlesApp(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default particlesApp;
