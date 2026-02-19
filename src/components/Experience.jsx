import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, GraduationCap, Award } from 'lucide-react';

const TimelineItem = ({ role, company, location, period, details, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative pl-12 pb-12 last:pb-0"
    >
        <div className="absolute left-[11px] top-0 bottom-0 w-[1px] bg-white/10"></div>
        <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-bg-primary border border-white/20 flex items-center justify-center z-10 group transition-all duration-300 hover:border-accent-primary">
            <div className="w-2 h-2 rounded-full bg-accent-primary"></div>
        </div>

        <div className="glass p-8 group hover:border-accent-primary/30 transition-all">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-1 group-hover:text-accent-primary transition-colors">{role}</h3>
                    <div className="flex items-center gap-3 text-white/50 font-medium">
                        <Briefcase size={14} />
                        <span>{company}</span>
                    </div>
                </div>
                <div className="flex flex-col items-end text-xs text-text-secondary font-mono">
                    <span className="flex items-center gap-2 mb-1">
                        <Calendar size={12} />
                        {period}
                    </span>
                    <span className="flex items-center gap-2">
                        <MapPin size={12} />
                        {location}
                    </span>
                </div>
            </div>

            <ul className="space-y-3">
                {details.map((detail, idx) => (
                    <li key={idx} className="flex gap-4 text-text-secondary text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary/50 mt-2 flex-shrink-0"></span>
                        {detail}
                    </li>
                ))}
            </ul>
        </div>
    </motion.div>
);

const Experience = () => {
    const experiences = [
        {
            role: 'Software Developer',
            company: 'Infozech Software Private Limited',
            location: 'New Delhi, India',
            period: '11/2023 - Present',
            details: [
                'Architected 15+ React components and RESTful Node.js APIs processing 10,000+ monthly transactions.',
                'Reduced API response latency by 40% through MongoDB query optimization.',
                'Engineered automated invoice generation system improving accuracy by 95%.',
                'Maintained Linux production servers with 99.8% uptime.'
            ]
        }
    ];

    return (
        <section id="experience" className="section-container">
            <div className="grid lg:grid-cols-3 gap-16">
                <div className="lg:col-span-1">
                    <h2 className="text-5xl font-bold mb-6 tracking-tight">Professional <br /><span className="gradient-text">Path</span></h2>
                    <p className="text-text-secondary text-lg mb-10 leading-relaxed font-light">
                        My career has been dedicated to mastering the full-stack ecosystem and delivering scalable solutions.
                    </p>

                    <div className="space-y-4">
                        <div className="glass p-6 border-accent-secondary/20">
                            <div className="flex items-center gap-4 mb-4">
                                <GraduationCap className="text-accent-secondary" size={24} />
                                <h4 className="font-bold">Education</h4>
                            </div>
                            <p className="text-sm font-semibold">B.Tech in Computer Science</p>
                            <p className="text-xs text-text-secondary">Manav Rachna University | 7.5 CGPA</p>
                        </div>

                        <div className="glass p-6 border-accent-primary/20">
                            <div className="flex items-center gap-4 mb-4">
                                <Award className="text-accent-primary" size={24} />
                                <h4 className="font-bold">Certifications</h4>
                            </div>
                            <p className="text-xs text-text-secondary leading-loose">• Cloud Computing (Infosys)<br />• Data Science with Python</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    {experiences.map((exp, index) => (
                        <TimelineItem key={index} {...exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
