"use client"

import Link from "next/link"

const columns = [
    ["Navigation", [["Home", "#home"], ["Systems", "#about"], ["Archive", "#projects"], ["Contact", "#contact"]]],
    ["Focus", [["Agentic AI", "#about"], ["RAG Systems", "#about"], ["ML Products", "#projects"], ["Next.js", "#projects"]]],
    ["Connect", [["GitHub", "https://github.com/n0yy"], ["LinkedIn", "https://www.linkedin.com/in/danang-hapis-fadillah-682878202/"], ["Email", "mailto:danangpostman37@gmail.com"]]],
]

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-[#171510] py-14 text-[#f7eed9] px-3">
            <div className="od-container">
                <div className="grid gap-12 md:grid-cols-[1.2fr_1.8fr]">
                    <div>
                        <div className="mb-5 flex items-center gap-2">
                            <span className="grid h-7 w-7 place-items-center bg-[#f7eed9] text-xs font-black text-[#171510]">DH</span>
                            <p className="font-black tracking-[-0.04em]">Danang Hapis Fadillah</p>
                        </div>
                        <p className="max-w-sm text-sm leading-6 text-[#f7eed9]/62">
                            AI Engineer building systems that move from signals to software, from prototypes to reliable
                            delivery loops.
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-3">
                        {columns.map(([title, items]) => (
                            <div key={title as string}>
                        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#df5b43]">{title as string}</p>
                        <ul className="space-y-2 text-sm text-[#f7eed9]/70">
                                    {(items as string[][]).map(([item, href]) => (
                                        <li key={item}>
                                            <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} className="hover:text-[#df5b43]">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex flex-col justify-between gap-3 border-t border-[#f7eed9]/12 pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-[#f7eed9]/45 md:flex-row">
                    <p>Copyright {currentYear}</p>
                    <p>Built with Next.js, Tailwind, and deliberate restraint.</p>
                </div>
            </div>
        </footer>
    )
}
