import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from '@/src/components/Provider'
import Footer from '@/src/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: '로플랫폼',
	description: '메타버스 제작 전문 기업',
	openGraph: {
		title: '로플랫폼',
		description: '메타버스 제작 기업 로플랫폼입니다',
		url: 'https://law-landing.vercel.app/',
		siteName: '로플랫폼',
		images: [
			{
				url: 'https://law-landing.vercel.app/logo/logo.png',
				width: 800,
				height: 600,
			},
			{
				url: 'https://law-landing.vercel.app/logo/logo.png',
				width: 1800,
				height: 1600,
				alt: '로플랫폼 로고',
			},
		],
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
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
