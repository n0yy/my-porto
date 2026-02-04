"use client"

import dynamic from 'next/dynamic';
import { motion } from "framer-motion"

const StarsMotion = dynamic(() => import("@/components/Stars"), { ssr: false });

export default function About() {
    return (
        <motion.main
            className="relative pt-10 md:pt-16 min-h-screen overflow-hidden pb-28 md:pb-0 bg-gray-950 text-gray-200">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="px-7 md:px-0 max-w-3xl mx-auto"
            >
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mb-2 inline-block rounded-full bg-white/20 outline outline-[1px] px-4 py-1 text-sm"
                >
                    About
                </motion.h1>
                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="font-semibold text-3xl leading-tight uppercase mb-6"
                >
                    Harnessing the Power of AI to Deliver Practical Solutions That Drive Technological Advancement.
                </motion.h3>
                <div className="space-y-4 font-sans text-gray-300">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        I am an <strong>AI Engineer at SimplifyAI Indonesia</strong>, where I deliver enterprise-grade AI solutions across generative AI, data, and cloud platforms. My recent work focuses on developing <strong>Agentic AI pipelines</strong> and scalable <strong>RAG systems</strong> using cutting-edge tools like LangGraph, FastAPI, and Qdrant.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        As a graduate of the Machine Learning Cohort at Bangkit Academy (Google-led), I have built a strong foundation in predictive maintenance, NLP, and deep learning. I am passionate about transforming AI research into practical, production-ready tools that solve real-world engineering and business challenges.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        With expertise spanning from model fine-tuning (LLaMA, BERT) to full-stack development (Next.js, Shadcn/UI), I bridge the gap between complex AI logic and seamless user experiences. Let’s connect and explore how we can shape the future with AI!
                    </motion.p>
                </div>
            </motion.div>
            <StarsMotion count={200} speed={0.5} radius={100} />
        </motion.main>
    )
}