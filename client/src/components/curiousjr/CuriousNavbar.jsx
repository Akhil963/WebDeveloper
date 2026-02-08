import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Rocket, BookOpen, Calculator, PenTool } from 'lucide-react';

const CuriousNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "After-School", icon: Rocket, color: "text-purple-500" },
        { name: "Learn English", icon: PenTool, color: "text-blue-500" },
        { name: "Learn Maths", icon: Calculator, color: "text-yellow-500" },
        { name: "Activity Kits", icon: BookOpen, color: "text-green-500" }
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-orange-100 shadow-sm">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link to="/class-1-8" className="flex items-center space-x-2 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        C
                    </div>
                    <span className="text-2xl font-bold text-slate-800 tracking-tight group-hover:text-orange-500 transition-colors">
                        Curious<span className="text-orange-500">Jr</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {links.map((link, idx) => (
                        <a key={idx} href="#" className="flex items-center space-x-2 text-slate-600 font-bold hover:text-orange-500 transition-colors group">
                            <link.icon size={18} className={`${link.color} group-hover:scale-110 transition-transform`} />
                            <span>{link.name}</span>
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link to="/" className="text-slate-500 font-semibold hover:text-orange-500 text-sm">
                        Back to Main Site
                    </Link>
                    <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-bold shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-0.5 transition-all">
                        Login / Register
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-700">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-white border-b border-orange-100 px-6 py-4"
                >
                    <div className="flex flex-col space-y-4">
                        {links.map((link, idx) => (
                            <a key={idx} href="#" className="flex items-center space-x-3 text-slate-700 font-bold py-2 border-b border-slate-50">
                                <link.icon size={20} className={link.color} />
                                <span>{link.name}</span>
                            </a>
                        ))}
                        <button className="w-full py-3 mt-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-bold shadow-md">
                            Login / Register
                        </button>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default CuriousNavbar;
