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
        <h2>Welcome back 👋</h2>
        <div className="set_courses">
          <Link to="/bio">
            <div className="card">
              <img src="https://e0.pxfuel.com/wallpapers/132/843/desktop-wallpaper-biology-background-biology-science-biology-thumbnail.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Biology</h5>
                <p className="card-text">Some quick example text to build on the card.</p>
              </div>
            </div>
          </Link>
          <Link to="/eng">
            <div className="card">
              <img src="https://i.pinimg.com/736x/ac/3e/d7/ac3ed75c8a9722822d39435d593285d3.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">English</h5>
                <p className="card-text">Some quickn the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </Link>
          <Link to="/math">
            <div className="card">
              <img src={require('../../images/bgimg.jpg').default} alt="" />
              <div className="card-body">
                <h5 className="card-title">Mathematics</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
