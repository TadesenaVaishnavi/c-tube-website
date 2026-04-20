import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  const navigate = useNavigate();

  const videos = [
    { id: 1, url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 2, url: "https://www.youtube.com/embed/ysz5S6PUM-U" },
    { id: 3, url: "https://www.youtube.com/embed/jNQXAC9IVRw" },
    { id: 4, url: "https://www.youtube.com/embed/tgbNymZ7vqY" },
  ];

  return (
    <div className="home">
      {/* NAVBAR */}
      <div className="navbar">
        <div className="navLeft">
          <img src="/icons/hamburger.png" alt="menu" />

          <Link to="/">
            <img src="/logo/Circle.png" alt="logo" className="logo" />
          </Link>
        </div>

        <div className="searchBar">
          <input type="text" placeholder="Type something ..." />
          <div className="searchIcons">
            <img src="/icons/search.png" alt="search" />
            <img src="/icons/microphone-black-shape.png" alt="mic" />
          </div>
        </div>

        <div className="navRight">
          <div className="watchicons">
            <img src="/icons/video-camera.png" alt="video" />
            <img src="/icons/bell.png" alt="bell" />

            <img
              src="/icons/join.png"
              alt="watch"
              onClick={() => navigate("/watch")}
              style={{ cursor: "pointer" }}
            />
          </div>

          <Link to="/profile">
            <div className="profile"></div>
          </Link>
        </div>
      </div>

      <div className="main">
        {/* SIDEBAR */}
        <div className="sidebar">
          <div className="menu">

            <div className="menu-item active" onClick={() => navigate("/")}>
              <img src="/icons/home.png" alt="" />
              <span>Home</span>
            </div>

            <div className="menu-item" onClick={() => navigate("/subscriptions")}>
              <img src="/icons/subscriptions.png" alt="" />
              <span>Subscriptions</span>
            </div>

            <div className="menu-item" onClick={() => navigate("/history")}>
              <img src="/icons/history.png" alt="" />
              <span>History</span>
            </div>

            <div className="menu-item" onClick={() => navigate("/watchlater")}>
              <img src="/icons/clock.png" alt="" />
              <span>Watch later</span>
            </div>

            <div className="menu-item" onClick={() => navigate("/liked")}>
              <img src="/icons/like.png" alt="" />
              <span>Liked videos</span>
            </div>

            <div className="menu-item" onClick={() => navigate("/channelpage")}>
              <img src="/icons/user.png" alt="" />
              <span>Channel</span>
            </div>

          </div>
        </div>

        {/* VIDEOS */}
        <div className="content">
          {videos.map((video) => (
            <div
              key={video.id}
              className="card"
              onClick={() => navigate(`/video/${video.id}`)} 
            >
              <div className="thumbnail">
                <span>7:32</span>
              </div>

              <div className="videoInfo">
                <div className="avatar"></div>
                <div>
                  <h4>Video Title</h4>
                  <p>Channel Name</p>
                  <span>7k views • 2 days ago</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}