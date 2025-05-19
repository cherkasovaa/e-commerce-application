import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const BASE_URL_DEV = '';
const BASE_URL_PROD = '/e-commerce-application/';

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';

  return {
    plugins: [react()],
    base: isBuild ? BASE_URL_PROD : BASE_URL_DEV,
    root: 'src',
    build: {
      outDir: '../dist',
      emptyOutDir: true,
      assetsDir: 'assets',
    },
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['**/*.test.{ts,tsx}'],
      // setupFiles: 'tests/setup.ts',
      coverage: {
        reporter: ['text', 'json', 'html'],
      },
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    assetsInclude: ['**/*.lottie'],
    server: {
      port: 3000,
      open: true,
    },
  };
});
