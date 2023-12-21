import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
// import AuthDetails from './components/AuthDetails';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import "bootstrap/dist/css/bootstrap.min.css";
import Biology from './components/Biology/biology';
import Math from './components/Math/math';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn/>}></Route>
          <Route exact path="/d" element={<SignUp/>}></Route>
          <Route exact path="/dashboard" element={<Dashboard/>}></Route>
          <Route exact path="/bio" element={<Biology/>}></Route>
          <Route exact path="/eng" element={<English/>}></Route>
          <Route exact path="/math" element={<Math/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
