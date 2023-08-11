import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from '@/src/components/Provider'
import Footer from '@/src/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Lawplatform',
	description: 'Lawplatform landing page',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Provider>
					<div className='text-center items-center justify-center'>
						{children}
					</div></Provider>
			</body>
		</html>
	)
}
