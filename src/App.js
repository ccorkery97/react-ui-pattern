import React, { Component } from 'react';
import Tabs from './Tabs';
import Content from './Content';
import './App.css';

let tacoArray = [
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' }
]

class App extends Component {
  constructor() {
    super();

    this.state = {
      tacos: [],
      alltacos: [
        { name: '' },
        { name: '' },
        { name: '' },
        { name: '' },
        { name: '' },
        { name: '' },
        { name: '' }
      ],
      active: [
        '',
        '',
        '',
        '',
        '',
        '',
        ''
      ]
    };
  }

  componentDidMount() {
    let url = "http://taco-randomizer.herokuapp.com/random/?full-taco=true"

    this.fetchTacos(url)
    
  }

  fetchTacos = (url) => {
    for (let i = 0; i < 7; i++) {
      fetch(url).then(res => res.json()).then(data => {
        tacoArray.shift()
        tacoArray.push(data)
        this.setState({
          tacos: data,
          alltacos: tacoArray
        })
      });
    }
  }
  

  handleTabs = (event) => {
    event.preventDefault()
    if (event.target.value === 'Content 1') {
      this.setState({
        tacos: tacoArray[6],
        active: [
          '',
          '',
          '',
          '',
          '',
          '',
          'active'
        ]
      })
    } else if (event.target.value === 'Content 2') {
      this.setState({
        tacos: tacoArray[1],
        active: [
          '',
          'active',
          '',
          '',
          '',
          '',
          ''
        ]
      })
    } else if (event.target.value === 'Content 3') {
      this.setState({
        tacos: tacoArray[2],
        active: [
          '',
          '',
          'active',
          '',
          '',
          '',
          ''
        ]
      })
    } else if (event.target.value === 'Content 4') {
      this.setState({
        tacos: tacoArray[3],
        active: [
          '',
          '',
          '',
          'active',
          '',
          '',
          ''
        ]
      })
    } else if (event.target.value === 'Content 5') {
      this.setState({
        tacos: tacoArray[4],
        active: [
          '',
          '',
          '',
          '',
          'active',
          '',
          ''
        ]
      })
    } else if (event.target.value === 'Content 6') {
      this.setState({
        tacos: tacoArray[5],
        active: [
          '',
          '',
          '',
          '',
          '',
          'active',
          ''
        ]
      })
    } else if (event.target.value === 'Content 7') {
      this.setState({
        tacos: tacoArray[0],
        active: [
          'active',
          '',
          '',
          '',
          '',
          '',
          ''
        ]
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
            <Tabs switch={this.handleTabs} name={this.state.alltacos} active={this.state.active} />
            <Content name={this.state.tacos.name} recipe={this.state.tacos.recipe} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
