
import React, { Component } from 'react'


export default class App extends Component {
  // o construturo e uma funçao do react
  // ele rederiza primeiro do que o componente
  // e preciso usar o this.xxxx.bind(this) para o componente reconhece a funçao da class com o this
  constructor(){
    super()
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleState = this.handleState.bind(this)
    this.handleStateModif = this.handleStateModif.bind(this)

    this.state={
      numeroDeCliques : 0,
      count: 0
    }
  }
  
  // nao precisa da sitaxe function para funcao na class
  handleClick1(){
    
    console.log("ola evento one :", this);
  }
  
  handleState(){
    console.log("handleState");
    this.setState({
      numeroDeCliques: 1
    })
  }
  
  handleStateModif(){
    console.log("count");
    // colocando anderlaine no props modifia pra  nao usar
    this.setState((estadoAnterior, _props) => ({
      count: estadoAnterior.count + 1
    }))
  }

  render() {
    return (
      <div>
        {/* e priciso usar o this para reconhecer a funcao dentro da class  */}
        <button onClick={this.handleClick1}>Evento 1</button>
        
        <button onClick={this.handleState}>Click {this.state.numeroDeCliques}</button>

        <button onClick={this.handleStateModif}>estado modificar automatico: {this.state.count}</button>
      </div>
    )
  }
}
