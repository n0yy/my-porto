"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md"
            >
                <div className="text-6xl mb-6">⚠️</div>
                <h2 className="text-3xl font-bold text-white mb-4 italic font-serif">
                    Something went wrong!
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                    An unexpected error occurred. Don't worry, it's not you, it's probably the AI acting up.
                </p>
                <button
                    onClick={() => reset()}
                    className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105"
                >
                    Try again
                </button>
            </motion.div>
        </div>
    )
}
