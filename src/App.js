import React, { Component } from 'react';
import Tabs from './Tabs';
import Content from './Content';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      tacos: []
    };
  }

  componentDidMount() {
    let url = "http://taco-randomizer.herokuapp.com/random/?full-taco=true"

    fetch(url).then(res => res.json()).then(data => {
      this.setState({
        tacos: data
      });
    });
  }

  handleTabs = (event) => {
    event.preventDefault()
    
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Tabs UI</h1>
        </header>
        <main>
          <div className="container">
            <Tabs switch={this.handleTabs} />
            <Content content={this.state.tacos.name} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
