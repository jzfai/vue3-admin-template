// vite.config.js
import { resolve } from "path";
import { defineConfig, loadEnv } from "file:///D:/github/vue3-admin-template/node_modules/.pnpm/vite@5.4.8_lqg2yj3zyhtagihsnckeuje7em/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/github/vue3-admin-template/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.8+vue@3.5.12/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/github/vue3-admin-template/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.4.8+vue@3.5.12/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///D:/github/vue3-admin-template/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.4.8/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import Components from "file:///D:/github/vue3-admin-template/node_modules/.pnpm/unplugin-vue-components@0.22.12_vue@3.5.12/node_modules/unplugin-vue-components/dist/vite.mjs";
import UnoCSS from "file:///D:/github/vue3-admin-template/node_modules/.pnpm/unocss@0.58.9_vite@5.4.8/node_modules/unocss/dist/vite.mjs";
import { presetAttributify, presetIcons, presetUno } from "file:///D:/github/vue3-admin-template/node_modules/.pnpm/unocss@0.58.9_vite@5.4.8/node_modules/unocss/dist/index.mjs";
import mkcert from "file:///D:/github/vue3-admin-template/node_modules/.pnpm/vite-plugin-mkcert@1.17.6_vite@5.4.8/node_modules/vite-plugin-mkcert/dist/mkcert.mjs";
import AutoImport from "file:///D:/github/vue3-admin-template/node_modules/.pnpm/unplugin-auto-import@0.11.5_@vueuse+core@8.9.4/node_modules/unplugin-auto-import/dist/vite.js";

// package.json
var package_default = {
  name: "vue3-admin-template",
  version: "2.2.0",
  license: "MIT",
  author: "kuanghua(869653722@qq.com)",
  packageManager: "pnpm@7.9.0",
  type: "module",
  scripts: {
    dev: "vite --mode serve-dev",
    local: "vite --mode serve-local",
    debug: "vite --mode serve-dev --debug",
    test: "vite --mode serve-test",
    "build:test": "vite build --mode  build-test",
    build: "vite build --mode build",
    "preview:build": "npm run build && vite preview ",
    preview: "vite preview ",
    lint: "eslint --ext .js,.jsx,.vue,.ts,.tsx src --fix",
    prepare: "husky install",
    "tsc-check": "tsc",
    vitest: "vitest --ui",
    coverage: "vitest run --coverage"
  },
  peerDependencies: {
    vue: "^3.4.14"
  },
  dependencies: {
    "@element-plus/icons-vue": "^2.0.4",
    axios: "1.6.5",
    codemirror: "^6.0.1",
    echarts: "5.3.2",
    "element-plus": "2.5.3",
    "js-error-collection": "^1.0.7",
    "json-editor-vue3": "^1.0.8",
    mitt: "3.0.0",
    "moment-mini": "2.22.1",
    nprogress: "0.2.0",
    path: "0.12.7",
    "path-browserify": "^1.0.1",
    "path-to-regexp": "^6.2.1",
    pinia: "^2.0.16",
    "pinia-plugin-persistedstate": "2.3.0",
    screenfull: "^6.0.2",
    sortablejs: "^1.15.0",
    vue: "^3.4.14",
    "vue-clipboard3": "^2.0.0",
    "vue-codemirror": "^6.1.1",
    "vue-i18n": "9.1.10",
    "vue-router": "^4.1.5",
    "@codemirror/lang-javascript": "^6.1.0",
    "@codemirror/theme-one-dark": "^6.1.0"
  },
  devDependencies: {
    "@babel/eslint-parser": "7.16.3",
    "@originjs/vite-plugin-commonjs": "^1.0.3",
    "@types/mockjs": "1.0.10",
    "@types/node": "^17.0.35",
    "@types/path-browserify": "^1.0.0",
    "@types/sortablejs": "^1.15.0",
    "@typescript-eslint/eslint-plugin": "5.30.0",
    "@typescript-eslint/parser": "5.30.0",
    "@vitejs/plugin-legacy": "^5.2.0",
    "@vitejs/plugin-vue": "^5.0.3",
    "@vitejs/plugin-vue-jsx": "^3.1.0",
    "@vitest/coverage-c8": "^0.33.0",
    "@vitest/ui": "^1.2.0",
    "@vue/cli-plugin-unit-jest": "4.5.17",
    "@vue/cli-service": "5.0.8",
    "@vue/test-utils": "^2.0.2",
    "@vueuse/core": "^8.7.5",
    eslint: "8.18.0",
    "eslint-config-prettier": "8.5.0",
    "eslint-define-config": "1.5.1",
    "eslint-plugin-eslint-comments": "3.2.0",
    "eslint-plugin-import": "2.26.0",
    "eslint-plugin-jsonc": "^2.3.0",
    "eslint-plugin-markdown": "^3.0.0",
    "eslint-plugin-prettier": "4.1.0",
    "eslint-plugin-simple-import-sort": "^10.0.0",
    "eslint-plugin-unicorn": "^43.0.2",
    "eslint-plugin-vue": "9.1.1",
    husky: "7.0.2",
    jsdom: "16.4.0",
    "jsonc-eslint-parser": "^2.1.0",
    majestic: "1.8.1",
    mockjs: "1.1.0",
    prettier: "2.2.1",
    "resize-observer-polyfill": "^1.5.1",
    "rollup-plugin-visualizer": "^5.8.3",
    sass: "1.77.6",
    "svg-sprite-loader": "6.0.11",
    typescript: "^4.7.2",
    unocss: "^0.58.3",
    "unplugin-auto-import": "^0.11.2",
    "unplugin-vue-components": "^0.22.8",
    "unplugin-vue-define-options": "^0.6.1",
    vite: "^5.0.11",
    "vite-plugin-html": "^3.2.0",
    "vite-plugin-mkcert": "^1.7.2",
    "vite-plugin-mock": "^3.0.1",
    "vite-plugin-style-import": "1.2.1",
    "vite-plugin-svg-icons": "^2.0.1",
    vitest: "^0.22.1",
    "vue-tsc": "^0.34.16"
  },
  pnpm: {
    peerDependencyRules: {
      ignoreMissing: [
        "html-webpack-plugin",
        "vite-plugin-mock",
        "unplugin-auto-import",
        "unplugin-vue-components",
        "vue-template-compiler",
        "unocss",
        "unplugin",
        "vite-plugin-mock",
        "@vitejs/plugin-legacy",
        "@vitejs/plugin-vue",
        "@vitejs/*",
        "@babel/*",
        "vite",
        "vue",
        "@unocss/vite",
        "rollup",
        "vue-jest",
        "@babel/*"
      ]
    }
  },
  browserslist: [
    "> 1%",
    "not ie 11",
    "not op_mini all"
  ],
  engines: {
    node: ">= 16 <20",
    pnpm: ">= 6 <9"
  }
};

