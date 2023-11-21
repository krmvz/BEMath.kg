import React from 'react';
import './dashboard.scss';
import Header from '../header/header';

const Dashboard = () => {
  return (
    <div className='main_page'>
      <Header/>
      <div className="container dashboard">
        <h2>Welcome back 👋</h2>
        <div className="set_courses">
          
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
