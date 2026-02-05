import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-secondary skew-y-1 transform origin-bottom-right scale-110 -z-20"></div>

            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl mix-blend-screen opacity-50 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl mix-blend-screen opacity-50 -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-lg border border-white/10 p-12 md:p-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto space-y-8"
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-gradient-to-r from-primary to-accent rounded-full text-white text-sm font-semibold shadow-lg shadow-purple-500/30">
                            <Sparkles size={14} />
                            <span>Limited Time Offer</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Start Your Learning Journey Today
                        </h2>

                        <p className="text-lg text-slate-300 leading-relaxed">
                            Join millions of learners on EduPrime and transform your career. Get unlimited access to
                            structured courses, mock tests, and 1-on-1 mentorship.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <button className="w-full sm:w-auto px-8 py-4 bg-white text-secondary rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl flex items-center justify-center space-x-2">
                                <span>Get Started for Free</span>
                                <ArrowRight size={20} />
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center">
                                Download App
                            </button>
                        </div>

                        <p className="text-sm text-slate-400 mt-6">
                            No credit card required · 7-day free trial · Cancel anytime
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
