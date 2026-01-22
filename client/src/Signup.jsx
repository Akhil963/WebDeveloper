import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/register", {
        name,
        email,
        password,
        confirmPassword,
      })
      .then((res) => {
        setSuccessMsg(res.data.message);
        setErrorMsg("");

        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      })
      .catch((err) => {
        setErrorMsg(err.response?.data?.message || "Registration failed");
        setSuccessMsg("");
      });
  };

  return (
    <div className="pw-bg">

      <div className="pw-card">
        <h3 className="text-center fw-bold mb-1">Create Account</h3>
        <p className="text-center text-muted mb-4">
          Join PhysicsWallah-like experience
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="pw-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="pw-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="pw-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="pw-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {successMsg && (
            <div className="alert alert-success text-center">
              {successMsg}
            </div>
          )}

          {errorMsg && (
            <div className="alert alert-danger text-center">
              {errorMsg}
            </div>
          )}

          <button type="submit" className="pw-btn">
            Register
          </button>
        </form>

        <div className="text-center mt-3">
          <span className="text-muted">Already have an account?</span>
          <Link to="/login" className="pw-link ms-1">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
