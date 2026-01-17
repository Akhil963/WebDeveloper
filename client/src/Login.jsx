import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((res) => {
        // save login info
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        navigate("/store");
      })
      .catch((err) => {
        setErrorMsg(err.response?.data?.message || "Login failed");
      });
  };

  return (
    <div className="pw-bg d-flex justify-content-center align-items-center vh-100">
      <div className="pw-card">
        <h3 className="text-center fw-bold mb-1">Welcome Back</h3>
        <p className="text-center text-muted mb-4">
          Login to your account
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="pw-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="pw-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          {errorMsg && (
            <div className="alert alert-danger text-center">
              {errorMsg}
            </div>
          )}

          <button type="submit" className="pw-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
