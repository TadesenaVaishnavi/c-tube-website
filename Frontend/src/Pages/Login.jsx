import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Profile.css"; // reuse same CSS

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("All fields are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:9090/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.text();

      if (data.startsWith("ERROR")) {
        alert(data);
        return;
      }

      // ✅ store token (replace later with real token)
      localStorage.setItem("token", "user-token");

      alert("Login successful 🚀");
      navigate("/"); // better if your home route is "/"

    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="profilePage">
      <div className="container">
        <div className="card">

          <div className="profile-pic"></div>

          <h2>Welcome Back</h2>
          <p className="joined">Login to continue</p>

          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button onClick={handleLogin} className="btn">
            Login
          </button>

          <p className="joined" style={{ marginTop: "15px" }}>
            Don’t have an account?{" "}
            <Link to="/signup" style={{ color: "#9e024b" }}>
              Sign Up
            </Link>
          </p>

          <p className="joined">
            <Link to="/forgot-password" style={{ color: "#9e024b" }}>
              Forgot Password?
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;