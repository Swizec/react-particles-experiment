
import { connect } from 'react-redux';
import React, { Component } from 'react';

import App from '../components';
import { tickTime, tickerStarted, startParticles, stopParticles, updateMousePos, createParticle } from '../actions';

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
                this.maybeCreateParticle();
                store.dispatch(tickTime());

                window.requestAnimationFrame(ticker);
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

    maybeCreateParticle() {
        const { store } = this.context;
        const state = store.getState();
        const [x, y] = state.mousePos;

        if (state.generateParticles) {
            store.dispatch(createParticle({
                id: state.particleIndex,
                x: x,
                y: y
            }));
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
