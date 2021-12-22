import React from 'react';

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

const task = (value) => {
  return <li key={value}>{value}</li>
}

class App extends React.Component {
  render() {
    return (
     <ul>{tarefas.map(tarefa => task(tarefa))}</ul>
      )
  }
}

export default App;
