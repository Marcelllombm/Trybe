import React, { Component } from 'react';


export default class Input extends Component {
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
            <>
              <label htmlFor={idValue}>{ labelValue } </label>  
              <input 
              name={nameValue} 
              type={typeValue} 
              id={idValue} 
              value={infoValue}  
              onChange={handleChange}
              />
            </>
        )
    }
}
