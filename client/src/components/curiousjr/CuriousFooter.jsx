import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CuriousFooter = () => {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-8 rounded-t-[3rem] mt-[-2rem] relative z-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="space-y-6">
                        <Link to="/class-1-8" className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                C
                            </div>
                            <span className="text-2xl font-bold">
                                Curious<span className="text-orange-500">Jr</span>
                            </span>
                        </Link>
                        <p className="text-slate-400">
                            Igniting the spark of curiosity in every child. We are building the creators of tomorrow.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-orange-500 transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-orange-500 transition-colors"><Twitter size={18} /></a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-orange-500 transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-orange-500 transition-colors"><Youtube size={18} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-orange-400">Programs</h4>
                        <ul className="space-y-3 text-slate-400">
                            <li><a href="#" className="hover:text-white transition-colors">Grade 1-3 Logic</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Grade 4-6 Coding</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Grade 7-8 Math</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Public Speaking</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-pink-400">Company</h4>
                        <ul className="space-y-3 text-slate-400">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Main Site</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-blue-400">Contact Us</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-orange-500" />
                                <span>+91 99999 88888</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-orange-500" />
                                <span>hello@curiousjr.com</span>
                            </li>
                            <li>
                                <div className="mt-4 p-4 bg-slate-800 rounded-xl">
                                    <p className="text-sm font-semibold text-white mb-2">Subsribe to Newsletter</p>
                                    <div className="flex">
                                        <input type="text" placeholder="Email" className="w-full bg-slate-700 px-3 py-2 rounded-l-lg text-sm focus:outline-none" />
                                        <button className="bg-orange-500 px-3 py-2 rounded-r-lg font-bold text-sm hover:bg-orange-600">GO</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; 2026 CuriousJr. All rights reserved.</p>
                    <div className="flex items-center space-x-1 mt-4 md:mt-0">
                        <span>Made with</span>
                        <Heart size={16} className="text-red-500 fill-current" />
                        <span>for Kids</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default CuriousFooter;