// src/settings.js
var settings = {
  title: package_default.name,
  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: false,
  /**
   * @type {boolean} true | false
   * @description Whether show the title in Navbar
   */
  showNavbarTitle: false,
  /**
   * @type {boolean} true | false
   * @description Whether show the drop-down
   */
  ShowDropDown: false,
  /**
   * @type {boolean} true | false
   * @description Whether show Hamburger
   */
  showHamburger: false,
  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showLeftMenu: false,
  /**
   * @type {boolean} true | false
   * @description Whether show TagsView
   */
  showTagsView: false,
  /**
   * @description TagsView show number
   */
  tagsViewNum: 6,
  /**
   * @type {boolean} true | false
   * @description Whether show the top Navbar
   */
  showTopNavbar: false,
  /* page  animation related*/
  /**
   * @type {boolean} true | false
   * @description Whether need animation of main area
   */
  mainNeedAnimation: false,
  /**
   * @type {boolean} true | false
   * @description Whether need nprogress
   */
  isNeedNprogress: false,
  /*page login or other*/
  /**
   * @type {boolean} true | false
   * @description Whether need login
   */
  isNeedLogin: false,
  /**
   * @type {string} 'rbac'| 'roles' | 'code'
   */
  permissionMode: "roles",
  /**
   * @type {boolean} true | false
   * @description Whether  open prod mock
   */
  openProdMock: false,
  /**
   * @type {string | array} 'dev' | ['prod','test','dev'] according to the .env file props of VITE_APP_ENV
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['dev', 'test']
   */
  errorLog: ["prod"],
  /*
   * table height(100vh-delWindowHeight)
   * */
  delWindowHeight: "210px",
  /*
   * setting dev token when  isNeedLogin is setting false
   * */
  tmpToken: "tmp_token",
  /*
   * vite.config.js base config
   * */
  viteBasePath: "./",
  /*
   * i18n setting default language
   * en/zh
   * */
  defaultLanguage: "zh",
  /*
   *  default theme
   * base-theme/lighting-theme/dark-theme
   * */
  defaultTheme: "base-theme",
  /*
   * setting default defaultSize
   * large / default /small
   * */
  defaultSize: "small",
  /*
   * vite.config.js base config
   * such as
   * */
  //平台id  2->vue3-admin-plus
  plateFormId: 2
};
var settings_default = settings;

// src/plugins/vite-plugin-setup-extend/index.ts
import { parse } from "file:///D:/github/vue3-admin-template/node_modules/.pnpm/@vue+compiler-sfc@3.5.12/node_modules/@vue/compiler-sfc/dist/compiler-sfc.cjs.js";
import { render } from "file:///D:/github/vue3-admin-template/node_modules/.pnpm/ejs@3.1.10/node_modules/ejs/lib/ejs.js";
var vite_plugin_setup_extend_default = ({ inject }) => {
  return {
    name: "vite-plugin-setup-extend",
    enforce: "pre",
    // configResolved(resolvedConfig) {
    //   viteConfig = resolvedConfig
    // },
    async transformIndexHtml(html) {
      const result = await render(html, { ...inject });
      return result;
    },
    transform(code, id) {
      if (/\.vue$/.test(id)) {
        const { descriptor } = parse(code);
        if (!descriptor?.scriptSetup?.setup) {
          return null;
        }
        const { lang, name } = descriptor.scriptSetup?.attrs || {};
        const dillStr = headString(lang, name);
        code += dillStr;
        return code;
      }
    }
  };
};
var headString = (lang, name) => {
  return `<script ${lang ? `lang="${lang}"` : ""}>
import { defineComponent } from 'vue'
export default defineComponent({
  ${name ? `name: "${name}",` : ""}
})
</script>
`;
};

