import React from 'react'

const WalletForm = (props) => {
    return <form onSubmit={props.addMoney}>
                <input name="amount" value={props.addMoneyAmount} onChange={props.handleChange}/>
                <button type="submit">Add Funds</button>
            </form>
}

export default WalletForm