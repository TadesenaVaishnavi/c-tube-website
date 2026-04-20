import React from "react";

const VideoPly = () => {
  return (
    <div className="video-section">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="video"
        allowFullScreen
      ></iframe>

      <h3>Title of the video uploaded by the channel on the platform</h3>

      <div className="channel-row">
        <div className="channel-info">
          <div className="avatar2"></div>
          <div>
            <p>Channel Name</p>
            <span>1.3M subscribers</span>
          </div>
        </div>

        <div className="actions">
          <button>Subscribe</button>
          <button>Like</button>
        </div>
      </div>

      <div className="description"></div>
    </div>
  );
};

export default VideoPly;