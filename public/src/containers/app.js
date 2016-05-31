import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore.js';
import createRoutes from '../routes/routes';
import Immutable from 'immutable';

// store
const store = configureStore(Immutable.Map({}));

// routes
const routes = createRoutes(browserHistory);

render(
	<Provider store={store}>
		{routes}
	</Provider>,
	document.getElementById('root')
);
