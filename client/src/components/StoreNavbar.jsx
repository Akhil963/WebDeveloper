import { LogOut, ShoppingBag, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const StoreNavbar = ({ userName = "Appu" }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent
            flex items-center justify-center text-white font-extrabold text-xl
            shadow-[0_0_25px_rgba(99,102,241,0.5)]">
            PW
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-slate-900 leading-tight">
              PW PDF Store
            </h1>
            <p className="text-xs text-slate-500">
              Premium Study Material
            </p>
          </div>
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-700">
          <button
            onClick={() => navigate("/store")}
            className="flex items-center gap-2 hover:text-primary transition"
          >
            <BookOpen size={18} />
            Store
          </button>

          <button
            onClick={() => navigate("/my-purchases")}
            className="flex items-center gap-2 hover:text-primary transition"
          >
            <ShoppingBag size={18} />
            My Purchases
          </button>
        </div>

        {/* USER + LOGOUT */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow">
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent
              text-white font-bold flex items-center justify-center">
              {userName.charAt(0)}
            </span>
            <span className="text-sm font-semibold text-slate-700">
              Hello, {userName}
            </span>
          </div>

          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 rounded-full
              border border-red-500 text-red-500 font-semibold
              hover:bg-red-500 hover:text-white
              transition-all duration-200"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default StoreNavbar;

