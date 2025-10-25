import { defineConfig } from 'vite';
import inject from '@rollup/plugin-inject';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/Tienda-de-ropa-B-y/', // 👈 nombre exacto del repositorio
  plugins: [
    react(),
    inject({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
});

