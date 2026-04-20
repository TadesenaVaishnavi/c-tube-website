import React from "react";

const AddToQueue = () => {
  return (
    <div className="queue">
      <input placeholder="Search or paste video link..." />

      {[1,2,3].map((item) => (
        <div className="queue-item" key={item}>
          <div className="thumb"></div>
          <div>
            <p>Title of the video</p>
            <span>Channel Name</span>
          </div>
          <button>Add</button>
        </div>
      ))}
    </div>
  );
};

export default AddToQueue;