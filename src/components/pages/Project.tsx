"use client"

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionTemplate } from 'framer-motion';
import { projects } from "@/DataProjects";
import { useColor } from '@/context/Colors';
import StarsMotion from '@/components/Stars';
import Link from 'next/link';

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prevIndex) => 
                prevIndex === projects.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            if (newDirection === 1) {
                return prevIndex === projects.length - 1 ? 0 : prevIndex + 1;
            }
            return prevIndex === 0 ? projects.length - 1 : prevIndex - 1;
        });
    };

    const color = useColor();
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at bottom right, #020617 50%, ${color})`;
    const border = useMotionTemplate`0.5px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 1px 24px ${color}`;

    return (
        <motion.main
            style={{backgroundImage}} 
            className="relative pt-10 md:pt-16 2xl:pt-56 min-h-screen overflow-hidden bg-gray-950 text-gray-200 z-10">
            <div className="max-w-2xl mx-auto text-center">
                <motion.h1 
                    className="mb-2 inline-block rounded-full bg-white/20 outline outline-[1px] px-4 py-1 text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Projects
                </motion.h1>
                <motion.h3 
                    className="font-semibold text-3xl leading-tight uppercase mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    A Continuous Journey in Web Development and AI
                </motion.h3>
            </div>
            
            <div className="mx-4 md:mx-auto relative h-[400px]  max-w-4xl overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className="absolute w-full"
                    >
                        <div className="flex justify-center">
                            <motion.div style={{border, boxShadow}} className="group relative flex flex-col justify-between w-[400px] min-h-[300px] bg-white/10 backdrop-blur-md rounded-xl">
                                <div className="p-6">
                                    <motion.h2 
                                        className="text-xl md:text-2xl font-semibold mb-3"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {projects[currentIndex].title}
                                    </motion.h2>
                                    <motion.p 
                                        className="text-gray-400 text-sm mb-4 line-clamp-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        {projects[currentIndex].description}
                                    </motion.p>
                                    <motion.div 
                                        className="flex flex-wrap gap-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        {projects[currentIndex].tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </motion.div>
                                </div>
                                <Link href={`/projects/${projects[currentIndex].slug}`}>
                                <motion.button 
                                    className="bg-white text-gray-950 mx-6 mb-6 text-sm px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    
                                >
                                    See more
                                </motion.button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation dots */}
                <div className="absolute bottom-12 md:bottom-14 left-1/2 transform -translate-x-1/2 flex gap-2 mb-4">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentIndex ? 'bg-white' : 'bg-white/30'
                            }`}
                        />
                    ))}
                </div>
            </div>
            <StarsMotion speed={1} count={250} radius={40} />
        </motion.main>
    );
}