import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const faculty = [
    {
        name: "Sarah Johnson",
        role: "English Expert, Ex-DPS",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=388&q=80",
        color: "from-pink-500 to-rose-500"
    },
    {
        name: "David Chen",
        role: "Maths Olympiad Trainer",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
        color: "from-blue-500 to-indigo-500"
    },
    {
        name: "Emily Davis",
        role: "Coding Mentor, Google",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
        color: "from-purple-500 to-violet-500"
    },
    {
        name: "Michael Wilson",
        role: "Science Expert",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
        color: "from-green-500 to-emerald-500"
    },
    {
        name: "Amanda Smith",
        role: "Art & Design",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
        color: "from-orange-500 to-yellow-500"
    }
];

const CuriousFaculty = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 350;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl font-extrabold mb-4">Meet Our Super Teachers</h2>
                        <p className="text-slate-400 text-lg">Mentors from top universities and companies.</p>
                    </div>
                    <div className="flex space-x-4">
                        <button onClick={() => scroll('left')} className="p-3 rounded-full border border-slate-700 hover:bg-slate-800 transition-colors">
                            <ArrowLeft size={24} />
                        </button>
                        <button onClick={() => scroll('right')} className="p-3 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors border border-transparent">
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex space-x-8 overflow-x-auto pb-8 scrollbar-hide snap-x"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {faculty.map((teacher, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0 w-[300px] snap-center group relative cursor-pointer"
                        >
                            <div className="relative h-[400px] rounded-3xl overflow-hidden">
                                <img
                                    src={teacher.img}
                                    alt={teacher.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>

                                <div className="absolute bottom-0 left-0 w-full p-6">
                                    <div className={`w-12 h-1 bg-gradient-to-r ${teacher.color} mb-3`}></div>
                                    <h3 className="text-2xl font-bold mb-1">{teacher.name}</h3>
                                    <p className="text-slate-300 text-sm font-medium mb-3">{teacher.role}</p>
                                    <div className="flex items-center space-x-1 text-yellow-400 text-xs font-bold">
                                        <Star size={14} fill="currentColor" />
                                        <span>5.0 Rated</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CuriousFaculty;
