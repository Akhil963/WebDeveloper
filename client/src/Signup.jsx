import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3001/register", {
        name,
        email,
        password,
        confirmPassword,
      });

      setSuccessMsg(res.data.message);
      setErrorMsg("");

      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Registration failed");
      setSuccessMsg("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-pink-50 px-4">

      {/* Glow blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl" />

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md bg-white/80 backdrop-blur-xl
        rounded-3xl shadow-2xl p-8"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent
          rounded-2xl flex items-center justify-center text-white
          font-extrabold text-2xl shadow-lg">
            E
          </div>
        </div>

        <h2 className="text-2xl font-extrabold text-center text-slate-900">
          Create your account
        </h2>
        <p className="text-center text-slate-500 mt-1 mb-6">
          Join EduPrime & start learning today
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200
            focus:ring-2 focus:ring-primary outline-none"
            required
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200
            focus:ring-2 focus:ring-primary outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200
            focus:ring-2 focus:ring-primary outline-none"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200
            focus:ring-2 focus:ring-primary outline-none"
            required
          />

          {errorMsg && (
            <p className="text-red-500 text-sm text-center">{errorMsg}</p>
          )}

          {successMsg && (
            <p className="text-green-600 text-sm text-center">{successMsg}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r
            from-primary to-accent text-white font-semibold
            hover:scale-105 transition shadow-lg"
          >
            Create Account
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-sm text-slate-600 mt-6">
          Already have an account?
          <Link
            to="/login"
            className="ml-1 font-semibold text-primary hover:underline"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Signup;
