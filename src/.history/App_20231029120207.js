import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';
import {BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn/>}></Route>
          <Route exact path="/d" element={<SignUp/>}></Route>
          <Route exact path="/dashboard" element={<Dashboard/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
