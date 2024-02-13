import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        p_sans: ['var(--font-sans)'],
      },
    },
    colors: {
      grayishblue: 'rgba(var(--grayishblue), <alpha-value>)',
      lgrayishblue: 'rgba(var(--color-lgrayishblue), <alpha-value>)',
      verylGray: 'rgba(var(--verylGray), <alpha-value>)',
      ewhite: 'rgba(var(--color-ewhite), <alpha-value>)',
      darkblue: 'rgba(var(--darkblue), <alpha-value>)',
      limegreen: 'rgba(var(--color-limegreen), <alpha-value>)',
      bcyan: 'rgba(var(--bcyan), <alpha-value>)',
    },
    screens: {
      'sm': '375px',
      'md': '960px',
      'xl': '1440px',
    },
  },
  plugins: [],
};
export default config;


/*

    --grayishblue: 150, 152, 166;
  --lgrayishblue:243, 244, 246;
  --verylGray: 250, 250, 250;
  --ewhite:255, 255, 255;
  --darkblue:45, 49, 77;
  --limegreen: 49, 211, 92;
  --bcyan: 43, 183, 218;

*/