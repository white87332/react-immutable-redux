import React, { Component } from 'react';
import { is } from 'immutable';

class TodoList extends Component
{
    shouldComponentUpdate(nextProps, nextState)
    {
        return (is(this.props.data, nextProps.data))? false : true;
    }

    update()
    {
        let { data, todoActions } = this.props;
        todoActions.todoEdit({id: data.get('id'), name:this.refs.name.value});
    }

    delele()
    {
        let { data, todoActions } = this.props;
        todoActions.todoDel({id: data.get('id')});
    }

    render()
    {
        let { data } = this.props;
        return (
            <div className="list">
                <span>id</span>
                <span>&nbsp;{data.get('id')}</span>
                <span>&nbsp;name</span>
                <span>&nbsp;<input type="text" ref="name" value={data.get('name')} onChange={this.update.bind(this)}/></span>
                <span>&nbsp;<button onClick={this.delele.bind(this)}>delete</button></span>
            </div>
        );
    }
}

export default TodoList;
