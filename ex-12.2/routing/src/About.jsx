import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <div>
                <Link to='/'>Voltar para home</Link>
                <h1>About</h1>
            </div>
        )
    }
}
