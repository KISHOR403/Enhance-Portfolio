import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaJs, FaDatabase, FaGitAlt, FaGithub, FaJenkins, FaJira, FaDocker, FaHtml5, FaCss3Alt, FaPython, FaAws } from 'react-icons/fa';
import { SiAppium, SiPostman, SiJunit5 } from 'react-icons/si';

// Importing local SVG assets
import testngIcon from '../assets/icons/testng.svg';
import restassuredIcon from '../assets/icons/restassured.svg';

/* ──────────────────────────────────────────
   Premium neon palette — one entry per skill
────────────────────────────────────────── */
const NEON = [
    // Languages (0-5)
    { grad: 'linear-gradient(135deg,#ff6a0022,#ff6a0008)', border: '#f97316cc', glow: '0 0 12px #f9731688, 0 0 28px #f9731622', icon: '#f97316', dot: '#f97316' },
    { grad: 'linear-gradient(135deg,#3b82f622,#3b82f608)', border: '#60a5facc', glow: '0 0 12px #60a5fa88, 0 0 28px #60a5fa22', icon: '#60a5fa', dot: '#60a5fa' },
    { grad: 'linear-gradient(135deg,#facc1522,#facc1508)', border: '#facc15cc', glow: '0 0 12px #facc1588, 0 0 28px #facc1522', icon: '#facc15', dot: '#facc15' },
    { grad: 'linear-gradient(135deg,#ea580c22,#ea580c08)', border: '#fb923ccc', glow: '0 0 12px #fb923c88, 0 0 28px #fb923c22', icon: '#fb923c', dot: '#fb923c' },
    { grad: 'linear-gradient(135deg,#0ea5e922,#0ea5e908)', border: '#38bdf8cc', glow: '0 0 12px #38bdf888, 0 0 28px #38bdf822', icon: '#38bdf8', dot: '#38bdf8' },
    { grad: 'linear-gradient(135deg,#06b6d422,#06b6d408)', border: '#22d3eecc', glow: '0 0 12px #22d3ee88, 0 0 28px #22d3ee22', icon: '#22d3ee', dot: '#22d3ee' },
    // Automation (6-11)
    { grad: 'linear-gradient(135deg,#22c55e22,#22c55e08)', border: '#4ade80cc', glow: '0 0 12px #4ade8088, 0 0 28px #4ade8022', icon: '#4ade80', dot: '#4ade80' },
    { grad: 'linear-gradient(135deg,#a855f722,#a855f708)', border: '#c084fccc', glow: '0 0 12px #c084fc88, 0 0 28px #c084fc22', icon: '#c084fc', dot: '#c084fc' },
    { grad: 'linear-gradient(135deg,#ef444422,#ef444408)', border: '#f87171cc', glow: '0 0 12px #f8717188, 0 0 28px #f8717122', icon: '#f87171', dot: '#f87171' },
    { grad: 'linear-gradient(135deg,#dc262622,#dc262608)', border: '#f87171cc', glow: '0 0 12px #f8717188, 0 0 28px #f8717122', icon: '#f87171', dot: '#f87171' },
    { grad: 'linear-gradient(135deg,#14b8a622,#14b8a608)', border: '#2dd4bfcc', glow: '0 0 12px #2dd4bf88, 0 0 28px #2dd4bf22', icon: '#2dd4bf', dot: '#2dd4bf' },
    { grad: 'linear-gradient(135deg,#f9731622,#f9731608)', border: '#fb923ccc', glow: '0 0 12px #fb923c88, 0 0 28px #fb923c22', icon: '#fb923c', dot: '#fb923c' },
    // Dev Tools (12-16)
    { grad: 'linear-gradient(135deg,#f4363622,#f4363608)', border: '#fb7185cc', glow: '0 0 12px #fb718588, 0 0 28px #fb718522', icon: '#fb7185', dot: '#fb7185' },
    { grad: 'linear-gradient(135deg,#2563eb22,#2563eb08)', border: '#60a5facc', glow: '0 0 12px #60a5fa88, 0 0 28px #60a5fa22', icon: '#60a5fa', dot: '#60a5fa' },
    { grad: 'linear-gradient(135deg,#6b728022,#6b728008)', border: '#94a3b8cc', glow: '0 0 12px #94a3b888, 0 0 28px #94a3b822', icon: '#94a3b8', dot: '#94a3b8' },
    { grad: 'linear-gradient(135deg,#d9770622,#d9770608)', border: '#fbbf24cc', glow: '0 0 12px #fbbf2488, 0 0 28px #fbbf2422', icon: '#fbbf24', dot: '#fbbf24' },
    { grad: 'linear-gradient(135deg,#1d4ed822,#1d4ed808)', border: '#60a5facc', glow: '0 0 12px #60a5fa88, 0 0 28px #60a5fa22', icon: '#60a5fa', dot: '#60a5fa' },
    { grad: 'linear-gradient(135deg,#f9731622,#f9731608)', border: '#ff9900cc', glow: '0 0 12px #ff990088, 0 0 28px #ff990022', icon: '#ff9900', dot: '#ff9900' },
];

