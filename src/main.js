import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './plugins/element.js'
import {routes} from './routes.js'
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
Vue.config.productionTip = false
Vue.use(VueRouter);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
