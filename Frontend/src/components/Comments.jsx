import React from "react";

const Comments = () => {
  return (
    <div className="comments">
      <h4>Comments</h4>

      <div className="comment-box">
        <div className="avatar2"></div>
        <input placeholder="Type a comment" />
      </div>

      <div className="comment">
        <div className="avatar2"></div>
        <div>
          <p>Channel Name</p>
          <span>This is a comment that was posted</span>
        </div>
      </div>
    </div>
  );
};

export default Comments;