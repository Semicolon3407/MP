/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#895cf2',
        'accent-secondary': '#EC4899',
        'bg-primary': '#040b3a',
        'bg-secondary': '#080f52',
        'bg-card': 'rgba(255, 255, 255, 0.05)',
        'bg-glass': 'rgba(255, 255, 255, 0.08)',
        'text-primary': '#ffffff',
        'text-secondary': 'rgba(255, 255, 255, 0.75)',
        'text-muted': 'rgba(255, 255, 255, 0.45)',
        'glass-border': 'rgba(137, 92, 242, 0.25)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-accent': 'linear-gradient(135deg, #895cf2 0%, #EC4899 100%)',
        'gradient-success': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #895cf2 0%, #EC4899 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #667eea 0%, #3B82F6 100%)',
      },
      borderRadius: {
        'sm': '12px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.6)',
        'glow': '0 0 40px rgba(137, 92, 242, 0.5)',
        'sm': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'lg': '0 8px 32px rgba(0, 0, 0, 0.2)',
        'xl': '0 16px 48px rgba(0, 0, 0, 0.25)',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      },
      animation: {
        'gradient-shift': 'gradient-shift 4s linear infinite',
      }
    },
  },
  plugins: [],
}

