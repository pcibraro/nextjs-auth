/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        typedRoutes: true,
        serverActions: true,
        optimizeServerReact: true,
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true
            },
        ]
    },
}

module.exports = nextConfig

