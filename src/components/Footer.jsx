import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-tertiary dark:bg-gray-950 py-8 border-t border-white/5 dark:border-gray-800 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-6">

                {/* Social Icons */}
                <div className="flex items-center space-x-6">
                    <a href="https://github.com/KISHOR403" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-dark dark:hover:text-white transition-colors">
                        <FaGithub size={22} />
                    </a>
                    <a href="https://linkedin.com/in/kishorgogoi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                        <FaLinkedin size={22} />
                    </a>
                    <a href="https://www.instagram.com/_kishor__gogoi?igsh=MWppZGU5a2J3dTZoeA==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                        <FaInstagram size={22} />
                    </a>
                    <a href="https://x.com/kishor_gogoi8" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                        <FaXTwitter size={22} />
                    </a>
                </div>

                {/* Copyright Text */}
                <div className="text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} <span className="text-dark dark:text-white font-medium">Kishor Gogoi</span>. All Experience Reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
