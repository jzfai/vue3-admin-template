import packageJson from '../package.json'
export const settings = {
  title: packageJson.name,
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
  permissionMode: 'roles',
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
  errorLog: ['prod'],
  /*
   * table height(100vh-delWindowHeight)
   * */
  delWindowHeight: '210px',
  /*
   * setting dev token when  isNeedLogin is setting false
   * */
  tmpToken: 'tmp_token',

  /*
   * vite.config.js base config
   * */
  viteBasePath: './',

  /*
   * i18n setting default language
   * en/zh
   * */
  defaultLanguage: 'zh',
  /*
   *  default theme
   * base-theme/lighting-theme/dark-theme
   * */
  defaultTheme: 'base-theme',
  /*
   * setting default defaultSize
   * large / default /small
   * */
  defaultSize: 'small',
  /*
   * vite.config.js base config
   * such as
   * */
  //平台id  2->vue3-admin-plus
  plateFormId: 2
}

export default settings
