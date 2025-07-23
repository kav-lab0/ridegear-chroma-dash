import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				border: '#232323',
				input: '#18181b',
				ring: '#232323',
				background: '#000',
				foreground: '#f5f5f5',
				primary: {
					DEFAULT: '#18181b', // deep black
					foreground: '#f5f5f5',
					glow: '#232323',
				},
				secondary: {
					DEFAULT: '#232323', // dark gray
					foreground: '#f5f5f5',
					glow: '#18181b',
				},
				accent: {
					DEFAULT: '#333', // metallic gray
					foreground: '#fff',
					glow: '#444',
				},
				muted: {
					DEFAULT: '#222',
					foreground: '#aaa',
				},
				destructive: {
					DEFAULT: '#b91c1c',
					foreground: '#fff',
				},
				glass: {
					DEFAULT: '#18181b',
					bg: '#18181b',
					border: '#232323',
					shadow: '#000',
				},
				surface: '#18181b',
				hover: '#232323',
				focus: '#333',
				success: '#16a34a',
				warning: '#f59e42',
				'input-bg': '#18181b',
				popover: {
					DEFAULT: '#18181b',
					foreground: '#f5f5f5',
				},
				card: {
					DEFAULT: '#18181b',
					foreground: '#f5f5f5',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-surface': 'var(--gradient-surface)',
				'gradient-glow': 'var(--gradient-glow)',
				'gradient-metallic': 'var(--gradient-metallic)'
			},
			boxShadow: {
				'glass': 'var(--shadow-glass)',
				'glow': 'var(--shadow-glow)',
				'glow-secondary': 'var(--shadow-glow-secondary)',
				'metallic': 'var(--shadow-metallic)'
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
			},
			borderRadius: {
				DEFAULT: '1.5rem', // very rounded
				lg: '2rem',
				xl: '2.5rem',
				'2xl': '3rem',
				full: '9999px',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
