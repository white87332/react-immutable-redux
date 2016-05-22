import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state)
{
    return {
        header: state.get('header')
    };
}

class Header extends Component
{
    render()
    {
        return (
            <header>
                header
            </header>
        );
    }
}

export default connect(mapStateToProps)(Header);
