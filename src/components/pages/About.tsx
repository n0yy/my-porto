"use client"

import { motion } from "framer-motion"
import { FaDatabase } from "react-icons/fa"
import { FiDatabase, FiGitBranch, FiLayers } from "react-icons/fi"
import { SiFastapi, SiLangchain, SiNextdotjs, SiPython, SiPytorch, SiReact, SiTensorflow, SiTypescript } from "react-icons/si"

const systems = [
  {
    icon: FiGitBranch,
    title: "Agentic workflows",
    copy: "Multi-step AI agents with task planning, tool routing, guarded execution, and human-readable traces.",
  },
  {
    icon: FiDatabase,
    title: "Retrieval systems",
    copy: "RAG stacks that respect source context, retrieval quality, latency, and maintainable evaluation loops.",
  },
  {
    icon: FiLayers,
    title: "Product interfaces",
    copy: "Next.js and FastAPI surfaces that make complex AI behavior feel direct, observable, and usable.",
  },
]

const stack = [
  ["Python", SiPython],
  ["TypeScript", SiTypescript],
  ["Next.js", SiNextdotjs],
  ["React", SiReact],
  ["FastAPI", SiFastapi],
  ["LangChain", SiLangchain],
  ["Qdrant", FaDatabase],
  ["PyTorch", SiPytorch],
  ["TensorFlow", SiTensorflow],
]

export default function About() {
  return (
    <main className="section-rule py-20 md:py-28">
      <div className="od-container">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <p className="eyebrow mb-5">02 / Operating model</p>
            <h2 className="poster-title text-[clamp(3.2rem,7.8vw,7rem)] leading-[0.84]">
              I treat AI as a <span className="serif-ish font-normal">system</span>, not a prompt trick.
            </h2>
          </motion.div>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl text-xl leading-9 text-[rgba(23,21,16,0.68)]"
            >
              My work sits between model behavior, software architecture, and product experience. I build the
              invisible plumbing around LLMs: retrieval, orchestration, validation, APIs, and interfaces that make
              teams trust what the AI is doing.
            </motion.p>

            <div className="grid gap-4 md:grid-cols-3">
              {systems.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="border-t border-[rgba(23,21,16,0.18)] pt-5"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-mono text-xs text-[#df5b43]">0{index + 1}</span>
                    <item.icon className="text-[rgba(23,21,16,0.42)]" size={20} />
                  </div>
                  <h3 className="mb-3 text-2xl font-black leading-tight tracking-[-0.05em]">{item.title}</h3>
                  <p className="text-sm leading-6 text-[rgba(23,21,16,0.64)]">{item.copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-8 border-y border-[rgba(23,21,16,0.16)] py-10 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow mb-4">Skills, systems, surfaces</p>
            <h3 className="poster-title max-w-md text-4xl leading-[0.9] md:text-5xl">
              Tools that become production intelligence.
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {stack.map(([name, Icon]) => (
              <div key={name as string} className="flex items-center gap-3 border border-[rgba(23,21,16,0.13)] bg-[#f2ead8]/58 p-4">
                <Icon className="text-[#df5b43]" size={20} />
                <span className="text-sm font-bold">{name as string}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {[
            ["2+", "years building applied AI"],
            ["10+", "portfolio-grade systems"],
            ["5", "domains across data, web, and ML"],
            ["1", "focus: usable intelligence"],
          ].map(([value, label]) => (
            <div key={label} className="border-t border-[rgba(23,21,16,0.16)] pt-5">
              <p className="mb-2 font-mono text-4xl text-[#df5b43]">{value}</p>
              <p className="text-sm uppercase tracking-[0.08em] text-[rgba(23,21,16,0.62)]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
