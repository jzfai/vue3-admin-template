import { defineConfig } from 'vite'
import { resolve } from 'path';
/*插件*/
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import styleImport from 'vite-plugin-style-import'
export default defineConfig({
  define: {              // 类型： Record<string, string> 定义全局变量替换方式。每项在开发时会被定义为全局变量，而在构建时则是静态替换。
    'process.platform': null,
    'process.version': null,
  },
  server: {
    hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
    // 服务配置
    port: 5001,    // 类型： number 指定服务器端口;
    open: false,   // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
    cors: true,  // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
    // proxy: {    // 类型： Record<string, string | ProxyOp 为开发服务器配置自定义代理规则
    //   '/api': {
    //     target: 'http://106.12.45.247:3000/',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api', '')
    //   }
    // },
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, './'),
      '@': resolve(__dirname, 'src'),
    },
    extensions:['.js', '.ts', '.jsx', '.tsx', '.json','.vue','.mjs']
  },
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          // eslint-disable-next-line no-param-reassign
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: (name) => `element-plus/lib/${name}`,
      }]
    }),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],

  build:{
    commonjsOptions:{
      ignoreDynamicRequires:false, // Default: false
      transformMixedEsModules:true,
      sourceMap:false
    },
    brotliSize: false,
  }
})
