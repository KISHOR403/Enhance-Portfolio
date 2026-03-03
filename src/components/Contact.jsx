import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import GlowingBorder from './ui/GlowingBorder';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [landing, setLanding] = useState(false);
    const [error, setError] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        // Debug: Check if env vars are loaded
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        console.log('Service ID:', serviceId);
        console.log('Template ID:', templateId);
        console.log('Public Key:', publicKey);

        if (!serviceId || !templateId || !publicKey) {
            setError(`Configuration Error: Missing keys. Service: ${serviceId}, Temp: ${templateId}, Key: ${publicKey}`);
            return;
        }

        setLoading(true);
        setError('');
        setSuccess(false);

        emailjs
            .sendForm(
                serviceId,
                templateId,
                form.current,
                {
                    publicKey: publicKey,
                }
            )
            .then(
                () => {
                    setLoading(false);
                    setSuccess(true);
                    form.current.reset();
                },
                (error) => {
                    setLoading(false);
                    // Show the actual error message on screen for debugging
                    setError(`Failed: ${error.text || JSON.stringify(error)}`);
                    console.error('FAILED...', error);
                }
            );
    };

    return (
        <section id="contact" className="py-20 bg-transparent relative overflow-hidden z-10">
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan/5 rounded-full blur-3xl -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <GlowingBorder
                        className="inline-block shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-4"
                        innerClassName="bg-white dark:bg-gray-800 px-8 py-3"
                        roundedClass="rounded-full"
                        gradient="bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#06b6d4_50%,#00000000_100%)]"
                    >
                        <div className="text-dark dark:text-white font-mono font-bold text-2xl md:text-3xl">
                            Get In Touch
                        </div>
                    </GlowingBorder>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg transition-colors">Feel free to reach out for collaborations or just a friendly hello</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-10"
                    >
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">Let's Work Together</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg transition-colors">
                                I am currently open to new opportunities and collaborations. If you have a project in mind or looking for a dedicated QA automation engineer, I'm just a message away.
                            </p>
                        </div>

                        <div className="space-y-5">
                            {/* Phone Card */}
                            <a href="tel:+916001041752" className="block group w-full cursor-pointer">
                                <GlowingBorder
                                    className="w-full hover:shadow-lg hover:shadow-cyan/10 transition-all duration-300"
                                    innerClassName="bg-white dark:bg-[#0f172a] p-6 flex items-center gap-5 h-full rounded-2xl transition-colors duration-500"
                                    roundedClass="rounded-2xl"
                                    gradient="bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#06b6d4_50%,#00000000_100%)]"
                                >
                                    <div className="w-14 h-14 bg-gray-100 dark:bg-[#1e293b] rounded-full flex items-center justify-center text-cyan group-hover:bg-cyan group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                                        <FaPhoneAlt size={22} />
                                    </div>
                                    <div>
                                        <h4 className="text-gray-500 dark:text-gray-500 text-sm font-medium mb-1 transition-colors">Phone</h4>
                                        <p className="text-gray-900 dark:text-white text-lg font-bold tracking-wide transition-colors">+91 6001041752</p>
                                    </div>
                                </GlowingBorder>
                            </a>

                            {/* Email Card */}
                            <a href="mailto:kishorgogoi403@gmail.com" className="block group w-full cursor-pointer">
                                <GlowingBorder
                                    className="w-full hover:shadow-lg hover:shadow-cyan/10 transition-all duration-300"
                                    innerClassName="bg-white dark:bg-[#0f172a] p-6 flex items-center gap-5 h-full rounded-2xl transition-colors duration-500"
                                    roundedClass="rounded-2xl"
                                    gradient="bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#06b6d4_50%,#00000000_100%)]"
                                >
                                    <div className="w-14 h-14 bg-gray-100 dark:bg-[#1e293b] rounded-full flex items-center justify-center text-cyan group-hover:bg-cyan group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                                        <FaEnvelope size={22} />
                                    </div>
                                    <div>
                                        <h4 className="text-gray-500 dark:text-gray-500 text-sm font-medium mb-1 transition-colors">Email</h4>
                                        <p className="text-gray-900 dark:text-white text-lg font-bold tracking-wide transition-colors">kishorgogoi403@gmail.com</p>
                                    </div>
                                </GlowingBorder>
                            </a>

                            {/* Location Card */}
                            <a
                                href="https://www.google.com/maps/place/Borola+Village+market/@27.5205218,94.3278314,17z/data=!3m1!4b1!4m6!3m5!1s0x37411fac3a2a1751:0xb763c8306a0eaa46!8m2!3d27.5205218!4d94.3304063!16s%2Fg%2F11sc7d5zn_?authuser=0&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group w-full cursor-pointer"
                            >
                                <GlowingBorder
                                    className="w-full hover:shadow-lg hover:shadow-cyan/10 transition-all duration-300"
                                    innerClassName="bg-white dark:bg-[#0f172a] p-6 flex items-center gap-5 h-full rounded-2xl transition-colors duration-500"
                                    roundedClass="rounded-2xl"
                                    gradient="bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#06b6d4_50%,#00000000_100%)]"
                                >
                                    <div className="w-14 h-14 bg-gray-100 dark:bg-[#1e293b] rounded-full flex items-center justify-center text-cyan group-hover:bg-cyan group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                                        <FaMapMarkerAlt size={22} />
                                    </div>
                                    <div>
                                        <h4 className="text-gray-500 dark:text-gray-500 text-sm font-medium mb-1 transition-colors">Location</h4>
                                        <p className="text-gray-900 dark:text-white text-lg font-bold tracking-wide transition-colors">Dhemaji, Assam, India - 787035</p>
                                    </div>
                                </GlowingBorder>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="relative"
                    >
                        <GlowingBorder
                            className="shadow-2xl w-full"
                            innerClassName="bg-white dark:bg-[#0f172a] p-8 md:p-10 h-full transition-colors duration-500"
                            roundedClass="rounded-3xl"
                            gradient="bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#06b6d4_50%,#00000000_100%)]"
                        >
                            {success ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center h-full min-h-[400px]">
                                    <motion.div
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                                        className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6"
                                    >
                                        <FaCheckCircle className="text-green-500 text-5xl" />
                                    </motion.div>
                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                        className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors"
                                    >
                                        Thank You!
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                        className="text-gray-400 text-lg mb-8 max-w-sm"
                                    >
                                        Your message has been received. I will get back to you as soon as possible.
                                    </motion.p>
                                    <motion.button
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4, duration: 0.5 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSuccess(false)}
                                        className="group relative px-10 py-4 rounded-full font-bold transition-all duration-500 text-gray-900 dark:text-white bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/30 backdrop-blur-xl border-2 border-gray-200 dark:border-white/20 hover:border-accent shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] overflow-hidden"
                                    >
                                        {/* Background Ambient Glow */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-accent to-sky" />
                                        <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Send Another Message</span>
                                    </motion.button>
                                </div>
                            ) : (
                                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 dark:text-gray-400 ml-1 transition-colors">Name</label>
                                            <input
                                                type="text"
                                                name="user_name"
                                                required
                                                className="w-full bg-gray-50 dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 dark:text-gray-400 ml-1 transition-colors">Email</label>
                                            <input
                                                type="email"
                                                name="user_email"
                                                required
                                                className="w-full bg-gray-50 dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all"
                                                placeholder="email@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 dark:text-gray-400 ml-1 transition-colors">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            required
                                            className="w-full bg-gray-50 dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all"
                                            placeholder="Project Discussion"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 dark:text-gray-400 ml-1 transition-colors">Message</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows="4"
                                            className="w-full bg-gray-50 dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all"
                                            placeholder="Your message here..."
                                        ></textarea>
                                    </div>

                                    {error && (
                                        <p className="text-red-500 text-sm font-medium">{error}</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className={`group relative w-full px-10 py-4 rounded-full font-bold transition-all duration-500 overflow-hidden ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-1'}`}
                                        style={{ color: 'inherit' }}
                                    >
                                        {/* Adaptive Text/Base Styles */}
                                        <div className="absolute inset-0 bg-black/5 dark:bg-white/10 group-hover:bg-black/10 dark:group-hover:bg-white/30 backdrop-blur-xl transition-all duration-500" />
                                        <div className="absolute inset-0 border-2 border-gray-200 dark:border-white/20 group-hover:border-accent transition-all duration-500 rounded-full" />

                                        {/* Background Ambient Glow */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-accent to-sky" />

                                        {/* Glass Stroke Animation */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />

                                        <div className="relative z-10 flex items-center justify-center gap-3 text-gray-900 dark:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                                            {loading ? 'Sending...' : 'Send Message'}
                                            <motion.div
                                                animate={loading ? { x: 50, y: -50, opacity: 0, scale: 0.5 } : { x: 0, y: 0, opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                            >
                                                <FaPaperPlane />
                                            </motion.div>
                                        </div>
                                    </button>
                                </form>
                            )}
                        </GlowingBorder>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
