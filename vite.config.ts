import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"; //这个path用到了上面安装的@types/node
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),


  ],
  //这里进行配置别名
  resolve: {
    alias: {
      "@": path.resolve("./src"), // @代替src
      "#": path.resolve("./types"), // #代替types
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    // https: false,
    proxy: {
      '/api': {
        target: '要代理的地址',
        changeOrigin: true,
        ws: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },


  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: '@import "@/assets/styles/index.scss";',
      },
    },
  },



})