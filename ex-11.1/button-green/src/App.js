import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleClickTwo = this.handleClickTwo.bind(this)

    this.state = {
      count: 0,
      countTwo: 0,
    }
    
  }

  handleClick(){
    this.setState(({count}) => ({
      count: count + 1
    }),() =>{
      console.log(`Botao 1 ${this.getButtonColor(this.state.count)}`)
    });
  }

  handleClickTwo(){
    const {countTwo} = this.state;
    this.setState(({countTwo}) => ({
      countTwo: countTwo + 1
    }),() =>{
      console.log(`Botao 2: ${this.getButtonColor(countTwo)}`)
    });
  }
  

  getButtonColor(num){
    return num % 2 === 0 ? 'green' : 'black';
  }

  render() {
    const {count, countTwo} = this.state;

    return (
      <div>
        <button 
        style={{
          background: this.getButtonColor(count), 
          color: 'white'}}
         onClick={this.handleClick}>Valor: {count} 
        </button>

        <button 
        style={{
          background: this.getButtonColor(countTwo), 
          color: 'white'}}
         onClick={this.handleClickTwo}>Valor: {countTwo} 
        </button>
      </div>
    )
  }
}
