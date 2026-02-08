import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, Search, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [showAuthMenu, setShowAuthMenu] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close auth dropdown on outside click
  useEffect(() => {
    const closeMenu = () => setShowAuthMenu(false);
    window.addEventListener("click", closeMenu);
    return () => window.removeEventListener("click", closeMenu);
  }, []);

  // NavLink helper
  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className="relative group text-slate-600 font-medium transition-colors hover:text-primary"
    >
      <span>{children}</span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-md py-3"
            : "bg-white/50 backdrop-blur-sm py-5"
        }`}
        onMouseLeave={() => setIsMegaMenuOpen(false)}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
              E
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
              EduPrime
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div
              className="relative group h-full py-2"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
            >
              <button className="flex items-center space-x-1 text-slate-600 hover:text-primary font-medium">
                <span>Courses</span>
                <ChevronDown size={16} />
              </button>
            </div>

            <Link
              to="/class-1-8"
              className="flex items-center gap-2 text-slate-600 hover:text-primary font-medium"
            >
              <span>Class 1-8</span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-full">
                NEW
              </span>
            </Link>

            <NavLink to="/store">Study Material</NavLink>
            <NavLink to="/about">About Us</NavLink>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-48"
              />
            </div>

            {/* LOGIN DROPDOWN */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowAuthMenu(!showAuthMenu);
                }}
                className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-white rounded-full font-medium hover:bg-slate-800 transition"
              >
                <User size={18} />
                Login
              </button>

              {showAuthMenu && (
                <div className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50">
                  <Link
                    to="/login"
                    onClick={() => setShowAuthMenu(false)}
                    className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                  >
                    🔐 Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={() => setShowAuthMenu(false)}
                    className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                  >
                    📝 Register
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mega Menu */}
        <MegaMenu isOpen={isMegaMenuOpen} />
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col space-y-6 text-lg font-medium text-slate-800">
            <div className="border-b pb-4">Courses</div>

            <Link
              to="/class-1-8"
              onClick={() => setIsMobileMenuOpen(false)}
              className="border-b pb-4 flex justify-between"
            >
              Class 1-8{" "}
              <span className="text-xs bg-pink-500 text-white px-2 rounded">
                NEW
              </span>
            </Link>

            <Link
              to="/store"
              onClick={() => setIsMobileMenuOpen(false)}
              className="border-b pb-4"
            >
              Study Material
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="border-b pb-4"
            >
              About Us
            </Link>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/login");
              }}
              className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold"
            >
              Login / Sign Up
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
