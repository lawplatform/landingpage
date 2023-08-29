import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/private/',
		},
		sitemap: 'https://law-landing-b2niv2f95-lawplatform.vercel.app/sitemap.xml',
	}
}
