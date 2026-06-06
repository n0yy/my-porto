import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Danang Hapis Fadillah | AI Engineer Portfolio",
    short_name: "Danang Hapis",
    description:
      "AI engineering, RAG systems, and web development portfolio by Danang Hapis Fadillah.",
    start_url: "/",
    display: "standalone",
    background_color: "#e9dfc7",
    theme_color: "#171510",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
