import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4 bg-bg-primary/80 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent-primary/50 shadow-lg">
                        <img
                            src="/projects/Aniket Image.jpg"
                            alt="Aniket"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="text-2xl font-black gradient-text tracking-tighter">
                        Aniket Ray
                    </span>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[11px] uppercase tracking-[0.2em] font-bold text-text-secondary hover:text-white transition-all relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-primary group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-5 pl-8 border-l border-white/10">
                        <a href="https://github.com/aniketray01" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-all hover:scale-110">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/aniket-ray" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-all hover:scale-110">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden glass p-2 text-text-primary"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-bg-secondary border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm font-bold uppercase tracking-widest text-text-secondary hover:text-accent-primary transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
