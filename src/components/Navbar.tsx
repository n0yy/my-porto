"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Systems" },
  { href: "#projects", label: "Archive" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }}
      className="reference-nav fixed top-4 z-50 border border-[rgba(23,21,16,0.18)] bg-[#e9dfc7]/86 px-4 py-3 backdrop-blur-sm md:top-6 md:px-5"
    >
      <div className="flex items-center justify-between gap-4">
        <Link href="#home" className="flex shrink-0 items-center gap-2 text-sm font-black tracking-[-0.045em]">
          <span className="grid h-5 w-5 place-items-center bg-[#171510] text-[9px] text-[#f2ead8]">DH</span>
          <span>Danang Hapis</span>
        </Link>

        <ul className="hidden items-center gap-8 font-mono text-[10px] uppercase tracking-[0.28em] text-[rgba(23,21,16,0.56)] lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-[#171510]">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/Danang's Resume.pdf"
          target="_blank"
          className="rounded-full bg-[#171510] px-4 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#f2ead8] transition-transform hover:-translate-y-0.5"
        >
          Resume
        </Link>
      </div>
    </motion.nav>
  )
}
