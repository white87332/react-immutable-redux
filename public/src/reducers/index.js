import { combineReducers } from 'redux-immutable';
import { routerReducer as routing } from 'react-router-redux';
import header from './header';
import todo from './todo';
import counter from './counter';
import custom from './custom';

const rootReducer = combineReducers(
{
    header,
    todo,
    counter,
    custom,
    routing
});

export default rootReducer;
