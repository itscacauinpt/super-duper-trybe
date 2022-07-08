import React from "react";
import Joke from "./Joke";

export default class DadJokes extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      jokeObj: undefined,
      storedJokes: []
    }
    this.fetchJoke = async () => {
      const requestedHeader = { headers: { Accept: "application/json" } };
      const api = await (await fetch("https://icanhazdadjoke.com/", requestedHeader)).json();
      // console.log(api);
      this.setState({
        loading: false,
        jokeObj: api
      })
    }
    // putting them as parameters to use in a setState, and then making a function to change the current state!
    // here im spreeding the stored ones an ading the jokeObj with the current joke
    // this waiy ill be able to join the ones that ill have stored first and keep adding
    this.saveJoke = () => {
      this.setState(({storedJokes, jokeObj}) => ({
        storedJokes: [...storedJokes, jokeObj]
      }))
      this.fetchJoke();
    }
  }
  componentDidMount() {
    this.fetchJoke();
  }

  render() {
    const { loading, jokeObj, storedJokes } = this.state;
    return (
      <section>
        {storedJokes.map(({id, joke}) => (
          <p key={id}>{joke}</p>
        ))}
        <div>
          {loading
            ? <p>Loading...</p>
            : <Joke jokeObj={jokeObj.joke} saveJoke={this.saveJoke} />
          }
        </div>
      </section>
    )
  }
}

/**
 *         {storedJokes.map(({id, joke}) => (
          <p key={id}>{joke}</p>
        ))}
class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: []
    };
  }

  async fetchJoke() {
    const requestHeaders = { headers: { Accept: "application/json" } };
    const requestReturn = await fetch(
      "https://icanhazdadjoke.com/",
      requestHeaders
    );
    const requestObject = await requestReturn.json();
    this.setState({
      jokeObj: requestObject
    });
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    //Esse método será responsável por salvar a piada no array de piadas storedJokes!!
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj]
    }));

    this.fetchJoke();
  }

  render() {
    const { storedJokes, jokeObj, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (
            <p key={id}>{joke}</p>
          ))}
        </span>
        <p>
          {loading && loadingElement}
          {!loading && jokeObj}
        </p>

        {/*
                <p>{loading 
          ? loadingElement
          : <Joke jokeObj={jokeObj} saveJoke={this.saveJoke} />
        }</p>
        <p>{objeJoke ? objeJoke.joke : loadingElement}</p>
        Aqui vamos construir nossa lógica com uma renderização condicional
        do nosso componente Joke, a ideia é renderizar um loading enquanto
        esperamos a nossa requisição de piadas finalizar.

        <p>RENDERIZAÇÃO CONDICIONAL</p>
        }
        </div>
        );
      }
    }
    
    export default DadJoke;
    // jokeObj está unnndefined no começo, assim que o render termina. Quando passamos pelo componentDidMount, temos o fetch da api e o objeJoke é atualizado para a piada, ele dispara a atualização do estado, e tudo é renderizado de novo
    
 */