/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'smPhone': '320px',
      'mdPhone': '640px',
      'lgPhone': '768px',
      'smLaptop': '1024px',
      'mdLaptop': '1280px',
      'lgLaptop': '1536px',
    },
    extend: {
      colors: {
        'violet-light-radix': '#6952C8',
        'violet-regular-radix': '#6E56CF',
        'violet-dark-radix': '#32275F',
        'blue-violet-default': '#4338ca',
        'blue-violet-hover': '#4f46e5',
        'white-ice': '#F1F7F8',
      },
    },
  },
  plugins: [],
}

