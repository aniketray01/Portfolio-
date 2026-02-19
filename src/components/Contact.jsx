import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "41a3155b-a46a-445f-b353-48a88ef5b8bb",
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Portfolio Message from ${formData.name}`,
                }),
            });

            const result = await response.json();
            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                console.error("Error", result);
                setStatus('error');
            }
        } catch (error) {
            console.error("Error", error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section-container relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl font-black mb-8 tracking-tighter">Let's <span className="gradient-text">Build</span> Something</h2>
                    <p className="text-text-secondary mb-12 max-w-md text-lg leading-relaxed font-light">
                        I'm specialized in turning vision into reality. Reach out for collaborations or just to say hi!
                    </p>

                    <div className="space-y-6">
                        {[
                            { icon: Mail, label: 'Email', value: 'aniketray15@gmail.com' },
                            { icon: Phone, label: 'Phone', value: '+91 7982367732' },
                            { icon: MapPin, label: 'Location', value: 'New Delhi, India' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-xl glass border-white/5 flex items-center justify-center group-hover:bg-accent-primary transition-all">
                                    <item.icon className="text-white group-hover:scale-110 transition-transform" size={20} />
                                </div>
                                <div className="font-mono">
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-text-secondary mb-0.5">{item.label}</p>
                                    <p className="text-sm font-bold text-white/80">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass p-8 md:p-12 border-white/5"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] ml-1">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-accent-primary/50 transition-all text-sm"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] ml-1">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-accent-primary/50 transition-all text-sm"
                                    placeholder="Email Address"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] ml-1">Message</label>
                            <textarea
                                required
                                rows="4"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-accent-primary/50 transition-all text-sm resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <button
                            disabled={status === 'loading'}
                            className={`w-full py-5 rounded-xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 transition-all duration-500 overflow-hidden relative group ${status === 'success'
                                    ? 'bg-green-500/20 text-green-500 border border-green-500/50'
                                    : status === 'error'
                                        ? 'bg-red-500/20 text-red-500 border border-red-500/50'
                                        : 'bg-white text-bg-primary hover:bg-opacity-90'
                                }`}
                        >
                            {status === 'loading' ? (
                                <div className="w-5 h-5 border-2 border-bg-primary/30 border-t-bg-primary rounded-full animate-spin"></div>
                            ) : status === 'success' ? (
                                <><CheckCircle size={18} /> Sent Successfully</>
                            ) : status === 'error' ? (
                                <>Failed to Send - Try Again</>
                            ) : (
                                <><Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Send Message</>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
