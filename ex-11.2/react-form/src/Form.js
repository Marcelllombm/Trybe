import React, { Component } from 'react'
import EstadoFavorito from './EstadoFavorito';
import Input from './Input';
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
            formularioComErros: true,
        }
    }

    // handleTextAreaChange(event){
        
    //     this.setState({estadoFavorito: event.target.value})
    // }

    handleChange({target}){
        // console.log(`Estou mundando o estado do pai!`)
        const {name} = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value,
        })
    }
    render() {
        return (
            <div className='container'>
                <h1> Estados e React: Ferramenta incrivel ou reagindo  a regionalismos? </h1>
            <from className="form">
               <EstadoFavorito value={this.state.estadoFavorito}  handleChange={this.handleChange}/>
               <Input title="Email" name="email" type="email" value={this.state.email} handleChange={this.handleChange}/>
               <Input title="Nome" name="nome" type="text" value={this.state.nome} handleChange={this.handleChange}  />
               <Input title="Idade" name="idade" type="number" value={this.state.idade} onChange={this.handleChange}/>
               <Input title="Vai comparecer a conferencia" name="vaiComparecer" type="checkbox" value={this.state.vaiComparecer} handleChange={this.handleChange}/>
                {/* <label>
                    Nome
                    <input name="nome" type="text" value={this.state.nome} onChange={this.handleChange}/>
                </label> */}
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
