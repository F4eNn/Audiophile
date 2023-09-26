import '../globals.css';

import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
	title: 'Audiophile',
	description: 'User Authorization',
	themeColor: [{ color: '#D87D4A' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`h-full  ${manrope.className}`}>{children}</body>
		</html>
	);
}
