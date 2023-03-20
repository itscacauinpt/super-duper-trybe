import React from 'react';
import './App.css';
import Componente from './Componente';
import OtherComp from './OtherComp';
import Header from './Header';
import Content from './Content';
import Image from './Image';
// import React, { useState } from 'react'
// import TodoList from './TodoList';

// para fixar:
const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  )
}
const tarefas = ['terminar', 'isso', 'aqui'];

class App extends React.Component {
  render() {
    return (
      <>
      <Image source="{staringCatQueNãoTenho}" alternativeText="Cute cat staring"/>

      <Header />
      <Content />

      <section className='App'>
        <h1>Oi</h1>
      </section>
      <Componente />
      <Componente />
      <OtherComp />
      <ul>{tarefas.map(tarefa => Task(tarefa))}</ul>
      </>
    )
  }
}

export default App;

/**
function App() {
  return (
    <>
    </>
  )
}
 * 
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2']) // obj destructing
  return (
    // creating a component
    // we cant return more than one thing
    // so we create one thing that has more than one thing :v
    <>
    <TodoList todoList={todos} /> 
    <input type="text" />  
    <button>Add</button>
    <button>Clear</button>
    <div>0 left to do</div>
    </>
  );
 */