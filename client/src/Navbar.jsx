import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-light bg-white shadow-sm px-4">
      <Link to="/store" className="navbar-brand fw-bold">
        PW PDF Store
      </Link>

      <div className="d-flex gap-3 align-items-center">
        <Link to="/store" className="nav-link">Store</Link>
        <Link to="/purchases" className="nav-link">My Purchases</Link>

        {user && <span>Hello, {user.name}</span>}

        <button onClick={logout} className="btn btn-outline-danger btn-sm">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
