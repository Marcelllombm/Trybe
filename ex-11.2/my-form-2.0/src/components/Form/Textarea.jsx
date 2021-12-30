import React, { Component } from 'react'

export default class Textarea extends Component {
    render() {
        const {
            labelValue,
            nameValue,
            infoValue,
            maxLength,
            handleChange
        } = this.props;

        return (
            <div  className='textarea' >
            <h4>{labelValue}</h4>
            <textarea
            name={nameValue}
            value={infoValue}
            maxLength={maxLength}
            required
            onChange={handleChange}
          />
            </div>
        )
    }
}
