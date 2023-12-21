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
        <div className="set_courses">
          <Link to={"/bio"} className="course-link">
            <div className="card">
              <img src="https://e0.pxfuel.com/wallpapers/132/843/desktop-wallpaper-biology-background-biology-science-biology-thumbnail.jpg" alt="Biology" />
              <div className="card-body">
                <h5 className="card-title">Biology</h5>
                <p className="card-text">Explore the wonders of life sciences.</p>
              </div>
            </div>
          </Link>
          <Link to={"/eng"} className="course-link">
            <div className="card">
              <img src="https://i.pinimg.com/736x/ac/3e/d7/ac3ed75c8a9722822d39435d593285d3.jpg" alt="English" />
              <div className="card-body">
                <h5 className="card-title">English</h5>
                <p className="card-text">Improve your language and literature skills.</p>
              </div>
            </div>
          </Link>
          <Link to={"/math"} className="course-link">
            <div className="card">
              <img src="https://source.unsplash.com/random" alt="Mathematics" />
              <div className="card-body">
                <h5 className="card-title">Mathematics</h5>
                <p className="card-text">Dive into the world of numbers and equations.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
