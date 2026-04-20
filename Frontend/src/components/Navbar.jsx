import React from "react";
import { Link } from "react-router-dom";
import "../styles/watch.css";

const Navbar = () => {
  return (
    <div className="watchnavbar">

      {/* LEFT */}
      <div className="watchnavLeft">
        <img src="/icons/hamburger.png" alt="menu" />
        <Link to="/">
          <img src="/logo/Logo.png" alt="logo" className="watch-logo" />
        </Link>
      </div>

      {/* CENTER */}
      <div className="watchsearchBar">
        <input type="text" placeholder="Search..." />

        <div className="watchsearchIcons">
          <img src="/icons/search.png" alt="search" />
        </div>
      </div>

      {/* <div className="watchsearchBar">
        <input type="text" placeholder="Search..." />
        <img src="/icons/search.png" alt="search" />
      </div> */}

      {/* RIGHT */}
      <div className="watchnavRight">
        <div className="watch-icons">
          <img src="/icons/video-camera.png" alt="video" />
          <img src="/icons/bell.png" alt="bell" />
          <img src="/icons/join.png" alt="extra" />
        </div>
        <Link to="/profile">
          <div className="watchprofile"></div>
        </Link>
      </div>

    </div>
  );
};

export default Navbar;