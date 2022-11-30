<<<<<<< HEAD
// import buttonView from '@/views/button';
import home from '@/views/homePage';
import Vue from 'vue';
import Router from 'vue-router';
import index from '@/views/index';
=======
import buttonView from '@/views/button';
import guidance from '@/views/guidance';
import home from '@/views/homePage';
import Vue from 'vue';
import Router from 'vue-router';
>>>>>>> 4cfd5ac640c1c839ddb48d7179ca1ba4249457d7

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
<<<<<<< HEAD
          path: '/index',
          name: 'index',
          component: index
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
=======
          path: 'buttonView',
          component: buttonView
        },
        {
          path: 'guidance',
          component: guidance
        }
      ]
    }
>>>>>>> 4cfd5ac640c1c839ddb48d7179ca1ba4249457d7
  ]
})
