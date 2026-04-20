import React from "react";
import Navbar from "../components/Navbar";
import VideoPlayer from "../components/VideoPly";
import Comments from "../components/Comments";
import VideoCard from "../components/VideoCard";
import WatchParty from "../components/WatchParty";
// import UpNext from "../components/UpNext";
// import AddToQueue from "../components/AddToQueue";
import "../styles/watch.css";

const WatchPage = () => {
  return (
    <>
      <Navbar />

      <div className="watch-container">
        
        {/* LEFT SIDE */}
        <div className="left">
          <VideoPlayer />
          <Comments />
        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          <WatchParty />
          {/* <UpNext /> */}
          {/* <AddToQueue /> */}

          <div className="suggestions">
            {[...Array(8)].map((_, i) => (
              <VideoCard key={i} />
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default WatchPage;