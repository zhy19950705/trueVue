import Vue from 'vue'
import App from './App.vue'
import rightMenu from './components/ContextMenu'
import  './components/ContextMenu/index.css';
Vue.use(rightMenu)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
