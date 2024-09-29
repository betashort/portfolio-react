/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "profile-name-img": "url('/src/assets/images/room-8779510_1280.png')",
        "profile-history-img": "url('/src/assets/images/table-3997521_1280.jpg')",
      "profile-skill-img": "url('/src/assets/images/ai-generated-9008728_1280.jpg')"
    }
    },
  },
  plugins: [],
}
