import { type Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["var(--font-montserrat)"],
            },
        },
    },
    plugins: [],
} satisfies Config;
