import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaJs, FaDatabase, FaGitAlt, FaGithub, FaJenkins, FaJira, FaDocker, FaHtml5, FaCss3Alt, FaPython, FaRobot, FaCoffee } from 'react-icons/fa';
import { SiAppium, SiPostman, SiJunit5 } from 'react-icons/si';

// Importing local SVG assets
import testngIcon from '../assets/icons/testng.svg';
import restassuredIcon from '../assets/icons/restassured.svg';

const Skills = () => {
    const skills = [
        // Languages
        { name: 'Java', icon: <FaJava className="text-orange-500" /> },
        { name: 'Python', icon: <FaPython className="text-blue-500" /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
        { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
        { name: 'SQL', icon: <FaDatabase className="text-blue-400" /> },

        // Automation Tools & Frameworks
        { name: 'Selenium', icon: <img src="https://cdn.simpleicons.org/selenium/43B02A" alt="Selenium" className="w-8 h-8" /> },
        { name: 'Appium', icon: <SiAppium className="text-purple-500" /> },
        { name: 'TestNG', icon: <img src={testngIcon} alt="TestNG" className="w-8 h-8 object-contain" /> },
        { name: 'JUnit', icon: <SiJunit5 className="text-red-600" /> },
        { name: 'Rest Assured', icon: <img src={restassuredIcon} alt="Rest Assured" className="w-8 h-8 object-contain" /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },

        // Developer Tools
        { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
        { name: 'Docker', icon: <FaDocker className="text-blue-600" /> },
        { name: 'GitHub', icon: <FaGithub className="text-black dark:text-white" /> },
        { name: 'Jenkins', icon: <FaJenkins className="text-gray-700 dark:text-gray-300" /> },
        { name: 'Jira', icon: <FaJira className="text-blue-500" /> },
    ];

    // Split skills into two rings
    const innerRingCount = 6;
    const innerSkills = skills.slice(0, innerRingCount);
    const outerSkills = skills.slice(innerRingCount);

    // Responsive State
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const innerRadius = isMobile ? 65 : 160; // Reduced desktop radius for better fit
    const outerRadius = isMobile ? 125 : 270; // Reduced desktop radius for better fit

    const SkillItem = ({ skill, index, total, radius, duration, reverse = false }) => {
        const angle = (index / total) * 360;

        // Parent Ring rotation:
        // Inner (reverse=false) -> Rotates 360 (CW)
        // Outer (reverse=true) -> Rotates -360 (CCW)

        // To stay upright:
        // Inner Item -> Must rotate -360 (CCW)
        // Outer Item -> Must rotate 360 (CW)

        const outputRotate = reverse ? 360 : -360;

        return (
            <div
                className="absolute left-1/2 top-1/2 w-12 h-12 md:w-20 md:h-20 -ml-6 -mt-6 md:-ml-10 md:-mt-10 will-change-transform"
                style={{
                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                }}
            >
                <motion.div
                    animate={{ rotate: outputRotate }}
                    transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full flex flex-col items-center justify-center will-change-transform"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                    }}
                >
                    <motion.div
                        whileHover={{ scale: 1.2, zIndex: 10 }}
                        className="group relative w-10 h-10 md:w-16 md:h-16 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-md flex items-center justify-center cursor-pointer hover:border-primary transition-colors duration-300 mb-0.5 md:mb-1"
                    >
                        <div className="text-xl md:text-3xl">
                            {skill.icon}
                        </div>
                    </motion.div>
                    <span className="text-[9px] md:text-xs font-semibold text-gray-600 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 px-1.5 md:px-2 py-0.5 rounded-full backdrop-blur-sm whitespace-nowrap shadow-sm">
                        {skill.name}
                    </span>
                </motion.div>
            </div>
        );
    };

    return (
        <section id="skills" className="py-24 bg-transparent relative overflow-hidden z-10 min-h-[800px] flex items-center justify-center">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky/10 via-transparent to-transparent -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative inline-block p-[3px] rounded-full overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    >
                        <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_80%,#000_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_80%,#ffffff_100%)] drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] opacity-100 will-change-transform"></div>
                        <div className="relative z-10 bg-white dark:bg-gray-800 px-8 py-3 rounded-full shadow-sm text-dark dark:text-white font-mono font-bold text-2xl md:text-3xl">
                            Skills
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Code Snippet Card (Left Side) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-lg mx-auto lg:mx-0 order-2 lg:order-1"
                    >
                        {/* Floating Animation Wrapper */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative will-change-transform"
                        >
                            {/* Decorative Icons */}
                            <div className="absolute -top-5 -right-5 z-20 w-12 h-12 bg-[#1e1e1e] rounded-xl flex items-center justify-center border border-gray-700 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                                <FaCoffee className="text-[#a5b4fc] text-xl" />
                            </div>
                            <div className="absolute -bottom-5 -left-5 z-20 w-12 h-12 bg-[#1e1e1e] rounded-xl flex items-center justify-center border border-gray-700 shadow-xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
                                <FaRobot className="text-[#f472b6] text-xl" />
                            </div>

                            {/* Animated Glowing Border */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-30 animate-pulse"></div>

                            <div className="relative rounded-xl overflow-hidden p-[1px]">
                                <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#10b981_50%,#00000000_100%)] opacity-70 will-change-transform" />

                                <div className="bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-gray-700/50 font-mono text-sm sm:text-base relative bg-clip-padding">
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
                                                    <span className="text-blue-300">role:</span> <span className="text-green-300">"SDET"</span>,<br />
                                                    <span className="text-blue-300">languages:</span> [<span className="text-green-300">"Java"</span>, <span className="text-green-300">"Python"</span>, <span className="text-green-300">"JavaScript"</span>],<br />
                                                    <span className="text-blue-300">web:</span> [<span className="text-green-300">"HTML"</span>, <span className="text-green-300">"CSS"</span>],<br />
                                                    <span className="text-blue-300">automation:</span> [<br />
                                                    <span className="pl-4 text-green-300">"Selenium"</span>,<br />
                                                    <span className="pl-4 text-green-300">"Appium"</span>,<br />
                                                    <span className="pl-4 text-green-300">"Rest Assured"</span><br />
                                                    ],<br />
                                                    <span className="text-blue-300">tools:</span> [<span className="text-green-300">"Git"</span>, <span className="text-green-300">"Docker"</span>, <span className="text-green-300">"Jenkins"</span>, <span className="text-green-300">"Jira"</span>]<br />
                                                </div>
                                                <span className="text-yellow-300">{'}'}</span>;<br />
                                                <br />
                                                <span className="text-gray-500">// Ready to test 🚀</span>
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Circular Orbit (Right Side) */}
                    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center scale-100 order-1 lg:order-2">

                        {/* Central Node */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="z-20 relative"
                        >
                            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-primary to-secondary p-1 shadow-lg shadow-primary/30">
                                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex flex-col items-center justify-center text-center">
                                    <span className="text-2xl md:text-4xl">🚀</span>
                                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold font-heading text-sm md:text-lg mt-1">
                                        Skills
                                    </h3>
                                </div>
                            </div>
                        </motion.div>

                        {/* Inner Ring */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 360 }}
                            transition={{
                                opacity: { duration: 1, delay: 0.2 },
                                scale: { duration: 1, delay: 0.2 },
                                rotate: { duration: 50, repeat: Infinity, ease: "linear" }
                            }}
                            className="absolute z-10 will-change-transform"
                            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                        >
                            <div className={`relative rounded-full border border-dashed border-gray-300 dark:border-gray-700 transition-all duration-500`}
                                style={{ width: innerRadius * 2, height: innerRadius * 2 }}>
                                {innerSkills.map((skill, index) => (
                                    <SkillItem
                                        key={skill.name}
                                        skill={skill}
                                        index={index}
                                        total={innerSkills.length}
                                        radius={innerRadius}
                                        duration={50}
                                        reverse={false}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Outer Ring */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1, rotate: -360 }}
                            transition={{
                                opacity: { duration: 1, delay: 0.4 },
                                scale: { duration: 1, delay: 0.4 },
                                rotate: { duration: 80, repeat: Infinity, ease: "linear" }
                            }}
                            className="absolute z-0 will-change-transform"
                            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                        >
                            <div className={`relative rounded-full border border-gray-200 dark:border-gray-800 transition-all duration-500`}
                                style={{ width: outerRadius * 2, height: outerRadius * 2 }}>
                                {outerSkills.map((skill, index) => (
                                    <SkillItem
                                        key={skill.name}
                                        skill={skill}
                                        index={index}
                                        total={outerSkills.length}
                                        radius={outerRadius}
                                        duration={80}
                                        reverse={true}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Decorative Orbit Lines for Visual Depth */}
                        <div className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] border border-gray-100 dark:border-gray-800/50 rounded-full pointer-events-none -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
