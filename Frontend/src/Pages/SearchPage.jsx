import { useLocation, useNavigate } from "react-router-dom";
import "../styles/SearchPage.css";

export default function SearchPage() {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search).get("q");

  const videos = [
    { id: 1, title: "React Tutorial" },
    { id: 2, title: "JavaScript Basics" },
    { id: 3, title: "Node.js Guide" },
    { id: 4, title: "React Hooks" },
    { id: 5, title: "Frontend Project" },
    { id: 6, title: "Backend API" },
  ];

  const filtered = videos.filter((v) =>
    v.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <div className="searchPage">
      {/* TITLE */}
      <h2 className="searchTitle">Results for "{query}"</h2>

      {/* RESULTS */}
      <div className="searchGrid">
        {filtered.length > 0 ? (
          filtered.map((video) => (
            <div
              key={video.id}
              className="searchCard"
              onClick={() =>
                navigate(`/video/${video.id}`, { state: video })
              }
            >
              <div className="searchThumbnail">
                <span>7:32</span>
              </div>

              <div className="searchInfo">
                <div className="searchAvatar"></div>
                <div>
                  <h4>{video.title}</h4>
                  <p>Channel Name</p>
                  <span>7,343 views • 2 months ago</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="noResult">No results found</p>
        )}
      </div>
    </div>
  );
}