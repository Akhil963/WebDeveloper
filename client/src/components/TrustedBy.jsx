import React from 'react';

const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png"
];

const TrustedBy = () => {
    return (
        <section className="py-12 border-b border-slate-100 bg-white">
            <div className="container mx-auto px-6">
                <p className="text-center text-slate-400 font-semibold uppercase tracking-wider text-sm mb-8">
                    Trusted by students placed in top companies
                </p>
                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
                    {logos.map((logo, idx) => (
                        <img
                            key={idx}
                            src={logo}
                            alt="Trusted Company"
                            className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
