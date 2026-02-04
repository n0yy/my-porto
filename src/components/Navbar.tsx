"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useColor } from "../context/Colors"

export default function Navbar() {
  const color = useColor();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed z-50 top-6 inset-x-0 mx-auto w-fit md:inset-x-auto md:mx-0 md:left-10 md:top-10 bg-white/5 px-6 md:px-10 py-3 md:py-4 rounded-full shadow-lg backdrop-blur-md border border-white/10 scale-90 md:scale-100"
    >
      <ul className="flex items-center space-x-6 text-sm md:text-base font-medium uppercase tracking-widest text-gray-400">
        <li>
          <Link href="#about" className="hover:text-white transition-colors">
            Stories.
          </Link>
        </li>
        <li>
          <Link href="#projects" className="hover:text-white transition-colors">
            Works.
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-white transition-colors">
            Contacts.
          </Link>
        </li>
        <li>
          <Link href="#home" className="hover:text-white transition-colors">
            Home.
          </Link>
        </li>
      </ul>
    </motion.nav>
  )
}