import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const context = useContext(GlobalContext);
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span> Rs.{transaction.amount}</span>
      <button
        className='delete-btn'
        onClick={() => context.deleteTrasanction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};
