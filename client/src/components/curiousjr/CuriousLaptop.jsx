import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, BookOpen, Layers } from 'lucide-react';

const features = [
    {
        id: 1,
        title: "Block Coding",
        icon: null, // Removed Code
        desc: "Drag & drop coding interface for kids.",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&loop=1",
        color: "bg-blue-500"
    },
    {
        id: 2,
        title: "Maths Games",
        icon: null, // Removed Layers
        desc: "Learn geometry through interactive games.",
        video: "https://www.youtube.com/embed/3CC_jL-Gq24?autoplay=1&mute=1&controls=0&loop=1",
        color: "bg-orange-500"
    },
    {
        id: 3,
        title: "Reading Club",
        icon: null, // Removed BookOpen
        desc: "Improve vocabulary with visual stories.",
        video: "https://www.youtube.com/embed/L_jWHffIx5E?autoplay=1&mute=1&controls=0&loop=1",
        color: "bg-pink-500"
    }
];

const CuriousLaptop = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Feature List */}
                    <div className="w-full lg:w-1/3 space-y-6">
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-8">
                            Why Kids Love <br />
                            <span className="text-orange-500">Learning Here?</span>
                        </h2>

                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${activeTab === idx
                                    ? 'bg-white border-orange-500 shadow-xl scale-105'
                                    : 'bg-slate-50 border-transparent hover:bg-white hover:shadow-md'
                                    }`}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className={`p-3 rounded-xl text-white ${feature.color} ${activeTab === idx ? 'shadow-lg' : ''}`}>
                                        {/* <feature.icon size={24} /> */}
                                        <span>Icon</span>
                                    </div>
                                    <div>
                                        <h3 className={`text-lg font-bold ${activeTab === idx ? 'text-slate-900' : 'text-slate-600'}`}>
                                            {feature.title}
                                        </h3>
                                        {activeTab === idx && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="text-slate-500 text-sm mt-1"
                                            >
                                                {feature.desc}
                                            </motion.p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Laptop Mockup */}
                    <div className="w-full lg:w-2/3">
                        <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[300px] md:h-[450px] max-w-[800px] md:max-w-[800px] shadow-2xl">
                            <div className="rounded-lg overflow-hidden h-full bg-slate-900 relative">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full h-full flex items-center justify-center bg-slate-800"
                                    >
                                        {/* Simulating Video/Screen Content */}
                                        <div className={`w-full h-full flex items-center justify-center text-white text-2xl font-bold ${features[activeTab].color}/20`}>
                                            {/* In a real app, embed actual video/gif here */}
                                            <div className="text-center">
                                                {/* <features.icon size={64} className="mx-auto mb-4 opacity-50" /> */}
                                                <p>Interactive Demo: {features[activeTab].title}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[24px] max-w-[900px] md:max-w-[950px]"></div>
                        <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[10px] max-w-[100px] md:max-w-[150px]"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CuriousLaptop;
