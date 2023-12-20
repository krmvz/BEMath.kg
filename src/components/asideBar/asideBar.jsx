// AsideBar.jsx

import React, { useState } from 'react';
import './asideBar.scss';

const AsideBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`aside-bar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul>
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default AsideBar;