// vite.config.js
var __vite_injected_original_dirname = "D:\\github\\vue3-admin-template";
var prodMock = settings_default.openProdMock;
var pathSrc = resolve(__vite_injected_original_dirname, "src");
var vite_config_default = defineConfig(({ command, mode }) => {
  return {
    base: settings_default.viteBasePath,
    define: {
      //define global var
      GLOBAL_STRING: JSON.stringify("i am global var from vite.config.js define"),
      GLOBAL_VAR: { test: "i am global var from vite.config.js define" }
    },
    clearScreen: false,
    //设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
    server: {
      hmr: { overlay: false },
      //设置 server.hmr.overlay 为 false 可以禁用开发服务器错误的屏蔽。方便错误查看
      port: 5003,
      // 类型： number 指定服务器端口;
      open: false,
      // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      host: true,
      https: false
    },
    preview: {
      port: 5006,
      host: true,
      strictPort: true
    },
    plugins: [
      vue(),
      vueJsx(),
      UnoCSS({
        presets: [presetUno(), presetAttributify(), presetIcons()]
      }),
      mkcert(),
      //compatible with old browsers
      // legacy({
      //   targets: ['chrome 52'],
      //   additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      // }),
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), "src/icons/common"), resolve(process.cwd(), "src/icons/nav-bar")],
        symbolId: "icon-[dir]-[name]"
      }),
      //https://github.com/anncwb/vite-plugin-mock/blob/HEAD/README.zh_CN.md
      // viteMockServe({
      //   enable:true,
      //   mockPath: 'mock',
      //   // prodEnabled: prodMock,
      //   // injectCode: `
      //   //   import { setupProdMockServer } from './mock-prod-server';
      //   //   setupProdMockServer();
      //   // `,
      //   logger: true
      // }),
      // VueSetupExtend(),using  DefineOptions instant of it
      //https://github.com/antfu/unplugin-auto-import/blob/HEAD/src/types.ts
      Components({
        dirs: ["src/components", "src/icons"],
        extensions: ["vue"],
        deep: true,
        dts: "./typings/components.d.ts"
      }),
      AutoImport({
        imports: [
          "vue",
          "vue-router",
          {
            "pinia/dist/pinia": ["storeToRefs"]
          }
        ],
        //配置后会自动扫描目录下的文件
        dirs: ["src/hooks/**", "src/utils/**", "src/store/**", "src/directives/**"],
        eslintrc: {
          enabled: true,
          // Default `false`
          filepath: "./eslintrc/.eslintrc-auto-import.json",
          // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true
          // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        dts: "./typings/auto-imports.d.ts"
      }),
      // auto config of index.html title
      //依赖分析插件
      // visualizer({
      //   open: true,
      //   gzipSize: true,
      //   brotliSize: true
      // })
      vite_plugin_setup_extend_default({ inject: { title: settings_default.title } })
    ],
    build: {
      chunkSizeWarningLimit: 1e4,
      //消除触发警告的 chunk, 默认500k
      assetsDir: "static/assets",
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        }
      }
    },
    resolve: {
      alias: {
        "@/": `${pathSrc}/`,
        "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
        //remove i18n waring
      }
    },
    optimizeDeps: {
      //include: [...optimizeDependencies,...optimizeElementPlus] //on-demand element-plus use this
      include: ["moment-mini"]
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAicGFja2FnZS5qc29uIiwgInNyYy9zZXR0aW5ncy5qcyIsICJzcmMvcGx1Z2lucy92aXRlLXBsdWdpbi1zZXR1cC1leHRlbmQvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxnaXRodWJcXFxcdnVlMy1hZG1pbi10ZW1wbGF0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcZ2l0aHViXFxcXHZ1ZTMtYWRtaW4tdGVtcGxhdGVcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2dpdGh1Yi92dWUzLWFkbWluLXRlbXBsYXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXHJcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJ1xyXG4vLyBpbXBvcnQgeyB2aXRlTW9ja1NlcnZlIH0gZnJvbSAndml0ZS1wbHVnaW4tbW9jaydcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcclxuaW1wb3J0IHsgcHJlc2V0QXR0cmlidXRpZnksIHByZXNldEljb25zLCBwcmVzZXRVbm8gfSBmcm9tICd1bm9jc3MnXHJcbmltcG9ydCBta2NlcnQgZnJvbSAndml0ZS1wbHVnaW4tbWtjZXJ0J1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG5pbXBvcnQgc2V0dGluZyBmcm9tICcuL3NyYy9zZXR0aW5ncydcclxuaW1wb3J0IHZpdGVQbHVnaW5TZXR1cEV4dGVuZCBmcm9tICcuL3NyYy9wbHVnaW5zL3ZpdGUtcGx1Z2luLXNldHVwLWV4dGVuZCdcclxuY29uc3QgcHJvZE1vY2sgPSBzZXR0aW5nLm9wZW5Qcm9kTW9ja1xyXG4vLyBpbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJ1xyXG5jb25zdCBwYXRoU3JjID0gcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKVxyXG4vLyBAdHMtaWdub3JlXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kLCBtb2RlIH0pID0+IHtcclxuICAvL2NvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgJycpIC8vXHU4M0I3XHU1M0Q2XHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGXHJcbiAgcmV0dXJuIHtcclxuICAgIGJhc2U6IHNldHRpbmcudml0ZUJhc2VQYXRoLFxyXG4gICAgZGVmaW5lOiB7XHJcbiAgICAgIC8vZGVmaW5lIGdsb2JhbCB2YXJcclxuICAgICAgR0xPQkFMX1NUUklORzogSlNPTi5zdHJpbmdpZnkoJ2kgYW0gZ2xvYmFsIHZhciBmcm9tIHZpdGUuY29uZmlnLmpzIGRlZmluZScpLFxyXG4gICAgICBHTE9CQUxfVkFSOiB7IHRlc3Q6ICdpIGFtIGdsb2JhbCB2YXIgZnJvbSB2aXRlLmNvbmZpZy5qcyBkZWZpbmUnIH1cclxuICAgIH0sXHJcbiAgICBjbGVhclNjcmVlbjogZmFsc2UsIC8vXHU4QkJFXHU0RTNBIGZhbHNlIFx1NTNFRlx1NEVFNVx1OTA3Rlx1NTE0RCBWaXRlIFx1NkUwNVx1NUM0Rlx1ODAwQ1x1OTUxOVx1OEZDN1x1NTcyOFx1N0VDOFx1N0FFRlx1NEUyRFx1NjI1M1x1NTM3MFx1NjdEMFx1NEU5Qlx1NTE3M1x1OTUyRVx1NEZFMVx1NjA2RlxyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgIGhtcjogeyBvdmVybGF5OiBmYWxzZSB9LCAvL1x1OEJCRVx1N0Y2RSBzZXJ2ZXIuaG1yLm92ZXJsYXkgXHU0RTNBIGZhbHNlIFx1NTNFRlx1NEVFNVx1Nzk4MVx1NzUyOFx1NUYwMFx1NTNEMVx1NjcwRFx1NTJBMVx1NTY2OFx1OTUxOVx1OEJFRlx1NzY4NFx1NUM0Rlx1ODUzRFx1MzAwMlx1NjVCOVx1NEZCRlx1OTUxOVx1OEJFRlx1NjdFNVx1NzcwQlxyXG4gICAgICBwb3J0OiA1MDAzLCAvLyBcdTdDN0JcdTU3OEJcdUZGMUEgbnVtYmVyIFx1NjMwN1x1NUI5QVx1NjcwRFx1NTJBMVx1NTY2OFx1N0FFRlx1NTNFMztcclxuICAgICAgb3BlbjogZmFsc2UsIC8vIFx1N0M3Qlx1NTc4Qlx1RkYxQSBib29sZWFuIHwgc3RyaW5nXHU1NzI4XHU2NzBEXHU1MkExXHU1NjY4XHU1NDJGXHU1MkE4XHU2NUY2XHU4MUVBXHU1MkE4XHU1NzI4XHU2RDRGXHU4OUM4XHU1NjY4XHU0RTJEXHU2MjUzXHU1RjAwXHU1RTk0XHU3NTI4XHU3QTBCXHU1RThGXHVGRjFCXHJcbiAgICAgIGhvc3Q6IHRydWUsXHJcbiAgICAgIGh0dHBzOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHByZXZpZXc6IHtcclxuICAgICAgcG9ydDogNTAwNixcclxuICAgICAgaG9zdDogdHJ1ZSxcclxuICAgICAgc3RyaWN0UG9ydDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgdnVlKCksXHJcbiAgICAgIHZ1ZUpzeCgpLFxyXG4gICAgICBVbm9DU1Moe1xyXG4gICAgICAgIHByZXNldHM6IFtwcmVzZXRVbm8oKSwgcHJlc2V0QXR0cmlidXRpZnkoKSwgcHJlc2V0SWNvbnMoKV1cclxuICAgICAgfSksXHJcbiAgICAgIG1rY2VydCgpLFxyXG4gICAgICAvL2NvbXBhdGlibGUgd2l0aCBvbGQgYnJvd3NlcnNcclxuICAgICAgLy8gbGVnYWN5KHtcclxuICAgICAgLy8gICB0YXJnZXRzOiBbJ2Nocm9tZSA1MiddLFxyXG4gICAgICAvLyAgIGFkZGl0aW9uYWxMZWdhY3lQb2x5ZmlsbHM6IFsncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJ11cclxuICAgICAgLy8gfSksXHJcbiAgICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcclxuICAgICAgICBpY29uRGlyczogW3Jlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9pY29ucy9jb21tb24nKSwgcmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL2ljb25zL25hdi1iYXInKV0sXHJcbiAgICAgICAgc3ltYm9sSWQ6ICdpY29uLVtkaXJdLVtuYW1lXSdcclxuICAgICAgfSksXHJcbiAgICAgIC8vaHR0cHM6Ly9naXRodWIuY29tL2FubmN3Yi92aXRlLXBsdWdpbi1tb2NrL2Jsb2IvSEVBRC9SRUFETUUuemhfQ04ubWRcclxuICAgICAgLy8gdml0ZU1vY2tTZXJ2ZSh7XHJcbiAgICAgIC8vICAgZW5hYmxlOnRydWUsXHJcbiAgICAgIC8vICAgbW9ja1BhdGg6ICdtb2NrJyxcclxuICAgICAgLy8gICAvLyBwcm9kRW5hYmxlZDogcHJvZE1vY2ssXHJcbiAgICAgIC8vICAgLy8gaW5qZWN0Q29kZTogYFxyXG4gICAgICAvLyAgIC8vICAgaW1wb3J0IHsgc2V0dXBQcm9kTW9ja1NlcnZlciB9IGZyb20gJy4vbW9jay1wcm9kLXNlcnZlcic7XHJcbiAgICAgIC8vICAgLy8gICBzZXR1cFByb2RNb2NrU2VydmVyKCk7XHJcbiAgICAgIC8vICAgLy8gYCxcclxuICAgICAgLy8gICBsb2dnZXI6IHRydWVcclxuICAgICAgLy8gfSksXHJcbiAgICAgIC8vIFZ1ZVNldHVwRXh0ZW5kKCksdXNpbmcgIERlZmluZU9wdGlvbnMgaW5zdGFudCBvZiBpdFxyXG4gICAgICAvL2h0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi1hdXRvLWltcG9ydC9ibG9iL0hFQUQvc3JjL3R5cGVzLnRzXHJcbiAgICAgIENvbXBvbmVudHMoe1xyXG4gICAgICAgIGRpcnM6IFsnc3JjL2NvbXBvbmVudHMnLCAnc3JjL2ljb25zJ10sXHJcbiAgICAgICAgZXh0ZW5zaW9uczogWyd2dWUnXSxcclxuICAgICAgICBkZWVwOiB0cnVlLFxyXG4gICAgICAgIGR0czogJy4vdHlwaW5ncy9jb21wb25lbnRzLmQudHMnXHJcbiAgICAgIH0pLFxyXG4gICAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgICAndnVlJyxcclxuICAgICAgICAgICd2dWUtcm91dGVyJyxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJ3BpbmlhL2Rpc3QvcGluaWEnOiBbJ3N0b3JlVG9SZWZzJ11cclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vXHU5MTREXHU3RjZFXHU1NDBFXHU0RjFBXHU4MUVBXHU1MkE4XHU2MjZCXHU2M0NGXHU3NkVFXHU1RjU1XHU0RTBCXHU3Njg0XHU2NTg3XHU0RUY2XHJcbiAgICAgICAgZGlyczogWydzcmMvaG9va3MvKionLCAnc3JjL3V0aWxzLyoqJywgJ3NyYy9zdG9yZS8qKicsICdzcmMvZGlyZWN0aXZlcy8qKiddLFxyXG4gICAgICAgIGVzbGludHJjOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLCAvLyBEZWZhdWx0IGBmYWxzZWBcclxuICAgICAgICAgIGZpbGVwYXRoOiAnLi9lc2xpbnRyYy8uZXNsaW50cmMtYXV0by1pbXBvcnQuanNvbicsIC8vIERlZmF1bHQgYC4vLmVzbGludHJjLWF1dG8taW1wb3J0Lmpzb25gXHJcbiAgICAgICAgICBnbG9iYWxzUHJvcFZhbHVlOiB0cnVlIC8vIERlZmF1bHQgYHRydWVgLCAodHJ1ZSB8IGZhbHNlIHwgJ3JlYWRvbmx5JyB8ICdyZWFkYWJsZScgfCAnd3JpdGFibGUnIHwgJ3dyaXRlYWJsZScpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkdHM6ICcuL3R5cGluZ3MvYXV0by1pbXBvcnRzLmQudHMnXHJcbiAgICAgIH0pLFxyXG4gICAgICAvLyBhdXRvIGNvbmZpZyBvZiBpbmRleC5odG1sIHRpdGxlXHJcbiAgICAgIC8vXHU0RjlEXHU4RDU2XHU1MjA2XHU2NzkwXHU2M0QyXHU0RUY2XHJcbiAgICAgIC8vIHZpc3VhbGl6ZXIoe1xyXG4gICAgICAvLyAgIG9wZW46IHRydWUsXHJcblxyXG4gICAgICAvLyAgIGd6aXBTaXplOiB0cnVlLFxyXG4gICAgICAvLyAgIGJyb3RsaVNpemU6IHRydWVcclxuICAgICAgLy8gfSlcclxuICAgICAgdml0ZVBsdWdpblNldHVwRXh0ZW5kKHsgaW5qZWN0OiB7IHRpdGxlOiBzZXR0aW5nLnRpdGxlIH0gfSlcclxuICAgIF0sXHJcbiAgICBidWlsZDoge1xyXG4gICAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDEwMDAwLCAvL1x1NkQ4OFx1OTY2NFx1ODlFNlx1NTNEMVx1OEI2Nlx1NTQ0QVx1NzY4NCBjaHVuaywgXHU5RUQ4XHU4QkE0NTAwa1xyXG4gICAgICBhc3NldHNEaXI6ICdzdGF0aWMvYXNzZXRzJyxcclxuICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdzdGF0aWMvanMvW25hbWVdLVtoYXNoXS5qcycsXHJcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogJ3N0YXRpYy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcclxuICAgICAgICAgIGFzc2V0RmlsZU5hbWVzOiAnc3RhdGljL1tleHRdL1tuYW1lXS1baGFzaF0uW2V4dF0nXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgICdALyc6IGAke3BhdGhTcmN9L2AsXHJcbiAgICAgICAgJ3Z1ZS1pMThuJzogJ3Z1ZS1pMThuL2Rpc3QvdnVlLWkxOG4uY2pzLmpzJyAvL3JlbW92ZSBpMThuIHdhcmluZ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb3B0aW1pemVEZXBzOiB7XHJcbiAgICAgIC8vaW5jbHVkZTogWy4uLm9wdGltaXplRGVwZW5kZW5jaWVzLC4uLm9wdGltaXplRWxlbWVudFBsdXNdIC8vb24tZGVtYW5kIGVsZW1lbnQtcGx1cyB1c2UgdGhpc1xyXG4gICAgICBpbmNsdWRlOiBbJ21vbWVudC1taW5pJ11cclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiIsICJ7XHJcbiAgICBcIm5hbWVcIjogXCJ2dWUzLWFkbWluLXRlbXBsYXRlXCIsXHJcbiAgICBcInZlcnNpb25cIjogXCIyLjIuMFwiLFxyXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXHJcbiAgICBcImF1dGhvclwiOiBcImt1YW5naHVhKDg2OTY1MzcyMkBxcS5jb20pXCIsXHJcbiAgICBcInBhY2thZ2VNYW5hZ2VyXCI6IFwicG5wbUA3LjkuMFwiLFxyXG4gICAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXHJcbiAgICBcInNjcmlwdHNcIjoge1xyXG4gICAgICAgIFwiZGV2XCI6IFwidml0ZSAtLW1vZGUgc2VydmUtZGV2XCIsXHJcbiAgICAgICAgXCJsb2NhbFwiOiBcInZpdGUgLS1tb2RlIHNlcnZlLWxvY2FsXCIsXHJcbiAgICAgICAgXCJkZWJ1Z1wiOiBcInZpdGUgLS1tb2RlIHNlcnZlLWRldiAtLWRlYnVnXCIsXHJcbiAgICAgICAgXCJ0ZXN0XCI6IFwidml0ZSAtLW1vZGUgc2VydmUtdGVzdFwiLFxyXG4gICAgICAgIFwiYnVpbGQ6dGVzdFwiOiBcInZpdGUgYnVpbGQgLS1tb2RlICBidWlsZC10ZXN0XCIsXHJcbiAgICAgICAgXCJidWlsZFwiOiBcInZpdGUgYnVpbGQgLS1tb2RlIGJ1aWxkXCIsXHJcbiAgICAgICAgXCJwcmV2aWV3OmJ1aWxkXCI6IFwibnBtIHJ1biBidWlsZCAmJiB2aXRlIHByZXZpZXcgXCIsXHJcbiAgICAgICAgXCJwcmV2aWV3XCI6IFwidml0ZSBwcmV2aWV3IFwiLFxyXG4gICAgICAgIFwibGludFwiOiBcImVzbGludCAtLWV4dCAuanMsLmpzeCwudnVlLC50cywudHN4IHNyYyAtLWZpeFwiLFxyXG4gICAgICAgIFwicHJlcGFyZVwiOiBcImh1c2t5IGluc3RhbGxcIixcclxuICAgICAgICBcInRzYy1jaGVja1wiOiBcInRzY1wiLFxyXG4gICAgICAgIFwidml0ZXN0XCI6IFwidml0ZXN0IC0tdWlcIixcclxuICAgICAgICBcImNvdmVyYWdlXCI6IFwidml0ZXN0IHJ1biAtLWNvdmVyYWdlXCJcclxuICAgIH0sXHJcbiAgICBcInBlZXJEZXBlbmRlbmNpZXNcIjoge1xyXG4gICAgICAgIFwidnVlXCI6IFwiXjMuNC4xNFwiXHJcbiAgICB9LFxyXG4gICAgXCJkZXBlbmRlbmNpZXNcIjoge1xyXG4gICAgICAgIFwiQGVsZW1lbnQtcGx1cy9pY29ucy12dWVcIjogXCJeMi4wLjRcIixcclxuICAgICAgICBcImF4aW9zXCI6IFwiMS42LjVcIixcclxuICAgICAgICBcImNvZGVtaXJyb3JcIjogXCJeNi4wLjFcIixcclxuICAgICAgICBcImVjaGFydHNcIjogXCI1LjMuMlwiLFxyXG4gICAgICAgIFwiZWxlbWVudC1wbHVzXCI6IFwiMi41LjNcIixcclxuICAgICAgICBcImpzLWVycm9yLWNvbGxlY3Rpb25cIjogXCJeMS4wLjdcIixcclxuICAgICAgICBcImpzb24tZWRpdG9yLXZ1ZTNcIjogXCJeMS4wLjhcIixcclxuICAgICAgICBcIm1pdHRcIjogXCIzLjAuMFwiLFxyXG4gICAgICAgIFwibW9tZW50LW1pbmlcIjogXCIyLjIyLjFcIixcclxuICAgICAgICBcIm5wcm9ncmVzc1wiOiBcIjAuMi4wXCIsXHJcbiAgICAgICAgXCJwYXRoXCI6IFwiMC4xMi43XCIsXHJcbiAgICAgICAgXCJwYXRoLWJyb3dzZXJpZnlcIjogXCJeMS4wLjFcIixcclxuICAgICAgICBcInBhdGgtdG8tcmVnZXhwXCI6IFwiXjYuMi4xXCIsXHJcbiAgICAgICAgXCJwaW5pYVwiOiBcIl4yLjAuMTZcIixcclxuICAgICAgICBcInBpbmlhLXBsdWdpbi1wZXJzaXN0ZWRzdGF0ZVwiOiBcIjIuMy4wXCIsXHJcbiAgICAgICAgXCJzY3JlZW5mdWxsXCI6IFwiXjYuMC4yXCIsXHJcbiAgICAgICAgXCJzb3J0YWJsZWpzXCI6IFwiXjEuMTUuMFwiLFxyXG4gICAgICAgIFwidnVlXCI6IFwiXjMuNC4xNFwiLFxyXG4gICAgICAgIFwidnVlLWNsaXBib2FyZDNcIjogXCJeMi4wLjBcIixcclxuICAgICAgICBcInZ1ZS1jb2RlbWlycm9yXCI6IFwiXjYuMS4xXCIsXHJcbiAgICAgICAgXCJ2dWUtaTE4blwiOiBcIjkuMS4xMFwiLFxyXG4gICAgICAgIFwidnVlLXJvdXRlclwiOiBcIl40LjEuNVwiLFxyXG4gICAgICAgIFwiQGNvZGVtaXJyb3IvbGFuZy1qYXZhc2NyaXB0XCI6IFwiXjYuMS4wXCIsXHJcbiAgICAgICAgXCJAY29kZW1pcnJvci90aGVtZS1vbmUtZGFya1wiOiBcIl42LjEuMFwiXHJcbiAgICB9LFxyXG4gICAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xyXG4gICAgICAgIFwiQGJhYmVsL2VzbGludC1wYXJzZXJcIjogXCI3LjE2LjNcIixcclxuICAgICAgICBcIkBvcmlnaW5qcy92aXRlLXBsdWdpbi1jb21tb25qc1wiOiBcIl4xLjAuM1wiLFxyXG4gICAgICAgIFwiQHR5cGVzL21vY2tqc1wiOiBcIjEuMC4xMFwiLFxyXG4gICAgICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMTcuMC4zNVwiLFxyXG4gICAgICAgIFwiQHR5cGVzL3BhdGgtYnJvd3NlcmlmeVwiOiBcIl4xLjAuMFwiLFxyXG4gICAgICAgIFwiQHR5cGVzL3NvcnRhYmxlanNcIjogXCJeMS4xNS4wXCIsXHJcbiAgICAgICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvZXNsaW50LXBsdWdpblwiOiBcIjUuMzAuMFwiLFxyXG4gICAgICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L3BhcnNlclwiOiBcIjUuMzAuMFwiLFxyXG4gICAgICAgIFwiQHZpdGVqcy9wbHVnaW4tbGVnYWN5XCI6IFwiXjUuMi4wXCIsXHJcbiAgICAgICAgXCJAdml0ZWpzL3BsdWdpbi12dWVcIjogXCJeNS4wLjNcIixcclxuICAgICAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZS1qc3hcIjogXCJeMy4xLjBcIixcclxuICAgICAgICBcIkB2aXRlc3QvY292ZXJhZ2UtYzhcIjogXCJeMC4zMy4wXCIsXHJcbiAgICAgICAgXCJAdml0ZXN0L3VpXCI6IFwiXjEuMi4wXCIsXHJcbiAgICAgICAgXCJAdnVlL2NsaS1wbHVnaW4tdW5pdC1qZXN0XCI6IFwiNC41LjE3XCIsXHJcbiAgICAgICAgXCJAdnVlL2NsaS1zZXJ2aWNlXCI6IFwiNS4wLjhcIixcclxuICAgICAgICBcIkB2dWUvdGVzdC11dGlsc1wiOiBcIl4yLjAuMlwiLFxyXG4gICAgICAgIFwiQHZ1ZXVzZS9jb3JlXCI6IFwiXjguNy41XCIsXHJcbiAgICAgICAgXCJlc2xpbnRcIjogXCI4LjE4LjBcIixcclxuICAgICAgICBcImVzbGludC1jb25maWctcHJldHRpZXJcIjogXCI4LjUuMFwiLFxyXG4gICAgICAgIFwiZXNsaW50LWRlZmluZS1jb25maWdcIjogXCIxLjUuMVwiLFxyXG4gICAgICAgIFwiZXNsaW50LXBsdWdpbi1lc2xpbnQtY29tbWVudHNcIjogXCIzLjIuMFwiLFxyXG4gICAgICAgIFwiZXNsaW50LXBsdWdpbi1pbXBvcnRcIjogXCIyLjI2LjBcIixcclxuICAgICAgICBcImVzbGludC1wbHVnaW4tanNvbmNcIjogXCJeMi4zLjBcIixcclxuICAgICAgICBcImVzbGludC1wbHVnaW4tbWFya2Rvd25cIjogXCJeMy4wLjBcIixcclxuICAgICAgICBcImVzbGludC1wbHVnaW4tcHJldHRpZXJcIjogXCI0LjEuMFwiLFxyXG4gICAgICAgIFwiZXNsaW50LXBsdWdpbi1zaW1wbGUtaW1wb3J0LXNvcnRcIjogXCJeMTAuMC4wXCIsXHJcbiAgICAgICAgXCJlc2xpbnQtcGx1Z2luLXVuaWNvcm5cIjogXCJeNDMuMC4yXCIsXHJcbiAgICAgICAgXCJlc2xpbnQtcGx1Z2luLXZ1ZVwiOiBcIjkuMS4xXCIsXHJcbiAgICAgICAgXCJodXNreVwiOiBcIjcuMC4yXCIsXHJcbiAgICAgICAgXCJqc2RvbVwiOiBcIjE2LjQuMFwiLFxyXG4gICAgICAgIFwianNvbmMtZXNsaW50LXBhcnNlclwiOiBcIl4yLjEuMFwiLFxyXG4gICAgICAgIFwibWFqZXN0aWNcIjogXCIxLjguMVwiLFxyXG4gICAgICAgIFwibW9ja2pzXCI6IFwiMS4xLjBcIixcclxuICAgICAgICBcInByZXR0aWVyXCI6IFwiMi4yLjFcIixcclxuICAgICAgICBcInJlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbFwiOiBcIl4xLjUuMVwiLFxyXG4gICAgICAgIFwicm9sbHVwLXBsdWdpbi12aXN1YWxpemVyXCI6IFwiXjUuOC4zXCIsXHJcbiAgICAgICAgXCJzYXNzXCI6IFwiMS43Ny42XCIsXHJcbiAgICAgICAgXCJzdmctc3ByaXRlLWxvYWRlclwiOiBcIjYuMC4xMVwiLFxyXG4gICAgICAgIFwidHlwZXNjcmlwdFwiOiBcIl40LjcuMlwiLFxyXG4gICAgICAgIFwidW5vY3NzXCI6IFwiXjAuNTguM1wiLFxyXG4gICAgICAgIFwidW5wbHVnaW4tYXV0by1pbXBvcnRcIjogXCJeMC4xMS4yXCIsXHJcbiAgICAgICAgXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50c1wiOiBcIl4wLjIyLjhcIixcclxuICAgICAgICBcInVucGx1Z2luLXZ1ZS1kZWZpbmUtb3B0aW9uc1wiOiBcIl4wLjYuMVwiLFxyXG4gICAgICAgIFwidml0ZVwiOiBcIl41LjAuMTFcIixcclxuICAgICAgICBcInZpdGUtcGx1Z2luLWh0bWxcIjogXCJeMy4yLjBcIixcclxuICAgICAgICBcInZpdGUtcGx1Z2luLW1rY2VydFwiOiBcIl4xLjcuMlwiLFxyXG4gICAgICAgIFwidml0ZS1wbHVnaW4tbW9ja1wiOiBcIl4zLjAuMVwiLFxyXG4gICAgICAgIFwidml0ZS1wbHVnaW4tc3R5bGUtaW1wb3J0XCI6IFwiMS4yLjFcIixcclxuICAgICAgICBcInZpdGUtcGx1Z2luLXN2Zy1pY29uc1wiOiBcIl4yLjAuMVwiLFxyXG4gICAgICAgIFwidml0ZXN0XCI6IFwiXjAuMjIuMVwiLFxyXG4gICAgICAgIFwidnVlLXRzY1wiOiBcIl4wLjM0LjE2XCJcclxuICAgIH0sXHJcbiAgICBcInBucG1cIjoge1xyXG4gICAgICAgIFwicGVlckRlcGVuZGVuY3lSdWxlc1wiOiB7XHJcbiAgICAgICAgICAgIFwiaWdub3JlTWlzc2luZ1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImh0bWwtd2VicGFjay1wbHVnaW5cIixcclxuICAgICAgICAgICAgICAgIFwidml0ZS1wbHVnaW4tbW9ja1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ1bnBsdWdpbi1hdXRvLWltcG9ydFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ2dWUtdGVtcGxhdGUtY29tcGlsZXJcIixcclxuICAgICAgICAgICAgICAgIFwidW5vY3NzXCIsXHJcbiAgICAgICAgICAgICAgICBcInVucGx1Z2luXCIsXHJcbiAgICAgICAgICAgICAgICBcInZpdGUtcGx1Z2luLW1vY2tcIixcclxuICAgICAgICAgICAgICAgIFwiQHZpdGVqcy9wbHVnaW4tbGVnYWN5XCIsXHJcbiAgICAgICAgICAgICAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJAdml0ZWpzLypcIixcclxuICAgICAgICAgICAgICAgIFwiQGJhYmVsLypcIixcclxuICAgICAgICAgICAgICAgIFwidml0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2dWVcIixcclxuICAgICAgICAgICAgICAgIFwiQHVub2Nzcy92aXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcInJvbGx1cFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2dWUtamVzdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJAYmFiZWwvKlwiXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJicm93c2Vyc2xpc3RcIjogW1xyXG4gICAgICAgIFwiPiAxJVwiLFxyXG4gICAgICAgIFwibm90IGllIDExXCIsXHJcbiAgICAgICAgXCJub3Qgb3BfbWluaSBhbGxcIlxyXG4gICAgXSxcclxuICAgIFwiZW5naW5lc1wiOiB7XHJcbiAgICAgICAgXCJub2RlXCI6IFwiPj0gMTYgPDIwXCIsXHJcbiAgICAgICAgXCJwbnBtXCI6IFwiPj0gNiA8OVwiXHJcbiAgICB9XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxnaXRodWJcXFxcdnVlMy1hZG1pbi10ZW1wbGF0ZVxcXFxzcmNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGdpdGh1YlxcXFx2dWUzLWFkbWluLXRlbXBsYXRlXFxcXHNyY1xcXFxzZXR0aW5ncy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovZ2l0aHViL3Z1ZTMtYWRtaW4tdGVtcGxhdGUvc3JjL3NldHRpbmdzLmpzXCI7aW1wb3J0IHBhY2thZ2VKc29uIGZyb20gJy4uL3BhY2thZ2UuanNvbidcbmV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcbiAgdGl0bGU6IHBhY2thZ2VKc29uLm5hbWUsXG4gIC8qKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn0gdHJ1ZSB8IGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvbiBXaGV0aGVyIHNob3cgdGhlIGxvZ28gaW4gc2lkZWJhclxuICAgKi9cbiAgc2lkZWJhckxvZ286IGZhbHNlLFxuICAvKipcbiAgICogQHR5cGUge2Jvb2xlYW59IHRydWUgfCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb24gV2hldGhlciBzaG93IHRoZSB0aXRsZSBpbiBOYXZiYXJcbiAgICovXG4gIHNob3dOYXZiYXJUaXRsZTogZmFsc2UsXG4gIC8qKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn0gdHJ1ZSB8IGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvbiBXaGV0aGVyIHNob3cgdGhlIGRyb3AtZG93blxuICAgKi9cbiAgU2hvd0Ryb3BEb3duOiBmYWxzZSxcbiAgLyoqXG4gICAqIEB0eXBlIHtib29sZWFufSB0cnVlIHwgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uIFdoZXRoZXIgc2hvdyBIYW1idXJnZXJcbiAgICovXG4gIHNob3dIYW1idXJnZXI6IGZhbHNlLFxuICAvKipcbiAgICogQHR5cGUge2Jvb2xlYW59IHRydWUgfCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb24gV2hldGhlciBzaG93IHRoZSBzZXR0aW5ncyByaWdodC1wYW5lbFxuICAgKi9cbiAgc2hvd0xlZnRNZW51OiBmYWxzZSxcbiAgLyoqXG4gICAqIEB0eXBlIHtib29sZWFufSB0cnVlIHwgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uIFdoZXRoZXIgc2hvdyBUYWdzVmlld1xuICAgKi9cbiAgc2hvd1RhZ3NWaWV3OiBmYWxzZSxcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUYWdzVmlldyBzaG93IG51bWJlclxuICAgKi9cbiAgdGFnc1ZpZXdOdW06IDYsXG4gIC8qKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn0gdHJ1ZSB8IGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvbiBXaGV0aGVyIHNob3cgdGhlIHRvcCBOYXZiYXJcbiAgICovXG4gIHNob3dUb3BOYXZiYXI6IGZhbHNlLFxuICAvKiBwYWdlICBhbmltYXRpb24gcmVsYXRlZCovXG4gIC8qKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn0gdHJ1ZSB8IGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvbiBXaGV0aGVyIG5lZWQgYW5pbWF0aW9uIG9mIG1haW4gYXJlYVxuICAgKi9cbiAgbWFpbk5lZWRBbmltYXRpb246IGZhbHNlLFxuICAvKipcbiAgICogQHR5cGUge2Jvb2xlYW59IHRydWUgfCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb24gV2hldGhlciBuZWVkIG5wcm9ncmVzc1xuICAgKi9cbiAgaXNOZWVkTnByb2dyZXNzOiBmYWxzZSxcblxuICAvKnBhZ2UgbG9naW4gb3Igb3RoZXIqL1xuICAvKipcbiAgICogQHR5cGUge2Jvb2xlYW59IHRydWUgfCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb24gV2hldGhlciBuZWVkIGxvZ2luXG4gICAqL1xuICBpc05lZWRMb2dpbjogZmFsc2UsXG4gIC8qKlxuICAgKiBAdHlwZSB7c3RyaW5nfSAncmJhYyd8ICdyb2xlcycgfCAnY29kZSdcbiAgICovXG4gIHBlcm1pc3Npb25Nb2RlOiAncm9sZXMnLFxuICAvKipcbiAgICogQHR5cGUge2Jvb2xlYW59IHRydWUgfCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb24gV2hldGhlciAgb3BlbiBwcm9kIG1vY2tcbiAgICovXG4gIG9wZW5Qcm9kTW9jazogZmFsc2UsXG4gIC8qKlxuICAgKiBAdHlwZSB7c3RyaW5nIHwgYXJyYXl9ICdkZXYnIHwgWydwcm9kJywndGVzdCcsJ2RldiddIGFjY29yZGluZyB0byB0aGUgLmVudiBmaWxlIHByb3BzIG9mIFZJVEVfQVBQX0VOVlxuICAgKiBAZGVzY3JpcHRpb24gTmVlZCBzaG93IGVyciBsb2dzIGNvbXBvbmVudC5cbiAgICogVGhlIGRlZmF1bHQgaXMgb25seSB1c2VkIGluIHRoZSBwcm9kdWN0aW9uIGVudlxuICAgKiBJZiB5b3Ugd2FudCB0byBhbHNvIHVzZSBpdCBpbiBkZXYsIHlvdSBjYW4gcGFzcyBbJ2RldicsICd0ZXN0J11cbiAgICovXG4gIGVycm9yTG9nOiBbJ3Byb2QnXSxcbiAgLypcbiAgICogdGFibGUgaGVpZ2h0KDEwMHZoLWRlbFdpbmRvd0hlaWdodClcbiAgICogKi9cbiAgZGVsV2luZG93SGVpZ2h0OiAnMjEwcHgnLFxuICAvKlxuICAgKiBzZXR0aW5nIGRldiB0b2tlbiB3aGVuICBpc05lZWRMb2dpbiBpcyBzZXR0aW5nIGZhbHNlXG4gICAqICovXG4gIHRtcFRva2VuOiAndG1wX3Rva2VuJyxcblxuICAvKlxuICAgKiB2aXRlLmNvbmZpZy5qcyBiYXNlIGNvbmZpZ1xuICAgKiAqL1xuICB2aXRlQmFzZVBhdGg6ICcuLycsXG5cbiAgLypcbiAgICogaTE4biBzZXR0aW5nIGRlZmF1bHQgbGFuZ3VhZ2VcbiAgICogZW4vemhcbiAgICogKi9cbiAgZGVmYXVsdExhbmd1YWdlOiAnemgnLFxuICAvKlxuICAgKiAgZGVmYXVsdCB0aGVtZVxuICAgKiBiYXNlLXRoZW1lL2xpZ2h0aW5nLXRoZW1lL2RhcmstdGhlbWVcbiAgICogKi9cbiAgZGVmYXVsdFRoZW1lOiAnYmFzZS10aGVtZScsXG4gIC8qXG4gICAqIHNldHRpbmcgZGVmYXVsdCBkZWZhdWx0U2l6ZVxuICAgKiBsYXJnZSAvIGRlZmF1bHQgL3NtYWxsXG4gICAqICovXG4gIGRlZmF1bHRTaXplOiAnc21hbGwnLFxuICAvKlxuICAgKiB2aXRlLmNvbmZpZy5qcyBiYXNlIGNvbmZpZ1xuICAgKiBzdWNoIGFzXG4gICAqICovXG4gIC8vXHU1RTczXHU1M0YwaWQgIDItPnZ1ZTMtYWRtaW4tcGx1c1xuICBwbGF0ZUZvcm1JZDogMlxufVxuXG5leHBvcnQgZGVmYXVsdCBzZXR0aW5nc1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxnaXRodWJcXFxcdnVlMy1hZG1pbi10ZW1wbGF0ZVxcXFxzcmNcXFxccGx1Z2luc1xcXFx2aXRlLXBsdWdpbi1zZXR1cC1leHRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGdpdGh1YlxcXFx2dWUzLWFkbWluLXRlbXBsYXRlXFxcXHNyY1xcXFxwbHVnaW5zXFxcXHZpdGUtcGx1Z2luLXNldHVwLWV4dGVuZFxcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovZ2l0aHViL3Z1ZTMtYWRtaW4tdGVtcGxhdGUvc3JjL3BsdWdpbnMvdml0ZS1wbHVnaW4tc2V0dXAtZXh0ZW5kL2luZGV4LnRzXCI7aW1wb3J0IHsgcGFyc2UgfSBmcm9tICdAdnVlL2NvbXBpbGVyLXNmYydcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnZWpzJ1xyXG5pbXBvcnQgdHlwZSB7IFBsdWdpbiB9IGZyb20gJ3ZpdGUnXHJcbmV4cG9ydCBkZWZhdWx0ICh7IGluamVjdCB9KTogUGx1Z2luID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogJ3ZpdGUtcGx1Z2luLXNldHVwLWV4dGVuZCcsXHJcbiAgICBlbmZvcmNlOiAncHJlJyxcclxuICAgIC8vIGNvbmZpZ1Jlc29sdmVkKHJlc29sdmVkQ29uZmlnKSB7XHJcbiAgICAvLyAgIHZpdGVDb25maWcgPSByZXNvbHZlZENvbmZpZ1xyXG4gICAgLy8gfSxcclxuICAgIGFzeW5jIHRyYW5zZm9ybUluZGV4SHRtbChodG1sKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlbmRlcihodG1sLCB7IC4uLmluamVjdCB9KVxyXG4gICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9LFxyXG4gICAgdHJhbnNmb3JtKGNvZGUsIGlkKSB7XHJcbiAgICAgIGlmICgvXFwudnVlJC8udGVzdChpZCkpIHtcclxuICAgICAgICBjb25zdCB7IGRlc2NyaXB0b3IgfSA9IHBhcnNlKGNvZGUpXHJcbiAgICAgICAgaWYgKCFkZXNjcmlwdG9yPy5zY3JpcHRTZXR1cD8uc2V0dXApIHtcclxuICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgbGFuZywgbmFtZSB9ID0gZGVzY3JpcHRvci5zY3JpcHRTZXR1cD8uYXR0cnMgfHwge31cclxuICAgICAgICBjb25zdCBkaWxsU3RyID0gaGVhZFN0cmluZyhsYW5nLCBuYW1lKVxyXG4gICAgICAgIGNvZGUgKz0gZGlsbFN0clxyXG4gICAgICAgIHJldHVybiBjb2RlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGhlYWRTdHJpbmcgPSAobGFuZywgbmFtZSkgPT4ge1xyXG4gIHJldHVybiBgPHNjcmlwdCAke2xhbmcgPyBgbGFuZz1cIiR7bGFuZ31cImAgOiAnJ30+XHJcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSdcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcclxuICAke25hbWUgPyBgbmFtZTogXCIke25hbWV9XCIsYCA6ICcnfVxyXG59KVxyXG48L3NjcmlwdD5cXG5gXHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErUSxTQUFTLGVBQWU7QUFDdlMsU0FBUyxjQUFjLGVBQWU7QUFDdEMsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixTQUFTLDRCQUE0QjtBQUVyQyxPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFlBQVk7QUFDbkIsU0FBUyxtQkFBbUIsYUFBYSxpQkFBaUI7QUFDMUQsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZ0JBQWdCOzs7QUNWdkI7QUFBQSxFQUNJLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxFQUNYLFNBQVc7QUFBQSxFQUNYLFFBQVU7QUFBQSxFQUNWLGdCQUFrQjtBQUFBLEVBQ2xCLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxJQUNQLEtBQU87QUFBQSxJQUNQLE9BQVM7QUFBQSxJQUNULE9BQVM7QUFBQSxJQUNULE1BQVE7QUFBQSxJQUNSLGNBQWM7QUFBQSxJQUNkLE9BQVM7QUFBQSxJQUNULGlCQUFpQjtBQUFBLElBQ2pCLFNBQVc7QUFBQSxJQUNYLE1BQVE7QUFBQSxJQUNSLFNBQVc7QUFBQSxJQUNYLGFBQWE7QUFBQSxJQUNiLFFBQVU7QUFBQSxJQUNWLFVBQVk7QUFBQSxFQUNoQjtBQUFBLEVBQ0Esa0JBQW9CO0FBQUEsSUFDaEIsS0FBTztBQUFBLEVBQ1g7QUFBQSxFQUNBLGNBQWdCO0FB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
