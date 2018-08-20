// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' //var App = require('./App')等价
import Hello from './components/Hello'
import hello from './views/Hello'
import store from './store/'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App, Hello, hello},
  template: '<App/>'
})
