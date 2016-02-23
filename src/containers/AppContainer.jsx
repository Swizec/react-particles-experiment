
import { connect } from 'react-redux';
import React, { Component } from 'react';

import App from '../components';
import { tickTime, tickerStarted, startParticles, endParticles, createParticle } from '../actions';

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

    endParticles() {
        const { store } = this.context;
        store.dispatch(endParticles());
    }

    createParticle(x, y) {
        const { store } = this.context;
        store.dispatch(createParticle(x, y));
    }

    render() {
        const { store } = this.context;
        const state = store.getState();

        return (
            <App {...state}
                 startTicker={::this.startTicker}
                 startParticles={::this.startParticles}
                 endParticles={::this.endParticles}
                 createParticle={::this.createParticle}
            />
        );
    }
};

AppContainer.contextTypes = {
    store: React.PropTypes.object
};

export default AppContainer;
