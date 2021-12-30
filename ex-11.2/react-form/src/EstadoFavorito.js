import React, { Component } from 'react';
import './Form.css';

export default class EstadoFavorito extends Component {
    render() {
        const {value, handleChange } = this.props;
        // console.log(`estou no filho o valor ${value}`)
        let error = undefined;
        if(value.length > 100) { error = "Texto e muito grande" };

        return (
            <div>
                  <label>
                    Diga qual e o  seu Estado favorito! Do Brasil ou do React, voce que sabe!
                    {/* <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleTextAreaChange}/> */}
                    <textarea name="estadoFavorito" value={value} onChange={handleChange}/>
                    <span>{error !== undefined ? error: ''}</span>
                </label>
            </div>
        )
    }
}
