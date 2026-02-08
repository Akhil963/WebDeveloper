import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Microscope, Building, Calculator, Code, Stethoscope } from 'lucide-react';

const categories = [
    {
        title: "Engineering (JEE)",
        icon: Atom,
        color: "from-orange-400 to-red-500",
        shadow: "shadow-orange-200",
        bg: "bg-orange-50",
        courses: "120+ Courses"
    },
    {
        title: "Medical (NEET)",
        icon: Stethoscope,
        color: "from-cyan-400 to-blue-500",
        shadow: "shadow-cyan-200",
        bg: "bg-blue-50",
        courses: "80+ Courses"
    },
    {
        title: "UPSC CSE",
        icon: Building,
        color: "from-purple-400 to-indigo-500",
        shadow: "shadow-purple-200",
        bg: "bg-purple-50",
        courses: "50+ Courses"
    },
    {
        title: "Commerce & CA",
        icon: Calculator,
        color: "from-green-400 to-emerald-500",
        shadow: "shadow-green-200",
        bg: "bg-green-50",
        courses: "40+ Courses"
    },
    {
        title: "Data Science",
        icon: Microscope,
        color: "from-pink-400 to-rose-500",
        shadow: "shadow-pink-200",
        bg: "bg-pink-50",
        courses: "60+ Courses"
    },
    {
        title: "Programming",
        icon: Code,
        color: "from-blue-400 to-indigo-600",
        shadow: "shadow-blue-200",
        bg: "bg-indigo-50",
        courses: "200+ Courses"
    }
];

const ExamCategories = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-bold tracking-wide uppercase text-sm">Discover Your Path</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">Explore Exam Categories</h2>
                        <p className="text-slate-600 mt-4 text-lg">
                            Choose from our wide range of meticulously crafted courses designed to help you succeed in your goals.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 group border border-slate-100"
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg ${category.shadow} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <category.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                                {category.title}
                            </h3>
                            <p className="text-slate-500 font-medium mb-4">{category.courses}</p>

                            <div className="flex items-center text-sm font-semibold text-primary cursor-pointer group/link">
                                <span className="group-hover/link:underline">View All Courses</span>
                                <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExamCategories;
