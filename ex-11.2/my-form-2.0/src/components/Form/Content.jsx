import React, { Component } from 'react'


export default class Content extends Component {
    
    render() {
        const {
        nome,
        email,
        cpf,
        endereco,
        cidade,
        estado,
        tipo,
        resumo,
        cargo,
        descricao,
    } = this.props;

        return (
            <div className='content'>
                <h3>informaçao</h3>
                <p>{`Nome: ${nome}`}</p>    
                <p>{`Email: ${email}`}</p>
                <p>{`CPF: ${cpf}`}</p>
                <p>{`Endereço: ${endereco}`}</p>
                <p>{`Cidade: ${cidade}`}</p>
                <p>{`Estado: ${estado}`}</p>
                <p>{`Informaçao adicional ${tipo}`}</p>
                <p>{`Resumo: ${resumo}`}</p>
                <p>{`cargo: ${cargo}`}</p>
                <p>{`Descriçao: ${descricao}`}</p>        
            </div>
        )
    }
}
