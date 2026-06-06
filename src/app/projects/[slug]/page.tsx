import { projects } from "@/DataProjects"
import { notFound } from "next/navigation"
import { Metadata } from 'next'
import { absoluteUrl, serializeJsonLd, siteConfig } from "@/lib/site"

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const slug = (await params).slug
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return { title: 'Project Not Found', robots: { index: false, follow: false } }
  }

  return {
    title: project.title,
    description: project.description,
    keywords: project.tags,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      url: `/projects/${slug}`,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(project.title)}`,
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
      images: [`/api/og?title=${encodeURIComponent(project.title)}`],
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const slug = (await params).slug
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    headline: project.title,
    description: project.description,
    url: absoluteUrl(`/projects/${project.slug}`),
    image: absoluteUrl(project.image),
    keywords: project.tags.join(', '),
    inLanguage: 'en-US',
    creator: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: siteConfig.name,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <main className="mx-auto mb-28 mt-28 w-full max-w-3xl px-6">
        <article className="prose prose-stone flex max-w-none flex-col prose-headings:font-black prose-headings:tracking-[-0.04em] prose-h1:text-5xl prose-h1:leading-none prose-h2:mt-12 prose-h2:border-t prose-h2:border-[rgba(23,21,16,0.16)] prose-h2:pt-8 prose-p:text-[rgba(23,21,16,0.68)] prose-p:leading-8 prose-strong:text-[#171510] prose-a:text-[#df5b43] prose-ul:text-[rgba(23,21,16,0.68)] prose-ol:text-[rgba(23,21,16,0.68)] prose-img:border prose-img:border-[rgba(23,21,16,0.16)] prose-img:bg-[#f2ead8]">
          <Content />
        </article>
      </main>
    </>
  )
}
