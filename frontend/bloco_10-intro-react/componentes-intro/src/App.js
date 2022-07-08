import React from 'react';
import './App.css';
import UserProfile from './UserProfile';
import Order from './Order';

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      nam: 'Jonh Cena',
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      // user: 2,
      nam: 'Jonh Cena',
      // product: "Monster 500mL",
      product: 2,
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    //
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      }
    ];
    //

    return (
      <>
      <div className='App'>
        <h1>Orders recently created</h1>
        <Order order={headphone}/>
        <Order order={energyDrink}/>
      </div>
      <div className='App'>
        <h2>Usuários aleatórios aqui do exercicio</h2>
        {users.map(user => <UserProfile key={user.id} user={user}/>)}
      </div>
      </>
    )
  }
}

export default App;
// Caso não tenha utilizado o create-react-app para preparar o aplicativo React , será necessário o download da depedência externa do PropTypes através do seguinte comando: npm install --save-dev prop-types .
// Warning: Failed prop type: The prop `product` is marked as required in `Order`, but its value is `undefined`.

// Como boa prática utilizamos a chave `id` do objeto como nossa key por ser única,
// caso ela não existisse, precisarímos utilizar o `index` como segundo parâmetro do map.
// componente app é pai do componente user profile
// não é muito legal colocar dados dentro da função render 

/**
class App extends React.Component {
  render() {
    const joao = {
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    };

    const amelia = {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    };

    return (
      <div className="App">
        <UserProfile user={joao} />
        <UserProfile user={amelia} />
      </div>
    );
  }
}
 */