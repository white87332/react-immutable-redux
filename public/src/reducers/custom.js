import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = fromJS({
    'locationBeforeTransitions': null
});

export default function counter(state = initialState, action = {})
{
    switch (action.type)
    {
        case LOCATION_CHANGE:
            return state.merge({
                locationBeforeTransitions: action.payload
            });
        default:
            return state;
    }
}
