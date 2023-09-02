import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			primary: '#D87D4A',
			secondary: '#FBAF85',
			primaryDark: '#000000',
			secondaryDark: '#101010',
			white: '#FFFFFF',
			lightWhite: '#FAFAFA',
			rose: '#F1F1F1',
			lightBrown: '#797979',
			gray: '#2c2c2c'
		},
		extend: {
			fontSize: {
				H1: [
					'3.1rem',
					{
						lineHeight: '3.2rem',
						letterSpacing: '2px',
						fontWeight: '700',
					},
				],
				H2: [
					'3.2rem',
					{
						lineHeight: '2.4rem',
						letterSpacing: '1.5px',
						fontWeight: '700',
					},
				],
				H3: [
					'1.75rem',
					{
						lineHeight: '2em',
						letterSpacing: '1.15px',
						fontWeight: '700',
					},
				],
				H4: [
					'1.5rem',
					{
						lineHeight: '2.1rem',
						letterSpacing: '2px',
						fontWeight: '700',
					},
				],
				H5: [
					'1.3rem',
					{
						lineHeight: '1.8rem',
						letterSpacing: '1.7px',
						fontWeight: '700',
					},
				],
				H6: [
					'1rem',
					{
						lineHeight: '1.3',
						letterSpacing: '1.3px',
						fontWeight: '700',
					},
				],
				overline: [
					'0.75',
					{
						lineHeight: '1.05',
						letterSpacing: '10px',
						fontWeight: '400',
					},
				],
				subtitle: [
					'0.7',
					{
						lineHeight: '1.4',
						letterSpacing: '1px',
						fontWeight: '700',
					},
				],
			},
		},
	},
	plugins: [
    require('@tailwindcss/forms')
  ],
}
export default config
