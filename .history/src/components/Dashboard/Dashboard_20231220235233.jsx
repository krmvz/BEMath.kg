// Dashboard.jsx

import React from 'react';
import './dashboard.scss';
import Header from '../header/header';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='main_page'>
      <Header />
      <div className="container dashboard">
        <h2 className="welcome-text">Welcome back 👋</h2>
        <hr/>
        <div className="set_courses">
          <Link to={"/bio"} className="course-link">
            <div className="card">
              <img src="https://source.unsplash.com/featured/?biology" alt="Biology" />
              <div className="card-body">
                <h5 className="card-title">Biology</h5>
                <p className="card-text">Embark on a journey to explore the wonders of life sciences.</p>
              </div>
            </div>
          </Link>
          <Link to={"/eng"} className="course-link">
            <div className="card">
              <img src="https://source.unsplash.com/featured/?english" alt="English" />
              <div className="card-body">
                <h5 className="card-title">English</h5>
                <p className="card-text">Enhance your language and literature skills to communicate effectively.</p>
              </div>
            </div>
          </Link>
          <Link to={"/math"} className="course-link">
            <div className="card">
              <img src="https://source.unsplash.com/featured/?math" alt="Mathematics" />
              <div className="card-body">
                <h5 className="card-title">Mathematics</h5>
                <p className="card-text">Dive into the world of numbers and equations to unravel the beauty of mathematics.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
