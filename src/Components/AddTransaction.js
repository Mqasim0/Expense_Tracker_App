import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const context = useContext(GlobalContext);

  const [text, setText] = useState('');
  const [amount, setAmount] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    context.addTrasanction({
      id: Math.random() * 1000,
      text: text,
      amount: Number(amount),
    });
    setText('');
    setAmount('');
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmitHandler}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text...'
            required
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount...'
            required
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};
