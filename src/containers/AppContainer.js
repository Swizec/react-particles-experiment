
import { connect } from 'react-redux';
import React, { Component } from 'react';

import App from '../components';
import { tickTime, tickerStarted } from '../actions';

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
            store.dispatch(tickerStarted());
            ticker();
        }
    }

    render() {
        const { store } = this.context;
        const state = store.getState();

        return (
            <App {...state} startTicker={::this.startTicker}/>
        );
    }
};

AppContainer.contextTypes = {
    store: React.PropTypes.object
};

export default AppContainer;
