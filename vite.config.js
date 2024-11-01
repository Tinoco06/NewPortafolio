import { defineConfig } from "vite";
import htmlPurge from 'vite-plugin-purgecss';

export default defineConfig({
    base: "/PortafolioConLess/",
    build: {
        rollupOptions: {
            input: './index.html'
        }
    },
    plugins: [
        htmlPurge({})
    ]
});
