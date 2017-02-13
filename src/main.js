// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/Hello'
import Home from './components/Home'
/**store 不能大写*/ 
import store from './vuex/store'
/* eslint-disable no-new */

Vue.use(VueRouter)



const routes = [{
  path: '/',
  component: Home
}, {
  path: '/hello',
  component: Hello
}]
const router = new VueRouter({
  routes
})


new Vue({
  el: '#app',
  template: '<App/>',
  router: router,
  store,
  render: h => h(App)
})
