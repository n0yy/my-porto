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

const StarsMotion = dynamic(() => import("@/components/Stars"), { ssr: false });

const FIELDS = ["AI Engineer", "ML Engineer", "Generative AI Developer"]

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
      className="relative grid min-h-screen overflow-hidden bg-gray-950 px-4 text-gray-200 z-10"
    >

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2
            }
          }
        }}
        className="relative z-10 flex flex-col items-center pb-10 md:pb-10 2xl:pb-24 justify-center px-7 md:px-0"
      >
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm"
        >
          Danang Hapis Fadillah
        </motion.span>
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="max-w-3xl text-white bg-clip-text text-center text-4xl font-extrabold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight uppercase"
        >
          Hapeace
        </motion.h1>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <div className="mt-4">
            <p className="max-w-full text-base leading-relaxed md:text-lg md:leading-relaxed border-b">
              <span className="font-bold font-sans">/ ROLES :</span> {" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentFieldText}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="inline-block"
                >
                  {FIELDS[currentFieldText]}
                </motion.span>
              </AnimatePresence>
            </p>
          </div>
          <p className="text-md md:text-lg mt-3 mb-6 max-w-xl leading-relaxed md:leading-relaxed">
            <span className="font-bold font-sans">AI Engineer at SimplifyAI</span> specializing in Agentic AI, RAG systems, and Scalable Machine Learning solutions. I turn cutting-edge AI research into production-ready tools using Next.js, FastAPI, LangGraph, and Google Cloud.
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
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50 cursor-pointer"
        >
          <Link href="/Danang's Resume.pdf" target="_blank">See Resume</Link>
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.div>
      </motion.div>
      <StarsMotion count={100} speed={0.5} radius={50} />

    </motion.main>
  )

}