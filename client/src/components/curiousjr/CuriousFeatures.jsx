import React from 'react';
import { motion } from 'framer-motion';
import { Video, Headset, TrendingUp, Target } from 'lucide-react';

const features = [
    {
        title: "Live Interactive Classes",
        desc: "Small batches ensuring personal attention.",
        icon: Video,
        color: "bg-purple-100 text-purple-600",
        border: "border-purple-200"
    },
    {
        title: "24x7 Mentor Support",
        desc: "Instant doubt resolution anytime.",
        icon: Headset,
        color: "bg-blue-100 text-blue-600",
        border: "border-blue-200"
    },
    {
        title: "Daily Progress Tracking",
        desc: "Detailed reports for parents.",
        icon: TrendingUp,
        color: "bg-green-100 text-green-600",
        border: "border-green-200"
    },
    {
        title: "Practice Led Learning",
        desc: "Projects & assignments after every class.",
        icon: Target,
        color: "bg-orange-100 text-orange-600",
        border: "border-orange-200"
    }
];

const CuriousFeatures = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className={`p-6 rounded-3xl bg-white border-2 ${feature.border} shadow-lg hover:shadow-xl transition-all duration-300 group`}
                        >
                            <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                            <p className="text-slate-500 font-medium">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CuriousFeatures;
