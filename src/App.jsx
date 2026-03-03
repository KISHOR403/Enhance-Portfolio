import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundAnimations from './components/BackgroundAnimations';
import WelcomeIntro from './components/WelcomeIntro';

function App() {
    const [showIntro, setShowIntro] = useState(true);
    const [introText, setIntroText] = useState("WELCOME");

    useEffect(() => {
        // Function to run the intro timer
        const runIntro = () => {
            setShowIntro(true);
            const timer = setTimeout(() => {
                setShowIntro(false);
            }, 2500);
            return timer;
        };

        let timer = runIntro();

        // Re-run intro when tab becomes visible (User comes back to website)
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                setIntroText("WELCOME BACK");
                clearTimeout(timer);
                timer = runIntro();
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            clearTimeout(timer);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return (
        <div className="bg-primary dark:bg-gray-950 min-h-screen text-dark dark:text-gray-100 font-body selection:bg-accent selection:text-white relative transition-colors duration-300">
            <BackgroundAnimations />
            <WelcomeIntro showIntro={showIntro} text={introText} />
            {!showIntro && <Navbar />}
            <main className="relative z-10">
                <Hero showIntro={showIntro} />
                <About />
                <Skills />
                <Projects />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
