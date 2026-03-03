import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlowingBorder from './ui/GlowingBorder';
import { FaGraduationCap, FaCode, FaServer, FaMobileAlt, FaRocket, FaJava, FaGithub, FaLinkedin, FaVideo, FaLightbulb, FaLaptopCode, FaInstagram } from 'react-icons/fa';
import { SiSelenium } from 'react-icons/si';
import avatarImg from '../assets/profile_new.jpg';

const About = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    const roles = [
        {
            title: "Automation Engineer",
            desc: "I specialize in Java, Selenium, and API Automation. My goal is to enhance software reliability through efficient automated testing strategies. Currently completing my B.Tech CSE at Lovely Professional University.",
            cardTitle: "Detailed-Oriented SDET",
            cardSubtitle: "Java • Selenium • Automation",
            cardIcon: <FaJava />,
            stats: [
                { icon: <SiSelenium />, text: "Software Automation", color: "text-accent" },
                { icon: "⚡", text: "Quality Assurance Enthusiast", color: "text-yellow-400" }
            ],
            socials: [
                { label: "GitHub", icon: <FaGithub />, href: "https://github.com/KISHOR403", color: "hover:bg-[#1e293b]", iconColor: "group-hover:text-accent" },
                { label: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/kishorgogoi/", color: "hover:bg-[#0077b5]/20", iconColor: "group-hover:text-[#0077b5]" }
            ]
        },
        {
            title: "Content Creator",
            desc: "I create engaging visual content and reels that simplify concepts and share creative ideas. My aim is to inspire and connect with people through meaningful and relatable content.",
            cardTitle: "Visual Content Creator",
            cardSubtitle: "Reels • Creativity • Design",
            cardIcon: <FaVideo />,
            stats: [
                { icon: <FaLightbulb />, text: "Visual Storytelling", color: "text-yellow-300" },
                { icon: "🎨", text: "Creative Concepts", color: "text-pink-400" }
            ],
            socials: [
                { label: "Instagram", icon: <FaInstagram />, href: "https://www.instagram.com/motion.ai__?igsh=MWh5azR5NjdybzNwcw==", color: "hover:bg-pink-600/20", iconColor: "group-hover:text-pink-500" },
                { label: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/kishorgogoi/", color: "hover:bg-[#0077b5]/20", iconColor: "group-hover:text-[#0077b5]" }
            ]
        },
        {
            title: "Web Developer (Part-time)",
            desc: "I develop clean and responsive websites using HTML, CSS, and JavaScript. As a student developer, I focus on building simple, user-friendly designs that work smoothly across all devices.",
            cardTitle: "Frontend Developer",
            cardSubtitle: "React • Tailwind • UI/UX",
            cardIcon: <FaCode />,
            stats: [
                { icon: <FaLaptopCode />, text: "Responsive Design", color: "text-sky-400" },
                { icon: <FaRocket />, text: "Performance Optimized", color: "text-orange-400" }
            ],
            socials: [
                { label: "GitHub", icon: <FaGithub />, href: "https://github.com/KISHOR403", color: "hover:bg-[#1e293b]", iconColor: "group-hover:text-accent" },
                { label: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/kishorgogoi/", color: "hover:bg-[#0077b5]/20", iconColor: "group-hover:text-[#0077b5]" }
            ]
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" className="py-20 bg-transparent relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Title */}
                <div className="text-center mb-12">
                    <div className="relative inline-block p-[3px] rounded-full overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_80%,#000_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_80%,#ffffff_100%)] drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] opacity-100"></div>
                        <div className="relative z-10 bg-white dark:bg-gray-800 px-6 py-2 rounded-full shadow-sm text-gray-900 dark:text-white font-mono font-bold text-xl md:text-2xl transition-colors">
                            &lt; About Me /&gt;
                        </div>
                    </div>
                </div>

                {/* Main Content Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <GlowingBorder
                        roundedClass="rounded-[2.5rem]"
                        className="shadow-3xl"
                        innerClassName="bg-white dark:bg-black p-8 md:p-14 relative overflow-hidden transition-colors duration-500"
                        gradient="bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#10b981_50%,#00000000_100%)] drop-shadow-[0_0_25px_rgba(16,185,129,0.6)]"
                    >
                        {/* Big Card Window Controls */}
                        <div className="absolute top-6 left-8 flex gap-2 z-20">
                            <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-sm" />
                            <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-sm" />
                            <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-sm" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-4">

                            {/* Left Column: Dark Profile Card */}
                            <div className="flex justify-center">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="w-full max-w-sm"
                                >
                                    <GlowingBorder
                                        roundedClass="rounded-3xl"
                                        className="shadow-2xl border-gray-800"
                                        innerClassName="bg-gray-50 dark:bg-[#0f172a] p-6 relative overflow-hidden transition-colors duration-500"
                                    >
                                        {/* Window Controls */}
                                        <div className="flex gap-2 mb-8">
                                            <div className="w-3 h-3 rounded-full bg-red-500" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                            <div className="w-3 h-3 rounded-full bg-green-500" />
                                        </div>

                                        {/* Avatar & Content */}
                                        <div className="flex flex-col items-center text-center">
                                            <div className="relative mb-6">
                                                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-accent p-1 bg-[#1e293b]">
                                                    <img src={avatarImg} alt="Profile" className="w-full h-full rounded-full object-cover" />
                                                </div>
                                                <AnimatePresence mode="wait">
                                                    <motion.div
                                                        key={currentRoleIndex}
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        exit={{ scale: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="absolute -bottom-2 -right-2 bg-accent text-white p-2 rounded-full shadow-lg"
                                                    >
                                                        {roles[currentRoleIndex].cardIcon}
                                                    </motion.div>
                                                </AnimatePresence>
                                            </div>

                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={currentRoleIndex}
                                                    initial={{ opacity: 0, y: 5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -5 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="w-full flex flex-col items-center"
                                                >
                                                    <h3 className="text-gray-900 dark:text-white font-heading font-bold text-xl mb-2 transition-colors">
                                                        {roles[currentRoleIndex].cardTitle}
                                                    </h3>
                                                    <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-6 transition-colors">
                                                        {roles[currentRoleIndex].cardIcon}
                                                        <span>{roles[currentRoleIndex].cardSubtitle}</span>
                                                    </div>

                                                    {/* Stats / Badges */}
                                                    <div className="w-full space-y-3 mb-6">
                                                        {roles[currentRoleIndex].stats.map((stat, idx) => (
                                                            <div key={idx} className="flex items-center gap-3 bg-white dark:bg-[#1e293b] p-3 rounded-xl border border-gray-200 dark:border-gray-700/50 transition-colors">
                                                                <div className={stat.color}>{stat.icon}</div>
                                                                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{stat.text}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            </AnimatePresence>

                                            {/* Link Buttons */}
                                            <div className="w-full grid grid-cols-2 gap-3 mt-2">
                                                <AnimatePresence mode="wait">
                                                    {roles[currentRoleIndex].socials.map((social, idx) => (
                                                        <motion.a
                                                            key={`${currentRoleIndex}-${social.label}`}
                                                            initial={{ opacity: 0, scale: 0.9 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            exit={{ opacity: 0, scale: 0.9 }}
                                                            transition={{ duration: 0.2 }}
                                                            href={social.href}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className={`flex items-center justify-center gap-2 bg-white dark:bg-[#1e293b] ${social.color} text-gray-900 dark:text-white py-3 rounded-xl transition-all border border-gray-200 dark:border-gray-700 font-medium text-xs group`}
                                                        >
                                                            {React.cloneElement(social.icon, {
                                                                size: 16,
                                                                className: `${social.iconColor} transition-colors`
                                                            })}
                                                            {social.label}
                                                        </motion.a>
                                                    ))}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </GlowingBorder>
                                </motion.div>
                            </div>

                            {/* Right Column: Text Content */}
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white leading-tight transition-colors">
                                    I'm <span className="text-accent">Kishor Gogoi</span>, <br />
                                    a passionate <span className="text-[#38bdf8] drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">{roles[currentRoleIndex].title}</span>
                                </h2>

                                <div className="h-44 relative">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentRoleIndex}
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute top-0 left-0 w-full"
                                        >
                                            <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed transition-colors">
                                                {roles[currentRoleIndex].desc}
                                            </p>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5 mb-6 transition-colors">
                                                <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 transition-colors">
                                                    <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                                                    Education
                                                </h4>
                                                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 ml-4 list-disc transition-colors">
                                                    <li>Lovely Professional University <br /> B.Tech CSE (2022-2026)</li>
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <motion.button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative px-10 py-4 rounded-full font-bold text-lg transition-all duration-500 text-gray-900 dark:text-white bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/30 backdrop-blur-xl border-2 border-gray-200 dark:border-white/20 hover:border-accent shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] overflow-hidden"
                                >
                                    {/* Background Ambient Glow */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-[#10b981] to-[#059669]" />

                                    {/* Glass Stroke Animation */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />

                                    <span className="relative z-10 dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-all">{isExpanded ? "Read Less" : "Read More"}</span>
                                </motion.button>
                            </div>

                        </div>
                    </GlowingBorder>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
