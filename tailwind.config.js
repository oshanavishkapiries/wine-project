/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            borderRadius: {
                lg: '0.5rem',
                md: 'calc(0.5rem - 2px)',
                sm: 'calc(0.5rem - 4px)'
            },
            colors: {
                background: '#FFFFFF',
                foreground: '#0A0A0A',
                card: {
                    DEFAULT: '#FFFFFF',
                    foreground: '#0A0A0A'
                },
                popover: {
                    DEFAULT: '#FFFFFF',
                    foreground: '#0A0A0A'
                },
                primary: {
                    DEFAULT: '#EA7C69',
                    foreground: '#FCFCFC'
                },
                secondary: {
                    DEFAULT: '#F5F5F5',
                    foreground: '#171717'
                },
                muted: {
                    DEFAULT: '#F5F5F5',
                    foreground: '#737373'
                },
                accent: {
                    DEFAULT: '#F5F5F5',
                    foreground: '#171717'
                },
                destructive: {
                    DEFAULT: '#FF4D4D',
                    foreground: '#FCFCFC'
                },
                border: '#E5E5E5',
                input: '#E5E5E5',
                ring: '#0A0A0A',
                chart: {
                    '1': '#F97316',
                    '2': '#14B8A6',
                    '3': '#1E4C4C',
                    '4': '#F6AD55',
                    '5': '#ED8936'
                }
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
}
