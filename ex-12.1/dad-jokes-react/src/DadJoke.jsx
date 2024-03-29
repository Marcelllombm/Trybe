import { Component } from 'react';

export default class DadJoke extends Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    this.setState(
    {location: true}, // primeiro paramentro da setstate
    async () => {
    const requestHeaders = { headers: { Accept: 'application/json' } }
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const requestObject = await requestReturn.json();
    this.setState({
      loading: false,
      jokeObj: requestObject,
    })
  })
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    //            estado anterio, estado atual
    this.setState(({storedJokes, jokeObj}) => ({
      storedJokes: [...storedJokes, jokeObj]
    }))

    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar piada!
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes, jokeObj, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
      <span>RENDERIZAÇÃO CONDICIONAL</span>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>


      {/* <p>{jokeObj === undefined ? loadingElement : jokeObj.joke}</p> */}
      {/* ou  */}
      {/* <p>{jokeObj ? jokeObj.joke : loadingElement}</p> */}
      <p>{loading ? loadingElement : this.renderJokeElement() }</p>
      </div>
    );
  }
}