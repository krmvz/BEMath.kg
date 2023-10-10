import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';
import {BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Main from './components/main page/main';
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn/>}></Route>
          {/* <Route exact path="/main" element={<Main/>}></Route> */}
          <Route exact path="/" element={<SignIn/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
