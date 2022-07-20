import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import AllData from './components/AllData';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';

import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useContext } from "react";
import {UserContext} from './index';

function App() {
  const [ isLogged, setIsLogged ] = React.useState(false);
  const ctx = useContext(UserContext); 
  return (

    <HashRouter>
      <div>
         <NavBar isLogged={isLogged} setIsLogged={setIsLogged}/>
          <Routes>
            <Route path="/deposit" exact element={<Deposit isLogged={isLogged}/>} />
            <Route path="/withdraw" exact element={<Withdraw isLogged={isLogged}/>}/>
            <Route path="/alldata" exact element={<AllData isLogged={isLogged}/>}/>
            <Route path="/createaccount" exact element={<CreateAccount setIsLogged={setIsLogged}/>}/>
            <Route path="/login" exact element={<Login setIsLogged={setIsLogged}/>}/>
            <Route path="/" exact element={<Home/>} />
          </Routes>
      </div>
    </HashRouter>

  );
}

export default App;
