import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../../actions/todo';
import TodoList from './todoList';

function mapStateToProps(state)
{
    return {
        data: state.get('todo').get('data')
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        todoActions : bindActionCreators(todoActions, dispatch)
    };
}

class Todo extends Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {};

        let { todoActions } = this.props;
        todoActions.todoList();
    }

    add()
    {
        let { todoActions } = this.props;
        todoActions.todoAdd(this.refs.name.value);
    }

    renderList()
    {
        let { data, todoActions } = this.props;
        let lists = null;

        if(data !== undefined && data.size > 0)
        {
            lists = data.map((data, key) => {
                return <TodoList key={key} data={data} todoActions={todoActions}/>;
            });
        }

        return lists;
    }

    render()
    {
        return (
            <div className="todo">
                <input type="text" ref="name"/>
                <button onClick={this.add.bind(this)}>add</button>
                {this.renderList()}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
