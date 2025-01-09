"use client"

import React, { useEffect, useState } from "react"
import { useColor } from "../context/Colors";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  AnimatePresence,
  motion,
} from "framer-motion";
import StarsMotion from "@/components/Stars";

const FIELDS = ["Machine Learning", "Web Development", "Data Science"]

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
      className="relative grid min-h-screen overflow-hidden bg-gray-950 px-4 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center pb-10 md:pb-10 2xl:pb-24 justify-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          Danang Hapis Fadillah
        </span>
        <h1 className="max-w-3xl text-white bg-clip-text text-center text-4xl font-extrabold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight uppercase">
          Hapeace
        </h1>
        <div>
        <div className="mt-4">
          <p className="max-w-xs text-base leading-relaxed md:text-lg md:leading-relaxed border-b">
            <span className="font-bold font-sans">/ FIELDS :</span> {" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={currentFieldText}
                initial={{ y: 20, opacity: 0}}
                animate={{ y: 0, opacity: 1}}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="inline-block"
              >
                {FIELDS[currentFieldText]}
              </motion.span>
            </AnimatePresence>
          </p>
        </div>
        <p className="mt-3 mb-6 max-w-xl text-base leading-relaxed md:text-lg md:leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, et,
          distinctio eum impedit nihil ipsum modi.
        </p>
        </div>
        <motion.button
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
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          See Resume
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>
      
      <StarsMotion count={750} speed={1} radius={75} /> 
    </motion.main>
  )

}