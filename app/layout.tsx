import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from '@/src/components/Provider'
import Footer from '@/src/components/Footer'
import Head from 'next/head'
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
			<Head>
				<meta name="naver-site-verification" content="bfe1cf2703b316bb4fd039633ad7109d192b221f" />
			</Head>
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<body className={inter.className}>
				<Provider>
					<div className='text-center items-center justify-center'>
						{children}
					</div></Provider>
			</body>
		</html>
	)
}
