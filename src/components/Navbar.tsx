"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion, useMotionTemplate } from "framer-motion"
import { useColor } from "../context/Colors"

export default function Navbar() {
    const color = useColor();
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
    const pathname = usePathname()
    
    return (
        <motion.nav
      style={{
        border,
        boxShadow,
      }} 
        className="rounded-full bg-transparent backdrop-blur-md fixed z-10 bottom-10 left-1/2 -translate-x-1/2 transition-colors scale-90 md:scale-100">
        <ul className="flex items-center justify-between p-2 space-x-6 md:space-x-12 px-10">
          {["/", "/about", "/projects", "/contact"].map((path, index) => (
            <li key={index}>
              <Link
                href={path}
                className={`
                  ${pathname === path ? "text-white border-b inline-block": "text-gray-400"} hover:text-white
                `}
                >
                  {path.replace("/", "").toUpperCase() || "HOME"}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    )
}