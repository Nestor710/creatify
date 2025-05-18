/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: ''
            }
        ]
    },
    onDemandEntries: {
        // cuánto tiempo mantener una página inactiva (ms)
        maxInactiveAge: 60 * 1000,
        // cuántas páginas mantener en el buffer
        pagesBufferLength: 10,
    },
};

export default nextConfig;
