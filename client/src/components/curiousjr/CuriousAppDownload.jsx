import React from 'react';
import { motion } from 'framer-motion';
import { Download, Apple, Smartphone } from 'lucide-react';

const CuriousAppDownload = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-orange-500 to-pink-600 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    <div className="w-full lg:w-1/2 text-white space-y-8 z-10">
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                            Learning doesn't have to stop after school.
                        </h2>
                        <p className="text-lg text-orange-100 font-medium max-w-lg">
                            Download the CuriousJr app for free interactive lessons, quizzes, and games on the go.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="flex items-center space-x-3 px-6 py-3 bg-black text-white rounded-xl hover:bg-slate-900 transition-colors shadow-lg">
                                <Apple size={28} />
                                <div className="text-left">
                                    <p className="text-xs font-medium text-slate-400">Download on the</p>
                                    <p className="text-sm font-bold">App Store</p>
                                </div>
                            </button>

                            <button className="flex items-center space-x-3 px-6 py-3 bg-black text-white rounded-xl hover:bg-slate-900 transition-colors shadow-lg">
                                <Smartphone size={28} />
                                <div className="text-left">
                                    <p className="text-xs font-medium text-slate-400">Get it on</p>
                                    <p className="text-sm font-bold">Google Play</p>
                                </div>
                            </button>
                        </div>
                    </div>

                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
                    >
                        {/* Simple CSS Phone Mockup for dependency-free implementation */}
                        <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden ring-4 ring-white/20">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                            <img
                                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80"
                                alt="App Screen"
                                className="w-full h-full object-cover"
                            />

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                                className="absolute bottom-20 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg z-30"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                                    <div>
                                        <p className="font-bold text-slate-800">Lesson Complete!</p>
                                        <p className="text-xs text-slate-500">+50 XP Earned</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </section>
    );
};

export default CuriousAppDownload;
