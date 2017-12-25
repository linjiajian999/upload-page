import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import { routes as loginRoutes } from '../components/0-login/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    ...loginRoutes
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = window.baseName
  }
  next()
})
export default router
