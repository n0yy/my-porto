"use client"

import dynamic from 'next/dynamic';
import { motion } from "framer-motion"
import { FiMinimize2, FiMonitor, FiCpu, FiLayers } from "react-icons/fi";
import { SiPython, SiTypescript, SiJavascript, SiPostgresql, SiNextdotjs, SiReact, SiFastapi, SiTailwindcss, SiTensorflow, SiPytorch, SiLangchain, SiHuggingface, SiMeta, SiGoogle, SiOpenai, SiDocker, SiKubernetes, SiGit, SiFirebase, SiLinux } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

const StarsMotion = dynamic(() => import("@/components/Stars"), { ssr: false });

const stats = [
    { value: "2+", label: "Years of Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "5+", label: "Tech Stack Domains" },
];

const services = [
    { icon: FiCpu, title: "AI Engineering", desc: "Agentic AI, RAG Systems, LLMs" },
    { icon: FiLayers, title: "Full Stack Dev", desc: "Next.js, FastAPI, Cloud" },
    { icon: FiMonitor, title: "Data Science", desc: "Predictive Models, Analytics" },
]

const skillCategories = [
    {
        title: "Languages",
        skills: [
            { name: "Python", icon: SiPython, color: "text-yellow-400" },
            { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
            { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
            { name: "SQL", icon: SiPostgresql, color: "text-blue-400" }
        ]
    },
    {
        title: "Frameworks",
        skills: [
            { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
            { name: "React", icon: SiReact, color: "text-blue-400" },
            { name: "FastAPI", icon: SiFastapi, color: "text-teal-400" },
            { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" }
        ]
    },
    {
        title: "AI & ML",
        skills: [
            { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
            { name: "PyTorch", icon: SiPytorch, color: "text-red-500" },
            { name: "LangChain", icon: SiLangchain, color: "text-green-500" },
            { name: "Qdrant", icon: FaDatabase, color: "text-pink-500" }
        ]
    },
    {
        title: "Tools",
        skills: [
            { name: "Docker", icon: SiDocker, color: "text-blue-500" },
            { name: "Git", icon: SiGit, color: "text-orange-600" },
            { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
            { name: "Linux", icon: SiLinux, color: "text-yellow-200" }
        ]
    }
];

export default function About() {
    return (
        <motion.main
            className="relative min-h-screen overflow-hidden bg-gray-950 text-gray-200 pt-32 pb-20 px-6 md:px-20"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">
                    {/* Left Column: Bio */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-sm font-mono text-gray-500 mb-4"
                        >
                            / WHO I AM
                        </motion.h2>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
                        >
                            Experience <br />
                            <span className="text-gray-600">& Passion.</span>
                        </motion.h1>

                        <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                            <p>
                                I am an <strong>AI Engineer at SimplifyAI Indonesia</strong>, delivering enterprise-grade AI solutions across generative AI, data, and cloud platforms.
                            </p>
                            <p>
                                My recent work focuses on developing <strong>Agentic AI pipelines</strong> and scalable <strong>RAG systems</strong> using cutting-edge tools. I bridge the gap between complex AI logic and seamless user experiences.
                            </p>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-8 mt-16 border-t border-gray-800 pt-10">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Service Cards */}
                    <div className="flex flex-col gap-6 mt-10 md:mt-0">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + (index * 0.1) }}
                                className="bg-gray-900/50 p-8 rounded-2xl border border-white/5 hover:bg-gray-800/50 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors text-white">
                                    <service.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-400">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Tech Arsenal Section */}
                <div className="border-t border-gray-800 pt-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mb-12 text-center"
                    >
                        Tech Arsenal
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skillCategories.map((category, catIndex) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: catIndex * 0.1 }}
                                className="bg-gray-900/30 p-6 rounded-2xl border border-dashed border-gray-800"
                            >
                                <h3 className="text-xl font-bold mb-6 text-gray-300 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                    {category.title}
                                </h3>
                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skill.name} className="flex items-center gap-3 group cursor-default">
                                            <skill.icon className={`text-xl transition-transform group-hover:scale-110 ${skill.color}`} />
                                            <span className="text-gray-400 group-hover:text-white transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <StarsMotion count={200} speed={0.5} radius={100} />
        </motion.main>
    )
}