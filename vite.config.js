import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), visualizer({ open: true })],
  build: {
    // modulePreload: {
    //   polyfill: true,
    // },
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Divise les dépendances en plus petits chunks
          if (id.includes('react-datepicker')) {
            return 'datepicker';
          }
          if (id.includes('react-select')) {
            return 'select';
          }
          // if (id.includes('react-data-table-component')) {
          //   return 'react-data-table-component';
          // }
          // if (id.includes('demo-module-test-hrnet')) {
          //   return 'hrnet';
          // }
        },
      },
    },
  },
});