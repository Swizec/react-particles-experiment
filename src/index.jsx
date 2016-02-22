
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import particlesApp from './reducers';
import App from './components';
import { tickTime } from './actions';

let store = createStore(particlesApp);

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(tickTime());

unsubscribe();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelectorAll('.container')[0]
);
