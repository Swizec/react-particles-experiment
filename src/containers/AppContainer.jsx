
import { connect } from 'react-redux';
import React, { Component } from 'react';

import App from '../components';
import { tickTime, tickerStarted, startParticles, stopParticles, updateMousePos, createParticles } from '../actions';

class AppContainer extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    startTicker() {
        const { store } = this.context;

        let ticker = () => {
            if (store.getState().tickerStarted) {
                this.maybeCreateParticles();
                store.dispatch(tickTime());

                //window.requestAnimationFrame(ticker);
                setTimeout(ticker, 500);
            }
        };

        if (!store.getState().tickerStarted) {
            console.log("Starting ticker");
            store.dispatch(tickerStarted());
            ticker();
        }
    }

    startParticles() {
        const { store } = this.context;
        store.dispatch(startParticles());
    }

    stopParticles() {
        const { store } = this.context;
        store.dispatch(stopParticles());
    }

    updateMousePos(x, y) {
        const { store } = this.context;
        store.dispatch(updateMousePos(x, y));
    }

    maybeCreateParticles() {
        const { store } = this.context;
        const state = store.getState();
        const [x, y] = state.mousePos;

        if (state.generateParticles) {
            store.dispatch(createParticles(state.particlesPerTick, x, y));
        }
    }

    render() {
        const { store } = this.context;
        const state = store.getState();

        return (
            <App {...state}
                 startTicker={::this.startTicker}
                 startParticles={::this.startParticles}
                 stopParticles={::this.stopParticles}
                 updateMousePos={::this.updateMousePos}
            />
        );
    }
};

AppContainer.contextTypes = {
    store: React.PropTypes.object
};

export default AppContainer;
