import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomeIntro = ({ showIntro, text }) => {
    return (
        <AnimatePresence>
            {showIntro && (
                <motion.div
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Ambient Aurora Background Light Effect - Layer 1 */}
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-900/40 via-black to-cyan-900/40 animate-pulse pointer-events-none"></div>

                    {/* Rotating Nebula - Layer 2 */}
                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(6,182,212,0.15)_0%,transparent_50%)] animate-[spin_15s_linear_infinite] pointer-events-none z-0"></div>

                    {/* drifting Nebula - Layer 3 (Reverse Motion) */}
                    <div className="absolute bottom-[-50%] right-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(168,85,247,0.1)_0%,transparent_50%)] animate-[spin_20s_linear_infinite_reverse] pointer-events-none z-0"></div>

                    {/* Floating Particles - Dense Field */}
                    {[...Array(35)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-white rounded-full opacity-0 z-0"
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: window.innerHeight + 100,
                                scale: Math.random() * 0.5 + 0.2, // Varied sizes for depth
                                opacity: 0
                            }}
                            animate={{
                                y: -100,
                                opacity: [0, Math.random() * 0.8 + 0.2, 0], // Random max opacity
                                scale: [0, Math.random() * 1.5 + 0.5, 0]
                            }}
                            transition={{
                                duration: Math.random() * 5 + 3, // Slower, more varied
                                repeat: Infinity,
                                delay: Math.random() * 5,
                                ease: "easeInOut"
                            }}
                            style={{
                                width: Math.random() * 3 + 1 + 'px',
                                height: Math.random() * 3 + 1 + 'px',
                                boxShadow: "0 0 10px rgba(255,255,255,0.3)" // Glowy particles
                            }}
                        />
                    ))}

                    {/* Cinematic Line with Glow */}
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "300px", opacity: 1 }}
                        exit={{ width: "100%", opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative z-10 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-8 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                    />

                    <div className="relative z-10 p-4 w-full flex justify-center items-center overflow-visible">
                        {/* Central Glow / God Ray */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 0.5, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 1.5 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-cyan-500/30 blur-[60px] rounded-full pointer-events-none"
                        />

                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 20,
                                filter: "blur(10px)",
                                letterSpacing: "0.5em"
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                                letterSpacing: "0.2em"
                            }}
                            exit={{
                                opacity: 0,
                                y: -20,
                                filter: "blur(10px)",
                                letterSpacing: "0.5em"
                            }}
                            transition={{
                                duration: 1.5,
                                ease: "easeOut"
                            }}
                            className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-[length:200%_auto] text-center select-none drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                            style={{
                                animation: "shine 3s linear infinite"
                            }}
                        >
                            {text}
                        </motion.h1>

                        <style jsx>{`
                            @keyframes shine {
                                to { background-position: 200% center; }
                            }
                        `}</style>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WelcomeIntro;
