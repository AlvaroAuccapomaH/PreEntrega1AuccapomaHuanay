/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx", "./node_modules/@material-tailwind/react/**/*.js"],
  theme: {
    extend: {},
    fontFamily: {
      'nunito': ['Nunito']
    }
  },
  plugins: [],
}