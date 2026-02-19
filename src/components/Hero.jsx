import React from 'react';
import { motion } from 'framer-motion';
import { Download, Terminal, ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Ambient Background Circles */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="section-container grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full glass border-white/10 mb-8 font-mono text-xs tracking-widest text-accent-primary uppercase">
                        <Terminal size={14} className="mr-3" />
                        <span>Available for new projects</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter">
                        Building <br />
                        <span className="gradient-text">The Future</span>
                    </h1>

                    <p className="text-xl text-text-secondary mb-12 max-w-lg leading-relaxed font-light">
                        I'm Aniket Ray, a Full Stack Developer specializing in high-performance web applications. I turn complex problems into elegant, scalable digital solutions.
                    </p>

                    <div className="flex flex-wrap gap-6">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-bg-primary rounded-full font-bold flex items-center gap-2 group transition-all"
                        >
                            View Projects
                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        <motion.a
                            href="/resume.pdf"
                            download="Aniket_Ray_Resume.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 glass border-white/10 text-white rounded-full font-bold flex items-center gap-3 hover:bg-white/10 transition-all cursor-pointer"
                        >
                            <Download size={18} />
                            Resume
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 glass p-4 rounded-3xl animate-float backdrop-blur-3xl overflow-hidden group border-white/5">
                        <img
                            src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1470&auto=format&fit=crop"
                            alt="Developer Workspace"
                            className="rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-square md:aspect-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60"></div>
                    </div>

                    {/* Floating Experience Badge */}
                    <div className="absolute -bottom-10 -left-6 glass p-6 rounded-2xl z-20 shadow-2xl border-accent-secondary/30 animate-float" style={{ animationDelay: '2s' }}>
                        <p className="text-[10px] text-text-secondary uppercase tracking-[0.2em] mb-1 font-bold">Experience</p>
                        <p className="text-3xl font-black gradient-text">3+ Years</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
