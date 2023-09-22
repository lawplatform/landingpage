import './globals.css'
import { Metadata } from 'next'
import { Inter, Noto_Sans_KR } from 'next/font/google'
import Provider from '@/src/components/Provider'
import Script from 'next/script'
const noto = Noto_Sans_KR({
	subsets: ['latin'],
	weight: '400'
})
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

declare global {
	interface Window {
		kakao: any;
	}
}


export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={noto.className}>
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<link
				rel="apple-touch-icon"
				href="/favicon.ico"
				sizes="any"
			/>
			<body className={noto.className}>

				<Provider>
					<Script
						src="//dapi.kakao.com/v2/maps/sdk.js?appkey=6446daaa47bec9c457b2b6d23558b3cc&autoload=false"
						strategy="beforeInteractive"
					/>
					<Script src="https://developers.kakao.com/sdk/js/kakao.js" async />
					<div className='text-center items-center justify-center'>
						{children}
					</div></Provider>
			</body>
		</html>
	)
}
