import React, { Component } from 'react'
import './Form.css';

export default class Input extends Component {
    render() {
        const { title, name, type, value, handleChange} = this.props;

        return (
            <label>
            {title}
            <input name={name} type={type} value={value} onChange={handleChange}/>
            </label>

        )
    }
}
