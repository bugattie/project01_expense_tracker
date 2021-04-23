import React from 'react'
import { GlobalContext } from '../context/GlobalState'

export const ActionSummary = () => {

    const { transactions } = React.useContext(GlobalContext);

    const amounts = transactions.map(item => item.transactionAmount);

    const totalIncome = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0);
    const totalExpense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += Math.abs(item)), 0);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    ${totalIncome}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">
                    ${totalExpense}
                </p>
            </div>
        </div>
    )
}
