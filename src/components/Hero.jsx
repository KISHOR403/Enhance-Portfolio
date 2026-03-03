import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaCoffee, FaRobot } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import GlowingBorder from './ui/GlowingBorder';
import { TypeAnimation } from 'react-type-animation';

import cvFile from '../assets/Kishor_Gogoi_QA.pdf';

const Hero = ({ showIntro }) => {
    // Intro logic has been moved to App.jsx for global scope

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-36 pb-20 relative overflow-hidden bg-transparent">

            {!showIntro && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <div className="text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm mb-6 transition-colors">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Available for Opportunities</span>
                                </div>

                                <motion.h1
                                    className="text-5xl md:text-7xl font-heading font-bold text-dark dark:text-white mb-4 leading-tight transition-colors"
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        hidden: { opacity: 1 },
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.05, // Faster typing
                                            },
                                        },
                                    }}
                                >
                                    {/* Line 1: Hi, I'm Kishor */}
                                    <span className="block">
                                        {Array.from("Hi, I'm ").map((char, index) => (
                                            <motion.span
                                                key={`char-${index}`}
                                                variants={{
                                                    hidden: { opacity: 0, y: 10 },
                                                    visible: { opacity: 1, y: 0 },
                                                }}
                                            >
                                                {char === " " ? "\u00A0" : char}
                                            </motion.span>
                                        ))}
                                        <span className="text-sky inline-block">
                                            {Array.from("Kishor").map((char, index) => (
                                                <motion.span
                                                    key={`name-char-${index}`}
                                                    variants={{
                                                        hidden: { opacity: 0, y: 10 },
                                                        visible: { opacity: 1, y: 0 },
                                                    }}
                                                >
                                                    {char}
                                                </motion.span>
                                            ))}
                                        </span>
                                    </span>

                                    {/* Line 2: Gogoi - Delayed start to wait for Line 1 */}
                                    <motion.span
                                        className="text-orange-500 block"
                                        variants={{
                                            hidden: { opacity: 1 }, // Container visible, children hidden
                                            visible: {
                                                opacity: 1,
                                                transition: {
                                                    delayChildren: 0.3, // Smoother timing, reduced from 0.8
                                                    staggerChildren: 0.05
                                                }
                                            }
                                        }}
                                    >
                                        {Array.from("Gogoi").map((char, index) => (
                                            <motion.span
                                                key={`lastname-char-${index}`}
                                                variants={{
                                                    hidden: { opacity: 0, y: 10 },
                                                    visible: { opacity: 1, y: 0 },
                                                }}
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                    </motion.span>
                                </motion.h1>

                                <motion.h2
                                    className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-6 transition-colors h-[32px] md:h-[40px] flex items-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 1.0 }}
                                >
                                    <TypeAnimation
                                        sequence={[
                                            'Software Automation Engineer (QA & SDET)',
                                            2000,
                                            'Test Automation Expert',
                                            2000,
                                            'Quality Assurance Specialist',
                                            2000,
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        repeat={Infinity}
                                        className="inline-block"
                                    />
                                </motion.h2>

                                <motion.p
                                    className="max-w-lg text-gray-500 dark:text-gray-400 mb-8 text-lg leading-relaxed transition-colors"
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        hidden: { opacity: 1 },
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.005,
                                                delayChildren: 1.8, // Reduced from 2.5
                                            },
                                        },
                                    }}
                                >
                                    {"I am a final-year student skilled in web and mobile automation using Selenium, Appium, Java, and TestNG. I focus on ensuring software quality through efficient testing and reliable automation practices.".split(" ").map((word, wordIndex) => (
                                        <span key={wordIndex} className="inline-block whitespace-nowrap mr-1.5">
                                            {Array.from(word).map((char, charIndex) => (
                                                <motion.span
                                                    key={charIndex}
                                                    variants={{
                                                        hidden: { opacity: 0, y: 5 },
                                                        visible: { opacity: 1, y: 0 },
                                                    }}
                                                    className="inline-block"
                                                >
                                                    {char}
                                                </motion.span>
                                            ))}
                                        </span>
                                    ))}
                                </motion.p>

                                <div className="flex flex-wrap items-center gap-4 mb-10">
                                    <a
                                        href="#contact"
                                        className="px-8 py-3 rounded-full bg-dark dark:bg-white text-white dark:text-dark font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-lg hover:-translate-y-1 shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_0_35px_rgba(255,255,255,0.6)]"
                                    >
                                        Contact Me
                                    </a>
                                    <a
                                        href={cvFile}
                                        download="Kishor_Gogoi_QA_CV.pdf"
                                        className="relative group rounded-full p-[2px] overflow-hidden transition-all hover:-translate-y-1 shadow-sm hover:shadow-md shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                                    >
                                        <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#000_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] opacity-100" />
                                        <div className="relative z-10 px-8 py-3 rounded-full bg-black/5 dark:bg-gray-800/90 text-gray-900 dark:text-white font-bold backdrop-blur-xl group-hover:bg-black/10 dark:group-hover:bg-gray-700/90 transition-all h-full w-full flex items-center justify-center">
                                            {/* Inner Highlight Layer */}
                                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                                            <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Download Resume</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="flex items-center gap-6 md:gap-8 text-gray-400">
                                    {[
                                        { icon: FaGithub, href: "https://github.com/KISHOR403", color: "group-hover:from-gray-900 group-hover:to-black", glow: "hover:shadow-[0_0_35px_rgba(0,0,0,0.6)] dark:hover:shadow-[0_0_35px_rgba(255,255,255,0.4)]", text: "group-hover:text-white" },
                                        { icon: FaLinkedin, href: "https://linkedin.com/in/kishorgogoi", color: "group-hover:from-blue-600 group-hover:to-blue-700", glow: "hover:shadow-[0_0_35px_rgba(37,99,235,0.8)]", text: "group-hover:text-white" },
                                        { icon: FaXTwitter, href: "https://x.com/kishor_gogoi8", color: "group-hover:from-black group-hover:to-gray-900", glow: "hover:shadow-[0_0_35px_rgba(0,0,0,0.8)] dark:hover:shadow-[0_0_35px_rgba(255,255,255,0.4)]", text: "group-hover:text-white" },
                                        { icon: FaInstagram, href: "https://www.instagram.com/_kishor__gogoi?igsh=MWppZGU5a2J3dTZoeA==", color: "group-hover:from-yellow-400 group-hover:via-red-500 group-hover:to-purple-500", glow: "hover:shadow-[0_0_35px_rgba(236,72,153,0.8)]", text: "group-hover:text-white" },
                                        { icon: FaEnvelope, href: "mailto:kishorgogoi403@gmail.com", color: "group-hover:from-red-500 group-hover:to-red-600", glow: "hover:shadow-[0_0_35px_rgba(239,68,68,0.8)]", text: "group-hover:text-white" }
                                    ].map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            whileHover={{ y: -6, scale: 1.15 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg relative overflow-hidden group p-[2px] transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] ${social.glow}`}
                                        >
                                            <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#000_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ffffff_100%)] opacity-100" />
                                            <div className={`relative z-10 w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-all duration-300 ${social.color}`}>
                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full"></div>
                                                <social.icon size={22} className={`relative z-10 text-gray-700 dark:text-gray-300 transition-colors duration-300 md:text-2xl ${social.text}`} />
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Content - Code Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            {/* Decorative Icons */}
                            <div className="absolute -top-6 -right-6 z-20 w-12 h-12 bg-[#1e1e1e] rounded-xl flex items-center justify-center border border-gray-700 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                                <FaCoffee className="text-[#a5b4fc] text-xl" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 z-20 w-12 h-12 bg-[#1e1e1e] rounded-xl flex items-center justify-center border border-gray-700 shadow-xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
                                <FaRobot className="text-[#f472b6] text-xl" />
                            </div>

                            <GlowingBorder
                                roundedClass="rounded-2xl"
                                className="shadow-2xl shadow-sky/20 transform rotate-1 hover:rotate-0 transition-transform duration-500"
                                innerClassName="bg-[#1e1e1e] font-mono text-sm sm:text-base border border-gray-700/50"
                            >
                                {/* Window Controls */}
                                <div className="bg-[#2d2d2d] px-4 py-3 flex gap-2 border-b border-gray-700">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>

                                {/* Code Content */}
                                <div className="p-6 text-gray-300 overflow-x-auto">
                                    <pre className="leading-relaxed">
                                        <code>
                                            <span className="text-pink-400">const</span> <span className="text-yellow-300">engineer</span> <span className="text-white">=</span> <span className="text-yellow-300">{'{'}</span>{'\n'}
                                            <div className="pl-4">
                                                <span className="text-blue-300">name:</span> <span className="text-green-300">"Kishor Gogoi"</span>,<br />
                                                <span className="text-blue-300">role:</span> <span className="text-green-300">"Automation Engineer"</span>,<br />
                                                <span className="text-blue-300">skills:</span> [<br />
                                                <span className="pl-4 text-green-300">"Selenium"</span>,<br />
                                                <span className="pl-4 text-green-300">"Appium"</span>,<br />
                                                <span className="pl-4 text-green-300">"Java"</span>,<br />
                                                <span className="pl-4 text-green-300">"TestNG"</span><br />
                                                ],<br />
                                                <span className="text-blue-300">passion:</span> <span className="text-green-300">"Bug-free Software"</span><br />
                                            </div>
                                            <span className="text-yellow-300">{'}'}</span>;
                                            <br />
                                            <span className="text-gray-500">// Ready to automate 🚀</span>
                                        </code>
                                    </pre>
                                </div>
                            </GlowingBorder>
                        </motion.div>

                    </div>
                </div>
            )}


        </section>
    );
};

export default Hero;
