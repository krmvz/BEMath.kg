import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './math.scss';
import ReactPlayer from 'react-player';
import Footer from '../footer/footer';
import Header from '../header/header';
import AsideBar from '../asideBar/asideBar';

const Math = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [homework, setHomework] = useState('');
  const [file, setFile] = useState(null);
  const [uploadTime, setUploadTime] = useState(null);
  const [videoHomework, setVideoHomework] = useState({});
  const [videoSubmittedHomework, setVideoSubmittedHomework] = useState({});

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

  const handleSubmitHomework = (videoId) => {
    // Handle the submission of homework
    const currentTime = new Date().toLocaleTimeString();
    setUploadTime(currentTime);

    const newHomework = { ...videoHomework };
    const newSubmittedHomework = { ...videoSubmittedHomework };

    if (!newHomework[videoId]) {
      newHomework[videoId] = [];
    }

    newHomework[videoId].push(homework);
    newSubmittedHomework[videoId] = `Homework for "${mathVideos.find(video => video.id === videoId).title}" (Submitted at ${currentTime}): ${homework}`;

    setVideoHomework(newHomework);
    setVideoSubmittedHomework(newSubmittedHomework);
    setHomework('');
    setFile(null);
  };

  return (
    <div>
      
     <Header/>
     

      <h1>Math Section</h1>
      <div>
        {mathVideos.map(video => (
          <div key={video.id} className="video-container container">
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
              <button onClick={() => handleSubmitHomework(video.id)}>Submit Homework</button>
              {videoSubmittedHomework[video.id] && <p className="submitted-homework">{videoSubmittedHomework[video.id]}</p>}
              {uploadTime && <p className="upload-time">File uploaded at: {uploadTime}</p>}
            </div>
          </div>
        ))}
      </div>
      {/* <AsideBar/> */}
      <Footer />
    </div>
  );
};

export default Math;
