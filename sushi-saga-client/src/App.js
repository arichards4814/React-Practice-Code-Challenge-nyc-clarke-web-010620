import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: []
  }

  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
        .then(body => {
          let newBody = body.map(sushi => Object.assign({}, sushi, {"eaten": false}))
          console.log(newBody)
          this.setState({sushis: newBody})
        })
  }

  eatSushi = (id) => {
    //find sushi, amend it, and then set state
    
    let sushiCopy = [...this.state.sushis]
    let sushiIndex = sushiCopy.findIndex(sushi => sushi.id === id)
    sushiCopy[sushiIndex].eaten = true
    this.setState({sushiCopy})
  }

  render() {
    let emptyPlates = this.state.sushis.filter(sushi => sushi.eaten === true)
    //data.filter((x,i) => { return x.select; }).length
    console.log(emptyPlates)
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} eatSushi={this.eatSushi}/>
        <Table emptyPlates={emptyPlates}/>
      </div>
    );
  }
}

export default App;