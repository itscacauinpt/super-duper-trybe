import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);

    this.state = {
      counter: 0
    }
    this.increment = () => this.setState({
      counter: this.state.counter+1
    })
    this.decrement = () => this.setState({
      counter: this.state.counter-1
    })
  }
  componentDidMount() {
    console.log('component did mount'); // its only called when the component its constructored; called rigth after render
    console.log('--------------------')
  }
  /* not that usedmethods // be careful, its used when it neeeded to verify if necessary to update the component
  shouldComponentUpdate(nextProps, nextState) {
    return true  
  }
  */
  render() {
    console.log('render');
    return (
      <div>
        Counter: {this.state.counter}
        <button onClick={ this.increment }>Increment</button>
        <button onClick={ this.decrement }>Decrement</button>
      </div>
    )
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component did update'); // its kind self explanatory, its updated when the props and balc blac are modified
    console.log('--------------------')
  }
  componentWillUnmount() {
    console.log('Component WillUnmount'); // the did update will apeared too because its being updated too
    console.log('--------------------')
  }

}