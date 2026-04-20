// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Pages
// import Home from "./pages/Home";
// import Profile from "./pages/Profile";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import ForgotPassword from "./pages/ForgotPassword.jsx";
// import VideoPage from "./pages/VideoPage";
// import WatchPage from "./pages/WatchPage";


// // Components
// import ChannelPage from "./components/ChannelPage.jsx";

// export default function App() {
//   return (
//     <div className="app">
//       <Router>
//         <Routes>

//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />

//           <Route path="/profile" element={<Profile />} />
//           <Route path="/channelpage" element={<ChannelPage />} />

//           <Route path="/video/:id" element={<VideoPage />} />
//           <Route path="/watch" element={<WatchPage />} />

//         </Routes>
//       </Router>
//     </div>
//   );
// }

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import VideoPage from "./Pages/VideoPage";
import WatchPage from "./Pages/WatchPage";

import Channelpage from "./components/Channelpage";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/channelpage" element={<Channelpage />} />

          <Route path="/video/:id" element={<VideoPage />} />
          <Route path="/watch" element={<WatchPage />} />

        </Routes>
      </Router>
    </div>
  );
}