import React from 'react';
import './dashboard.scss';
import Header from '../header/header';
import bg from '../../images/bgimg.jpg'

const Dashboard = () => {
  const navigate = useNavigate();
  const navBio = () =>{
      navigate('biology');
  }
  return (
    <div className='main_page'>
      <Header/>
      <div className="container dashboard">
        <h2>Welcome back 👋</h2>
        <div className="set_courses"onClick={navBio}>
          <div class="card" >
            <img src="https://e0.pxfuel.com/wallpapers/132/843/desktop-wallpaper-biology-background-biology-science-biology-thumbnail.jpg" alt="" />
            <div class="card-body">
              <h5 class="card-title">Biology</h5>
              <p class="card-text">Some quick example text to build on the card .</p>
            </div>
          </div>
          <div class="card" >
            <img src="https://i.pinimg.com/736x/ac/3e/d7/ac3ed75c8a9722822d39435d593285d3.jpg" alt="" />
            <div class="card-body">
              <h5 class="card-title">English</h5>
              <p class="card-text">Some quickn the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card" >
            <img src={bg} alt="" />
            <div class="card-body">
              <h5 class="card-title">Mathematics</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
