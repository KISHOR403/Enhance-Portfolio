/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: "#fdfbf7", // Light cream background
                secondary: "#ffffff", // White Card background
                tertiary: "#f3f4f6", // Light Gray
                accent: "#10b981", // Green accent
                dark: "#111827", // Dark Gray/Black for text
                "code-bg": "#0f172a", // Dark code editor background
                sky: "#7dd3fc", // Light blue wave
                cyan: "#06b6d4",
                green: "#22c55e",
                orange: {
                    500: "#f97316"
                }
            },
            fontFamily: {
                heading: ['Fredoka', 'sans-serif'],
                body: ['Poppins', 'sans-serif'],
                outfit: ['Outfit', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
