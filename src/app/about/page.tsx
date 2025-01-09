"use client"

import StarsMotion from "@/components/Stars";
import { useColor } from "@/context/Colors";
import { useMotionTemplate, motion } from "framer-motion";
export default function About() {
    return (
        <motion.main 
            className="relative pt-10 md:pt-16 min-h-screen overflow-hidden pb-28 md:pb-0 bg-gray-950 text-gray-200">
                <div className="px-7 md:px-0 max-w-3xl mx-auto">
                    <h1 className="mb-2 inline-block rounded-full bg-white/20 outline outline-[1px] px-4 py-1 text-sm">About</h1>
                    <h3 className="font-semibold text-3xl leading-tight uppercase mb-6">Harnessing the Power of AI to Deliver Practical Solutions That Drive Technological Advancement.</h3>
                    <div className="space-y-4 font-sans">
                    <p>I am a highly motivated AI professional with extensive expertise in machine learning technologies. As a graduate of the prestigious Machine Learning Cohort at Bangkit Academy (Batch 2)—a collaborative program powered by Google, Tokopedia, Gojek, and Traveloka—I have honed my skills in developing and deploying advanced AI solutions.</p>
                    <p>My core competencies include predictive modeling, natural language processing (NLP), and generative AI technologies. Proficient in state-of-the-art frameworks such as TensorFlow, PyTorch, and Transformers, I am passionate about transforming complex AI concepts into scalable, real-world applications.</p>
                    <p>With a strong commitment to innovation and problem-solving, I thrive in creating impactful AI-driven solutions that address diverse technological challenges. Let’s connect and explore how we can shape the future with AI!</p>
                </div>
            </div>
            <StarsMotion count={200} speed={0.5} radius={100} />
        </motion.main>
    )
}