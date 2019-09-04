import Vue from 'vue'
import Console from './list.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store.js'

Vue.use(require('vue-wechat-title'))
Vue.use(ElementUI);


new Vue({
    router,
    store,
    render: h => h(Console)
}).$mount('#list')
