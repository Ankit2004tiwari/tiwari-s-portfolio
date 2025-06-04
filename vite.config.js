import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    optimizeDeps: {
        include: ['lucide-react', 'react', 'react-dom'],
    },
    build: {
        commonjsOptions: {
            include: [/tailwindcss/, /postcss/, /autoprefixer/, /node_modules/],
            transformMixedEsModules: true,
        },
    },
});
