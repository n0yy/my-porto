"use client"

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionTemplate } from 'framer-motion';
import { projects } from "@/DataProjects";
import { useColor } from '@/context/Colors';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { SiPython, SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFastapi, SiFirebase, SiLangchain, SiStreamlit, SiTensorflow, SiHuggingface, SiMeta, SiGoogle, SiKeras, SiPytorch, SiScikitlearn, SiNvidia, SiDocker, SiKubernetes, SiLinux } from 'react-icons/si';
import { FaDatabase, FaBrain, FaRobot, FaChartLine, FaEye, FaLayerGroup, FaCloud, FaCode, FaMicrochip } from 'react-icons/fa';

const StarsMotion = dynamic(() => import("@/components/Stars"), { ssr: false });

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.9
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            scale: 0.9
        })
    };

    const nextProject = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    }

    const prevProject = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    }

    const color = useColor();
    const border = useMotionTemplate`1px solid ${color}`;

    return (
        <motion.main
            className="relative min-h-screen overflow-hidden bg-gray-950 text-gray-200 flex flex-col justify-center py-20"
        >
            {/* Background "Design & Code" Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none overflow-hidden">
                <span className="text-[15vw] md:text-[20vw] font-bold whitespace-nowrap leading-none italic font-serif" style={{ transform: "rotate(-10deg)" }}>
                    Design & Code
                </span>
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div className="order-2 md:order-1">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        key={currentIndex + "title"}
                        className="text-4xl md:text-6xl font-bold mb-4"
                    >
                        {projects[currentIndex].title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        key={currentIndex + "desc"}
                        className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed"
                    >
                        {projects[currentIndex].description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        key={currentIndex + "tags"}
                        className="flex flex-wrap gap-2 mb-8"
                    >
                        {projects[currentIndex].tags.map(tag => (
                            <span key={tag} className="border border-white/20 px-3 py-1 rounded-full text-xs uppercase tracking-widest text-gray-300">
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    <div className="flex gap-4">
                        <Link href={`/projects/${projects[currentIndex].slug}`}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2"
                            >
                                View Project <FiArrowRight />
                            </motion.button>
                        </Link>

                        <div className="flex gap-2">
                            <button onClick={prevProject} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                                ←
                            </button>
                            <button onClick={nextProject} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                                →
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Content as Card */}
                <div className="order-1 md:order-2 flex justify-center">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4 }}
                            className="bg-gray-900 border border-white/10 p-10 rounded-3xl w-full max-w-md aspect-square flex flex-col justify-center items-center text-center shadow-2xl relative"
                        >
                            <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="absolute top-6 right-10 w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="absolute top-6 right-14 w-3 h-3 rounded-full bg-green-500"></div>

                            <div className="relative w-72 h-72 flex items-center justify-center mb-6">
                                {/* Orbit Ring */}
                                <div className="absolute inset-0 border border-dashed border-gray-700 rounded-full"></div>

                                {/* Orbiting Icons/Tags */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    {projects[currentIndex].tags.filter(isTechTool).slice(0, 8).map((tag, i, arr) => {
                                        const total = arr.length;
                                        const radius = 144; // Half of w-72 (288px) to place icons on the orbit ring
                                        const angle = (i * 360) / total;
                                        const x = radius * Math.cos((angle * Math.PI) / 180);
                                        const y = radius * Math.sin((angle * Math.PI) / 180);

                                        return (
                                            <div
                                                key={i}
                                                style={{
                                                    position: 'absolute',
                                                    left: `calc(50% + ${x}px)`,
                                                    top: `calc(50% + ${y}px)`,
                                                    transform: 'translate(-50%, -50%)',
                                                }}
                                            >
                                                <motion.div
                                                    animate={{ rotate: -360 }}
                                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                                    className="relative group"
                                                >
                                                    <div className="bg-gray-800 p-3 rounded-full border border-gray-600 shadow-lg text-white hover:scale-125 transition-transform hover:border-blue-500 hover:bg-gray-700 hover:shadow-blue-500/20 cursor-pointer">
                                                        {getTechIcon(tag)}
                                                    </div>

                                                    {/* Tooltip */}
                                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-[10px] px-2 py-1 rounded whitespace-nowrap pointer-events-none border border-white/20 z-50">
                                                        {tag}
                                                    </div>
                                                </motion.div>
                                            </div>
                                        )
                                    })}
                                </motion.div>

                                {/* Center Object */}
                                <div className="text-5xl z-10 transition-transform hover:scale-110 duration-300">
                                    🚀
                                </div>
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-widest mb-1 text-gray-500">Project</h3>
                            <div className="text-5xl font-mono text-white font-bold">
                                {String(currentIndex + 1).padStart(2, '0')}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <StarsMotion speed={1} count={250} radius={40} />
        </motion.main>
    );
}

