
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import particlesApp from './reducers';
import Particles from './components/Particles';

let store = createStore(particlesApp);

ReactDOM.render(
    <Provider store={store}>
        <Particles width="800" height="600" />
    </Provider>,
    document.querySelectorAll('.particles')[0]
);
