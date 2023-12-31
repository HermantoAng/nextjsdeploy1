/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'dist',
    output: 'export',

    images : {
        remotePatterns : [
            {
                protocol : 'https',
                hostname : "images.unsplash.com"
            }
        ]
    }
}

module.exports = nextConfig
