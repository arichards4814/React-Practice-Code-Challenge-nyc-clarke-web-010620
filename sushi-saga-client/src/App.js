import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    cash: 100
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

    if (this.state.cash - sushiCopy[sushiIndex].price <= 0){
      alert("Not enough money!")
    } else {
      this.setState({cash:  this.state.cash - sushiCopy[sushiIndex].price})
      sushiCopy[sushiIndex].eaten = true
      this.setState({sushiCopy})
    }
    //deduct money
  }

  addFundsHelper = (amount) => {
    this.setState({cash: this.state.cash + amount})
  }

  render() {
    let emptyPlates = this.state.sushis.filter(sushi => sushi.eaten === true)
    //data.filter((x,i) => { return x.select; }).length
    console.log(emptyPlates)
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} eatSushi={this.eatSushi} addFundsHelper={this.addFundsHelper}/>
        <Table emptyPlates={emptyPlates} cash={this.state.cash}/>
      </div>
    );
  }
}

export default App;