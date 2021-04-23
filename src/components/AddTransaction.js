import React, { useContext } from 'react'
// import { nanoid } from 'nanoid'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {

    const { addTransaction } = useContext(GlobalContext);
    const [description, setDescription] = React.useState();
    const [transactionAmount, setTransactionAmount] = React.useState();

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            // id: nanoid(),
            id: Math.floor(Math.random() * 100000000),
            description,
            transactionAmount: transactionAmount * 1
        };

        addTransaction(newTransaction);
    };

    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text"
                        id="description"
                        placeholder="Detail of transaction"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="transaction-amount">
                        Transaction Amount
                    </label>
                    <input type="number"           
                        id="transaction-amount"
                        placeholder="Enter transaction amount"
                        value={transactionAmount}
                        onChange={(e) => setTransactionAmount(e.target.value)}
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
