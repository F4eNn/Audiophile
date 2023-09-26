export const metadata = {
	title: 'Audiophile',
	description: 'User Authorization',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
