import buttonView from '@/views/button';
import home from '@/views/homePage';
import Vue from 'vue';
import Router from 'vue-router';
import index from '@/views/index';

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/buttonView',
      name: 'buttonView',
      component: buttonView
    },
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/index',
          name: 'index',
          component: index
        }
      ]
    },
  ]
})
