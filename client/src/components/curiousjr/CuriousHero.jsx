import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, PlayCircle } from 'lucide-react';

const CuriousHero = () => {
    return (
        <section className="relative min-h-[90vh] bg-[#FFF9E6] overflow-hidden flex items-center pt-10">

            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-200/40 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000 translate-y-1/2 -translate-x-1/2"></div>

            {/* Floating Shapes */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-20 left-10 text-4xl"
            >
                🚀
            </motion.div>
            <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-40 right-20 text-4xl"
            >
                🎨
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 text-center lg:text-left"
                    >
                        <div className="inline-block px-4 py-1.5 bg-white border border-orange-200 rounded-full text-sm font-bold text-orange-600 shadow-sm mb-2">
                            <span className="mr-2">✨</span>
                            Start Learning Early
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                            Learning made fun for <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600">
                                Curious Minds!
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Unlock your child's potential with interactive lessons in Coding, Maths, and English. Join 1 Million+ happy learners today!
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                            <button className="px-8 py-4 bg-orange-500 text-white rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-200 hover:-translate-y-1 hover:shadow-2xl w-full sm:w-auto">
                                Book a Free Class
                            </button>
                            <button className="px-8 py-4 bg-white text-slate-700 border-2 border-orange-100 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-all w-full sm:w-auto flex items-center justify-center space-x-2">
                                <PlayCircle className="text-orange-500" />
                                <span>Watch Video</span>
                            </button>
                        </div>

                        <div className="pt-8 flex items-center justify-center lg:justify-start space-x-4 text-sm font-semibold text-slate-500">
                            <div className="flex -space-x-3">
                                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/10.jpg" alt="User" />
                                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/12.jpg" alt="User" />
                                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/32.jpg" alt="User" />
                            </div>
                            <p>Trusted by 10k+ Parents</p>
                        </div>

                    </motion.div>

                    {/* Hero Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 bg-white p-4 rounded-[3rem] shadow-2xl rotate-3 border-4 border-white/50">
                            <img
                                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1722&q=80"
                                alt="Kid Learning"
                                className="rounded-[2.5rem] w-full object-cover h-[500px]"
                            />

                            {/* Floating Cards */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl border-l-4 border-yellow-400 max-w-[180px]"
                            >
                                <div className="flex items-center space-x-2 mb-1">
                                    <span className="text-2xl">🏆</span>
                                    <p className="font-bold text-slate-800">1st Prize</p>
                                </div>
                                <p className="text-xs text-slate-500">National Coding Olympiad</p>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 -right-5 bg-white p-4 rounded-2xl shadow-xl border-l-4 border-purple-500 flex items-center space-x-3"
                            >
                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                                    Ai
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800">New Skill Unlocked!</p>
                                    <p className="text-xs text-slate-500">Artificial Intelligence</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Elements behind image */}
                        <div className="absolute inset-0 bg-yellow-400 rounded-[3rem] -rotate-3 translate-x-4 translate-y-4 -z-10 opacity-30"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CuriousHero;
