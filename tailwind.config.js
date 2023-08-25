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
    		mainColor: '#ff0066',
    		subColor: '#00cccc',
    		darkBg: "#000000",
    		darkText: "#ffffff",
    		darkBg2: "#1a1a1a"
    	}
    },
  },
  plugins: [],
}

