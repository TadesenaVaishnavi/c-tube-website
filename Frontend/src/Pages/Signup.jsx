import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Profile.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!username || !email || !password) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:9090/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await res.text();

      if (!res.ok || data.startsWith("ERROR")) {
        alert(data || "Signup failed");
        return;
      }

      alert("Signup successful 🚀");
      navigate("/login");

    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profilePage">
      <div className="container">
        <div className="card">

          <div className="profile-pic"></div>

          <h2>Create Account</h2>
          <p className="joined">Join us today 🚀</p>

          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

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

          <button
            onClick={handleSignup}
            disabled={loading}
            className="btn"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          <p className="joined" style={{ marginTop: "15px" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#9e024b" }}>
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Signup;