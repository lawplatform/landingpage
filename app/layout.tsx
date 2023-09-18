import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from '@/src/components/Provider'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: '로플랫폼',
	description: '메타버스 기반 콘텐츠 제작 기업',
	keywords: ['zep', 'zepeto', '메타버스'],
	openGraph: {
		title: '로플랫폼',
		description: '메타버스 기획, 메타버스 월드 구축, 컨썰플랫폼, 메타버스 행사 운영 지원',
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
			<link
				rel="apple-touch-icon"
				href="/favicon.ico"
				sizes="any"
			/>
			<body className={inter.className}>
				<Script
					src="//dapi.kakao.com/v2/maps/sdk.js?appkey=6446daaa47bec9c457b2b6d23558b3cc.&libraries=services,clusterer&autoload=false"
					strategy="beforeInteractive"
				/>
				<Provider>
					<div className='text-center items-center justify-center'>
						{children}
					</div></Provider>
			</body>
		</html>
	)
}
