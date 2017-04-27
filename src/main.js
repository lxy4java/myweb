// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/Hello'
import Home from './components/Home'
import Markdown from './components/Markdown'
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
}, {
  path: '/mkd',
  component: Markdown
}]
const router = new VueRouter({
  routes
})


function routers(){
console.log("可以ajax请求后台获取");
return router;

}


new Vue({
  el: '#app',
  template: '<App/>',
  router: routers(),
  store,
  render: h => h(App)
})
