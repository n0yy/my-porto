"use client"

import { motion } from "framer-motion"

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950">
            <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 blur-2xl bg-blue-500/20 animate-pulse rounded-full" />

                {/* Logo/Icon Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className="relative text-4xl font-bold text-white tracking-tighter"
                >
                    DH<span className="text-blue-500">.</span>
                </motion.div>

                {/* Progress Line */}
                <motion.div
                    className="mt-4 h-[2px] bg-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
        </div>
    )
}
