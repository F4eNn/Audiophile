import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import { Nav } from '@/components/Home/nav/Nav'
const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Audiophile',
	description: 'Music stuff store',
	themeColor: [{ color: '#D87D4A' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body className={`${manrope.className}  h-screen`}>
				<Nav />
				{children}
			</body>
		</html>
	)
}
