import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/VideoPage.css";

export default function VideoPage() {
  const location = useLocation();
  const video = location.state;

  return (
    <div className="watchPage">

      {/* NAVBAR */}
      <div className="watchNavbar">

        {/* LEFT */}
        <div className="watchNavLeft">
          <img src="./icons/hamburger.png" alt="" />
          <img src="./logo/Circle.png" alt="" className="watchLogo" />
        </div>

        {/* CENTER */}
        <div className="watchSearchWrapper">
          <input type="text" placeholder="Type something ..." />

          <div className="watchSearchIcons">
            <img src="./icons/search.png" alt="" />
            <div className="divider"></div>
            <img src="./icons/microphone-black-shape.png" alt="" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="watchNavRight">
          <div className="watchIconGroup">
            <img src="./icons/group.png" alt="" />
            <div className="divider"></div>
            <img src="./icons/video-camera.png" alt="" />
            <div className="divider"></div>
            <img src="./icons/bell.png" alt="" />
          </div>

          <Link to="/profile">
            <div className="watchProfile"></div>
          </Link>
        </div>

      </div>

      {/* MAIN */}
      <div className="watchContainer">

        {/* LEFT */}
        <div className="watchLeft">

          <div className="watchVideoBox">
            <iframe
              src={video?.url}
              title="video"
              allowFullScreen
            ></iframe>
          </div>

          <h2 className="watchTitle">
            Title of the video uploaded by the channel on the platform known as "C Tube"
          </h2>

          <div className="watchChannelRow">
            <div className="watchChannelInfo">
              <div className="watchAvatar"></div>
              <div>
                <h4>Channel Name</h4>
                <span>1.3 Million Subscribers</span>
              </div>
            </div>

            <button className="watchSubscribe">Subscribe</button>
            <button className="watchLike">Like</button>
          </div>

          <div className="watchDescription"></div>

          <div className="watchComments">
            <h3>Comments</h3>

            <div className="watchCommentInput">
              <div className="watchAvatar"></div>
              <input type="text" placeholder="Type a comment" />
            </div>

            <div className="watchComment">
              <div className="watchAvatar"></div>
              <div>
                <h5>Channel Name • 2 years ago</h5>
                <p>This is a comment that was posted in this video</p>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="watchRight">
          {new Array(10).fill(0).map((_, i) => (
            <div key={i} className="watchSuggestion">
              <div className="watchThumb"></div>
              <div className="watchInfo">
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