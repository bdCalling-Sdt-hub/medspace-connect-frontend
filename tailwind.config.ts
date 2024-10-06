import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/web-pages/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: '#0A8FDC',
                secondary: '#FBA51A',
                primaryText: '#6B6B6B',
                secondaryText: '#BABABA',
                headerText: '#5C5C5C',
            },
        },

        container: {
            center: true,
            padding: {
                // sm: '2rem',
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1140px',
            },
        },
    },
    plugins: [],
};
export default config;
