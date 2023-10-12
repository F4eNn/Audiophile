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
			{ protocol: 'https', hostname: `${process.env.NEXT_PUBLIC_STRAPI_REMOTE_PATTERN}`, pathname: '/**' },
		],
	},
}

module.exports = nextConfig
