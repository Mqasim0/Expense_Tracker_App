import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
// Intial State

const initialState = {
  transactions: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider componenet

export const GlobalProvider = ({ children }) => {
  const [state, disptach] = useReducer(AppReducer, initialState);

  // delete Transaction

  const deleteTrasanction = (id) => {
    disptach({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };
  const addTrasanction = (transaction) => {
    disptach({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTrasanction,
        deleteTrasanction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
