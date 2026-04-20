import React from "react";

const UpNext = () => {
  return (
    <div className="upnext">
      <h4>Up Next...</h4>

      {[1,2,3,4].map((item) => (
        <div className="upnext-item" key={item}>
          <div className="thumb"></div>
          <div>
            <p>Title of the video</p>
            <span>Channel Name</span>
          </div>
        </div>
      ))}

      <button className="queue-btn">
        Click here to add video into the queue...
      </button>
    </div>
  );
};

export default UpNext;