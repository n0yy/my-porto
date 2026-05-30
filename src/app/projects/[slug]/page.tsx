import { projects } from "@/DataProjects"
import { notFound } from "next/navigation"
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const slug = (await params).slug
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      url: `https://hapeace.vercel.app/projects/${slug}`,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(project.title)}`, // Assuming an OG API route or static image
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
    },
  }
}

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

  return (
    <main className="prose prose-stone mx-auto mb-28 mt-28 flex w-full max-w-3xl flex-col px-6 prose-headings:font-black prose-headings:tracking-[-0.04em] prose-h1:text-5xl prose-h1:leading-none prose-h2:mt-12 prose-h2:border-t prose-h2:border-[rgba(23,21,16,0.16)] prose-h2:pt-8 prose-p:text-[rgba(23,21,16,0.68)] prose-p:leading-8 prose-strong:text-[#171510] prose-a:text-[#df5b43] prose-ul:text-[rgba(23,21,16,0.68)] prose-ol:text-[rgba(23,21,16,0.68)] prose-img:border prose-img:border-[rgba(23,21,16,0.16)] prose-img:bg-[#f2ead8]">
      <Content />
    </main>
  )
}
