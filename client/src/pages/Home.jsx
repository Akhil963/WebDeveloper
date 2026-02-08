import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ExamCategories from '../components/ExamCategories';
import TrustedBy from '../components/TrustedBy';
import Resources from '../components/Resources';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />
                <Stats />
                <ExamCategories />
                <TrustedBy />
                <Resources />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
