
export const TIME_TICK = 'TIME_TICK';
export const TICKER_STARTED = 'TICKER_STARTED';
export const CREATE_PARTICLE = 'CREATE_PARTICLE';
export const START_PARTICLES = 'START_PARTICLES';
export const STOP_PARTICLES = 'STOP_PARTICLES';
export const END_PARTICLES = 'END_PARTICLES';

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

export function createParticle(x, y) {
    return {
        type: CREATE_PARTICLE,
        particle: {
            x: x,
            y: y
        }
    };
}

export function startParticles() {
    return {
        type: START_PARTICLES
    }
}

export function endParticles() {
    return {
        type: END_PARTICLES
    }
}
