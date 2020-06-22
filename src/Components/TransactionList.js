import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
  const context = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      {context.transactions != '' ? (
        <ul id='list' className='list'>
          {context.transactions.map((trans) => (
            <Transaction key={trans.id} transaction={trans} />
          ))}
        </ul>
      ) : (
        <h4 className='transaction-style'>No Transactions Available</h4>
      )}
    </>
  );
};
