/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'images.unsplash.com',
				protocol: 'https',
			},
			{
				hostname: 'directus-production-a4cd.up.railway.app',
				protocol: 'https',
			},
			{
				hostname: 'directus-production-a4cd.up.railway.app',
				protocol: 'http',
			},
		],
	},
};

module.exports = nextConfig;
