import React, { Component } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';

class TodoList extends Component
{
    shouldComponentUpdate(nextProps, nextState)
    {
        return (Immutable.is(this.props.data, nextProps.data))? false : true;
    }

    render()
    {
        let { data } = this.props;
        return (
            <div className="list">
                <span>id</span>
                <span>&nbsp;{data.get('id')}</span>
                <span>&nbsp;name</span>
                <span>&nbsp;{data.get('name')}</span>
            </div>
        );
    }
}

export default TodoList;
