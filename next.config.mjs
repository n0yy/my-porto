/** @type {import('next').NextConfig} */

import createMDX from "@next/mdx";

const nextConfig = {
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

const withMDX = createMDX({
    // extension: /\.mdx?$/,
});

export default withMDX(nextConfig);