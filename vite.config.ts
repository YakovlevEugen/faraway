import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const pathSrc = resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  let proxy = {}
  if (process.env.VITE_API_HOST !== 'msw') {
    proxy = {
      '/api': {
        target: process.env.VITE_API_HOST,
        secure: false,
        changeOrigin: true,
      },
    }
  }

  return defineConfig({
    build: {
      outDir: 'build',
      target: 'esnext',
    },
    server: {
      proxy,
    },
    define: {
      'process.env': {
        VITE_API_HOST: process.env.VITE_API_HOST,
      },
    },
    plugins: [
      react(),
      createSvgIconsPlugin({
        iconDirs: [resolve(pathSrc, 'assets/svg')],
        symbolId: 'icon-[name]',
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import '@/assets/styles/_variables.scss';
            @import '@/assets/styles/_mixins.scss';
          `,
        },
      },
    },
    resolve: {
      alias: {
        '@': pathSrc,
        '~': __dirname,
      },
    },
    test: {
      globals: true,
    },
  })
}
