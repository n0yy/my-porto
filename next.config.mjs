/** @type {import('next').NextConfig} */

import createMDX from "@next/mdx";

const nextConfig = {
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    poweredByHeader: false,
    compress: true,
    turbopack: {
        root: process.cwd(),
    },
};

const withMDX = createMDX({
    // extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
