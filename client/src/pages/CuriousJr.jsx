import React from 'react';
import CuriousNavbar from '../components/curiousjr/CuriousNavbar';
import CuriousHero from '../components/curiousjr/CuriousHero';
import CuriousFeatures from '../components/curiousjr/CuriousFeatures';
import CuriousPrograms from '../components/curiousjr/CuriousPrograms';
import CuriousStats from '../components/curiousjr/CuriousStats';
import CuriousLaptop from '../components/curiousjr/CuriousLaptop';
import CuriousFounder from '../components/curiousjr/CuriousFounder';
import CuriousMethodology from '../components/curiousjr/CuriousMethodology';
import CuriousTestimonials from '../components/curiousjr/CuriousTestimonials';
import CuriousFaculty from '../components/curiousjr/CuriousFaculty';
import CuriousAppDownload from '../components/curiousjr/CuriousAppDownload';
import CuriousFooter from '../components/curiousjr/CuriousFooter';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-10 text-red-600 bg-red-50 min-h-screen">
                    <h1 className="text-3xl font-bold mb-4">Something went wrong.</h1>
                    <div className="bg-white p-6 rounded-lg shadow-xl border border-red-200">
                        <h2 className="text-xl font-bold mb-2">Error Details:</h2>
                        <pre className="whitespace-pre-wrap text-sm font-mono text-red-800">
                            {this.state.error && this.state.error.toString()}
                        </pre>
                        <details className="mt-4">
                            <summary className="cursor-pointer font-semibold text-slate-700">Component Stack</summary>
                            <pre className="mt-2 text-xs text-slate-500 overflow-auto max-h-60">
                                {this.state.errorInfo && this.state.errorInfo.componentStack}
                            </pre>
                        </details>
                    </div>
                    <p className="mt-8 text-slate-600">Please report this to the developer.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

const CuriousJr = () => {
    return (
        <div className="min-h-screen bg-white">
            <ErrorBoundary>
                <CuriousNavbar />
                <CuriousHero />
                <CuriousStats />
                <CuriousFeatures />
                <CuriousPrograms />
                <CuriousLaptop />
                <CuriousMethodology />
                <CuriousFounder />
                <CuriousTestimonials />
                <CuriousFaculty />
                <CuriousAppDownload />
                <CuriousFooter />
            </ErrorBoundary>
        </div>
    );
};

export default CuriousJr;
