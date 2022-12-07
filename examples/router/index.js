// import buttonView from '@/views/button';
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
          path: '/index',
          name: 'index',
          component: index,
          children: [
            {
              path: '/common',
              name: 'common',
              component: () =>
                import("@/views/flows/common.vue"),
            },
            {
              path: '/finance',
              name: 'finance',
              component: () =>
                import("@/views/flows/finance.vue"),
            },
            {
              path: '/gh',
              name: 'gh',
              component: () =>
                import("@/views/flows/gh.vue"),
            },
            {
              path: '/hr',
              name: 'hr',
              component: () =>
                import("@/views/flows/hr.vue"),
            },
            {
              path: '/office',
              name: 'office',
              component: () =>
                import("@/views/flows/office.vue"),
            },
            {
              path: '/other',
              name: 'other',
              component: () =>
                import("@/views/flows/other.vue"),
            },
            {
              path: '/province',
              name: 'province',
              component: () =>
                import("@/views/flows/province.vue"),
            },
            {
              path: '/party',
              name: 'party',
              component: () =>
                import("@/views/flows/party.vue"),
            },
            {
              path: '/sc',
              name: 'sc',
              component: () =>
                import("@/views/flows/sc.vue"),
            },
            {
              path: '/wl',
              name: 'wl',
              component: () =>
                import("@/views/flows/wl.vue"),
            },
            {
              path: '/xf',
              name: 'xf',
              component: () =>
                import("@/views/flows/xf.vue"),
            }
          ]
        },
        {
          path: '/workbenches',
          name: 'workbenches',
          component: () =>
            import("@/views/workbenches.vue"),
        },
        {
          path: '/warehouse',
          name: 'warehouse',
          component: () =>
            import("@/views/warehouse.vue"),
          children: [
            {
              path: '/buttonView',
              name: 'buttonView',
              component: () =>
                import("@/views/show-components/Button.vue"),
            },
          ]
        }
      ]
    },
  ]
})
