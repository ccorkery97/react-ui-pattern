import React, { Component } from 'react';
import Tabs from './Tabs';
import Content from './Content';
import './App.css';

let tacoArray = []

class App extends Component {
  constructor() {
    super();

    this.state = {
      tacos: []
    };
  }

  componentDidMount() {
    let url = "http://taco-randomizer.herokuapp.com/random/?full-taco=true"

    this.fetchTacos(url)
  }

  fetchTacos = (url) => {
    for (let i = 0; i < 7; i++) {
      fetch(url).then(res => res.json()).then(data => {
        tacoArray.push(data)
        this.setState({
          tacos: data
        })
      });
    }
  }

  checkDuplicateTacos = (url) => {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        if (i !== j) {
          if (tacoArray[i].name === tacoArray[j].name) {
            fetch(url).then(res => res.json()).then(data => {
              tacoArray[j] = data
            });
          }
        }
      }
    }
  }
  
  handleTabs = (event) => {
    this.checkDuplicateTacos("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
    event.preventDefault()
    if (event.target.value === 'Content 1') {
      this.setState({
        tacos: tacoArray[6]
      })
    } else if (event.target.value === 'Content 2') {
      this.setState({
        tacos: tacoArray[1]
      })
    } else if (event.target.value === 'Content 3') {
      this.setState({
        tacos: tacoArray[2]
      })
    } else if (event.target.value === 'Content 4') {
      this.setState({
        tacos: tacoArray[3]
      })
    } else if (event.target.value === 'Content 5') {
      this.setState({
        tacos: tacoArray[4]
      })
    } else if (event.target.value === 'Content 6') {
      this.setState({
        tacos: tacoArray[5]
      })
    } else if (event.target.value === 'Content 7') {
      this.setState({
        tacos: tacoArray[0]
      })
    } 
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Taco Tabs</h1>
        </header>
        <main>
          <div className="container">
            <Tabs switch={this.handleTabs} />
            <Content name={this.state.tacos.name} recipe={this.state.tacos.recipe} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
