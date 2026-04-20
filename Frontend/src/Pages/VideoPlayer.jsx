import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/VideoPage.css";

export default function VideoPage() {
  const location = useLocation();
  const video = location.state;

  return (
    <div className="videoPage">

      {/* NAVBAR */}
      <div className="navbar">
        <div className="navLeft">
          <img src="/icons/hamburger.png" alt="" />
          <img src="/icons/Circle.png" alt="" className="logo" />
        </div>

        <div className="searchBar">
          <input type="text" placeholder="Type something ..." />
        </div>

        <div className="navRight">
          <div className="profile">User</div>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="watchContainer">

        {/* LEFT SIDE */}
        <div className="left">

          {/* VIDEO */}
          <div className="videoBox">
            {video?.url ? (
              <iframe
                src={video.url}
                title="video"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="placeholder"></div>
            )}
          </div>

          {/* TITLE */}
          <h2 className="title">
            Title of the video uploaded by the channel on the platform known as "C Tube"
          </h2>

          {/* CHANNEL */}
          <div className="channelRow">
            <div className="channelInfo">
              <div className="avatar"></div>
              <div>
                <h4>Channel Name</h4>
                <span>1.3 Million Subscribers</span>
              </div>
            </div>

            <button className="subscribe">Subscribe</button>
            <button className="like">Like</button>
          </div>

          {/* DESCRIPTION */}
          <div className="description"></div>

          {/* COMMENTS */}
          <div className="comments">
            <h3>Comments</h3>

            <div className="commentInput">
              <div className="avatar"></div>
              <input type="text" placeholder="Type a comment" />
            </div>

            <div className="comment">
              <div className="avatar"></div>
              <div>
                <h5>Channel Name • 2 years ago</h5>
                <p>This is a comment that was posted in this video</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE (RECOMMENDED) */}
        <div className="right">
          {new Array(10).fill(0).map((_, i) => (
            <div key={i} className="suggestion">
              <div className="thumb"></div>
              <div className="info">
                <h4>Title of the video</h4>
                <p>Channel Name</p>
                <span>7,382 views • 2 years ago</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

// export default function VideoPlayer() {
//     return (
//       <div className="videoSection">
//         <iframe
//           className="videoFrame"
//           src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//           title="YouTube video"
//           allowFullScreen
//         ></iframe>
  
//         <h2 className="videoTitle">
//           Sample YouTube Video Title
//         </h2>
//       </div>
//     );
//   }