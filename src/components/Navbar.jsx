import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaPlay, FaPause, FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import GlowingBorder from './ui/GlowingBorder';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    // Dark Mode State - Default to false (light mode)
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark';
        }
        return false;
    });

    const audioRef = useRef(null);

    // Audio Initialization
    useEffect(() => {
        // Royalty-free Lofi beat
        audioRef.current = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3');
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

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
        let scrollInterval;
        if (isPlaying) {
            // Start auto-scroll
            scrollInterval = setInterval(() => {
                window.scrollBy({ top: 1, behavior: 'auto' });
            }, 20);
        } else {
            clearInterval(scrollInterval);
        }

        return () => clearInterval(scrollInterval);
    }, [isPlaying]);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(error => console.error("Audio play failed:", error));
            }
            setIsPlaying(!isPlaying);
        }
    };

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
            className={`fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full`}
        >
            <div className="relative w-full">
                <GlowingBorder
                    className="w-full shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
                    innerClassName={`bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}
                    roundedClass="rounded-full"
                    gradient="bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#06b6d4_50%,#00000000_100%)]"
                >
                    <div className="px-6 md:px-8">
                        <div className="flex items-center justify-between h-14">
                            {/* Brand */}
                            <div className="flex-shrink-0 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent to-sky flex items-center justify-center text-white font-mono font-bold shadow-lg text-sm">
                                    KG
                                </div>
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
                                            className="px-3.5 py-2 text-sm font-mono text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent rounded-full transition-all duration-300 relative group"
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
                                    className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 mr-2 font-mono"
                                    title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                                >
                                    {isDarkMode ? <FaSun size={18} className="text-yellow-400" /> : <FaMoon size={18} />}
                                </button>

                                {/* Audio Toggle */}
                                <button
                                    onClick={toggleAudio}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isPlaying ? 'bg-accent text-white shadow-lg shadow-accent/30 scale-110' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                                    title={isPlaying ? "Pause Music" : "Play Music"}
                                >
                                    {isPlaying ? <FaPause size={12} /> : <FaPlay size={12} className="ml-1" />}
                                </button>

                                <a
                                    href="#contact"
                                    className="group relative ml-4 px-5 py-2 rounded-full font-mono text-sm transition-all duration-400 text-white bg-accent/10 hover:bg-accent/20 backdrop-blur-xl border border-accent/40 hover:border-accent shadow-[0_0_12px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] overflow-hidden"
                                >
                                    {/* Sweep animation on hover */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                    <span className="relative z-10 flex items-center gap-1.5">
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

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 15 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 w-full mt-2"
                        >
                            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/50 overflow-hidden py-4 mx-auto w-full">
                                <div className="flex flex-col items-center space-y-2">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="w-4/5 text-center py-3 rounded-xl text-gray-600 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-accent transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                    <div className="pt-4 border-t border-gray-100 dark:border-gray-800 w-full flex justify-center gap-4">
                                        <button
                                            onClick={() => { toggleAudio(); setIsOpen(false); }}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${isPlaying ? 'bg-accent/10 text-accent' : 'bg-gray-100/50 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}
                                        >
                                            {isPlaying ? <><FaPause /> Pause Music</> : <><FaPlay /> Play Music</>}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
