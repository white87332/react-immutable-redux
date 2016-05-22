import { combineReducers } from 'redux-immutable';
import header from './header';
import todo from './todo';
import counter from './counter';

const rootReducer = combineReducers(
{
    header,
    todo,
    counter
});

export default rootReducer;
