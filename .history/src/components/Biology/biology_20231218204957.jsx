import React from 'react';
import "./biology.scss";

// Install react-player using: npm install react-player
// import React from 'react';
import ReactPlayer from 'react-player';

const BiologyStudyPage = () => {
  const biologyVideos = [
    { id: 1, url: 'https://www.youtube.com/watch?v=example1', title: 'Introduction to Cells' },
    { id: 2, url: 'https://www.youtube.com/watch?v=example2', title: 'Photosynthesis Explained' },
    // Add more videos as needed
  ];

  return (
    <div>
      <h1>Biology Study Page</h1>
      <div>
        {biologyVideos.map(video => (
          <div key={video.id} className="video-container">
            <h2>{video.title}</h2>
            <ReactPlayer
              url={video.url}
              controls
              width="100%"
              height="300px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Biology
