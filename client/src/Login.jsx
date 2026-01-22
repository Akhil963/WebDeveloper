import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 

function Login() {
  const [email, setEmail] = useState("appukoh12@gmail.com");
  const [password, setPassword] = useState("kappu12@");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        console.log(res);
        
        navigate("/store");
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg(err.response?.data?.message || "Login failed");
      });
  };

  return (
<div className="login-bg">

      <div className="login-card">
        <h3 className="text-center fw-bold mb-1">Welcome Back</h3>
        <p className="text-center mb-4">Login to your account</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"

            />
          </div>

          {errorMsg && (
            <div className="login-error mb-3">
              {errorMsg}
            </div>
          )}

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
