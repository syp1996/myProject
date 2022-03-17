import buttonView from '@/views/button';
import guidance from '@/views/guidance';
import home from '@/views/homePage';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/buttonView',
    //   name: 'buttonView',
    //   component: buttonView
    // },
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: 'buttonView',
          component: buttonView
        },
        {
          path: 'guidance',
          component: guidance
        }
      ]
    }
  ]
})
