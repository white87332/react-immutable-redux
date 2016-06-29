import { fromJS, Map } from 'immutable';
import * as types from '../constants/actionTypes';

const initialState = fromJS({
    data: []
});

export default function todo(state = initialState, action = {})
{
    switch (action.type)
    {
        // TODO_ADD
        case types.TODO_ADD:
            return state.set('data', state.get('data').push(Map({
                id: new Date()/1,
                name: action.data
            })));

        // TODO_EDIT
        case types.TODO_EDIT:
            let index = state.get('data').findIndex((item) => item.get('id') === action.data.id);
            let list = state.get('data').update(index, (item) =>
            {
                return item.set('name', action.data.name);
            });
            return state.set('data', list);

        // TODO_DEL
        case types.TODO_DEL:
            return state.set('data', state.get('data').filter((item) => item.get('id') !== action.data.id));

        // TODO_LIST
        case types.TODO_LIST:
            return state;

        default:
            return state;
    }
}
