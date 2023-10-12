import '../globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Nav } from '@/components/Home/nav/Nav'
import { Footer } from '@/components/Home/main/Footer'
import { Description } from '@/components/Home/main/Description'
import { CartCtxProvider } from '@/context/CartCtx'
import { UserProvider } from '@/context/AuthCtx'

export const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Audiophile',
	description: 'Music stuff store',
	themeColor: [{ color: '#D87D4A' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className='scroll-pt-[77px] scroll-smooth'>
			<body className={`${manrope.className}  flex min-h-screen flex-col `}>
				<ToastContainer />

				<UserProvider>
					<CartCtxProvider>
						<div id='modal' />
						<div id='uploadModal' />

						<Nav />
						{children}
					</CartCtxProvider>
					<Description />
					<Footer />
				</UserProvider>
			</body>
		</html>
	)
}
