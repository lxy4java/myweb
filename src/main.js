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


/*** 
const routes = [{
  path: '/',
  component: Home
}, {
  path: '/hello',
  component: Hello
}]
*/

var routes = [];
/**
 * 
 * Synchronous XMLHttpRequest on the main thread is deprecated 
 * because of its detrimental effects to the end user's experience
 */

$.ajax({
  type: "get",
  dataType:"json",
  url: "/rest/routers",
  async: false,
  success: function (data) {
    console.log("#################3")
    console.log(data);
    routes = JSON.parse(data);
  },
  error: function (err){

    console.log("3333333333333333333")
    console.log(err);
  }

});

console.log(routes);
const router = new VueRouter({
  routes
})

function routers() {

  return router;

}


new Vue({
  el: '#app',
  template: '<App/>',
  router: routers(),
  store,
  render: h => h(App)
})
