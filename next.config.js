/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
	images: {
		remotePatterns: [{ protocol: 'https', hostname: 'a88f-185-107-64-107.ngrok-free.app', pathname: '/uploads/**' }],
	},
};

module.exports = nextConfig;
