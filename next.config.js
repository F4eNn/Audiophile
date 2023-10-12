/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})
		return config
	},
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: `${process.env.NEXT_PUBLIC_STRAPI_REMOTE_PATTERN}`, pathname: '/uploads/**' },
			{ protocol: 'https', hostname: 'audiophile-p4dbpkm65-f4enn.vercel.app', pathname: '/uploads/**' },
		],
	},
}

module.exports = nextConfig
