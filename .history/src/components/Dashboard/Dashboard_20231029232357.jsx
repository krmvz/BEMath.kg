import React from 'react';
import './dashboard.scss';
import Header from '../header/header';
import bg from '../../images/bgimg.jpg'

const Dashboard = () => {
  return (
    <div className='main_page'>
      <Header/>
      <div className="container dashboard">
        <h2>Welcome back 👋</h2>
        <div className="set_courses">
        <div class="card" style="width: 18rem;">
          <img src={bg} alt="" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
