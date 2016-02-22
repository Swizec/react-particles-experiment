
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import particlesApp from './reducers';
import AppContainer from './containers/AppContainer';

let store = createStore(particlesApp);

console.log(store);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.querySelectorAll('.container')[0]
);
