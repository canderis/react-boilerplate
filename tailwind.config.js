// tailwind.config.js

module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
	corePlugins: {
		container: false,
	},
	theme: {
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
		},
	},

	variants: {},
	plugins: [],
};
