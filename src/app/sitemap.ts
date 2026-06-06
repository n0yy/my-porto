import { MetadataRoute } from 'next'
import { projects } from '@/DataProjects'
import { siteConfig } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ['', '/about', '/projects', '/contact'].map((route) => ({
        url: `${siteConfig.url}${route}`,
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    const projectRoutes = projects.map((project) => ({
        url: `${siteConfig.url}/projects/${project.slug}`,
        changeFrequency: 'yearly' as const,
        priority: 0.7,
    }))

    return [...routes, ...projectRoutes]
}
