"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FiArrowUpRight, FiMail } from "react-icons/fi"

const contacts = [
  ["LinkedIn", "https://www.linkedin.com/in/danang-hapis-fadillah-682878202/"],
  ["GitHub", "https://github.com/n0yy"],
  ["Email", "mailto:danangpostman37@gmail.com"],
]

export default function Contact() {
  return (
    <main className="section-rule py-20 md:py-28">
      <div className="od-container">
        <div className="grid gap-12 md:grid-cols-[1fr_0.78fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-5">04 / Contact</p>
            <h2 className="poster-title max-w-4xl text-[clamp(3.8rem,5.8vw,6.5rem)] leading-[0.8]">
              Let&apos;s build AI that works in the <span className="serif-ish lowercase">real world</span>.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[rgba(23,21,16,0.66)]">
              Bring an AI workflow, a knowledge-heavy product, or a web application that needs sharper engineering. I
              can help turn it into a reliable RAG pipeline, API, and interface that holds up under real use.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="mailto:danangpostman37@gmail.com" className="coral-pill inline-flex w-fit items-center gap-2 px-5 py-3 text-sm font-bold">
                <FiMail /> Send mail
              </Link>
              <Link href="/Danang's Resume.pdf" target="_blank" className="inline-flex w-fit items-center gap-2 border border-[rgba(23,21,16,0.18)] px-5 py-3 text-sm font-bold hover:border-[#df5b43] hover:text-[#df5b43]">
                Download resume <FiArrowUpRight />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 2, y: 18 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            viewport={{ once: true }}
            className="paper-card relative aspect-square overflow-hidden p-6"
          >
            <div className="absolute left-10 top-8 h-28 w-28 rounded-full bg-[#df5b43]" />
            <Image
              src="/me.jpg"
              alt="Danang Hapis Fadillah, AI Engineer"
              fill
              sizes="(min-width: 768px) 44vw, 100vw"
              className="object-cover object-top grayscale mix-blend-multiply mask-image-gradient"
            />
            <div className="absolute bottom-6 left-6 right-6 border border-[rgba(23,21,16,0.16)] bg-[#f7eed9]/80 p-4 backdrop-blur-sm">
              <p className="eyebrow mb-2">Available for</p>
              <p className="text-sm font-bold leading-5">AI engineering, RAG systems, and web development collaborations.</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid border-y border-[rgba(23,21,16,0.16)] md:grid-cols-3">
          {contacts.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              className="group flex items-center justify-between border-[rgba(23,21,16,0.16)] px-0 py-5 text-lg font-black md:border-r md:px-6 last:md:border-r-0"
            >
              {label}
              <FiArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#df5b43]" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
