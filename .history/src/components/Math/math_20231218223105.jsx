// Math.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './math.scss'; // Make sure to create a math.scss file for styling
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
    // Handle the submission of homework (you can send it to a server or store it locally)
    setSubmittedHomework(`Homework for "${videoTitle}": ${homework}`);
    setHomework('');
    setFile(null);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bio">Biology</Link></li>
          <li><Link to="/math">Math</Link></li>
          {/* Add links for other sections as needed */}
        </ul>
      </nav>

      <h1>Math Section</h1>
      <div>
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
 