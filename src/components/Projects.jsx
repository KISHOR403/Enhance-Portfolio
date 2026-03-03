import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    FaExternalLinkAlt,
    FaShoppingCart,
    FaBrain,
    FaExchangeAlt,
    FaGlobe,
    FaCode,
    FaRobot,
    FaInfinity,
    FaMobileAlt,
    FaJava,
    FaBoxOpen,
    FaTerminal
} from 'react-icons/fa';
import {
    SiJavascript,
    SiReact,
    SiPostman,
    SiSelenium,
    SiMongodb,
    SiDocker,
    SiAppium,
    SiTestinglibrary
} from 'react-icons/si';

// Project Images
import onecartImg from '../assets/projects/onecart.png';
import weatherImg from '../assets/projects/weather.png';
import apiTestingImg from '../assets/projects/api_testing.png';
import mobileTestingImg from '../assets/projects/mobile_testing.png';
import webAutomationImg from '../assets/projects/web_automation.png';

const getTagIcon = (tag) => {
    const iconSize = 14;
    switch (tag.toUpperCase()) {
        case 'MERN': return <div className="flex -space-x-1"><SiMongodb size={iconSize} className="text-[#47A248]" /><SiReact size={iconSize} className="text-[#61DAFB]" /></div>;
        case 'AI INTEGRATION': return <FaBrain size={iconSize} className="text-pink-400" />;
        case 'E-COMMERCE': return <FaShoppingCart size={iconSize} className="text-orange-400" />;
        case 'JAVASCRIPT': return <SiJavascript size={iconSize} className="text-[#F7DF1E]" />;
        case 'API INTEGRATION': return <FaExchangeAlt size={iconSize} className="text-blue-400" />;
        case 'WEB DEV': return <FaGlobe size={iconSize} className="text-sky-400" />;
        case 'API TESTING': return <SiPostman size={iconSize} className="text-[#FF6C37]" />;
        case 'AUTOMATION': return <FaRobot size={iconSize} className="text-purple-400" />;
        case 'CI/CD': return <FaInfinity size={iconSize} className="text-emerald-400" />;
        case 'MOBILE TESTING': return <FaMobileAlt size={iconSize} className="text-cyan-400" />;
        case 'APPIUM': return <SiAppium size={iconSize} className="text-[#61DAFB]" />;
        case 'JAVA': return <FaJava size={iconSize} className="text-[#ED8B00]" />;
        case 'WEB TESTING': return <FaCode size={iconSize} className="text-indigo-400" />;
        case 'SELENIUM': return <SiSelenium size={iconSize} className="text-[#43B02A]" />;
        case 'FRAMEWORK': return <FaBoxOpen size={iconSize} className="text-amber-400" />;
        default: return <FaTerminal size={iconSize} className="text-gray-400" />;
    }
};

