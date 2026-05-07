
import React, { useRef } from "react";
// import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const fileInputRef = useRef();

  // ✅ CONNECTED TO BACKEND
  // const handleVideoUpload = async (e) => {
  //   const file = e.target.files[0];

  //   if (!file) return;

  //   const formData = new FormData();

  //   // ⚠️ must match Spring Boot params
  //   formData.append("file", file);
  //   formData.append("thumbnail", file); // temporary (same file)
  //   formData.append("title", file.name);

  //   try {
  //     const res = await axios.post(
  //       "http://localhost:8080/api/ctube/upload",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     console.log("Upload success:", res.data);
  //     alert("Video uploaded successfully!");
  //   } catch (error) {
  //     console.log("Upload failed:", error);
  //     alert("Upload failed");
  //   }
  // };

  // ✅ Static video data (for now)
  const videos = [
    {
      id: 1,
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      title: "Never Gonna Give You Up",
      channel: "Rick Astley",
    },
    {
      id: 2,
      thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
      title: "Big Buck Bunny",
      channel: "Blender",
    },
    {
      id: 3,
      thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg",
      title: "Me at the zoo",
      channel: "Jawed",
    },
    {
      id: 4,
      thumbnail: "https://picsum.photos/300/180?random=1",
      title: "Sample Video 1",
      channel: "My Channel",
    },
    {
      id: 5,
      thumbnail: "https://picsum.photos/300/180?random=2",
      title: "Sample Video 2",
      channel: "My Channel",
    },
    {
      id: 6,
      thumbnail: "https://picsum.photos/300/180?random=3",
      title: "Sample Video 3",
      channel: "My Channel",
    },
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

            {/* HIDDEN FILE INPUT */}
            <input
              type="file"
              accept="video/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleVideoUpload}
            />

            {/* UPLOAD ICON */}
            <img
              src="/icons/video-camera.png"
              alt="upload"
              onClick={() => fileInputRef.current.click()}
              style={{ cursor: "pointer" }}
            />

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
            <div
              className={`menu-item ${location.pathname === "/" ? "active" : ""}`}
              onClick={() => navigate("/")}>
              <img src="/icons/home.png" alt="" />
              <span>Home</span>
            </div>

            <div
              className={`menu-item ${
                location.pathname === "/subscriptions" ? "active" : ""
              }`}
              onClick={() => navigate("/subscriptions")}>
              <img src="/icons/subscriptions.png" alt="" />
              <span>Subscriptions</span>
            </div>

            <div
              className={`menu-item ${
                location.pathname === "/history" ? "active" : ""
              }`}
              onClick={() => navigate("/history")}>
              <img src="/icons/history.png" alt="" />
              <span>History</span>
            </div>

            <div
              className={`menu-item ${
                location.pathname === "/watchlater" ? "active" : ""
              }`}
              onClick={() => navigate("/watchlater")}>
              <img src="/icons/clock.png" alt="" />
              <span>Watch later</span>
            </div>

            <div
              className={`menu-item ${
                location.pathname === "/liked" ? "active" : ""
              }`}
              onClick={() => navigate("/liked")}>
              <img src="/icons/like.png" alt="" />
              <span>Liked videos</span>
            </div>

            <div
              className={`menu-item ${
                location.pathname === "/channelpage" ? "active" : ""
              }`}
              onClick={() => navigate("/channelpage")}>
              <img src="/icons/user.png" alt="" />
              <span>Channel</span>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="content">
          {videos.map((video) => (
            <div
              key={video.id}
              className="card"
              onClick={() => navigate(`/video/${video.id}`)}>
              
              <div className="thumbnail">
                <img src={video.thumbnail} alt="thumbnail" />
                <span>7:32</span>
              </div>

              <div className="videoInfo">
                <div className="avatar"></div>

                <div>
                  <h4>{video.title}</h4>
                  <p>{video.channel}</p>
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


// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../styles/Home.css";

// export default function Home() {
//   const navigate = useNavigate();

//   const videos = [
//     { id: 1, url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
//     { id: 2, url: "https://www.youtube.com/embed/ysz5S6PUM-U" },
//     { id: 3, url: "https://www.youtube.com/embed/jNQXAC9IVRw" },
//     { id: 4, url: "https://www.youtube.com/embed/tgbNymZ7vqY" },
//   ];

//   return (
//     <div className="home">
//       {/* NAVBAR */}
//       <div className="navbar">
//         <div className="navLeft">
//           <img src="/icons/hamburger.png" alt="menu" />

//           <Link to="/">
//             <img src="/logo/Circle.png" alt="logo" className="logo" />
//           </Link>
//         </div>

//         <div className="searchBar">
//           <input type="text" placeholder="Type something ..." />
//           <div className="searchIcons">
//             <img src="/icons/search.png" alt="search" />
//             <img src="/icons/microphone-black-shape.png" alt="mic" />
//           </div>
//         </div>

//         <div className="navRight">
//           <div className="watchicons">
//             <img src="/icons/video-camera.png" alt="video" />
//             <img src="/icons/bell.png" alt="bell" />

//             <img
//               src="/icons/join.png"
//               alt="watch"
//               onClick={() => navigate("/watch")}
//               style={{ cursor: "pointer" }}
//             />
//           </div>

//           <Link to="/profile">
//             <div className="profile"></div>
//           </Link>
//         </div>
//       </div>

//       <div className="main">
//         {/* SIDEBAR */}
//         <div className="sidebar">
//           <div className="menu">

//             <div className="menu-item active" onClick={() => navigate("/")}>
//               <img src="/icons/home.png" alt="" />
//               <span>Home</span>
//             </div>

//             <div className="menu-item" onClick={() => navigate("/subscriptions")}>
//               <img src="/icons/subscriptions.png" alt="" />
//               <span>Subscriptions</span>
//             </div>

//             <div className="menu-item" onClick={() => navigate("/history")}>
//               <img src="/icons/history.png" alt="" />
//               <span>History</span>
//             </div>

//             <div className="menu-item" onClick={() => navigate("/watchlater")}>
//               <img src="/icons/clock.png" alt="" />
//               <span>Watch later</span>
//             </div>

//             <div className="menu-item" onClick={() => navigate("/liked")}>
//               <img src="/icons/like.png" alt="" />
//               <span>Liked videos</span>
//             </div>

//             <div className="menu-item" onClick={() => navigate("/channelpage")}>
//               <img src="/icons/user.png" alt="" />
//               <span>Channel</span>
//             </div>

//           </div>
//         </div>

//         {/* VIDEOS */}
//         <div className="content">
//           {videos.map((video) => (
//             <div
//               key={video.id}
//               className="card"
//               onClick={() => navigate(`/video/${video.id}`)} 
//             >
//               <div className="thumbnail">
//                 <span>7:32</span>
//               </div>

//               <div className="videoInfo">
//                 <div className="avatar"></div>
//                 <div>
//                   <h4>Video Title</h4>
//                   <p>Channel Name</p>
//                   <span>7k views • 2 days ago</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
