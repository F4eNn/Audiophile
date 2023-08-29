import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Audiophile',
	description: 'Music stuff store',
	themeColor: [{ color: '#D87D4A' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${manrope.className} h-screen`}>{children}</body>
		</html>
	)
}
