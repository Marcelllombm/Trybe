import React, { Component } from 'react'
import './Form.css';

export default class Form extends Component {
    constructor(){
        super();

        // this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state={
            estadoFavorito: '',
            nome:'',
            email:'',
            idade: 0,
            vaiComparecer: false,
            palavraChaveFavorita: '',
        }
    }

    // handleTextAreaChange(event){
        
    //     this.setState({estadoFavorito: event.target.value})
    // }

    handleChange({target}){
        const {name} = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value,
        })
    }
    render() {
        return (
            <div>
                <h1> Estados e React: Ferramenta incrivel ou reagindo  a regionalismos? </h1>
            <from className="form">
                <label>
                    Diga qual e o  seu Estado favorito! Do Brasil ou do React, voce que sabe!
                    {/* <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleTextAreaChange}/> */}
                    <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange}/>
                    
                </label>

                <label>
                    Email
                    <input name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                </label>

                <label>
                    Nome
                    <input name="nome" type="text" value={this.state.nome} onChange={this.handleChange}/>
                </label>

                <label>
                    Idade
                    <input name="idade" type="number" value={this.state.idade} onChange={this.handleChange} />
                </label>

                <label>
                    Vai comparecer a conferencia?
                    <input name="vaiComparecer" type="checkbox" value={this.state.vaiComparecer} onChange={this.handleChange}/>
                </label>

                <label>
                    Escolha sua palavra chave favoritos
                    <select name="palavraChaveFavorita" value={this.state.palavraChaveFavorita} onChange={this.handleChange}>
                        <option value="estado">Estado</option>
                        <option value="evento">Evento</option>
                        <option value="props">Props</option>
                        <option value="hooks">Hooks</option>
                    </select>
                </label>
                

            </from>
            </div>
        )
    }
}
