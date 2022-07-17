import React from 'react';

import { UserContextProvider } from './pages/userContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home  from "./pages/home";
import AllData from "./pages/alldata";
import { CreateAccount } from "./pages/createaccount";
import {Deposit} from "./pages/deposit";
import Withdraw from "./pages/withdraw";
import NavBar from "./components/navbar"





export default function App() {
  return (
    <UserContextProvider>    
    <BrowserRouter>
      <NavBar/>
        <Routes>

            <Route path="/" index element={<Home />} />
            <Route path="/CreateAccount/" element={<CreateAccount />} />
         
            <Route path="/deposit/" element={<Deposit />} />
            <Route path="/withdraw/" element={<Withdraw />} />
            <Route path="/alldata/" element={<AllData />} />
     
        </Routes>
    </BrowserRouter>
    </UserContextProvider>
  );
}
