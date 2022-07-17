import React, { useState, useContext, useEffect } from 'react';

import { UserContext } from './userContext'
import { Card } from '../components/card'



export const Deposit = () => {
  const ctx = useContext(UserContext);
  const userBalance = ctx.userBalance;
  const [show, setShow] = useState(true);
  const [error, setError] = useState('');
  const [deposit, setDeposit] = useState(0);
  const [balance, setBalance] = useState(userBalance);
  const [validateForm, setValidateForm] = useState(false);


  function handleDeposit() {
    if(!ctx.currentEmail) {alert('Please create account first'); return setDeposit(0)};
    if (deposit <= 0) {
      setDeposit(0);
      setValidateForm(true);
      setError('Deposit amount must be greater that 0');
      setTimeout(() => {
        setError('');
        setValidateForm(false);
      }, 3000);
      return
    }

    let newTotal = Number(deposit) + balance;
    setBalance(newTotal)
    ctx.setUserBalance(newTotal);
    setShow(false);
  
  }

  function handleAnotherDeposit() {
    setShow(true);
    setDeposit(0)
  }

  return (
    <div className='container alert-container'>
      <Card
        bgcolor='success'
        header='Deposit'
        text={'Balance = ' + balance}
        body={show ? (
          <div>
            Deposit Amount<br />
            <input type="number" className="form-control" id="deposit" placeholder="Enter Deposit Amount" value={deposit} onChange={e => setDeposit(e.target.value)}
            /><br />
            <button type="submit" className="btn btn-light" onClick={handleDeposit}
            >Deposit</button>
          </div>
        ) : (
            <div>
              Deposit Success<br />
              <button type="submit" className="btn btn-light" onClick={handleAnotherDeposit}
              >Another Deposit</button>
            </div>
          )
        }
      />
      {
        validateForm ?
          <div className="alert alert-warning" role="alert">
            {error}
          </div>
          : ''
      }

    </div>
  )
}