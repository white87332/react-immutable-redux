import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component
{
    render()
    {
        return (
            <footer>
                footer
            </footer>
        );
    }
}

export default connect()(Footer);
