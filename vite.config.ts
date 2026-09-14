import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import browserslist from 'browserslist';
import {browserslistToTargets} from 'lightningcss';

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    css: {
      transformer: 'lightningcss' as const,
      lightningcss: {
        targets: browserslistToTargets(
          browserslist('chrome >= 60, firefox >= 60, safari >= 11, edge >= 79')
        ),
      },
    },
    build: {
      target: 'es2018',
      cssTarget: 'chrome61',
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
