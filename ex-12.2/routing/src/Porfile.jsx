import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Porfile extends Component {

    render() {
        
        return (
            <div>
                <Link to='/'>Voltar para home</Link>
                <h1>Porfile = {this.props.data} </h1>
            </div>
        )
    }
}
