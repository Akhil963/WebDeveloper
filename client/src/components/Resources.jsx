import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Video, PenTool } from 'lucide-react';

const resources = [
    {
        title: "Previous Year Papers",
        description: "Access last 10 years solved papers for JEE, NEET and UPSC with detailed analysis.",
        icon: FileText,
        image: "https://images.unsplash.com/photo-1456513080402-40a145f6398c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1766&q=80"
    },
    {
        title: "Video Library",
        description: "Watch 5000+ hours of high quality video lectures from top educators.",
        icon: Video,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
    },
    {
        title: "Mock Test Series",
        description: "Practice with AI-powered mock tests that simulate real exam conditions.",
        icon: PenTool,
        image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
    }
];

const Resources = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 px-2">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                            Premium Study Resources <br />
                            <span className="text-primary">For Serious Aspirants</span>
                        </h2>
                    </div>
                    <button className="hidden md:block px-6 py-3 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                        View All Resources
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {resources.map((resource, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/50 transition-colors z-10" />
                            <img
                                src={resource.image}
                                alt={resource.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            />

                            <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white mb-4">
                                    <resource.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{resource.title}</h3>
                                <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    {resource.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <button className="md:hidden mt-8 w-full px-6 py-3 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                    View All Resources
                </button>
            </div>
        </section>
    );
};

export default Resources;
