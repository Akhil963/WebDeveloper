import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Video, Users, Trophy, Target, Globe } from 'lucide-react';

const categories = [
    {
        title: "Exam Preparation",
        icon: Target,
        items: ["JEE Main & Advanced", "NEET UG", "UPSC CSE", "GATE", "CAT & MBA"]
    },
    {
        title: "School Prep",
        icon: BookOpen,
        items: ["Class 12 Board", "Class 10 Board", "NCERT Solutions", "ICSE Board"]
    },
    {
        title: "Skill Development",
        icon: Trophy,
        items: ["Data Science", "Web Development", "Stock Market", "English Speaking"]
    }
];

const MegaMenu = ({ isOpen }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-xl py-8 z-40"
                >
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                        {categories.map((category, idx) => (
                            <div key={idx} className="space-y-4">
                                <div className="flex items-center space-x-2 text-primary font-semibold">
                                    <category.icon size={20} />
                                    <h3>{category.title}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {category.items.map((item, itemIdx) => (
                                        <li key={itemIdx}>
                                            <a href="#" className="block text-slate-600 hover:text-accent hover:pl-2 transition-all duration-200 text-sm">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <div className="flex items-center space-x-2 mb-4 text-secondary font-bold">
                                <Globe size={20} className="text-accent" />
                                <h3>Latest Updates</h3>
                            </div>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start space-x-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></span>
                                    <p className="text-slate-600">JEE Advanced 2026 dates announced</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></span>
                                    <p className="text-slate-600">New batch for NEET starters</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></span>
                                    <p className="text-slate-600">Scholarship test results out</p>
                                </li>
                            </ul>
                            <button className="mt-4 w-full py-2 bg-white text-primary border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                                View All News
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MegaMenu;
