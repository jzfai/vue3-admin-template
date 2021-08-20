import { createStore } from "vuex";
import permission from './modules/permission';
import app from './modules/app';

/*此处不支持后续需要找到个方法进行替换*/
// const modulesFiles = require.context('./modules', true, /\.js$/)
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})
export default createStore({
  modules:{
    permission,
    app
  }
});

