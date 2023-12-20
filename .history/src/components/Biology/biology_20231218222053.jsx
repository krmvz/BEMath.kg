// Biology.jsx

import React, { useState } from 'react';
import './biology.scss';
import ReactPlayer from 'react-player';

const Biology = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [homework, setHomework] = useState('');
  const [submittedHomework, setSubmittedHomework] = useState(null);
  const [file, setFile] = useState(null);

  const biologyVideos = [
    { id: 1, url: 'https://www.youtube.com/watch?v=8IlzKri08kk', title: 'Introduction to Cells', description: 'A comprehensive introduction to the structure and function of cells.' },
    { id: 2, url: 'https://www.youtube.com/watch?v=sQK3Yr4Sc_k', title: 'Photosynthesis Explained', description: 'Learn how plants convert sunlight into energy through the process of photosynthesis.' },
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
    // Handle the submission of homework (you can send it to a server or store it locally)
    setSubmittedHomework(`Homework for "${videoTitle}": ${homework}`);
    setHomework('');
    setFile(null);
  };

  return (
    <div>
      <h1>Biology Section</h1>
      <div>
        {biologyVideos.map(video => (
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
            
            {/* Homework Section */}
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
    </div>
  );
};

export default Biology;
