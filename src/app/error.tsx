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
        <div className="min-h-screen px-6 py-28">
            <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="od-container max-w-3xl border-t border-[rgba(23,21,16,0.16)] pt-16"
            >
                <p className="eyebrow mb-5">Runtime error</p>
                <h1 className="text-6xl font-black leading-none md:text-8xl">Something broke in the build loop.</h1>
                <p className="mt-6 max-w-lg text-lg leading-8 text-[rgba(23,21,16,0.66)]">
                    The app hit an unexpected state. Try the render again.
                </p>
                <button onClick={() => reset()} className="coral-pill mt-8 px-5 py-3 text-sm font-bold">
                    Try again
                </button>
            </motion.div>
        </div>
    )
}
