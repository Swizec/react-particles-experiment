import { randomNormal } from "d3";

const Gravity = 0.5,
    randNormal = randomNormal(0.3, 2),
    randNormal2 = randomNormal(0.5, 1.8);

const initialState = {
    particles: [],
    particleIndex: 0,
    removedParticles: [],
    particlesPerTick: 3000,
    svgWidth: 800,
    svgHeight: 600,
    isTickerStarted: false,
    generateParticles: false,
    mousePos: [null, null],
    lastFrameTime: null
};

function appReducer(state, action) {
    switch (action.type) {
        case "TICKER_STARTED":
            return Object.assign({}, state, {
                isTickerStarted: true,
                lastFrameTime: new Date()
            });
        case "START_PARTICLES":
            return Object.assign({}, state, {
                generateParticles: true
            });
        case "STOP_PARTICLES":
            return Object.assign({}, state, {
                generateParticles: false
            });
        case "UPDATE_MOUSE_POS":
            return Object.assign({}, state, {
                mousePos: [action.x, action.y]
            });
        case "RESIZE_SCREEN":
            return Object.assign({}, state, {
                svgWidth: action.width,
                svgHeight: action.height,
                charges: _generateCharges(4, state.svgWidth, state.svgHeight)
            });
        default:
            return state;
    }
}

function particlesReducer(state, action) {
    switch (action.type) {
        case "TIME_TICK":
            let {
                    svgWidth,
                    svgHeight,
                    lastFrameTime,
                    generateParticles,
                    particlesPerTick,
                    particleIndex,
                    mousePos
                } = state,
                newFrameTime = new Date(),
                multiplier = (newFrameTime - lastFrameTime) / (1000 / 60),
                newParticles = state.particles.slice(0);

            if (generateParticles) {
                for (let i = 0; i < particlesPerTick; i++) {
                    let particle = {
                        id: state.particleIndex + i,
                        x: mousePos[0],
                        y: mousePos[1]
                    };

                    particle.vector = [
                        particle.id % 2 ? -randNormal() : randNormal(),
                        -randNormal2() * 3.3
                    ];

                    newParticles.unshift(particle);
                }

                particleIndex = particleIndex + particlesPerTick + 1;
            }

            let movedParticles = newParticles
                .filter(p => {
                    return !(p.y > svgHeight || p.x < 0 || p.x > svgWidth);
                })
                .map(p => {
                    let [vx, vy] = p.vector;
                    p.x += vx * multiplier;
                    p.y += vy * multiplier;
                    p.vector[1] += Gravity * multiplier;
                    return p;
                });

            return {
                particles: movedParticles,
                lastFrameTime: new Date(),
                particleIndex
            };
        default:
            return {
                particles: state.particles,
                lastFrameTime: state.lastFrameTime,
                particleIndex: state.particleIndex
            };
    }
}

// Manually combineReducers
export default function(state = initialState, action) {
    return {
        ...appReducer(state, action),
        ...particlesReducer(state, action)
    };
}
