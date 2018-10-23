export const TIME_TICK = "TIME_TICK";
export const TICKER_STARTED = "TICKER_STARTED";
export const CREATE_PARTICLES = "CREATE_PARTICLES";
export const START_PARTICLES = "START_PARTICLES";
export const STOP_PARTICLES = "STOP_PARTICLES";
export const UPDATE_MOUSE_POS = "UPDATE_MOUSE_POS";
export const RESIZE_SCREEN = "RESIZE_SCREEN";

export function tickTime() {
    return {
        type: TIME_TICK
    };
}

export function tickerStarted() {
    return {
        type: TICKER_STARTED
    };
}

export function createParticles(N, x, y) {
    return {
        type: CREATE_PARTICLES,
        x: x,
        y: y,
        N: N
    };
}

export function startParticles() {
    return {
        type: START_PARTICLES
    };
}

export function stopParticles() {
    return {
        type: STOP_PARTICLES
    };
}

export function updateMousePos(x, y) {
    return {
        type: UPDATE_MOUSE_POS,
        x: x,
        y: y
    };
}

export function resizeScreen(width, height) {
    return {
        type: RESIZE_SCREEN,
        width: width,
        height: height
    };
}
