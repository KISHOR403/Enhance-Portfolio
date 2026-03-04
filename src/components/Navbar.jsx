import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import GlowingBorder from './ui/GlowingBorder';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    // Dark Mode State - Default to false (light mode)
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark';
        }
        return false;
    });


    // Dark Mode Effect
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    // Scroll Effect Listener
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Auto-Scroll Logic
    useEffect(() => {
        // Feature removed to align with audio removal or keep empty if unnecessary
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Portfolio', href: '#projects' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0, x: "-50%" }}
            animate={{ y: 0, opacity: 1, x: "-50%" }}
            transition={{ duration: 0.8 }}
            className={`fixed top-3 md:top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-4xl rounded-full`}
        >
            <div className="relative w-full">
                <GlowingBorder
                    className="w-full shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
                    innerClassName={`bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl transition-all duration-300 ${scrolled ? 'py-1.5' : 'py-2'}`}
                    roundedClass="rounded-full"
                    gradient="bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#06b6d4_50%,#00000000_100%)]"
                >
                    <div className="px-5 md:px-6">
                        <div className="flex items-center justify-between h-12">
                            {/* Brand */}
                            <div className="flex-shrink-0 flex items-center gap-2">
                                <a href="#" className="font-mono font-bold text-dark dark:text-white tracking-tight hidden sm:block">
                                    <span className="text-gray-400 dark:text-gray-500">&lt;</span>
                                    <span className="text-accent">Kishor</span>
                                    <span className="text-gray-400 dark:text-gray-500"> /&gt;</span>
                                </a>
                            </div>

                            {/* Desktop Menu */}
                            <div className="hidden md:flex items-center gap-1">
                                <div
                                    className="flex items-center bg-gray-100/30 dark:bg-gray-800/30 rounded-full px-1.5 py-1 border border-gray-200/50 dark:border-gray-700/40 mr-4 relative shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)]"
                                >
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="px-3 py-1.5 text-xs font-mono text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent rounded-full transition-all duration-300 relative group"
                                        >
                                            <span className="relative z-10 flex items-center gap-0.5">
                                                <span className="text-gray-300 dark:text-gray-600 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mr-0.5">{'<'}</span>
                                                <span className="transition-all duration-300 group-hover:text-accent">{link.name}</span>
                                                <span className="text-gray-300 dark:text-gray-600 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-0.5">{'/>'}</span>
                                            </span>
                                            {/* Underline glow on hover */}
                                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent transition-all duration-300 rounded-full" />
                                        </a>
                                    ))}
                                </div>

                                {/* Theme Toggle */}
                                <button
                                    onClick={toggleTheme}
                                    className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 mr-2 font-mono"
                                    title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                                >
                                    {isDarkMode ? <FaSun size={14} className="text-yellow-400" /> : <FaMoon size={14} />}
                                </button>

                                <a
                                    href="#contact"
                                    className="flex-shrink-0 group relative ml-3 px-4 py-1.5 rounded-full font-mono text-xs transition-all duration-400 text-white bg-accent/10 hover:bg-accent/20 backdrop-blur-xl border border-accent/40 hover:border-accent shadow-[0_0_12px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] overflow-hidden"
                                >
                                    {/* Sweep animation on hover */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                    <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
                                        <span className="text-accent/70 text-xs">{'>'}</span>
                                        <span className="font-semibold tracking-wide text-accent">Let's Talk</span>
                                        <span className="w-[2px] h-4 bg-accent animate-pulse" />
                                    </span>
                                </a>
                            </div>

                            {/* Mobile Toggle */}
                            <div className="flex md:hidden items-center gap-4">
                                <button
                                    onClick={toggleTheme}
                                    className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                                >
                                    {isDarkMode ? <FaSun size={20} className="text-yellow-400" /> : <FaMoon size={20} />}
                                </button>
                                <button
                                    onClick={toggleMenu}
                                    className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                                >
                                    {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </GlowingBorder>

                {/* Mobile Menu Fullscreen Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="fixed inset-0 top-0 left-0 w-screen h-[100dvh] z-[-1] flex flex-col items-center justify-center bg-white/95 dark:bg-gray-950/95 backdrop-blur-2xl"
                        >
                            <div className="flex flex-col items-center space-y-6 w-full px-8">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1, duration: 0.4, type: "spring", stiffness: 100 }}
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-mono font-bold tracking-wider text-gray-800 dark:text-gray-100 hover:text-accent dark:hover:text-accent transition-colors relative group"
                                    >
                                        <span className="text-accent/50 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">{'<'}</span>
                                        {link.name}
                                        <span className="text-accent/50 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">{'/>'}</span>
                                    </motion.a>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: navLinks.length * 0.1 + 0.1, duration: 0.4 }}
                                    className="pt-8 w-full max-w-xs flex justify-center"
                                >
                                    <a
                                        href="#contact"
                                        onClick={() => setIsOpen(false)}
                                        className="group relative px-8 py-4 w-full text-center rounded-2xl font-mono text-lg transition-all duration-400 text-white bg-accent/10 hover:bg-accent/20 border border-accent/40 hover:border-accent shadow-[0_0_12px_rgba(6,182,212,0.15)] overflow-hidden"
                                    >
                                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            <span className="text-accent/70">{'>'}</span>
                                            <span className="font-semibold tracking-wide text-accent">Let's Talk</span>
                                            <span className="w-[3px] h-5 bg-accent animate-pulse" />
                                        </span>
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
