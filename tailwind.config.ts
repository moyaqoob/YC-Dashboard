import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		colors: {
			secondary: {
			  DEFAULT: 'hsl(220, 80%, 50%)', // Main color
			  foreground: 'hsl(220, 40%, 90%)', // Foreground color
			},
			primary: {
			  DEFAULT: 'hsl(320, 60%, 50%)',
			  foreground: 'hsl(320, 40%, 90%)',
			},
			muted: {
			  DEFAULT: 'hsl(200, 20%, 70%)',
			  foreground: 'hsl(200, 15%, 40%)',
			},
			accent: {
			  DEFAULT: 'hsl(150, 60%, 40%)',
			  foreground: 'hsl(150, 50%, 90%)',
			},
			destructive: {
			  DEFAULT: 'hsl(0, 70%, 60%)',
			  foreground: 'hsl(0, 40%, 90%)',
			},
		 
  			border: 'hsl(#000000)',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
		fontFamily:{
			"work-Sans" : ["var(--font-work-sans)"]
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"),require('@tailwindcss/typography')],
} satisfies Config;
