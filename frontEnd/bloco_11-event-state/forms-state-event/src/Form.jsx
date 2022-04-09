// https://pt-br.reactjs.org/docs/uncontrolled-components.html#the-file-input-tag
import React, { Component } from 'react';
import './Form.css';

// even handlers genérco
class Form extends Component {
  constructor() {
    super()
    this.state = {
      textPokeFav: '',
      nickname: '',
      idade: 0,
      boolean: false,
      chooseOne: '',
    }
    this.inputChanger = this.inputChanger.bind(this);
    this.fileInput = React.createRef();
    this.handleSub = this.handleSub.bind(this);
  }
  handleSub(event) {
    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.current.files[0].name}`
    )
  }
  inputChanger({ target }) {
    // agora eu posso guardar as propriedades do target dentro de uma const!
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    // console.log(target.name);
    this.setState({
      [name]: value, //e.target.value
    })
    // name == textPokeFav => [name]
  }
  //No React, um <input type="file" /> é sempre um componente não controlado porque seu valor só pode ser definido por um usuário e não programaticamente
  render() {
    return(
      <div className='Form'>
        <h1>Meu form com React Socorro</h1>
        <form onSubmit={ this.handleSub }>
          <fieldset>
            <label>
              Foto do seu pokemon
              <input 
              type="file"
              ref={this.fileInput}
              ></input>
            </label>
            <label>
              Qual seu poke favorito?
              <textarea name='textPokeFav' onChange={ this.inputChanger } />
            </label>
            <label>
              Apelido?
              <input name='nickname' onChange={ this.inputChanger }></input>
            </label>
            <label>
              Um coiso aqui :v
              <input
                type="number"
                name="idade"
                onChange={ this.inputChanger }
            />
            <label htmlFor="">
              otroCoiso
              <input
                type="checkbox"
                name="boolean"
                onChange={ this.inputChanger }
              />
            </label>
            <label htmlFor="">
              Escolhe ae
              <select 
                name="chooseOne" 
                value={ this.state.chooseOne } 
                onChange={ this.inputChanger }>
                <option value="seila">seila</option>
                <option value="seila1">seila1</option>
                <option value="seila2">seila2</option>
                <option value="seila3">seila3</option>
              </select>
            </label>
            </label>
          </fieldset>
          <button type="submit" >submit</button>
        </form>
      </div>
    )
  }
}

export default Form;

/*
Dê a cada elemento um nome que seja igual à respectiva chave no estado do componente
No handler, recupere a partir do parâmetro event o nome do componente que disparou o evento e o valor associado ao disparo.
Interpole o nome do componente como chave do estado numa sintaxe como a acima.
*
class Form extends Component {
  constructor() {
    super()

    this.state = {
      textPokeFav: '',
      nickname: '',
      idade: 0,
      boolean: false,
    }

    this.inputChanger = this.inputChanger.bind(this);
    this.nicknameChanger = this.nicknameChanger.bind(this);

  }

  inputChanger(e) {
    console.log(e.target.value);
    this.setState(
      {
        textPokeFav: e.target.value,
      }
    )
  }
  nicknameChanger(e) {
    console.log(e.target.value);
    this.setState(
      {nickname: e.target.value}
    )
  }
  
  // peguei o textarea, quando ele muda, dispara a função onChange, e vai pegar o valor inserido pelo user e colocar no campo do estado
  render() {
    return (
      <div>
        <h1>Meu form com React Socorro</h1>
        <form className='form'>
          <label>
            Qual seu poke favorito?
            <textarea name='textPokeFav' value={ this.state.textPokeFav } onChange={ this.inputChanger } />
          </label>
          <label>
            Apelido?
            <input value={ this.state.nickname } onChange={ this.nicknameChanger }></input>
          </label>
          <label>
            Um coiso aqui :v
            <input
              type="number"
              name="idade"
          />
          <label htmlFor="">
            otroCoiso
            <input
              type="checkbox"
              name="boolean"
            />
          </label>
          </label>
        </form>
      </div>
    )
  }
}
 */
