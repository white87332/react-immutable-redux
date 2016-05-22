import * as types from '../constants/actionTypes';

export function todoList()
{
    return (dispatch, getState) =>
    {
        dispatch({
            type: types.TODO_LIST,
            data: {}
        });
    };
}

export function todoAdd(data)
{
    return (dispatch, getState) =>
    {
        dispatch({
            type: types.TODO_ADD,
            data: data
        });
    };
}

export function todoEdit(data)
{
    return (dispatch, getState) =>
    {
        dispatch({
            type: types.TODO_EDIT,
            data: data
        });
    };
}

export function todoDel(data)
{
    return (dispatch, getState) =>
    {
        dispatch({
            type: types.TODO_DEL,
            data: data
        });
    };
}
