import React, { useState, useContext, useEffect } from 'react';

import { UserContext } from './userContext'
import { Card } from '../components/card'


import {Link} from 'react-router-dom';



const Withdraw = () => {
  const ctx = useContext(UserContext);
  const userBalance = ctx.userBalance;
  const [show, setShow] = useState(true);
  const [withdraw, setWithdraw] = useState(0);
  const [balance, setBalance] = useState(userBalance);
  const [validateForm, setValidateForm] = useState(false);
  const [error, setError] = useState('');
  

  // useEffect(() => {
  //   setBalance(userBalance);
  // }, [userBalance]);




  function handleWithdraw() {
    if(!ctx.currentEmail) {alert('Please create account first'); return setWithdraw(0)};
    // let withdrawn = userBalance;
    if (withdraw > userBalance) {
      setError('Not enogth cash!');
      setValidateForm(true);
      setWithdraw(0);
      setTimeout(() => {
        setError('');
        setValidateForm(false);
      }, 3000);
      return
    }
    if (withdraw <= 0) {
      setError('Please enter a valid amount!');
      setValidateForm(true);
      setWithdraw(0);
      setTimeout(() => {
        setError('');
        setValidateForm(false);
      }, 3000);

    }
    
    let newTotal = balance - Number(withdraw);
    setBalance(newTotal)
    ctx.setUserBalance(newTotal);
    setShow(false);
    setWithdraw(0);
    return
  }

  function handleAnotherWithdraw() {
    setShow(true);
  }

  return (
    <div className='container alert-container'>
      <Card
        bgcolor='danger'
        header='Withdraw'
        text={'Balance = ' + balance}
        body={show ? (
          <div>
            Withdraw Amount<br />
            <input type="number" className="form-control" id="withdraw" placeholder="Enter withdraw Amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}
            /><br />
            <button type="submit" className="btn btn-light" onClick={handleWithdraw} disabled={userBalance <= 0 ? true : false}
            >Withdraw</button>
          </div>
        ) : (
            !userBalance <= 0 ?
              <div>
                Withdraw Success<br />
                <button type="submit" className="btn btn-light" onClick={handleAnotherWithdraw}
                >Another Withdraw</button>
              </div>
              : <div>
                <Link className="btn btn-light" to='/deposit'>Deposit</Link>
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

export default Withdraw;