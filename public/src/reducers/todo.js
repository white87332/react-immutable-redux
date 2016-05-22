import Immutable from 'immutable';
import * as types from '../constants/actionTypes';

const initialState = Immutable.fromJS({
    data: []
});

export default function todo(state = initialState, action = {})
{
    switch (action.type)
    {
        case types.TODO_ADD:
            return state.set('data', state.get('data').push(Immutable.Map({
                id: new Date()/1,
                name: action.data
            })));

        case types.TODO_EDIT:
            return state;

        case types.TODO_DEL:
            return state;

        case types.TODO_LIST:
            return state;

        default:
            return state;
    }
}
