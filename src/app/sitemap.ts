import { MetadataRoute } from 'next'
import { projects } from '@/DataProjects'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://hapeace.vercel.app'

    // Base routes
    const routes = ['', '/about', '/projects', '/contact'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic project routes
    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [...routes, ...projectRoutes]
}
