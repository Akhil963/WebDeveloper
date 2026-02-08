import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Arav's Mom",
        role: "Parent of Grade 4 Student",
        image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
        quote: "Every evening he is excited to attend his coding class. The teachers are amazing!"
    },
    {
        id: 2,
        name: "Rohan's Dad",
        role: "Parent of Grade 2 Student",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
        quote: "His math scores have improved significantly. The visual learning approach works wonders."
    },
    {
        id: 3,
        name: "Meera's Mom",
        role: "Parent of Grade 6 Student",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
        quote: "She built her own website in just 2 months. I couldn't be prouder!"
    }
];

const CuriousTestimonials = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-16">
                    Stories of <span className="text-pink-500">Happy Families</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="relative group rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                                    <Play size={24} className="text-white fill-current ml-1" />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                                <p className="text-lg font-medium italic mb-4 opacity-90">"{t.quote}"</p>
                                <div>
                                    <h4 className="text-xl font-bold">{t.name}</h4>
                                    <p className="text-sm font-medium text-slate-300">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CuriousTestimonials;
