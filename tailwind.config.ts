import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                border: "hsl(var(--border))",
                ring: "hsl(var(--ring))",
                input: "hsl(var(--input))",
                primary: "hsl(var(--primary))",
                secondary: "hsl(var(--secondary))",
                destructive: "hsl(var(--destructive))",
                muted: "hsl(var(--muted))",
                accent: "hsl(var(--accent))",
                popover: "hsl(var(--popover))",
                card: "hsl(var(--card))",
            },
            borderColor: {
                DEFAULT: "hsl(var(--border))",
            },
        },
    },
    plugins: [],
};

export default config;
