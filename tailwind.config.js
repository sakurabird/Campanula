/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './data/**/*.mdx',
  ],
  theme: {
    extend: {
      padding: {
        0.5: '0.125rem',
      },
      height: {
        0.25: '0.0625rem',
      },
      minWidth: {
        10: '2.5rem',
      },
      minHeight: {
        10: '2.5rem',
      },
      borderWidth: {
        0.5: '0.5px',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: '700',
              letterSpacing: 'letterSpacing.tight',
            },
            h2: {
              fontWeight: '700',
              letterSpacing: 'letterSpacing.tight',
            },
            h3: {
              fontWeight: '600',
            },
            'h4,h5,h6': {},
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
    require('tailwindcss-animate'),
  ],
  daisyui: {
    themes: [
      // Please remove unused themes
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      {
        mytheme1: {
          'color-scheme': 'light',
          primary: '#8280F0',
          secondary: '#E0C751',
          accent: '#E09267',
          neutral: '#1F191F',
          'base-100': '#f3f3f3',
          info: '#97ADF7',
          success: '#33E68C',
          warning: '#EED03A',
          error: '#FC625F',
        },
      },
      {
        mytheme2: {
          'color-scheme': 'dark',
          primary: '#037F8C',
          secondary: '#94CEF2',
          accent: '#E0CE75',
          neutral: '#283440',
          'base-100': '#011526',
          'base-content': '#EAEAEA',
          info: '#7CB0D5',
          success: '#34D5C3',
          warning: '#F5BE29',
          error: '#F56687',
        },
      },
    ],
  },
}
