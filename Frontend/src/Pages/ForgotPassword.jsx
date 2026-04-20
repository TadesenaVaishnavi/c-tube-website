import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Profile.css"; // reuse same CSS

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    alert("Reset link sent (backend not implemented yet ⚠️)");
  };

  return (
    <div className="profilePage">
      <div className="container">
        <div className="card">

          <div className="profile-pic"></div>

          <h2>Reset Password</h2>
          <p className="joined">We’ll send you a reset link</p>

          <div className="input-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button onClick={handleReset} className="btn">
            Send Reset Link
          </button>

          <p className="joined" style={{ marginTop: "15px" }}>
            <Link to="/login" style={{ color: "#9e024b" }}>
              Back to Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;