// Helper to check if a tag is a valid tech tool for orbiting
function isTechTool(tag: string) {
    const lowerTag = tag.toLowerCase();
    const excludeList = ["agentic ai", "simplifyai", "gemastik", "machine learning", "deep learning", "nlp", "computer vision", "generative ai", "capstone project", "llm"];
    if (excludeList.some(excluded => lowerTag.includes(excluded))) return false;

    // Explicit allow list or simple heuristic: must have a specific icon mapping
    const hasIcon = getTechIcon(tag, true);
    return hasIcon !== null;
}

// Icon Mapping Helper
function getTechIcon(tag: string, checkOnly: boolean = false) {
    const size = 20;
    const lowerTag = tag.toLowerCase();

    // Specific Techs
    if (lowerTag.includes("python")) return checkOnly ? true : <SiPython size={size} className="text-yellow-400" />;
    if (lowerTag.includes("next")) return checkOnly ? true : <SiNextdotjs size={size} className="text-white" />;
    if (lowerTag.includes("react")) return checkOnly ? true : <SiReact size={size} className="text-blue-400" />;
    if (lowerTag.includes("typescript")) return checkOnly ? true : <SiTypescript size={size} className="text-blue-600" />;
    if (lowerTag.includes("tailwind")) return checkOnly ? true : <SiTailwindcss size={size} className="text-cyan-400" />;
    if (lowerTag.includes("fastapi")) return checkOnly ? true : <SiFastapi size={size} className="text-teal-400" />;
    if (lowerTag.includes("firebase")) return checkOnly ? true : <SiFirebase size={size} className="text-orange-500" />;
    if (lowerTag.includes("langgraph") || lowerTag.includes("langchain")) return checkOnly ? true : <SiLangchain size={size} className="text-green-500" />;
    if (lowerTag.includes("qdrant")) return checkOnly ? true : <FaDatabase size={size} className="text-pink-500" />;
    if (lowerTag.includes("streamlit")) return checkOnly ? true : <SiStreamlit size={size} className="text-red-500" />;
    if (lowerTag.includes("tensorflow") || lowerTag.includes("keras")) return checkOnly ? true : <SiTensorflow size={size} className="text-orange-500" />;
    if (lowerTag.includes("torch") || lowerTag.includes("pytorch")) return checkOnly ? true : <SiPytorch size={size} className="text-red-600" />;
    if (lowerTag.includes("huggingface")) return checkOnly ? true : <SiHuggingface size={size} className="text-yellow-500" />;
    if (lowerTag.includes("meta") || lowerTag.includes("llama")) return checkOnly ? true : <SiMeta size={size} className="text-blue-500" />;
    if (lowerTag.includes("google") || lowerTag.includes("gemini")) return checkOnly ? true : <SiGoogle size={size} className="text-white" />;
    if (lowerTag.includes("docker")) return checkOnly ? true : <SiDocker size={size} className="text-blue-400" />;
    if (lowerTag.includes("kubernetes")) return checkOnly ? true : <SiKubernetes size={size} className="text-blue-600" />;
    if (lowerTag.includes("linux")) return checkOnly ? true : <SiLinux size={size} className="text-yellow-100" />;
    if (lowerTag.includes("nvidia")) return checkOnly ? true : <SiNvidia size={size} className="text-green-500" />;
    if (lowerTag.includes("scikit")) return checkOnly ? true : <SiScikitlearn size={size} className="text-orange-400" />;
    if (lowerTag.includes("xgboost") || lowerTag.includes("lightgbm")) return checkOnly ? true : <FaMicrochip size={size} className="text-teal-300" />;
    if (lowerTag.includes("indobert") || lowerTag.includes("bert")) return checkOnly ? true : <FaLayerGroup size={size} className="text-indigo-400" />;

    // Only return generic icons if NOT checking for specific tools
    // This effectively filters out "Machine Learning", "AI", etc from orbiting
    // by returning null if we are in 'checkOnly' mode and it didn't match specific tools above
    if (checkOnly) return null;

    // Fallbacks for display purposes if needed (but we filter these out for orbit)
    return <FaCode size={size} className="text-gray-400" />;
}