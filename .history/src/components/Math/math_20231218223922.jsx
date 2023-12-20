// Math.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './math.scss';
import ReactPlayer from 'react-player';

const Math = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [homework, setHomework] = useState('');
  const [submittedHomework, setSubmittedHomework] = useState(null);
  const [file, setFile] = useState(null);

  const mathVideos = [
    { id: 1, url: 'https://www.youtube.com/watch?v=NybHckSEQBI', title: 'Algebra Basics', description: 'An introduction to fundamental algebra concepts.' },
    { id: 2, url: 'https://www.youtube.com/watch?v=example2', title: 'Geometry Explained', description: 'Exploring key principles in geometry.' },
    // Add more videos as needed
  ];

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleHomeworkChange = (event) => {
    setHomework(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmitHomework = (videoTitle) => {
    setSubmittedHomework(`Homework for "${videoTitle}": ${homework}`);
    setHomework('');
    setFile(null);
  };

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bio">Biology</Link></li>
          <li><Link to="/math">Math</Link></li>
        </ul>
      </nav>

      <h1>Math Section</h1>
      <div className="content-wrapper">
        <div className="main-content">
          {mathVideos.map(video => (
            <div key={video.id} className="video-container">
              <h2>{video.title}</h2>
              <div className="player-wrapper">
                <ReactPlayer
                  url={video.url}
                  controls
                  width="100%"
                  height="300px"
                />
              </div>
              <p className={`description ${showDescription ? 'visible' : ''}`}>{video.description}</p>
              <div className="description-toggle" onClick={toggleDescription}>
                {showDescription ? 'Hide Description' : 'Show Description'}
              </div>
              
              <div className="homework-section">
                <textarea
                  placeholder="Type your homework here..."
                  value={homework}
                  onChange={handleHomeworkChange}
                />
                <input
                  type="file"
                  onChange={handleFileChange}
                />
                <button onClick={() => handleSubmitHomework(video.title)}>Submit Homework</button>
                {submittedHomework && <p className="submitted-homework">{submittedHomework}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Aside Section */}
        <aside>
          <h2>Related Links</h2>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            {/* Add more related links as needed */}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Math;
