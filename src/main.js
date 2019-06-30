import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

import rightMenu from './components/ContextMenu'
import  './components/ContextMenu/index.css';

import websocket from 'vue-native-websocket'

Vue.prototype.$websocket = websocket

Vue.use(websocket, 'ws://localhost:3000', {

  reconnection: true, // (Boolean) whether to reconnect automatically (false)

  reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),

  reconnectionDelay: 3000, // (Number) how long to initially wait before attempting a new (1000)

})

const requireComponent = require.context(
  // 其组件目录的相对路径
  './components',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})
Vue.use(rightMenu)
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
