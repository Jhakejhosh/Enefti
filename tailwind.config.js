/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  	],
  theme: {
    extend: {
    	colors: {
    		mainColor: '#ff3300',
    		subColor: '#660066',
    		darkBg: "#000000",
    		darkText: "#ffffff",
    		darkBg2: "#1a1a1a"
    	}
    },
  },
  plugins: [],
}

