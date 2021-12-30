import React, { Component } from 'react'

export default class Radio extends Component {
    render() {
        const {
            labelValue, 
            nameValue, 
            typeValue, 
            infoValue, 
            handleChange, 
            idValue 
        } = this.props;

        return (
            <div className='radiocontainer'>
                <label htmlFor={idValue}>{labelValue}</label>
                <input 
                name={nameValue} 
                type={typeValue} 
                value={infoValue} 
                onChange={handleChange}
                id={idValue }
                />
            </div>
        )
    }
}
