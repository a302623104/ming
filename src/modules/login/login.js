import Vue from 'vue'
import Login from './login.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store.js'

Vue.use(require('vue-wechat-title'))
Vue.use(ElementUI);


new Vue({
  router,
  store,
  render: h => h(Login)
}).$mount('#login')
