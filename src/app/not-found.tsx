"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import dynamic from 'next/dynamic'

const StarsMotion = dynamic(() => import("@/components/Stars"), { ssr: false });

export default function NotFound() {
    return (
        <div className="relative min-h-screen bg-gray-950 flex flex-col items-center justify-center p-6 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-50">
                <StarsMotion count={100} speed={0.5} radius={50} />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 text-center"
            >
                <h1 className="text-[12rem] md:text-[20rem] font-bold text-white/5 leading-none select-none">
                    404
                </h1>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase tracking-tighter">
                        Lost in Space
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-sm">
                        The page you are looking for has drifted into a black hole or never existed.
                    </p>
                    <Link href="/">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all"
                        >
                            Back to Earth
                        </motion.button>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}
