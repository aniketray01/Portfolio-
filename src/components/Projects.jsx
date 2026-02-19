import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layout, Server } from 'lucide-react';

const ProjectCard = ({ title, description, tech, index, icon: Icon }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="glass group p-2 transition-all duration-500 hover:border-accent-primary/50"
    >
        <div className="relative overflow-hidden rounded-xl aspect-video mb-6 bg-bg-secondary flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/10 group-hover:opacity-100 opacity-40 transition-opacity"></div>
            <Icon size={48} className="text-white/10 group-hover:text-white/30 group-hover:scale-125 transition-all duration-700" />

            <div className="absolute bottom-4 left-4 right-4 flex justify-end gap-3 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                <a href="#" className="p-2.5 glass rounded-full hover:bg-accent-primary hover:text-white transition-all shadow-xl">
                    <Github size={18} />
                </a>
                <a href="#" className="p-2.5 glass rounded-full hover:bg-accent-primary hover:text-white transition-all shadow-xl">
                    <ExternalLink size={18} />
                </a>
            </div>
        </div>

        <div className="px-6 pb-8">
            <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-primary transition-colors">{title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-8 font-light">
                {description}
            </p>
            <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-mono uppercase tracking-wider text-white/50">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: 'EquiPay',
            icon: Layout,
            description: 'Advanced expense sharing platform with graph-based debt simplification logic. Features real-time balance tracking and settlement algorithms.',
            tech: ['React.js', 'Node.js', 'MongoDB', 'Framer Motion'],
        },
        {
            title: 'Rich Text Editor',
            icon: Server,
            description: 'Proprietary WYSIWYG editor engine built from scratch. Supports complex document formatting and real-time state persistence.',
            tech: ['JavaScript', 'DOM API', 'React', 'Tailwind'],
        }
    ];

    return (
        <section id="projects" className="section-container">
            <div className="mb-20">
                <h2 className="text-5xl font-black mb-6 tracking-tight">Featured <span className="gradient-text">Showcase</span></h2>
                <p className="text-text-secondary max-w-xl text-lg font-light leading-relaxed">
                    Engineering solutions at the intersection of performance and aesthetics.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                {projects.map((p, i) => (
                    <ProjectCard key={p.title} {...p} index={i} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
