import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, PlayCircle, Star, Shield, Zap } from 'lucide-react';

const slides = [
    {
        id: 1,
        title: "Master Your Future",
        subtitle: "With India's Best Educators",
        description: "Access premium content for JEE, NEET, and UPSC from the comfort of your home. Live classes, personalized mentorship, and more.",
        cta: "Start Learning",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80", // Female student studying
        color: "from-blue-600 to-indigo-700"
    },
    {
        id: 2,
        title: "Crack Competitive Exams",
        subtitle: "Structured Learning Paths",
        description: "Get comprehensive study material, mock tests, and performance analytics designed to help you succeed.",
        cta: "Explore Courses",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80", // Group study
        color: "from-emerald-600 to-teal-700"
    },
    {
        id: 3,
        title: "Learn New Skills",
        subtitle: "Industry Ready Courses",
        description: "From coding to finance, master the skills that top employers are looking for today.",
        cta: "Get Started",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80", // Coding/work
        color: "from-purple-600 to-pink-700"
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
            {/* Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute top-40 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="relative z-10 space-y-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/50 backdrop-blur-sm border border-slate-200 rounded-full text-sm font-semibold text-primary shadow-sm">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                    </span>
                                    <span>#1 Trusted Learning Platform</span>
                                </div>

                                <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900 tracking-tight">
                                    <span className="block">{slides[currentSlide].title}</span>
                                    <span className={`bg-clip-text text-transparent bg-gradient-to-r ${slides[currentSlide].color}`}>
                                        {slides[currentSlide].subtitle}
                                    </span>
                                </h1>

                                <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                                    {slides[currentSlide].description}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <button className="px-8 py-4 bg-secondary text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg shadow-secondary/25 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center space-x-2 group">
                                        <span>{slides[currentSlide].cta}</span>
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center space-x-2 group">
                                        <PlayCircle className="text-primary group-hover:scale-110 transition-transform" />
                                        <span>Watch Demo</span>
                                    </button>
                                </div>

                                {/* Micro Stats */}
                                <div className="flex items-center space-x-8 pt-8 border-t border-slate-100">
                                    <div className="flex items-center space-x-2">
                                        <div className="p-2 bg-yellow-50 rounded-lg text-yellow-600">
                                            <Star size={20} fill="currentColor" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">4.9/5</p>
                                            <p className="text-xs text-slate-500">Student Rating</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="p-2 bg-green-50 rounded-lg text-green-600">
                                            <Shield size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">100%</p>
                                            <p className="text-xs text-slate-500">Secure Platform</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                            <Zap size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">24/7</p>
                                            <p className="text-xs text-slate-500">Support Access</p>
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Image/Illustration */}
                    <div className="relative z-10 hidden lg:block h-[600px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                transition={{ duration: 0.7 }}
                                className="relative w-full h-full"
                            >
                                <div className="absolute inset-4 bg-slate-900 rounded-[2.5rem] transform rotate-3 opacity-10"></div>
                                <img
                                    src={slides[currentSlide].image}
                                    alt="Student Learning"
                                    className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-700 ease-in-out border-8 border-white"
                                />

                                {/* Floating Elements */}
                                <motion.div
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="absolute top-20 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]"
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">A+</div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-800">Exam Passed</p>
                                            <p className="text-xs text-slate-500">Outstanding results</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 20, 0] }}
                                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-20 -right-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100"
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="flex -space-x-3">
                                            <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
                                            <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
                                            <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/86.jpg" alt="User" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-800">10k+ Students</p>
                                            <p className="text-xs text-slate-500">Joined this week</p>
                                        </div>
                                    </div>
                                </motion.div>

                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-primary w-8' : 'bg-slate-300 hover:bg-primary/50'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
