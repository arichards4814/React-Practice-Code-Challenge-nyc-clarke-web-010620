import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component{

  state = {
    index: 0
  }

  renderSushis = (ind) => {
    let sushiCopy1 = [...this.props.sushis]
    let fourSushi = sushiCopy1.slice(ind, ind + 4)
    console.log(fourSushi)
    return fourSushi.map(sushi => <Sushi key={sushi.id} {...sushi} eatSushi={this.props.eatSushi} /> )
  }

  nextSushis = () => {
    this.setState({index: this.state.index + 4})
  }

  render(){
  return (
    <Fragment>
      <div className="belt">
        {
          this.renderSushis(this.state.index)
        }
        <MoreButton nextSushis={this.nextSushis}/>
      </div>
    </Fragment>
  )}
}

export default SushiContainer