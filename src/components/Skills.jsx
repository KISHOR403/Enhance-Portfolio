import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaJs, FaDatabase, FaGitAlt, FaGithub, FaJenkins, FaJira, FaDocker, FaHtml5, FaCss3Alt, FaPython, FaAws, FaLinux } from 'react-icons/fa';
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
    { grad: 'linear-gradient(135deg,#fbbf2422,#fbbf2408)', border: '#fde68acc', glow: '0 0 12px #fde68a88, 0 0 28px #fde68a22', icon: '#fde68a', dot: '#fde68a' },
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

            <div
                className="flex items-center gap-3 w-max"
                style={{
                    animation: `marqueeScroll${reverse ? 'Rev' : ''} 35s linear infinite`,
                }}
            >
                {doubled.map((item, i) => {
                    if (item.type === 'div') return <Divider key={i} label={item.label} color={item.color} />;

                    const n = NEON[item._origIndex ?? 0] ?? NEON[0];
                    return (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.08, y: -3 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                            className="group relative flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-default whitespace-nowrap"
                            style={{
                                background: 'rgba(15,23,42,0.6)',
                                borderLeft: `2px solid ${n.icon}`,
                                backdropFilter: 'blur(8px)',
                            }}
                        >
                            {/* Icon */}
                            <span
                                className="relative z-10 flex items-center justify-center text-lg shrink-0"
                                style={{ color: n.icon }}
                            >
                                {item.icon}
                            </span>

                            {/* Skill name */}
                            <span
                                className="relative z-10 text-[11px] font-semibold tracking-wide text-gray-300"
                            >
                                {item.name}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};


/* ══════════════════════════════════════════════════════
   SKILLS — Interactive Constellation (User-Friendly)
══════════════════════════════════════════════════════ */

const SKL = [
    // Languages (blue cluster — left)
    { id: 0, name: 'Java', cat: 0, x: 10, y: 20 },
    { id: 1, name: 'Python', cat: 0, x: 23, y: 10 },
    { id: 2, name: 'JavaScript', cat: 0, x: 28, y: 30 },
    { id: 3, name: 'HTML', cat: 0, x: 12, y: 48 },
    { id: 4, name: 'CSS', cat: 0, x: 5, y: 68 },
    { id: 5, name: 'SQL', cat: 0, x: 28, y: 58 },
    // Automation (green cluster — centre)
    { id: 6, name: 'Selenium', cat: 1, x: 44, y: 14 },
    { id: 7, name: 'Appium', cat: 1, x: 56, y: 26 },
    { id: 8, name: 'TestNG', cat: 1, x: 42, y: 42 },
    { id: 9, name: 'JUnit', cat: 1, x: 60, y: 10 },
    { id: 10, name: 'Rest Assured', cat: 1, x: 55, y: 55 },
    { id: 11, name: 'Postman', cat: 1, x: 43, y: 70 },
    // Dev Tools (purple cluster — right)
    { id: 12, name: 'Git', cat: 2, x: 74, y: 18 },
    { id: 13, name: 'Docker', cat: 2, x: 88, y: 10 },
    { id: 14, name: 'GitHub', cat: 2, x: 80, y: 40 },
    { id: 15, name: 'Jenkins', cat: 2, x: 93, y: 30 },
    { id: 16, name: 'Jira', cat: 2, x: 88, y: 65 },
    { id: 17, name: 'AWS', cat: 2, x: 73, y: 60 },
    { id: 18, name: 'Linux', cat: 2, x: 93, y: 50 },
];

/* Mobile: clusters stacked vertically (Languages top, Automation mid, DevTools bottom) */
const SKL_MOBILE = [
    // Languages — top (rows at y=5, y=17)
    { id: 0, x: 15, y: 5 },
    { id: 1, x: 50, y: 5 },
    { id: 2, x: 85, y: 5 },
    { id: 3, x: 15, y: 17 },
    { id: 4, x: 50, y: 17 },
    { id: 5, x: 85, y: 17 },
    // Automation — middle (rows at y=33, y=45)
    { id: 6, x: 15, y: 33 },
    { id: 7, x: 50, y: 33 },
    { id: 8, x: 85, y: 33 },
    { id: 9, x: 15, y: 45 },
    { id: 10, x: 50, y: 45 },
    { id: 11, x: 85, y: 45 },
    // Dev Tools — bottom (rows at y=61, y=73, y=85)
    { id: 12, x: 15, y: 61 },
    { id: 13, x: 50, y: 61 },
    { id: 14, x: 85, y: 61 },
    { id: 15, x: 15, y: 73 },
    { id: 16, x: 50, y: 73 },
    { id: 17, x: 85, y: 73 },
    { id: 18, x: 50, y: 85 },
];

const LINES = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 2], [0, 3], [3, 5],
    [6, 7], [7, 9], [9, 6], [6, 8], [8, 10], [10, 11], [7, 10], [8, 11],
    [12, 13], [13, 15], [15, 14], [14, 12], [14, 16], [16, 17], [17, 14], [12, 15],
    [2, 6], [5, 8], [10, 17],
    [18, 13], [18, 15], [18, 17],
];
const BRIDGES = new Set(['2-6', '5-8', '10-17']);

const CC = [
    { label: 'Languages', clr: '#60a5fa', emoji: '💻' },
    { label: 'Automation', clr: '#4ade80', emoji: '🤖' },
    { label: 'Dev Tools', clr: '#c084fc', emoji: '🛠️' },
];

const sklIcon = (id) => {
    switch (id) {
        case 0: return <FaJava />;
        case 1: return <FaPython />;
        case 2: return <FaJs />;
        case 3: return <FaHtml5 />;
        case 4: return <FaCss3Alt />;
        case 5: return <FaDatabase />;
        case 6: return <img src="https://cdn.simpleicons.org/selenium/43B02A" alt="" className="w-5 h-5 md:w-6 md:h-6" />;
        case 7: return <SiAppium />;
        case 8: return <img src={testngIcon} alt="" className="w-5 h-5 md:w-6 md:h-6 object-contain" />;
        case 9: return <SiJunit5 />;
        case 10: return <img src={restassuredIcon} alt="" className="w-5 h-5 md:w-6 md:h-6 object-contain" />;
        case 11: return <SiPostman />;
        case 12: return <FaGitAlt />;
        case 13: return <FaDocker />;
        case 14: return <FaGithub />;
        case 15: return <FaJenkins />;
        case 16: return <FaJira />;
        case 17: return <FaAws />;
        case 18: return <FaLinux />;
        default: return null;
    }
};

/* Decorative background stars */
const DOTS = Array.from({ length: 120 }, (_, i) => {
    const s = (i * 9301 + 49297) % 233280;
    return {
        x: (s % 10000) / 100,
        y: ((s * 7) % 8000) / 100,
        r: 0.3 + (s % 30) / 50,
        dur: 2 + (s % 40) / 10,
        delay: (s % 30) / 10,
    };
});

const Skills = () => {
    const flat = SKL.map(s => ({ ...s, icon: sklIcon(s.id) }));
    const [hov, setHov] = React.useState(null);
    const [sel, setSel] = React.useState(null);
    const [vis, setVis] = React.useState(false);
    const [dragging, setDragging] = React.useState(null);
    const [positions, setPositions] = React.useState({});
    const [mouseGlow, setMouseGlow] = React.useState({ x: 50, y: 50, active: false });
    const ref = React.useRef(null);
    const canvasRef = React.useRef(null);

    React.useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    const [isMobile, setIsMobile] = React.useState(() => typeof window !== 'undefined' && window.innerWidth < 640);
    React.useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 640);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    /* Neighbours of selected */
    const nbrs = React.useMemo(() => {
        if (sel === null) return new Set();
        const s = new Set();
        LINES.forEach(([a, b]) => { if (a === sel) s.add(b); if (b === sel) s.add(a); });
        return s;
    }, [sel]);

    const active = hov ?? sel;
    const activeNode = active !== null ? SKL[active] : null;
    const activeClr = activeNode ? CC[activeNode.cat].clr : null;

    /* Original position helper */
    const origPos = (id) => {
        if (isMobile) {
            const m = SKL_MOBILE.find(s => s.id === id);
            return m ? { x: m.x, y: m.y } : { x: SKL[id].x, y: SKL[id].y * 0.8 };
        }
        return { x: SKL[id].x, y: SKL[id].y * 0.8 };
    };

    /* Position (may be dragged) */
    const getPos = (id) => positions[id] || origPos(id);

    /* Drag handler — convert pixel delta to % of container */
    const handleDrag = (id, info) => {
        if (!canvasRef.current) return;
        const rect = canvasRef.current.getBoundingClientRect();
        const cur = origPos(id);
        const prev = positions[id] || cur;
        const dx = (info.delta.x / rect.width) * 100;
        const dy = (info.delta.y / rect.height) * 100;
        setPositions(p => ({
            ...p,
            [id]: { x: Math.max(3, Math.min(97, prev.x + dx)), y: Math.max(2, Math.min(95, prev.y + dy)) }
        }));
    };

    const resetPositions = () => { setPositions({}); setSel(null); };

    /* Mouse glow tracking */
    const handleMouseMove = (e) => {
        if (!canvasRef.current) return;
        const rect = canvasRef.current.getBoundingClientRect();
        setMouseGlow({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
            active: true,
        });
    };

    return (
        <section id="skills" ref={ref} className="py-16 md:py-24 relative overflow-hidden z-10">

            {/* CSS */}
            <style>{`
                @keyframes marqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                @keyframes marqueeScrollRev { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
                @keyframes twinkle { 0%,100%{opacity:0.15} 50%{opacity:0.6} }
                @keyframes shootStar {
                    0%   { transform: translateX(0) translateY(0) rotate(-45deg); opacity:0; }
                    10%  { opacity:1; }
                    100% { transform: translateX(300px) translateY(300px) rotate(-45deg); opacity:0; }
                }
                @keyframes flowEdge {
                    0%   { stroke-dashoffset: 0; }
                    100% { stroke-dashoffset: -12; }
                }
                @keyframes flowEdgeFast {
                    0%   { stroke-dashoffset: 0; }
                    100% { stroke-dashoffset: -16; }
                }
                @keyframes particlePulse {
                    0%,100% { r: 0.4; opacity: 0.3; }
                    50%     { r: 0.8; opacity: 0.9; }
                }
                .flow-line {
                    stroke-dasharray: 2 1.5;
                    animation: flowEdge 2s linear infinite;
                }
                .flow-line-active {
                    stroke-dasharray: 3 1;
                    animation: flowEdgeFast 0.8s linear infinite;
                }
                .flow-line-bridge {
                    stroke-dasharray: 1.5 2;
                    animation: flowEdge 3s linear infinite;
                }
                .shoot-star {
                    position:absolute; width:2px; height:2px; border-radius:50%;
                    background: linear-gradient(45deg, #fff, transparent);
                    box-shadow: 0 0 6px 2px rgba(255,255,255,0.3);
                    animation: shootStar 4s linear infinite;
                }
            `}</style>

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0d1a2e_0%,transparent_70%)] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

                {/* ── Heading ── */}
                <div className="text-center mb-6">
                    <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="relative inline-block p-[3px] rounded-full overflow-hidden">
                        <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_80%,#000_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_80%,#ffffff_100%)] will-change-transform" />
                        <div className="relative z-10 bg-white dark:bg-gray-900 px-6 md:px-8 py-2.5 rounded-full text-dark dark:text-white font-mono font-bold text-xl md:text-3xl">
                            Skills
                        </div>
                    </motion.div>
                </div>

                {/* ── Marquee ── */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }} className="mb-6 md:mb-10">
                    <MarqueeRow items={flat} />
                    <MarqueeRow items={[...flat].reverse()} reverse />
                </motion.div>

                {/* ══ CONSTELLATION ══ */}
                <motion.div
                    ref={canvasRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={vis ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden"
                    style={{
                        minHeight: 380,
                        aspectRatio: isMobile ? '3/4' : '16/9',
                        background: 'radial-gradient(ellipse at 50% 30%, #0e1e38 0%, #050b18 80%)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        cursor: dragging !== null ? 'grabbing' : 'default',
                    }}
                    onClick={(e) => { if (e.target === e.currentTarget) setSel(null); }}
                    onTouchEnd={(e) => { if (e.target === e.currentTarget) setSel(null); }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setMouseGlow(g => ({ ...g, active: false }))}
                    onDoubleClick={resetPositions}
                >
                    {/* Mouse-follow glow */}
                    {mouseGlow.active && !isMobile && (
                        <div className="absolute pointer-events-none z-0 transition-opacity duration-300"
                            style={{
                                left: `${mouseGlow.x}%`,
                                top: `${mouseGlow.y}%`,
                                transform: 'translate(-50%, -50%)',
                                width: 220,
                                height: 220,
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(100,180,255,0.08) 0%, transparent 70%)',
                            }}
                        />
                    )}
                    {/* Shooting stars */}
                    <div className="shoot-star" style={{ top: '10%', left: '15%', animationDelay: '0s' }} />
                    <div className="shoot-star" style={{ top: '30%', left: '60%', animationDelay: '2s' }} />
                    <div className="shoot-star" style={{ top: '55%', left: '35%', animationDelay: '3.5s' }} />

                    {/* SVG edges + decorative dots */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox={isMobile ? "0 0 100 95" : "0 0 100 80"} preserveAspectRatio="none">
                        {/* Background twinkle dots */}
                        {DOTS.map((d, i) => (
                            <circle key={i} cx={d.x} cy={d.y} r={d.r}
                                fill="#4a6fa5" style={{ animation: `twinkle ${d.dur}s ease-in-out ${d.delay}s infinite` }} />
                        ))}

                        {/* Constellation lines + particle dots */}
                        {LINES.map(([a, b], li) => {
                            const na = SKL[a], nb = SKL[b];
                            const pa = getPos(a), pb = getPos(b);
                            const isBridge = BRIDGES.has(`${a}-${b}`);
                            const clr = isBridge ? '#ffffff' : CC[na.cat].clr;
                            const isActive = active === a || active === b;
                            const isNeighbour = sel !== null && (nbrs.has(a) || nbrs.has(b)) && (a === sel || b === sel);
                            const lit = isActive || isNeighbour;
                            const dur = 2 + (li % 5) * 0.5;
                            return (
                                <React.Fragment key={`${a}-${b}`}>
                                    <line
                                        x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y}
                                        stroke={clr}
                                        strokeWidth={lit ? 1.2 : 0.5}
                                        strokeOpacity={lit ? 0.3 : 0.08}
                                        style={{ filter: `blur(${lit ? 2 : 1}px)`, transition: 'all 0.3s' }}
                                    />
                                    <line
                                        x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y}
                                        stroke={clr}
                                        strokeWidth={lit ? 0.5 : 0.2}
                                        strokeOpacity={lit ? 1 : 0.45}
                                        strokeLinecap="round"
                                        className={lit ? 'flow-line-active' : (isBridge ? 'flow-line-bridge' : 'flow-line')}
                                        style={lit ? { filter: `drop-shadow(0 0 3px ${clr})` } : undefined}
                                    />
                                    {/* Particle dot traveling along edge */}
                                    <circle r={lit ? 0.7 : 0.45} fill={clr}
                                        opacity={lit ? 0.9 : 0.5}
                                        style={{ animation: `particlePulse ${dur * 0.5}s ease-in-out infinite` }}>
                                        <animateMotion
                                            dur={`${dur}s`}
                                            repeatCount="indefinite"
                                            path={`M${pa.x},${pa.y} L${pb.x},${pb.y}`}
                                        />
                                    </circle>
                                </React.Fragment>
                            );
                        })}
                    </svg>

                    {/* Category labels on the map */}
                    {CC.map((c, ci) => {
                        const catNodes = SKL.filter(s => s.cat === ci);
                        if (isMobile) {
                            const mobileNodes = catNodes.map(n => SKL_MOBILE.find(m => m.id === n.id));
                            const cx2 = mobileNodes.reduce((s, m) => s + m.x, 0) / mobileNodes.length;
                            const cy2 = Math.min(...mobileNodes.map(m => m.y)) - 5;
                            return (
                                <div key={ci} className="absolute pointer-events-none flex items-center gap-1"
                                    style={{ left: `${cx2}%`, top: `${Math.max(1, cy2)}%`, transform: 'translateX(-50%)' }}>
                                    <span className="text-[9px]">{c.emoji}</span>
                                    <span className="text-[8px] font-black tracking-wider uppercase"
                                        style={{ color: c.clr, textShadow: `0 0 10px ${c.clr}88` }}>{c.label}</span>
                                </div>
                            );
                        }
                        const cx = catNodes.reduce((s, n) => s + n.x, 0) / catNodes.length;
                        const cy = Math.min(...catNodes.map(n => n.y)) - 8;
                        return (
                            <div key={ci} className="absolute pointer-events-none flex items-center gap-1.5"
                                style={{ left: `${cx}%`, top: `${Math.max(2, cy * 0.8)}%`, transform: 'translateX(-50%)' }}>
                                <span className="text-xs">{c.emoji}</span>
                                <span className="text-[10px] font-black tracking-widest uppercase"
                                    style={{ color: c.clr, textShadow: `0 0 12px ${c.clr}88` }}>{c.label}</span>
                            </div>
                        );
                    })}

                    {/* ── SKILL NODES (draggable) ── */}
                    {SKL.map((node, i) => {
                        const c = CC[node.cat].clr;
                        const isHov = hov === node.id;
                        const isSel = sel === node.id;
                        const isNbr = nbrs.has(node.id);
                        const dimmed = sel !== null && !isSel && !isNbr;
                        const p = getPos(node.id);

                        return (
                            <motion.div
                                key={node.id}
                                className="absolute z-10 flex flex-col items-center touch-none"
                                style={{
                                    left: `${p.x}%`,
                                    top: `${p.y}%`,
                                    transform: 'translate(-50%, -50%)',
                                    cursor: dragging === node.id ? 'grabbing' : 'grab',
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={vis ? {
                                    opacity: dimmed ? 0.2 : 1,
                                    scale: 1,
                                } : {}}
                                transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.03 * i + 0.3 }}
                                drag
                                dragMomentum={false}
                                dragElastic={0}
                                onDragStart={() => setDragging(node.id)}
                                onDrag={(_, info) => handleDrag(node.id, info)}
                                onDragEnd={() => setDragging(null)}
                                onHoverStart={() => setHov(node.id)}
                                onHoverEnd={() => setHov(null)}
                                onClick={(e) => { e.stopPropagation(); setSel(prev => prev === node.id ? null : node.id); }}
                                whileHover={{ scale: 1.12 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {/* Pulse ring */}
                                {(isHov || isSel) && (
                                    <motion.span
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                                        initial={{ scale: 0.5, opacity: 0.8 }}
                                        animate={{ scale: 2.8, opacity: 0 }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                        style={{ width: 50, height: 50, background: c, filter: 'blur(6px)' }}
                                    />
                                )}

                                {/* Neighbour ring */}
                                {isNbr && !isSel && (
                                    <motion.span
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 1.2, repeat: Infinity }}
                                        style={{ width: 56, height: 56, border: `2px solid ${c}88` }}
                                    />
                                )}

                                {/* Star orb */}
                                <motion.div
                                    className="relative w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center"
                                    animate={!isHov && !isSel ? {
                                        scale: [1, 1.06, 1],
                                        transition: { duration: 3 + (node.id % 4) * 0.5, repeat: Infinity, ease: 'easeInOut', delay: node.id * 0.15 }
                                    } : {}}
                                    style={{
                                        background: '#0f1729',
                                        border: `2px solid ${c}`,
                                        boxShadow: isSel
                                            ? `0 0 0 3px ${c}66, 0 0 20px ${c}, 0 0 40px ${c}66, inset 0 0 12px ${c}33`
                                            : isHov
                                                ? `0 0 0 2px ${c}55, 0 0 16px ${c}aa, inset 0 0 8px ${c}22`
                                                : `0 0 12px ${c}55, inset 0 0 6px ${c}11`,
                                        transition: 'box-shadow 0.3s, border-color 0.3s',
                                    }}
                                >
                                    <span className="text-xl md:text-2xl pointer-events-none" style={{ color: c }}>
                                        {sklIcon(node.id)}
                                    </span>
                                </motion.div>

                                {/* Label */}
                                <span
                                    className="mt-1 text-[9px] md:text-[11px] font-semibold tracking-wide whitespace-nowrap pointer-events-none"
                                    style={{
                                        color: `${c}cc`,
                                        textShadow: `0 0 8px ${c}66, 0 1px 2px rgba(0,0,0,0.8)`,
                                    }}
                                >
                                    {node.name}
                                </span>
                            </motion.div>
                        );
                    })}

                    {/* Hover / Select tooltip card */}
                    {activeNode && (
                        <motion.div
                            key={`tip-${active}`}
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-3 rounded-2xl pointer-events-none z-30"
                            style={{
                                background: 'linear-gradient(135deg, rgba(15,23,42,0.9), rgba(15,23,42,0.7))',
                                border: `1px solid ${activeClr}66`,
                                boxShadow: `0 0 30px ${activeClr}44, 0 8px 32px rgba(0,0,0,0.5)`,
                                backdropFilter: 'blur(16px)',
                            }}
                        >
                            <span className="text-3xl">{sklIcon(activeNode.id)}</span>
                            <div>
                                <p className="text-sm font-black leading-tight" style={{ color: activeClr }}>{activeNode.name}</p>
                                <p className="text-[10px] font-mono mt-0.5" style={{ color: CC[activeNode.cat].clr }}>
                                    {CC[activeNode.cat].emoji} {CC[activeNode.cat].label}
                                </p>
                                {sel !== null && (
                                    <p className="text-[9px] text-gray-400 mt-0.5">
                                        {nbrs.size} connected • tap elsewhere to deselect
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {/* Category legend — bottom-left */}
                    <div className="absolute bottom-3 left-3 flex flex-col gap-1.5">
                        {CC.map(c => (
                            <div key={c.label} className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: c.clr, boxShadow: `0 0 6px ${c.clr}` }} />
                                <span className="text-[9px] font-bold" style={{ color: c.clr }}>{c.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Instructions + Reset */}
                    <div className="absolute bottom-3 right-3 text-right flex flex-col items-end gap-1.5">
                        <p className="text-[9px] text-gray-500 hidden md:block">drag stars • click to select • double-click to reset</p>
                        <p className="text-[9px] text-gray-500 md:hidden">tap a star to explore</p>
                        {Object.keys(positions).length > 0 && (
                            <button
                                onClick={resetPositions}
                                className="text-[9px] text-gray-400 bg-white/5 hover:bg-white/10 px-2 py-1 rounded-full border border-white/10 transition-all cursor-pointer"
                            >
                                ↺ Reset positions
                            </button>
                        )}
                    </div>
                </motion.div>


            </div>
        </section>
    );
};

export default Skills;
