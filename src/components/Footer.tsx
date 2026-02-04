"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi"

const socialLinks = [
    { icon: FiGithub, href: "https://github.com/n0yy", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/danang-hapis-fadillah-682878202/", label: "LinkedIn" },
    { icon: FiMail, href: "mailto:danangpostman37@gmail.com", label: "Email" },
]

const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-gray-950 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-bold text-white">
                            Danang<span className="text-blue-500">.</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            AI Engineer crafting intelligent solutions with passion and precision.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                                    >
                                        {link.name}
                                        <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={12} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Connect
                        </h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Danang Hapis Fadillah. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs">
                        Built with <span className="text-red-500">♥</span>
                    </p>
                </div>
            </div>

            {/* Background Glow Effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </footer>
    )
}
