// AsideBar.jsx

import React from 'react';
import './asideBar.scss';  // Make sure to create an asideBar.scss file for styling

const AsideBar = () => {
  return (
    <aside className="aside-bar">
      <h3>Related Topics</h3>
      <ul>
        <li><a href="#">Trigonometry</a></li>
        <li><a href="#">Calculus</a></li>
        <li><a href="#">Statistics</a></li>
        {/* Add more related topics as needed */}
      </ul>
    </aside>
  );
};

export default AsideBar;
