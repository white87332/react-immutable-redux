import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore.js';
import createRoutes from '../routes/routes';
import { syncHistoryWithStore } from 'react-router-redux';
import Immutable from 'immutable';

// store
const store = configureStore(Immutable.Map({}));

// react-router-redux
const history = syncHistoryWithStore(browserHistory, store,
{
    selectLocationState (state)
	{
        return state.get('routing');
    }
});

// routes
const routes = createRoutes(history);

render(
	<Provider store={store}>
		{routes}
	</Provider>,
	document.getElementById('root')
);
