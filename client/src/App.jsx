import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import Store from "./Store";
import ProtectedRoute from "./ProtectedRoute";

import Home from "./pages/Home";
import CuriousJr from "./pages/CuriousJr";
import Profile from "./Profile";

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/class-1-8" element={<CuriousJr />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />

      {/* Protected routes */}
      <Route
        path="/store"
        element={
          <ProtectedRoute>
            <Store />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
