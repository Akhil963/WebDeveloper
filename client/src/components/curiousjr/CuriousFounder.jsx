import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const CuriousFounder = () => {
    return (
        <section className="py-24 bg-[#FFF0E6] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <Quote size={80} className="absolute -top-10 -left-6 text-orange-200 rotate-180 z-0" />
                        <div className="relative z-10 space-y-6">
                            <h2 className="text-4xl font-extrabold text-slate-900">
                                Building the Future <br />
                                <span className="text-orange-500">One Child at a Time</span>
                            </h2>
                            <div className="text-lg text-slate-700 font-medium leading-relaxed italic border-l-4 border-orange-500 pl-6">
                                "We believe every child is a natural innovator. Our mission is to provide them with the right tools and guidance to explore their curiosity and build amazing things."
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-900">Anand Kumar</h4>
                                <p className="text-orange-600 font-semibold">Founder, EduPrime & CuriousJr</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-orange-400 rounded-full blur-3xl opacity-20 transform translate-x-10 translate-y-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                            alt="Founder"
                            className="relative z-10 rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white"
                        />

                        <div className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-xl shadow-xl flex items-center space-x-4 max-w-sm">
                            <div className="text-4xl font-bold text-orange-500">10+</div>
                            <p className="text-slate-600 font-medium">Years of experience in Early Education</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CuriousFounder;
