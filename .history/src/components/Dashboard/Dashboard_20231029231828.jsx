import React from 'react';
import './dashboard.scss';
import Header from '../header/header';

const Dashboard = () => {
  return (
    <div className='main_page'>
      <Header/>
      <div className="dashboard">
        <h2>Welcome back 👋</h2>
      </div>
    </div>
  )
}

export default Dashboard;
