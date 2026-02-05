import React from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy, Users, BadgeCheck } from 'lucide-react';

const CuriousStats = () => {
    return (
        <section className="py-10 bg-gradient-to-r from-violet-600 to-indigo-600 relative overflow-hidden">
            {/* Background Particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white/10 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 20 + 5}px`,
                            height: `${Math.random() * 20 + 5}px`,
                        }}
                        animate={{ y: [0, -50], opacity: [0, 0.5, 0] }}
                        transition={{ repeat: Infinity, duration: Math.random() * 5 + 3, ease: "linear" }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
                    >
                        <div className="p-2 bg-yellow-400 rounded-full text-yellow-900">
                            <Star size={20} fill="currentColor" />
                        </div>
                        <div>
                            <p className="text-white font-bold text-lg">4.8/5</p>
                            <p className="text-indigo-200 text-xs uppercase font-semibold">User Rating</p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
                    >
                        <div className="p-2 bg-pink-400 rounded-full text-pink-900">
                            <Users size={20} />
                        </div>
                        <div>
                            <p className="text-white font-bold text-lg">1 Million+</p>
                            <p className="text-indigo-200 text-xs uppercase font-semibold">Happy Students</p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
                    >
                        <div className="p-2 bg-green-400 rounded-full text-green-900">
                            <BadgeCheck size={20} />
                        </div>
                        <div>
                            <p className="text-white font-bold text-lg">100%</p>
                            <p className="text-indigo-200 text-xs uppercase font-semibold">Certified Teachers</p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
                    >
                        <div className="p-2 bg-orange-400 rounded-full text-orange-900">
                            <Trophy size={20} />
                        </div>
                        <div>
                            <p className="text-white font-bold text-lg">500+</p>
                            <p className="text-indigo-200 text-xs uppercase font-semibold">Olympiad Winners</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CuriousStats;
