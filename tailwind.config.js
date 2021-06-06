module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			filter: ['hover', 'focus'],
			brightness: {
				60: '.6',
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				lg: '2rem',
				xl: '6rem',
				'2xl': '12rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
