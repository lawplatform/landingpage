/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		maxWidth: {
			container: "1920px",
			contenContainer: "1280px",
		},
		extend: {
			radialGradientColors: {
				'white-black': ['ellipse at center', 'rgba(255, 255, 255, 0) 0%', 'rgba(255, 255, 255, 1) 40%', 'rgba(0, 0, 0, 1) 100%'],
			},
			backgroundImage: {
			},
			screens: {
				xs: "320px",
				sm: "325px",
				sml: "500px",
				md: "667px",
				mdl: "768px",
				lg: "960px",
				lgl: "1024px",
				xl: "1280px",
				"2xl": "1480px",

			},
			colors: {
				'dark-blue': `#242424`
			},
			boxShadow: {
				bannerShadow: "0 1px 2px 1px #00000026"
			}
		},
	},
	plugins: [require('daisyui'),
	require('tailwindcss-gradients'),],
}
