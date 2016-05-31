import React from 'react';
import { Router, Route } from 'react-router';

// async load component
const loadConmponentAsync = bundle => (location, callback) =>
{
	bundle(component => {
		callback(null, component.default);
	});
};

export default function createRoutes(history)
{
    return (
		<Router history={history}>
			<Route getComponent={loadConmponentAsync(require('bundle?lazy&name=layout!../components/layout/layout'))}>
				<Route path= "/counter" getComponent={loadConmponentAsync(require('bundle?lazy&name=counter!../components/counter/counter'))} />
				<Route path= "/todo" getComponent={loadConmponentAsync(require('bundle?lazy&name=todo!../components/todo/todo'))} />
			</Route>
	    </Router>
    );
}
