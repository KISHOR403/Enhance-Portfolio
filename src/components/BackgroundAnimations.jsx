import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimations = () => {

    // ─── Floating Particles with glow ───
    const particles = useMemo(() =>
        Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 8 + 10,
            delay: Math.random() * 8,
            driftX: (Math.random() - 0.5) * 80,
            driftY: (Math.random() - 0.5) * 80,
            color: ['rgba(139,92,246,', 'rgba(6,182,212,', 'rgba(236,72,153,', 'rgba(16,185,129,', 'rgba(251,191,36,'][Math.floor(Math.random() * 5)],
        })), []
    );

    // ─── Shooting Stars ───
    const shootingStars = useMemo(() =>
        Array.from({ length: 5 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 50}%`,
            delay: i * 3.5 + Math.random() * 2,
            duration: 1.2 + Math.random() * 0.8,
            width: 120 + Math.random() * 100,
        })), []
    );

    // ─── Flowing Wave Paths (SVG) ───
    const wavePaths = [
        { d: "M0,200 C200,100 400,300 600,200 C800,100 1000,300 1200,200 C1400,100 1600,300 1800,200", delay: 0, duration: 12, color: "rgba(139,92,246,0.08)", darkColor: "rgba(139,92,246,0.15)", y: "10%" },
        { d: "M0,250 C150,150 350,350 550,250 C750,150 950,350 1150,250 C1350,150 1550,350 1800,250", delay: 2, duration: 15, color: "rgba(6,182,212,0.06)", darkColor: "rgba(6,182,212,0.12)", y: "35%" },
        { d: "M0,200 C250,80 450,320 700,200 C950,80 1150,320 1400,200 C1600,100 1700,280 1800,200", delay: 4, duration: 18, color: "rgba(236,72,153,0.05)", darkColor: "rgba(236,72,153,0.10)", y: "60%" },
        { d: "M0,220 C180,120 380,320 580,220 C780,120 980,320 1180,220 C1380,120 1580,320 1800,220", delay: 6, duration: 14, color: "rgba(16,185,129,0.05)", darkColor: "rgba(16,185,129,0.10)", y: "80%" },
    ];

    // ─── Circuit / Tech Lines ───
    const circuitLines = useMemo(() => [
        { x1: "5%", y1: "15%", points: ["5%,15%", "15%,15%", "15%,25%", "25%,25%", "25%,35%"], delay: 0, duration: 4 },
        { x1: "85%", y1: "10%", points: ["85%,10%", "75%,10%", "75%,20%", "65%,20%", "65%,30%"], delay: 2, duration: 5 },
        { x1: "90%", y1: "60%", points: ["90%,60%", "80%,60%", "80%,70%", "70%,70%", "70%,80%"], delay: 1, duration: 4.5 },
        { x1: "10%", y1: "70%", points: ["10%,70%", "20%,70%", "20%,80%", "30%,80%", "30%,90%"], delay: 3, duration: 5.5 },
        { x1: "50%", y1: "5%", points: ["50%,5%", "50%,15%", "60%,15%", "60%,25%", "70%,25%"], delay: 1.5, duration: 4 },
    ], []);

    // ─── Light Beam / Spotlight Sweeps ───
    const lightBeams = [
        { angle: -30, delay: 0, duration: 8, left: "20%", color: "from-transparent via-purple-500/5 to-transparent dark:via-purple-500/10" },
        { angle: 25, delay: 4, duration: 10, left: "60%", color: "from-transparent via-cyan-500/4 to-transparent dark:via-cyan-500/8" },
        { angle: -15, delay: 7, duration: 12, left: "80%", color: "from-transparent via-pink-500/3 to-transparent dark:via-pink-500/7" },
    ];

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

            {/* ── Layer 1: Flowing Wave Lines ── */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1800 400">
                {wavePaths.map((wave, i) => (
                    <motion.path
                        key={`wave-${i}`}
                        d={wave.d}
                        fill="none"
                        className="stroke-current"
                        style={{ stroke: wave.color }}
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 0],
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: wave.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: wave.delay,
                        }}
                    />
                ))}
            </svg>

            {/* ── Layer 2: Circuit / Tech Lines ── */}
            <svg className="absolute inset-0 w-full h-full">
                {circuitLines.map((circuit, i) => (
                    <g key={`circuit-${i}`}>
                        {/* Static faint path */}
                        <motion.polyline
                            points={circuit.points.join(" ")}
                            fill="none"
                            stroke="rgba(255,255,255,0.03)"
                            strokeWidth="1"
                            className="dark:stroke-white/[0.06]"
                        />
                        {/* Animated glowing trace */}
                        <motion.polyline
                            points={circuit.points.join(" ")}
                            fill="none"
                            stroke="rgba(139,92,246,0.3)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 0.8, 0.8, 0],
                            }}
                            transition={{
                                duration: circuit.duration,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: circuit.delay,
                                times: [0, 0.4, 0.6, 1],
                            }}
                        />
                        {/* Glowing node at each junction */}
                        {circuit.points.map((point, j) => {
                            const [px, py] = point.split(",");
                            return (
                                <motion.circle
                                    key={`node-${i}-${j}`}
                                    cx={px}
                                    cy={py}
                                    r="3"
                                    fill="rgba(139,92,246,0.4)"
                                    initial={{ opacity: 0, r: 1 }}
                                    animate={{
                                        opacity: [0, 0.8, 0],
                                        r: [1, 4, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: circuit.delay + j * 0.5,
                                    }}
                                />
                            );
                        })}
                    </g>
                ))}
            </svg>

            {/* ── Layer 3: Light Beam Sweeps ── */}
            {lightBeams.map((beam, i) => (
                <motion.div
                    key={`beam-${i}`}
                    className={`absolute top-0 w-[2px] md:w-[3px] h-[200vh] bg-gradient-to-b ${beam.color}`}
                    style={{
                        left: beam.left,
                        transformOrigin: "top center",
                        filter: "blur(8px)",
                    }}
                    animate={{
                        rotate: [beam.angle - 15, beam.angle + 15, beam.angle - 15],
                        opacity: [0, 0.6, 0.3, 0.7, 0],
                        x: ["-100px", "100px", "-100px"],
                    }}
                    transition={{
                        duration: beam.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: beam.delay,
                    }}
                />
            ))}

            {/* ── Layer 4: Floating Particles with colored glow ── */}
            {particles.map((p) => (
                <motion.div
                    key={`particle-${p.id}`}
                    className="absolute rounded-full"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        background: `${p.color}0.6)`,
                        boxShadow: `0 0 ${p.size * 4}px ${p.size * 2}px ${p.color}0.2)`,
                    }}
                    animate={{
                        y: [0, p.driftY, -p.driftY * 0.5, p.driftY * 0.3, 0],
                        x: [0, p.driftX * 0.6, -p.driftX * 0.4, p.driftX * 0.2, 0],
                        opacity: [0.15, 0.7, 0.2, 0.6, 0.15],
                        scale: [1, 1.8, 0.6, 1.4, 1],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: p.delay,
                    }}
                />
            ))}

            {/* ── Layer 5: Shooting Stars ── */}
            {shootingStars.map((star) => (
                <motion.div
                    key={`star-${star.id}`}
                    className="absolute h-[1px]"
                    style={{
                        top: star.top,
                        left: "-200px",
                        width: star.width,
                        background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 50%, transparent 100%)",
                        filter: "blur(0.5px)",
                        boxShadow: "0 0 6px 1px rgba(255,255,255,0.3)",
                    }}
                    animate={{
                        x: ["0vw", "120vw"],
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        ease: [0.25, 0.1, 0.25, 1],
                        delay: star.delay,
                        repeatDelay: 6 + Math.random() * 8,
                    }}
                />
            ))}

            {/* ── Layer 6: Animated Grid with perspective ── */}
            <div
                className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: "50px 50px",
                    maskImage: "radial-gradient(ellipse 70% 50% at 50% 50%, black 20%, transparent 70%)",
                    WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 50%, black 20%, transparent 70%)",
                    perspective: "500px",
                    transform: "rotateX(30deg) scale(1.5)",
                    transformOrigin: "center 80%",
                }}
            />

            {/* ── Layer 7: Pulsing Ring Accents ── */}
            {[
                { top: "12%", right: "18%", size: "w-[200px] h-[200px] md:w-[350px] md:h-[350px]", border: "border-purple-400/5 dark:border-purple-400/15", delay: 0, dur: 7, scale: 1.4 },
                { bottom: "20%", left: "8%", size: "w-[160px] h-[160px] md:w-[280px] md:h-[280px]", border: "border-cyan-400/5 dark:border-cyan-400/12", delay: 3, dur: 9, scale: 1.5 },
                { top: "50%", right: "5%", size: "w-[120px] h-[120px] md:w-[220px] md:h-[220px]", border: "border-pink-400/5 dark:border-pink-400/10", delay: 5, dur: 11, scale: 1.6 },
                { top: "30%", left: "25%", size: "w-[100px] h-[100px] md:w-[180px] md:h-[180px]", border: "border-emerald-400/5 dark:border-emerald-400/10", delay: 2, dur: 8, scale: 1.3 },
            ].map((ring, i) => (
                <motion.div
                    key={`ring-${i}`}
                    className={`absolute rounded-full border ${ring.size} ${ring.border}`}
                    style={{ top: ring.top, bottom: ring.bottom, left: ring.left, right: ring.right }}
                    animate={{
                        scale: [1, ring.scale, 1],
                        opacity: [0.1, 0.4, 0.1],
                    }}
                    transition={{
                        duration: ring.dur,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: ring.delay,
                    }}
                />
            ))}

            {/* ── Layer 8: Floating Geometric Shapes ── */}
            {[
                { top: "8%", left: "55%", size: "w-8 h-8 md:w-14 md:h-14", border: "border-white/[0.06] dark:border-white/[0.12]", rotate: [45, 135, 225, 315, 405], dur: 20, shape: "" },
                { bottom: "15%", right: "25%", size: "w-6 h-6 md:w-10 md:h-10", border: "border-purple-300/[0.06] dark:border-purple-300/[0.12]", rotate: [0, 90, 180, 270, 360], dur: 24, shape: "rounded-sm" },
                { top: "35%", left: "85%", size: "w-5 h-5 md:w-9 md:h-9", border: "border-cyan-300/[0.05] dark:border-cyan-300/[0.10]", rotate: [0, -120, -240, -360], dur: 18, shape: "rounded-full" },
                { bottom: "40%", left: "3%", size: "w-7 h-7 md:w-12 md:h-12", border: "border-pink-300/[0.04] dark:border-pink-300/[0.08]", rotate: [30, 120, 210, 300, 390], dur: 22, shape: "" },
                { top: "65%", right: "40%", size: "w-4 h-4 md:w-7 md:h-7", border: "border-emerald-300/[0.05] dark:border-emerald-300/[0.10]", rotate: [0, 180, 360], dur: 16, shape: "rounded-sm" },
            ].map((geo, i) => (
                <motion.div
                    key={`geo-${i}`}
                    className={`absolute border ${geo.size} ${geo.border} ${geo.shape}`}
                    style={{ top: geo.top, bottom: geo.bottom, left: geo.left, right: geo.right }}
                    animate={{
                        y: [0, -30, 20, -15, 0],
                        x: [0, 15, -10, 8, 0],
                        rotate: geo.rotate,
                        opacity: [0.15, 0.35, 0.1, 0.3, 0.15],
                    }}
                    transition={{
                        duration: geo.dur,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 1.5,
                    }}
                />
            ))}

            {/* ── Layer 9: Floating Code Symbols (Developer Vibe) ── */}
            {[
                { text: "{ }", top: "8%", left: "12%", size: "text-lg md:text-2xl", delay: 0, dur: 18 },
                { text: "< />", top: "22%", right: "8%", size: "text-base md:text-xl", delay: 2, dur: 22 },
                { text: "=>", top: "45%", left: "4%", size: "text-xl md:text-3xl", delay: 1, dur: 16 },
                { text: "//", bottom: "25%", right: "15%", size: "text-lg md:text-2xl", delay: 3, dur: 20 },
                { text: "const", top: "15%", left: "70%", size: "text-xs md:text-sm", delay: 4, dur: 24 },
                { text: "( )", bottom: "35%", left: "20%", size: "text-base md:text-xl", delay: 1.5, dur: 19 },
                { text: "&&", top: "60%", right: "30%", size: "text-sm md:text-base", delay: 5, dur: 21 },
                { text: "import", bottom: "15%", left: "55%", size: "text-xs md:text-sm", delay: 2.5, dur: 17 },
                { text: "[ ]", top: "35%", right: "45%", size: "text-base md:text-lg", delay: 3.5, dur: 23 },
                { text: "===", bottom: "45%", right: "5%", size: "text-sm md:text-base", delay: 0.5, dur: 15 },
                { text: "function", top: "75%", left: "8%", size: "text-xs md:text-sm", delay: 6, dur: 20 },
                { text: "</div>", top: "55%", left: "45%", size: "text-xs md:text-sm", delay: 4.5, dur: 18 },
                { text: "return", top: "85%", right: "20%", size: "text-xs md:text-sm", delay: 7, dur: 22 },
                { text: "|>", top: "5%", left: "35%", size: "text-base md:text-xl", delay: 1, dur: 16 },
                { text: "async", bottom: "60%", left: "75%", size: "text-xs md:text-sm", delay: 3, dur: 19 },
            ].map((sym, i) => (
                <motion.span
                    key={`code-${i}`}
                    className={`absolute font-mono ${sym.size} text-white/[0.04] dark:text-white/[0.07] select-none`}
                    style={{ top: sym.top, bottom: sym.bottom, left: sym.left, right: sym.right }}
                    animate={{
                        y: [0, -20, 12, -8, 0],
                        x: [0, 8, -6, 4, 0],
                        opacity: [0.04, 0.12, 0.03, 0.10, 0.04],
                        rotate: [0, 3, -2, 1, 0],
                    }}
                    transition={{
                        duration: sym.dur,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: sym.delay,
                    }}
                >
                    {sym.text}
                </motion.span>
            ))}

            {/* ── Layer 10: Code Rain (subtle falling characters) ── */}
            {useMemo(() =>
                Array.from({ length: 20 }).map((_, i) => {
                    const chars = "01{}[]<>=;:./\\|()&!?#@$%^*+-~`";
                    const col = chars[Math.floor(Math.random() * chars.length)];
                    return (
                        <motion.span
                            key={`rain-${i}`}
                            className="absolute font-mono text-xs text-green-400/[0.06] dark:text-green-400/[0.10] select-none"
                            style={{
                                left: `${Math.random() * 95}%`,
                                top: "-20px",
                            }}
                            animate={{
                                y: ["0vh", "105vh"],
                                opacity: [0, 0.1, 0.08, 0],
                            }}
                            transition={{
                                duration: 8 + Math.random() * 6,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 10,
                            }}
                        >
                            {col}
                        </motion.span>
                    );
                }), []
            )}

            {/* ── Layer 11: Subtle Noise / Grain ── */}
            <div
                className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "128px 128px",
                }}
            />

            {/* ── Layer 12: Vignette ── */}
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.2) 100%)",
                }}
            />
        </div>
    );
};

export default BackgroundAnimations;
