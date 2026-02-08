import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Heart, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-8 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                E
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">
                                EduPrime
                            </span>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                            Empowering students worldwide with quality education. Join our community and achieve your dreams with the best educators.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Our Instructors</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Popular Courses */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Popular Courses</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-white transition-colors">JEE Main & Advanced</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">NEET UG Preparation</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">UPSC Civil Services</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Full Stack Development</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Data Science & AI</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">MBA Entrance (CAT)</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin size={20} className="text-primary mt-1" />
                                <span>123 Education Lane, Tech Park,<br />Bangalore, India 560100</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={20} className="text-primary" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={20} className="text-primary" />
                                <span>support@eduprime.com</span>
                            </li>
                        </ul>

                        <div className="mt-6 p-4 bg-slate-800 rounded-xl">
                            <h4 className="text-white font-semibold mb-2">Subscribe to Newsletter</h4>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="bg-slate-700 text-white px-3 py-2 rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                                <button className="bg-primary px-3 py-2 rounded-r-lg hover:bg-blue-600 transition-colors">
                                    <ArrowRight size={18} className="text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
                    <p>&copy; 2026 EduPrime. All rights reserved.</p>
                    <div className="flex items-center space-x-2">
                        <span>Made with</span>
                        <Heart size={16} className="text-red-500 fill-current" />
                        <span>in India</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
