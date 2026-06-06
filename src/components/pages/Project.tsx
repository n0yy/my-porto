"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi"
import { projects } from "@/DataProjects"

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const featured = projects[currentIndex]
  const image = featured.image

  const archive = useMemo(() => projects.slice(0, 5), [])

  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % projects.length)
  const prevProject = () => setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))

  return (
    <main className="section-rule py-20 md:py-28">
      <div className="od-container">
        <div className="mb-12 grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <div>
            <p className="eyebrow mb-5">03 / Work archive</p>
            <h2 className="poster-title text-[clamp(3.6rem,5vw,5.6rem)] leading-[0.82]">
              AI systems with receipts, interfaces, and <span className="serif-ish lowercase">working edges</span>.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[rgba(23,21,16,0.66)]">
            Selected work across AI engineering, modular RAG, and full-stack web development, from document
            intelligence to SDLC tooling. The common thread: make intelligence useful and inspectable.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-[0.82fr_1.18fr]">
          <section className="border border-[rgba(23,21,16,0.16)] bg-[#f2ead8]/42 p-6 md:p-8">
            <div className="mb-8 flex items-center justify-between border-b border-[rgba(23,21,16,0.14)] pb-4">
              <p className="eyebrow">Featured case</p>
              <p className="font-mono text-sm text-[#df5b43]">{String(currentIndex + 1).padStart(2, "0")}</p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={featured.slug}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28 }}
              >
                <h3 className="mb-5 text-4xl font-black leading-none tracking-[-0.055em] md:text-5xl">{featured.title}</h3>
                <p className="mb-7 text-base leading-7 text-[rgba(23,21,16,0.66)]">{featured.description}</p>
                <div className="mb-8 flex flex-wrap gap-2">
                  {featured.tags.slice(0, 6).map((tag) => (
                    <span key={tag} className="border border-[rgba(23,21,16,0.18)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em]">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${featured.slug}`}
                  className="inline-flex items-center gap-2 bg-[#171510] px-5 py-3 text-sm font-bold text-[#f7eed9] transition-transform hover:-translate-y-0.5"
                >
                  Read case notes <FiArrowUpRight />
                </Link>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex gap-3">
              <button
                onClick={prevProject}
                className="grid h-11 w-11 place-items-center border border-[rgba(23,21,16,0.18)] transition-colors hover:border-[#df5b43] hover:text-[#df5b43]"
                aria-label="Previous project"
              >
                <FiArrowLeft />
              </button>
              <button
                onClick={nextProject}
                className="grid h-11 w-11 place-items-center border border-[rgba(23,21,16,0.18)] transition-colors hover:border-[#df5b43] hover:text-[#df5b43]"
                aria-label="Next project"
              >
                <FiArrowRight />
              </button>
            </div>
          </section>

          <section className="relative min-h-[520px] overflow-hidden bg-[#171510] p-5 text-[#f7eed9] md:p-8">
            <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-[#df5b43]" />
            <div className="absolute right-12 top-24 h-16 w-16 bg-[#d6a443]" />
            <AnimatePresence mode="wait">
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="relative z-10 h-full min-h-[460px] overflow-hidden border border-[#f7eed9]/15 bg-[#f7eed9]"
              >
                <Image
                  src={image}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover grayscale mix-blend-multiply"
                />
              </motion.div>
            </AnimatePresence>
          </section>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {archive.map((project, index) => (
            <button
              key={project.slug}
              onClick={() => setCurrentIndex(index)}
              className="group text-left"
            >
              <div className="paper-card mb-3 aspect-[4/3] overflow-hidden p-2 transition-transform group-hover:-translate-y-1">
                <div className="relative h-full w-full overflow-hidden bg-[#f7eed9]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover grayscale mix-blend-multiply"
                  />
                </div>
              </div>
              <p className="font-mono text-[10px] text-[#df5b43]">0{index + 1}</p>
              <p className="mt-1 line-clamp-2 text-sm font-black leading-tight">{project.title}</p>
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