/* Category divider chip shown between groups */
const Divider = ({ label, color }) => (
    <div
        className="flex items-center gap-1.5 px-4 py-2 rounded-full whitespace-nowrap self-center shrink-0 font-mono font-bold text-[10px] uppercase tracking-widest"
        style={{
            background: `linear-gradient(135deg,${color}33,${color}11)`,
            border: `1px solid ${color}99`,
            color: color,
            boxShadow: `0 0 10px ${color}55`,
        }}
    >
        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color }} />
        {label}
        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color }} />
    </div>
);

/* ──────────────────────────────────────────
   Infinite Marquee Component — Premium Neon
────────────────────────────────────────── */
const MarqueeRow = ({ items, reverse = false }) => {
    /* Build stream: inject category dividers between groups */
    const stream = [
        { type: 'div', label: '💻 Languages', color: '#60a5fa' },
        ...items.slice(0, 6).map((s) => ({ type: 'skill', ...s })),
        { type: 'div', label: '🤖 Automation', color: '#4ade80' },
        ...items.slice(6, 12).map((s) => ({ type: 'skill', ...s })),
        { type: 'div', label: '🛠 Dev Tools', color: '#c084fc' },
        ...items.slice(12).map((s) => ({ type: 'skill', ...s })),
    ];
    const doubled = [...stream, ...stream];

    return (
        <div className="relative overflow-hidden py-2.5">
            {/* Glowing strip behind the row */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-sm" />
            </div>

            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-white dark:from-gray-950 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-white dark:from-gray-950 to-transparent" />

            <motion.div
                className="flex items-center gap-3 w-max"
                animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            >
                {doubled.map((item, i) => {
                    if (item.type === 'div') return <Divider key={i} label={item.label} color={item.color} />;

                    const n = NEON[item._origIndex ?? 0] ?? NEON[0];
                    return (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.12, y: -5 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                            className="group relative flex items-center gap-3 pl-2 pr-5 py-2 rounded-full cursor-default whitespace-nowrap overflow-hidden"
                            style={{
                                background: n.grad,
                                border: `1px solid ${n.border}`,
                                boxShadow: n.glow,
                            }}
                        >
                            {/* Shimmer on hover */}
                            <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                            {/* Icon bubble */}
                            <span
                                className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full text-lg shrink-0"
                                style={{
                                    background: `${n.icon}22`,
                                    boxShadow: `0 0 10px ${n.icon}66`,
                                    border: `1px solid ${n.icon}88`,
                                }}
                            >
                                {item.icon}
                            </span>

                            {/* Skill name */}
                            <span
                                className="relative z-10 text-[11px] font-extrabold tracking-wide"
                                style={{ color: n.icon, textShadow: `0 0 8px ${n.icon}88` }}
                            >
                                {item.name}
                            </span>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};


/* ──────────────────────────────────────────
   Main Skills — Hexagonal Honeycomb Grid
────────────────────────────────────────── */
const Skills = () => {
    const allSkills = [
        { name: 'Java', _origIndex: 0, icon: <FaJava className="text-orange-500" /> },
        { name: 'Python', _origIndex: 1, icon: <FaPython className="text-blue-500" /> },
        { name: 'JavaScript', _origIndex: 2, icon: <FaJs className="text-yellow-400" /> },
        { name: 'HTML', _origIndex: 3, icon: <FaHtml5 className="text-orange-600" /> },
        { name: 'CSS', _origIndex: 4, icon: <FaCss3Alt className="text-sky-400" /> },
        { name: 'SQL', _origIndex: 5, icon: <FaDatabase className="text-blue-400" /> },
        { name: 'Selenium', _origIndex: 6, icon: <img src="https://cdn.simpleicons.org/selenium/43B02A" alt="Selenium" className="w-7 h-7" /> },
        { name: 'Appium', _origIndex: 7, icon: <SiAppium className="text-purple-400" /> },
        { name: 'TestNG', _origIndex: 8, icon: <img src={testngIcon} alt="TestNG" className="w-7 h-7 object-contain" /> },
        { name: 'JUnit', _origIndex: 9, icon: <SiJunit5 className="text-red-500" /> },
        { name: 'Rest Assured', _origIndex: 10, icon: <img src={restassuredIcon} alt="Rest Assured" className="w-7 h-7 object-contain" /> },
        { name: 'Postman', _origIndex: 11, icon: <SiPostman className="text-orange-400" /> },
        { name: 'Git', _origIndex: 12, icon: <FaGitAlt className="text-rose-500" /> },
        { name: 'Docker', _origIndex: 13, icon: <FaDocker className="text-blue-500" /> },
        { name: 'GitHub', _origIndex: 14, icon: <FaGithub className="text-gray-200" /> },
        { name: 'Jenkins', _origIndex: 15, icon: <FaJenkins className="text-gray-300" /> },
        { name: 'Jira', _origIndex: 16, icon: <FaJira className="text-blue-400" /> },
        { name: 'AWS', _origIndex: 17, icon: <FaAws className="text-orange-400" /> },
    ];

    /* Honeycomb rows: 5 – 4 – 5 – 3  (offset rows are indented) */
    const rows = [
        { skills: allSkills.slice(0, 5), offset: false },
        { skills: allSkills.slice(5, 9), offset: true },
        { skills: allSkills.slice(9, 14), offset: false },
        { skills: allSkills.slice(14), offset: true },
    ];

    /* Hex clip-path — pointy-top regular hexagon */
    const HEX_CLIP = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';

    return (
        <section id="skills" className="py-24 bg-transparent relative overflow-hidden z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky/10 via-transparent to-transparent -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

                {/* ── Section Heading ── */}
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative inline-block p-[3px] rounded-full overflow-hidden"
                    >
                        <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_80%,#000_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_80%,#ffffff_100%)] will-change-transform" />
                        <div className="relative z-10 bg-white dark:bg-gray-800 px-8 py-3 rounded-full text-dark dark:text-white font-mono font-bold text-2xl md:text-3xl">
                            Skills
                        </div>
                    </motion.div>
                </div>

                {/* ── Marquee ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-16"
                >
                    <MarqueeRow items={allSkills} />
                    <MarqueeRow items={[...allSkills].reverse()} reverse />
                </motion.div>

                {/* ══ HEXAGONAL HONEYCOMB ══ */}
                <div className="flex flex-col items-center" style={{ gap: '6px' }}>
                    {rows.map((row, ri) => (
                        <div
                            key={ri}
                            className="flex"
                            style={{
                                gap: '8px',
                                marginLeft: row.offset ? '63px' : '0px',
                            }}
                        >
                            {row.skills.map((skill, si) => {
                                const n = NEON[skill._origIndex] ?? NEON[0];
                                return (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.3, rotate: -15 }}
                                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 200,
                                            damping: 18,
                                            delay: ri * 0.08 + si * 0.06,
                                        }}
                                        whileHover={{ scale: 1.18, zIndex: 20 }}
                                        className="relative cursor-pointer group"
                                        style={{ width: '116px', height: '134px' }}
                                    >
                                        {/* Outer hex — neon border colour */}
                                        <div
                                            className="w-full h-full absolute inset-0 transition-all duration-300"
                                            style={{
                                                clipPath: HEX_CLIP,
                                                background: n.border,
                                                filter: `drop-shadow(0 0 10px ${n.icon}88)`,
                                                opacity: 0.85,
                                            }}
                                        />
                                        {/* Inner hex — dark fill with gradient */}
                                        <div
                                            className="absolute flex flex-col items-center justify-center gap-1.5"
                                            style={{
                                                clipPath: HEX_CLIP,
                                                background: `linear-gradient(160deg, #0f172a 60%, ${n.icon}18)`,
                                                inset: '3px',
                                                transition: 'background 0.3s',
                                            }}
                                        >
                                            {/* Icon */}
                                            <span className="text-3xl drop-shadow-lg">
                                                {skill.icon}
                                            </span>
                                            {/* Name */}
                                            <span
                                                className="text-[9px] font-extrabold tracking-wide text-center leading-none px-2"
                                                style={{ color: n.icon, textShadow: `0 0 8px ${n.icon}` }}
                                            >
                                                {skill.name}
                                            </span>
                                        </div>

                                        {/* Hover glow overlay */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                            style={{
                                                clipPath: HEX_CLIP,
                                                background: `radial-gradient(circle at center, ${n.icon}33, transparent 70%)`,
                                            }}
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>
                    ))}
                </div>

                {/* Category legend */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center gap-8 mt-10"
                >
                    {[
                        { label: 'Languages', color: '#60a5fa', range: '0-5' },
                        { label: 'Automation', color: '#4ade80', range: '6-11' },
                        { label: 'Dev Tools', color: '#c084fc', range: '12-16' },
                    ].map((cat) => (
                        <div key={cat.label} className="flex items-center gap-2">
                            <div
                                className="w-3 h-3 rounded-sm"
                                style={{
                                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                    background: cat.color,
                                    boxShadow: `0 0 8px ${cat.color}`,
                                }}
                            />
                            <span className="text-[11px] font-bold" style={{ color: cat.color }}>
                                {cat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
