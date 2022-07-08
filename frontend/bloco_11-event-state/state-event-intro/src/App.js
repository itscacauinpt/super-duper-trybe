import './App.css';
import React from 'react';

function FancyButton() {
  console.log('My');
}
function FancyButtonTwo() {
  console.log('Fancy');
}
function FancyButtonThree() {
  console.log('Button');
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={FancyButton}>My</button>
        <button onClick={FancyButtonTwo}>Fancy</button>
        <button onClick={FancyButtonThree}>Button</button>
      </div>
    )
  }
}

export default App;
