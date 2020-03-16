import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import SushiWallet from '../components/SushiWallet'
import WalletForm from '../components/WalletForm'

class SushiContainer extends React.Component{

  state = {
    index: 0,
    showWallet: false,
    addMoneyAmount: 0
  }

  renderSushis = (ind) => {
    let sushiCopy1 = [...this.props.sushis]
    let fourSushi = sushiCopy1.slice(ind, ind + 4)
    console.log(fourSushi)
    return fourSushi.map(sushi => <Sushi key={sushi.id} {...sushi} eatSushi={this.props.eatSushi} /> )
  }

  nextSushis = () => {
    if(this.state.index >= 96){
    this.setState({index: 0})
    } else {
    this.setState({index: this.state.index + 4})
    }
  }

  showForm = () => {
    this.setState({showWallet: !this.state.showWallet})
  }

  handleChange = (e) => {
    this.setState({addMoneyAmount: e.target.value})
  }

  addMoney = (e) => {
    e.preventDefault()
    this.props.addFundsHelper(parseInt(e.target.children[0].value))
  }

  render(){
  return (
    <Fragment>
      <div className="belt">
        {
          this.renderSushis(this.state.index)
        }
        <MoreButton nextSushis={this.nextSushis}/>
        {this.state.showWallet ? <WalletForm addMoneyAmount={this.state.addMoneyAmount} handleChange={this.handleChange} addMoney={this.addMoney}/>: ""}
        <SushiWallet showForm={this.showForm} />
      </div>
    </Fragment>
  )}
}

export default SushiContainer