import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="bg-bg-primary min-h-screen text-text-primary">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary z-[101] origin-left"
                style={{ scaleX }}
            />

            <Navbar />

            <main>
                <Hero />
                <div className="space-y-32">
                    <Skills />
                    <Experience />
                    <Projects />
                    <Contact />
                </div>
            </main>

            <footer className="py-12 border-t border-white/5 bg-bg-secondary/30 backdrop-blur-sm mt-32">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-2xl font-black gradient-text tracking-tighter">ANIKET RAY</div>
                    <p className="text-text-secondary text-sm font-light">
                        © {new Date().getFullYear()} Aniket Ray. Built with React & Tailwind.
                    </p>
                    <div className="flex gap-8">
                        <a href="https://github.com/aniketray01" target="_blank" className="text-text-secondary hover:text-white transition-colors text-xs uppercase tracking-widest font-bold">Github</a>
                        <a href="https://linkedin.com/in/aniket-ray" target="_blank" className="text-text-secondary hover:text-white transition-colors text-xs uppercase tracking-widest font-bold">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
