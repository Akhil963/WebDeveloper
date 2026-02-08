import React from 'react';
import { motion } from 'framer-motion';

const methods = [
    {
        title: "Hands-on Projects",
        desc: "We believe in learning by doing. Kids build real-world projects like Games, Apps, and Websites.",
        image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
        color: "from-yellow-400 to-orange-500",
        offset: "mt-0"
    },
    {
        title: "Interactive Sessions",
        desc: "Live classes where every student gets a chance to speak, ask, and interact with peers.",
        image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
        color: "from-purple-500 to-indigo-600",
        offset: "md:mt-12"
    },
    {
        title: "Future Ready",
        desc: "Curriculum designed to instill 21st-century skills like Critical Thinking and Problem Solving.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1722&q=80",
        color: "from-green-400 to-teal-500",
        offset: "md:mt-24"
    }
];

const CuriousMethodology = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Bg Shape */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-slate-50 skew-y-3 transform origin-top-left -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Our Unique Methodology</h2>
                    <p className="text-xl text-slate-600">
                        Traditional learning is boring. We make it exciting with our 3-step learning process.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {methods.map((method, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className={`group relative rounded-3xl overflow-hidden h-[400px] shadow-2xl ${method.offset}`}
                        >
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={method.image}
                                    alt={method.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors"></div>
                            </div>

                            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                                <div className={`w-12 h-1 bg-gradient-to-r ${method.color} mb-4`}></div>
                                <h3 className="text-2xl font-bold text-white mb-3">{method.title}</h3>
                                <p className="text-slate-200 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    {method.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CuriousMethodology;
