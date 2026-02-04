"use client"

import React, { useEffect, useState } from "react"
import { useColor } from "@/context/Colors";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  AnimatePresence,
  motion,
} from "framer-motion";
import dynamic from 'next/dynamic';
import Link from "next/link";
import Image from "next/image";

const StarsMotion = dynamic(() => import("@/components/Stars"), { ssr: false });

const FIELDS = ["AI Engineer", "ML Engineer", "Builder"]

export default function Home() {
  const [currentFieldText, setCurrentFieldText] = useState(0);
  const color = useColor();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFieldText((prev) => (prev + 1) % FIELDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [])


  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 20% 20%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.main
      style={{
        backgroundImage,
      }}
      className="relative min-h-screen overflow-hidden bg-gray-950 px-4 text-gray-200 z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 pt-20 md:pt-0 pb-10"
    >

      {/* Left Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2
            }
          }
        }}
        className="relative z-10 flex flex-col items-start max-w-xl order-2 md:order-1"
      >

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-white text-6xl md:text-8xl font-bold leading-tight uppercase tracking-tighter"
        >
          Danang <br />
          Hapis <FiArrowRight className="inline-block" />
        </motion.h1>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="mt-8 mb-6 py-3"
        >
          <p className="text-gray-300 text-lg leading-relaxed max-w-md">
            <span className="text-gray-500 font-mono text-xs block mb-2">/ THIS IS ME</span>
            <strong>AI Engineer at SimplifyAI</strong> specializing in Agentic AI, RAG systems, and Scalable Machine Learning solutions.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 }
          }}
          style={{
            border,
            boxShadow,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 bg-gray-900/50 px-6 py-3 rounded-full cursor-pointer hover:bg-white/10 transition-colors"
        >
          <Link href="/Danang's Resume.pdf" target="_blank" className="font-semibold">Download Resume</Link>
        </motion.div>
      </motion.div>

      {/* Right Content / Image Area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative order-1 md:order-2"
      >
        <div className="relative w-[300px] h-[350px] md:w-[400px] md:h-[500px]">
          {/* Main Image */}
          <div className="absolute inset-0 rounded-b-full overflow-hidden border-b border-white/10 bg-gradient-to-t from-gray-900 via-transparent to-transparent">
            <Image
              src="/me.jpg"
              alt="Danang Hapis"
              fill
              className="object-cover object-top mask-image-gradient"
              priority
            />
          </div>


          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-10 top-24 bg-blue-600 rounded-full w-28 h-28 flex flex-col items-center justify-center text-white p-2 text-center shadow-[0_0_30px_rgba(37,99,235,0.6)] z-20 border border-blue-400/30 backdrop-blur-sm"
          >
            <span className="text-[10px] uppercase opacity-70 mb-1">Expertise</span>
            <span className="font-bold text-sm leading-tight">AI Engineer</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-8 bottom-32 bg-teal-500 rounded-full w-32 h-32 flex flex-col items-center justify-center text-white p-2 text-center shadow-[0_0_30px_rgba(20,184,166,0.6)] z-20 border border-teal-400/30 backdrop-blur-sm"
          >
            <span className="text-[10px] uppercase opacity-70 mb-1">Passion</span>
            <span className="font-bold text-sm leading-tight">Startups</span>
          </motion.div>
        </div>
      </motion.div>

      <StarsMotion count={100} speed={0.5} radius={50} />

    </motion.main>
  )

}