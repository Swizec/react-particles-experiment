
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { select as d3Select } from 'd3';

import particlesApp from './reducers';
import AppContainer from './containers/AppContainer';
import { resizeScreen } from './actions';

let store = createStore(particlesApp);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.querySelectorAll('.main')[0]
);

let onResize = function () {
    store.dispatch(resizeScreen(window.innerWidth, window.innerHeight));
}
onResize();

d3Select(window).on('resize', onResize);
