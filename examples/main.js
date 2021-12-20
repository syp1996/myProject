// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './css-style/button/button.css'
import MyUI from '../components/index'
import router from './router'
Vue.config.productionTip = false

Vue.use(MyUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  created() {
    console.log('ssss', new Vue)
    console.log('window', new Vue)
  },
  template: '<App/>'
})