const ProjectCard = ({ project, index, progress, range, targetScale, isLast }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    // Calculate scale and opacity for the card based on the progress of subsequent cards
    const scale = useTransform(progress, range, [1, isLast ? 1 : targetScale]);
    const overlayOpacity = useTransform(progress, range, [0, isLast ? 0 : 0.6]);

    // Sticky top value: 80px for first, +40px for each subsequent (more compact)
    const stickyTop = 80 + (index * 40);

    return (
        <div ref={container} className="h-[85vh] flex items-center justify-center sticky" style={{ top: `${stickyTop}px`, zIndex: index + 1 }}>
            <motion.div
                style={{
                    scale,
                }}
                className="relative w-full max-w-5xl h-[85vh] md:h-[75vh] lg:h-[70vh] rounded-[2.5rem] overflow-hidden"
            >
                <div
                    className="h-full rounded-[2.5rem] border border-gray-200 dark:border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] p-6 md:p-8 lg:p-10 flex flex-col md:flex-row gap-6 md:gap-8 bg-white dark:bg-gray-900 backdrop-blur-3xl overflow-hidden relative"
                >
                    {/* macOS Window Controls - Top Right */}
                    <div className="absolute top-6 right-8 flex gap-2 z-30 opacity-40 md:opacity-100">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56] shadow-sm border border-black/10" />
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e] shadow-sm border border-black/10" />
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f] shadow-sm border border-black/10" />
                    </div>

                    {/* Darkening Overlay for background cards */}
                    <motion.div
                        style={{ opacity: overlayOpacity }}
                        className="absolute inset-0 bg-black z-20 pointer-events-none"
                    />

                    {/* Content Section */}
                    <div className="flex-[1.2] flex flex-col justify-between relative z-10 py-1">
                        <div>
                            <div className="mb-3 md:mb-4 lg:mb-6">
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="text-accent font-mono text-[10px] md:text-xs mb-1.5 md:mb-2 block uppercase tracking-widest font-bold"
                                >
                                    {project.tech}
                                </motion.span>
                                <h3 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-dark dark:text-white mb-2 md:mb-3 leading-tight tracking-tight">
                                    {project.title}
                                </h3>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 text-[12px] md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6 max-w-2xl line-clamp-3 md:line-clamp-4 lg:line-clamp-none">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="flex items-center gap-1.5 md:gap-2 px-2.5 py-0.5 md:px-3 md:py-1 bg-gray-50 dark:bg-white/5 text-[8.5px] md:text-[10px] lg:text-[11px] font-bold tracking-wider text-gray-500 dark:text-gray-400 rounded-full border border-gray-100 dark:border-white/10 uppercase transition-all duration-300 hover:border-accent/40 hover:bg-white dark:hover:bg-white/10 shadow-sm">
                                        {getTagIcon(tag)}
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center mt-auto">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className={`
                                    group relative inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 lg:px-10 py-2.5 md:py-3.5 rounded-full text-[11px] md:text-sm lg:text-base font-bold transition-all duration-500
                                    text-gray-900 dark:text-white bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/30 backdrop-blur-xl
                                    shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_40px_-10px_var(--project-glow)]
                                    hover:-translate-y-2 hover:scale-[1.03] active:scale-95
                                    border-2 border-gray-200 dark:border-white/20 hover:border-[var(--project-color)]
                                    hover:shadow-[0_0_20px_rgba(0,0,0,0.1),0_0_25px_var(--project-glow)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.15),0_0_25px_var(--project-glow)]
                                    overflow-hidden
                                `}
                                style={{
                                    '--project-color': project.glowColor,
                                    '--project-glow': project.glowRgba
                                }}
                            >
                                {/* Background Ambient Glow */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${project.color}`} />

                                {/* Glass Stroke Animation */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />

                                <span className="relative z-10 flex items-center gap-2 tracking-tight transition-colors duration-300 dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                                    View Case Study
                                    <FaExternalLinkAlt size={12} className="md:w-[14px] md:h-[14px] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12" />
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Visual Element - Browser Mockup */}
                    <div className="flex-1 flex flex-col justify-center relative mt-2 md:mt-0">
                        <div className="w-full relative group/image">
                            {/* Browser Mockup Frame */}
                            <div className="relative bg-gray-100 dark:bg-gray-800 rounded-t-xl md:rounded-t-2xl border-t border-x border-gray-200 dark:border-white/10 p-2 md:p-3 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-400/80" />
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-400/80" />
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400/80" />
                                </div>
                                <div className="flex-1 bg-white/50 dark:bg-white/5 rounded-md h-4 md:h-6 flex items-center px-3 mx-2">
                                    <div className="text-[7px] md:text-[10px] text-gray-400 truncate opacity-60 font-mono">
                                        {project.link.replace('https://', '').replace('http://', '')}
                                    </div>
                                </div>
                            </div>

                            {/* Image Container */}
                            <div className="w-full aspect-[4/3] md:aspect-video rounded-b-xl md:rounded-b-2xl overflow-hidden border-b border-x border-gray-200 dark:border-white/10 shadow-2xl relative">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] text-white font-mono opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                                    0{index + 1}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Projects = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const projects = [
        {
            title: "ONECART - AI E-Commerce",
            tech: "MERN Stack, AI, Redux, JWT",
            description: "Full-stack AI-powered e-commerce platform with personalized recommendations. Features secure payments via Razorpay, Google Auth, and a comprehensive Admin Dashboard.",
            tags: ["MERN", "AI Integration", "E-commerce"],
            link: "https://github.com/KISHOR403/AI-Powered-E-Commerce-Website-built-using-MERN-Stack",
            color: "from-orange-500 to-rose-500",
            glowColor: "#f97316",
            glowRgba: "rgba(249, 115, 22, 0.4)",
            image: onecartImg
        },
        {
            title: "Weather App",
            tech: "HTML, CSS, JavaScript, Weather API",
            description: "Real-time weather dashboard fetching live data based on user location or input. Features dynamic UI updates and detailed weather conditions.",
            tags: ["JavaScript", "API Integration", "Web Dev"],
            link: "https://github.com/KISHOR403/Weather-App",
            color: "from-blue-500 to-indigo-600",
            glowColor: "#3b82f6",
            glowRgba: "rgba(59, 130, 246, 0.4)",
            image: weatherImg
        },
        {
            title: "API Automation Testing",
            tech: "Postman, Rest Assured",
            description: "Designed a comprehensive API automation suite for REST endpoints. Configured dynamic environment variables, verified full CRUD workflows, and leveraged Newman for reporting.",
            tags: ["API Testing", "Automation", "CI/CD"],
            link: "#",
            color: "from-purple-500 to-violet-600",
            glowColor: "#a855f7",
            glowRgba: "rgba(168, 85, 247, 0.4)",
            image: apiTestingImg
        },
        {
            title: "Mobile App Testing",
            tech: "Appium, Java, TestNG",
            description: "Executed end-to-end automation of a generic Weather Forecast Android application. Validated core features including GPS-based forecasting and structured test logic with Page Object Model (POM).",
            tags: ["Mobile Testing", "Appium", "Java"],
            link: "#",
            color: "from-sky-500 to-blue-600",
            glowColor: "#0ea5e9",
            glowRgba: "rgba(14, 165, 233, 0.4)",
            image: mobileTestingImg
        },
        {
            title: "Web Automation Framework",
            tech: "Selenium WebDriver, Java, TestNG",
            description: "Engineered a scalable web automation framework using Selenium. Covered major e-commerce flows like authentication and cart operations. Utilized data-driven TestNG suites.",
            tags: ["Web Testing", "Selenium", "Framework"],
            link: "https://github.com/KISHOR403/Web-Automation-Framework-Selenium-WebDriver-Java-TestNG-POM",
            color: "from-emerald-500 to-teal-600",
            glowColor: "#10b981",
            glowRgba: "rgba(16, 185, 129, 0.4)",
            image: webAutomationImg
        }
    ];

    return (
        <section id="projects" ref={container} className="relative z-10 pb-[5vh]">
            <div className="h-[15vh] flex flex-col items-center justify-center text-center">
                <div className="relative inline-block p-[3px] rounded-full overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-4">
                    <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_80%,#000_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_80%,#ffffff_100%)] drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] opacity-100"></div>
                    <div className="relative z-10 bg-white dark:bg-gray-800 px-8 py-2 rounded-full shadow-sm text-dark dark:text-white font-mono font-bold text-xl md:text-2xl">
                        Featured Projects
                    </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 font-mono text-xs max-w-md px-4">
                    Scroll down to explore some of my best work, presented in a stacking case-study format.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {projects.map((project, index) => {
                    const targetScale = 1 - ((projects.length - index) * 0.05);
                    return (
                        <ProjectCard
                            key={`p_${index}`}
                            index={index}
                            project={project}
                            progress={scrollYProgress}
                            range={[index * 0.2, 1]}
                            targetScale={targetScale}
                            isLast={index === projects.length - 1}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;

