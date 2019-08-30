import Vue from 'vue'
import shopcar from './shopcar.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import store from './store.js'

Vue.use(require('vue-wechat-title'))
Vue.use(ElementUI);


new Vue({
  router,
  render: h => h(shopcar)
}).$mount('#shopcar')
