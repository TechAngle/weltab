import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import solidSvg from 'vite-plugin-solid-svg';
import svgr from 'vite-plugin-svgr';
import History from 'vite-plugin-history';

export default defineConfig({
  plugins: [
    solidPlugin(),
    solidSvg({}),
    svgr({
      svgrOptions: {
        exportType: 'named',
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: '**/*.svg'
    }),
    History()
  ],
  base: './',
  server: {
    port: 3000,
    middlewareMode: true
  },
  build: {
    target: 'esnext',
  },
});
