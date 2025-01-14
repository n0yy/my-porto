
import { projects } from "@/DataProjects"
import { notFound } from "next/navigation"

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    
    const slug = (await params).slug
    let Content;
    
    try {
      const markdown = await import(`@/markdown/${slug}.mdx`)
      Content = markdown.default
    } catch (error) {
      if (error instanceof Error && 
          error.message.includes('Cannot find module')) {
        notFound()
      }
      throw error
    }
    
    const project = projects.find((project) => project.slug === slug)


    return (
    <>
      <head>
          <title>{project?.title}</title>
          <meta name="description" content={project?.description} key="description" />
          <meta property="og:title" content={project?.title} key="og:title" />
          <meta property="og:description" content={project?.description} key="og:description" />
      </head>
      <main className="prose prose-headings:font-semibold prose-headings:text-white prose-h1:4xl md:prose-h1:text-5xl prose-h2:text-base md:prose-h2:text-xl dark:prose-h2:text-gray-400 prose-p:text-gray-300 prose-strong:text-white prose-ul:text-gray-300 w-full flex mx-auto flex-col mt-10 prose-h2:-mt-7 mb-28 prose-a:text-blue-500 prose-ul:-mt-3 px-10 md:px-0 prose-h4:font-sans prose-h4:text-lg prose-ol:-mt-3 z-10 prose-img:rounded-lg prose-img:shadow-lg prose-img:shadow-gray-950 prose-img:-mt-0 prose-h3:font-sans prose-ol:text-gray-300 ">
          <Content />
      </main>
      </>
    )
  }
