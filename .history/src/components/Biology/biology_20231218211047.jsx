import React from 'react';
import "./biology.css";
import ReactPlayer from 'react-player';

const Biology = () => {
  const biologyVideos = [
    { id: 1, url: 'https://www.youtube.com/watch?v=tZE_fQFK8EY', title: 'Introduction to Cells' },
    { id: 2, url: 'https://www.youtube.com/watch?v=tZE_fQFK8EY', title: 'Photosynthesis Explained' },
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
export default Biology;
