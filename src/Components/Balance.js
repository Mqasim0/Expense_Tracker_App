import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const context = useContext(GlobalContext);
  const amounts = context.transactions.map((t) => t.amount);
  const totalBalance = amounts.reduce((prev, next) => (prev += next), 0);
  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Your Balance</h4>
        <h1 className='balance'>Rs.{totalBalance}</h1>
      </div>
    </div>
  );
};
