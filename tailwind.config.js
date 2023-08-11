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

			colors: {
				'dark-blue': `#242424`,
				'low-dark': '#07478f'
			},
			boxShadow: {
				bannerShadow: "0 1px 2px 1px #00000026"
			}
		},
		daisyui: {
			themes: ["light", "dark", "cupcake"],
		},
	},
	plugins: [require('daisyui'),
	require('tailwindcss-gradients'),],
}
