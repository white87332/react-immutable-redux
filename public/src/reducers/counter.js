import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';
import { fromJS } from 'immutable';

const initialState = fromJS({
    'numbers': 0
});

export default function counter(state = initialState, action = {})
{
    switch (action.type)
    {
        case INCREMENT_COUNTER:
            return state.set('numbers', state.get('numbers') + 1 );

        case DECREMENT_COUNTER:
            return state.set('numbers', state.get('numbers') - 1 );

        default:
            return state;
    }
}
