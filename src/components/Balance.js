import React from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {

    const { transactions } = React.useContext(GlobalContext);

    const amounts = transactions.map(item => item.transactionAmount);

    const total = amounts.reduce((acc, item) => {
        return acc += item
    }, 0);

    // console.log(total);
    
    return (
        <div>
            <h4>Current Balance</h4>
            <h1>${total}</h1>
        </div>
    )
}
