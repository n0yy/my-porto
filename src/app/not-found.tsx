"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function NotFound() {
    return (
        <div className="min-h-screen px-6 py-28">
            <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="od-container border-t border-[rgba(23,21,16,0.16)] pt-16"
            >
                <p className="eyebrow mb-5">404 / Missing page</p>
                <h1 className="max-w-4xl text-[clamp(4rem,13vw,12rem)] font-black leading-[0.82]">
                    This page fell out of the archive.
                </h1>
                <p className="mt-6 max-w-lg text-lg leading-8 text-[rgba(23,21,16,0.66)]">
                    The route does not exist, or the project note has not been published yet.
                </p>
                <Link href="/" className="coral-pill mt-8 inline-flex px-5 py-3 text-sm font-bold">
                    Back home
                </Link>
            </motion.div>
        </div>
    )
}
