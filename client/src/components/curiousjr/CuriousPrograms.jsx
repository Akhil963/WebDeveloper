import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const programs = [
    {
        title: "After-School Logic",
        age: "Grades 1-3",
        desc: "Develop critical thinking and logical reasoning skills.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1832&q=80",
        color: "from-purple-500 to-indigo-600",
        shadow: "shadow-purple-200"
    },
    {
        title: "Learn English",
        age: "Grades 1-8",
        desc: "Master communication with Public Speaking & Grammar.",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
        color: "from-pink-500 to-rose-600",
        shadow: "shadow-pink-200"
    },
    {
        title: "Maths Mastery",
        age: "Grades 4-8",
        desc: "Visual math learning with real-world applications.",
        image: "https://images.unsplash.com/photo-1632571401005-458e9d244591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80",
        color: "from-yellow-400 to-orange-500",
        shadow: "shadow-yellow-200"
    }
];

const CuriousPrograms = () => {
    return (
        <section className="py-20 bg-orange-50/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Explore Our Programs</h2>
                    <p className="text-lg text-slate-600">Designed by experts to make learning addictive.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programs.map((program, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold rounded-full text-slate-800">
                                        {program.age}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-800 mb-3">{program.title}</h3>
                                <p className="text-slate-500 font-medium mb-6 line-clamp-2">{program.desc}</p>

                                <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${program.color} text-white font-bold shadow-lg ${program.shadow} flex items-center justify-center group/btn`}>
                                    <span>View Details</span>
                                    <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CuriousPrograms;
