import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Terminal, Cloud, ShieldCheck } from 'lucide-react';

const SkillCard = ({ title, skills, icon: Icon, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        viewport={{ once: true }}
        className="glass p-8 hover:border-white/20 transition-all group relative overflow-hidden"
    >
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

        <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent-primary group-hover:text-white transition-all duration-300">
                <Icon size={24} className="group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold tracking-tight">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-2 relative z-10">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-bg-secondary border border-white/5 text-[11px] font-mono tracking-tight text-text-secondary hover:text-white hover:border-white/20 transition-all"
                >
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const skillGroups = [
        {
            title: 'Frontend',
            icon: Layout,
            skills: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'TypeScript']
        },
        {
            title: 'Backend',
            icon: Database,
            skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication']
        },
        {
            title: 'Databases',
            icon: Terminal,
            skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Query Optimization']
        },
        {
            title: 'Core CS',
            icon: ShieldCheck,
            skills: ['Data Structures', 'Algorithms', 'OOPs', 'DBMS', 'Operating Systems', 'System Design']
        },
        {
            title: 'DevOps & Tools',
            icon: Cloud,
            skills: ['Git & GitHub', 'Docker', 'CI/CD Pipelines', 'Linux / Bash', 'Postman', 'Vercel', 'Render']
        },
        {
            title: 'Advanced Features',
            icon: Code2,
            skills: ['Redux Toolkit', 'Context API', 'Socket.io', 'Firebase', 'Framer Motion', 'Recharts']
        }
    ];

    return (
        <section id="skills" className="section-container">
            <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">Stack & <span className="gradient-text">Skills</span></h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillGroups.map((group, index) => (
                    <SkillCard key={group.title} {...group} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
