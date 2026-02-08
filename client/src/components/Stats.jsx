import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Trophy, Globe } from 'lucide-react';

const stats = [
    {
        icon: Users,
        value: "10M+",
        label: "Active Learners",
        color: "bg-blue-100 text-blue-600"
    },
    {
        icon: BookOpen,
        value: "50k+",
        label: "Video Lessons",
        color: "bg-green-100 text-green-600"
    },
    {
        icon: Trophy,
        value: "100+",
        label: "Top Rankers",
        color: "bg-yellow-100 text-yellow-600"
    },
    {
        icon: Globe,
        value: "15+",
        label: "Countries",
        color: "bg-purple-100 text-purple-600"
    }
];

const Stats = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-4 p-6 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group"
                        >
                            <div className={`p-4 rounded-xl ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                                <stat.icon size={28} />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
                                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
