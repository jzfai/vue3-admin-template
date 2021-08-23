import { defineConfig } from 'vite'
import path,{ resolve} from 'path';
/*插件*/
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import styleImport from 'vite-plugin-style-import'
import vueJsx from "@vitejs/plugin-vue-jsx";
import viteSvgIcons from 'vite-plugin-svg-icons';


export default defineConfig({
  base:"./",
  define: {
    'process.platform': null,
    'process.version': null,
  },
  clearScreen:false,
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
  plugins: [
    vue(),
    vueJsx(),
    styleImport({
      libs: [
        {
          libraryName: "element-plus",
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: name => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: name => {
            return `element-plus/lib/${name}`;
          }
        },
      ]
    }),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),
    viteSvgIcons({
      // 指定需要缓存的图标文件夹（可以配置多个）
      iconDirs: [
        path.resolve(process.cwd(), 'src/icons/common'),
        path.resolve(process.cwd(), 'src/icons/navBar')
      ],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  build: {
    brotliSize: false,
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 2000,
    terserOptions:{
      compress:{
        drop_console:true,
        drop_debugger:true
      }
    }
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, './'),
      '@': resolve(__dirname, 'src'),
    },
    extensions:['.js', '.ts', '.jsx', '.tsx', '.json','.vue','.mjs']
  },
  optimizeDeps: {
    include: [
      'element-plus/lib/locale/lang/zh-cn',
      'element-plus/lib/locale/lang/en'
    ]
  },
})
