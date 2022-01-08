import React, { Component } from 'react';
import { Link, link } from 'react-router-dom';

export default class HowTo extends Component {
    render() {
        return (
            <div>
                <Link to='/'>Voltar para home</Link>
                <h1>HowTo</h1>
            </div>
        )
    }
}
