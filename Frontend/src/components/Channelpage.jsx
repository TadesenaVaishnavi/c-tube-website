import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Channelpage.css";

export default function ChannelPage() {
  const navigate = useNavigate();

  return (
    <div className="channelPage">

      {/* NAVBAR */}
      <div className="channelNavbar">

        <div className="channelNavLeft">
          <img src="/icons/hamburger.png" alt="" />
          <img src="/icons/Circle.png" alt="" className="channelLogo" />
        </div>

        <div className="channelSearchWrapper">
          <input type="text" placeholder="Type something ..." />

          <div className="channelSearchIcons">
            <img src="/icons/search.png" alt="" />
            <div className="divider"></div>
            <img src="/icons/microphone-black-shape.png" alt="" />
          </div>
        </div>

        <div className="channelNavRight">
          <div className="channelIconGroup">
            <img src="/icons/group.png" alt="video" />
            {/* <div className="divider"></div> */}
            <img src="/icons/bell.png" alt="bell" />
            {/* <div className="divider"></div> */}
            
            <img 
            src="/icons/video-camera.png" alt="watch" 
            onClick={() => navigate("/watch")}
            style={{ cursor: "pointer" }}
            />
          </div>

          <Link to="/profile">
            <div className="channelprofile"></div>
          </Link>
        </div>
      </div>

      {/* MAIN */}
      <div className="channelContainer">

        {/* SIDEBAR */}
        <div className="channelSidebar">
          <div className="menuItem active">Home</div>
          <div className="menuItem">Subscriptions</div>
          <div className="menuItem">History</div>
          <div className="menuItem">Watch later</div>
          <div className="menuItem">Liked videos</div>

          {/* <div className="subsTitle">Subscriptions</div>
          {new Array(8).fill(0).map((_, i) => (
            <div key={i} className="subItem">
              <div className="subAvatar"></div>
              <span>Channel Name</span>
            </div>
          ))} */}
        </div>

        {/* CONTENT */}
        <div className="channelContent">

          {/* COVER */}
          <div className="channelBanner">
            <img src="/logo/banner.png" alt="" />
          </div>

          {/* INFO */}
          <div className="channelInfo">
            <img src="/logo/images.jpeg" className="channelAvatar" alt="channel avatar" />

            <div>
              <h1>CHANNEL NAME</h1>
              <p>1,432 Subscribers</p>
              <button>Subscribe</button>
            </div>
          </div>

          {/* VIDEOS */}
          <div className="channelVideos">
            {new Array(6).fill(0).map((_, i) => (
              <div key={i} className="videoCard">
                <div className="thumb"></div>
                <h4>Title of the video</h4>
                <p>Channel Name</p>
                <span>7,382 views • 2 years ago</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}


