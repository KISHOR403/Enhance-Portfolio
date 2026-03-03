import React, { useState } from 'react';
import { FaExternalLinkAlt, FaAward, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import oracleCert from '../assets/oracle_cert.png';
import ibmCert from '../assets/ibm_cert.png';
import seleniumCert from '../assets/selenium_cert.png';
import genAiCert from '../assets/gen_ai_cert.png';
import softwareTestingCert from '../assets/software_testing_cert.png';
import GlowingBorder from './ui/GlowingBorder';


const Certifications = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const certifications = [
        {
            title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
            issuer: "Oracle",
            date: "October 2025",
            image: oracleCert,
            link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=3ED780E134CEDC999FB725FA103E2D2E99F00311E49F3D4471A8D66F65DF2065",
            color: "from-red-500 to-orange-500",
            shadow: "shadow-orange-500/20",
            glowColor: "#f97316",
            glowRgba: "rgba(249, 115, 22, 0.4)"
        },
        {
            title: "IBM DevOps and Software Engineering",
            issuer: "Coursera",
            date: "Issued 2024",
            image: ibmCert,
            link: "https://www.coursera.org/account/accomplishments/specialization/ENXUQTEEU03Y",
            color: "from-blue-600 to-cyan-400",
            shadow: "shadow-blue-500/20",
            glowColor: "#2563eb",
            glowRgba: "rgba(37, 99, 235, 0.4)"
        },
        {
            title: "Web and Mobile Testing with Selenium",
            issuer: "Coursera",
            date: "Issued 2024",
            image: seleniumCert,
            link: "https://www.coursera.org/account/accomplishments/verify/9GESK1GBHDK0",
            color: "from-emerald-500 to-teal-400",
            shadow: "shadow-emerald-500/20",
            glowColor: "#10b981",
            glowRgba: "rgba(16, 185, 129, 0.4)"
        },
        {
            title: "Introduction to Software Testing",
            issuer: "Coursera",
            date: "Issued 2024",
            image: softwareTestingCert,
            link: "https://www.coursera.org/account/accomplishments/verify/97SXQNNPP4A6",
            color: "from-violet-600 to-purple-500",
            shadow: "shadow-purple-500/20",
            glowColor: "#8b5cf6",
            glowRgba: "rgba(139, 92, 246, 0.4)"
        },
        {
            title: "Introduction to Generative AI",
            issuer: "Coursera",
            date: "Issued 2024",
            image: genAiCert,
            link: "https://www.coursera.org/account/accomplishments/verify/W9STWU7JB3ZB",
            color: "from-pink-500 to-rose-400",
            shadow: "shadow-pink-500/20",
            glowColor: "#ec4899",
            glowRgba: "rgba(236, 72, 153, 0.4)"
        }
    ];

    const count = certifications.length;

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % count);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + count) % count);
    };

    // Mobile Swipe Logic
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    const getCardStyle = (index) => {
        let offset = (index - activeIndex + count) % count;
        if (offset > count / 2) offset -= count;

        const styles = {
            '0': { // Center
                transform: 'translateX(0) translateZ(0) rotateY(0deg) scale(1.1)',
                zIndex: 50,
                opacity: 1,
                filter: 'none',
                cursor: 'default'
            },
            '1': { // Immediate Right - Expanded (45%)
                transform: 'translateX(45%) translateZ(-200px) rotateY(-30deg) scale(0.9)',
                zIndex: 30,
                opacity: 0.8,
                filter: 'grayscale(20%) blur(1px)',
                cursor: 'pointer'
            },
            '-1': { // Immediate Left - Expanded (-45%)
                transform: 'translateX(-45%) translateZ(-200px) rotateY(30deg) scale(0.9)',
                zIndex: 30,
                opacity: 0.8,
                filter: 'grayscale(20%) blur(1px)',
                cursor: 'pointer'
            },
            '2': { // Far Right - Expanded (80%)
                transform: 'translateX(80%) translateZ(-400px) rotateY(-45deg) scale(0.75)',
                zIndex: 10,
                opacity: 0.4,
                filter: 'grayscale(100%) blur(2px)',
                cursor: 'pointer'
            },
            '-2': { // Far Left - Expanded (-80%)
                transform: 'translateX(-80%) translateZ(-400px) rotateY(45deg) scale(0.75)',
                zIndex: 10,
                opacity: 0.4,
                filter: 'grayscale(100%) blur(2px)',
                cursor: 'pointer'
            }
        };

        return styles[offset] || styles['0'];
    };

    return (
        <section
            id="certifications"
            className="pt-0 pb-32 bg-transparent relative overflow-hidden z-10 perspective-1000"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 relative z-20">
                <div className="text-center">
                    <div className="relative inline-block p-[3px] rounded-full overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_80%,#000_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_80%,#ffffff_100%)] drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] opacity-100"></div>
                        <div className="relative z-10 bg-white dark:bg-gray-800 px-8 py-3 rounded-full shadow-sm text-dark dark:text-white font-mono font-bold text-2xl md:text-3xl">
                            Certifications
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[500px] w-full relative flex items-center justify-center perspective-[1200px] transform-style-3d">
                <div className="relative w-[300px] h-[420px] will-change-transform" style={{ transformStyle: 'preserve-3d' }}>
                    {certifications.map((cert, index) => {
                        const style = getCardStyle(index);
                        const isCenter = (index - activeIndex + count) % count === 0;

                        return (
                            <div
                                key={index}
                                className="absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out will-change-transform"
                                style={{
                                    ...style,
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden'
                                }}
                                onClick={() => handleCardClick(index)}
                            >
                                {/* Card Container */}
                                <GlowingBorder
                                    roundedClass="rounded-[2rem]"
                                    className={`w-full h-full transition-all duration-500 ${isCenter
                                        ? `shadow-2xl ${cert.shadow} scale-[1.02] ring-1 ring-white/20`
                                        : `shadow-lg ${!isCenter ? 'hover:bg-white dark:hover:bg-gray-800/60' : ''}`
                                        }`}
                                    innerClassName="h-full p-6 bg-white/90 dark:bg-gray-900/40 backdrop-blur-md border border-white/50 dark:border-white/10"
                                >
                                    {/* Ambient Glow */}
                                    <div className={`
                                        absolute -top-20 -right-20 w-60 h-60 rounded-full blur-[60px] opacity-20 transition-opacity duration-700
                                        bg-gradient-to-br ${cert.color}
                                        ${isCenter ? 'opacity-30' : 'opacity-0'}
                                    `}
                                        style={{ transform: 'translateZ(0)' }}
                                    ></div>

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Image Area */}
                                        <div className="flex-1 flex items-center justify-center mb-6">
                                            {cert.image ? (
                                                <div className="relative w-full h-40 group-hover:scale-105 transition-transform duration-500 running-border rounded-2xl p-[2px] bg-transparent">
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10 rounded-2xl blur-xl`}></div>
                                                    <img
                                                        src={cert.image}
                                                        alt={cert.title}
                                                        className="w-full h-full object-contain relative z-10 drop-shadow-xl rounded-2xl bg-white/5"
                                                    />
                                                </div>
                                            ) : (
                                                <div className={`w-28 h-28 rounded-full flex items-center justify-center bg-gradient-to-br ${cert.color} text-white shadow-lg shadow-current running-border relative z-10 border-4 border-transparent`}>
                                                    <FaAward size={50} className="relative z-10" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Text Details */}
                                        <div className="text-center">
                                            <div className="flex items-center justify-center gap-2 mb-3">
                                                <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10">
                                                    {cert.issuer}
                                                </span>
                                            </div>

                                            <h3 className="text-lg font-bold text-dark dark:text-white mb-2 leading-tight h-14 line-clamp-2">
                                                {cert.title}
                                            </h3>

                                            <p className="text-xs text-gray-500 dark:text-gray-400 font-mono mb-4">
                                                {cert.date}
                                            </p>

                                            {/* Button */}
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={`
                                                    inline-flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-bold transition-all duration-500
                                                    text-gray-900 dark:text-white bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/30 backdrop-blur-xl border-2 border-gray-200 dark:border-white/20 hover:border-[var(--cert-color)]
                                                    shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:shadow-[0_0_20px_var(--cert-glow)]
                                                    ${isCenter
                                                        ? 'opacity-100 translate-y-0 hover:scale-[1.02] pointer-events-auto'
                                                        : 'opacity-0 translate-y-4 pointer-events-none'
                                                    }
                                                `}
                                                style={{
                                                    '--cert-color': cert.glowColor,
                                                    '--cert-glow': cert.glowRgba
                                                }}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                {/* Background Ambient Glow */}
                                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${cert.color}`} />

                                                <span className="relative z-10 dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] flex items-center gap-2 transition-all">
                                                    Verify Credential <FaExternalLinkAlt size={12} />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </GlowingBorder>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Controls */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] flex justify-between px-4 z-30 pointer-events-none">
                <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="pointer-events-auto w-12 h-12 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md shadow-lg flex items-center justify-center text-dark dark:text-white hover:scale-110 hover:bg-white dark:hover:bg-gray-800 transition-all border border-black/5 dark:border-white/10"
                    aria-label="Previous Slide"
                >
                    <FaChevronLeft size={16} />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="pointer-events-auto w-12 h-12 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md shadow-lg flex items-center justify-center text-dark dark:text-white hover:scale-110 hover:bg-white dark:hover:bg-gray-800 transition-all border border-black/5 dark:border-white/10"
                    aria-label="Next Slide"
                >
                    <FaChevronRight size={16} />
                </button>
            </div>

            <div className="text-center mt-0 text-gray-400 text-sm animate-pulse relative z-20 font-mono">
                {activeIndex + 1} / {count}
            </div>
        </section >
    );
};

export default Certifications;
