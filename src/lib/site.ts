export const siteConfig = {
  name: "Danang Hapis Fadillah",
  title: "Danang Hapis Fadillah | AI Engineer",
  description:
    "AI Engineer specializing in production AI applications, RAG systems, and full-stack web development with Next.js and FastAPI.",
  url: "https://hapeace.vercel.app",
  email: "mailto:danangpostman37@gmail.com",
  github: "https://github.com/n0yy",
  linkedin: "https://www.linkedin.com/in/danang-hapis-fadillah-682878202/",
} as const

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString()
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c")
}
