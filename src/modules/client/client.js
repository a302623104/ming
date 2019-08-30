import Vue from 'vue'
import Console from './Client.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery'

Vue.use(require('vue-wechat-title'))
Vue.use(ElementUI);
Vue.prototype.$ = $;

new Vue({
    router,
    render: h => h(Console)
}).$mount('#client')
