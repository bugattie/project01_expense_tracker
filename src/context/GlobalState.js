import React from 'react';
import AppReducer from './AppReducer';

// Create the initial state
const initialState = {
    transactions: []
}

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = React.useReducer(AppReducer, initialState);
    
    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        })
    };

    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        });
    };

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                deleteTransaction,
                addTransaction,
            }
        }>
        {children}
        </GlobalContext.Provider>
    );
}