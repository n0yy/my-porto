"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FiArrowUpRight } from "react-icons/fi"

const metrics = [
  ["01", "AI Engineering"],
  ["02", "RAG Systems"],
  ["03", "Web Development"],
]

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-20 pt-28 md:pt-32">
      <div className="od-container">
        <div className="grid min-h-[calc(100vh-9rem)] gap-10 pb-8 md:grid-cols-[0.96fr_1.04fr] md:items-start md:gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.2, 0, 0, 1] }}
            className="relative z-10 flex min-h-[680px] flex-col justify-between pt-8 md:pt-12"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#df5b43]" />
                <p className="eyebrow">AI Engineering / RAG Systems / Web Development</p>
              </div>

              <h1 className="poster-title max-w-[720px] text-[clamp(3.2rem,9vw,5.4rem)] leading-[0.82]">
                Build AI that feels <span className="serif-ish lowercase">alive</span>, legible, and useful.
              </h1>

              <p className="mt-7 max-w-[560px] text-lg leading-8 text-[rgba(23,21,16,0.68)] md:text-xl">
                I am Danang Hapis Fadillah, an AI Engineer at SimplifyAI Indonesia building reliable AI applications,
                context-aware RAG systems, and production-ready web experiences.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#projects"
                className="coral-pill inline-flex w-fit items-center gap-2 px-5 py-3 text-sm font-bold"
              >
                View selected work <FiArrowUpRight />
              </Link>
              <Link
                href="mailto:danangpostman37@gmail.com"
                className="inline-flex w-fit items-center gap-2 border border-[rgba(23,21,16,0.18)] px-5 py-3 text-sm font-bold transition-colors hover:border-[#df5b43] hover:text-[#df5b43]"
              >
                Start a conversation
              </Link>
            </div>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, scale: 0.94, rotate: -1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="relative mx-auto mt-1 aspect-[0.84] w-full max-w-[560px] md:mt-8 md:justify-self-end"
          >
            <div className="absolute inset-0 overflow-hidden border border-[rgba(23,21,16,0.17)] bg-[#f2ead8]">
              <Image
                src="/me.jpg"
                alt="Danang Hapis Fadillah"
                fill
                sizes="(min-width: 768px) 46vw, 100vw"
                className="object-cover object-top grayscale contrast-110 mix-blend-multiply mask-image-gradient"
                priority
              />
            </div>

            <div className="paper-card absolute -bottom-5 left-6 w-56 p-4 md:left-8">
              <p className="eyebrow mb-3">Current focus</p>
              <p className="text-sm leading-6">
                Building AI products where retrieval quality, backend reliability, and thoughtful web interfaces work
                as one system.
              </p>
            </div>

            <div className="absolute -right-3 top-14 flex h-16 w-16 items-center justify-center rounded-full bg-[#171510] font-mono text-xs text-[#f2ead8]">
              2026
            </div>
          </motion.aside>
        </div>

        <div className="grid border-b border-[rgba(23,21,16,0.16)] py-8 md:grid-cols-3">
          {metrics.map(([number, label]) => (
            <div key={number} className="flex items-center gap-4 border-[rgba(23,21,16,0.12)] py-3 md:border-r md:pr-8 last:md:border-r-0">
              <span className="font-mono text-sm text-[#df5b43]">{number}</span>
              <p className="text-sm font-semibold uppercase tracking-[0.08em]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
