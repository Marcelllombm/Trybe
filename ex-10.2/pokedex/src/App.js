import React, { Component } from 'react';
import pokemons from './Data';
import Pokedex from './Pokedex';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex pokemons={pokemons}/>
      </div>
    )
  }
}
