/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {

		extend: {

			colors: {
				border: "var(--border)",
				input: "var(--input)",
				ring: "hsl(var(--ring))",
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			borderWidth: {
				sm: '1px'
			},
			padding: {
				xs: "10px",
				sm: "1rem",
				md: "2rem",
				xl: "3rem",
			},
			gap: {
				xs: "10px",
				sm: "1rem",
				md: "2rem",
				xl: "3rem",
				"2xl": "4rem",
			},
		},
	},
	plugins: [],
}
