"use client"

import { motion } from "framer-motion"

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-[#e9dfc7]">
            <div className="text-center">
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, repeat: Infinity, repeatType: "reverse", ease: [0.2, 0, 0, 1] }}
                    className="mx-auto mb-5 h-px w-32 origin-left bg-[#df5b43]"
                />
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[rgba(23,21,16,0.58)]">Loading Danang Hapis</p>
            </div>
        </div>
    )
}
