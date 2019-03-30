import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './router'
import { getToken } from '@/lib/util.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const token = getToken()
  // console.log(token)
  if (token) next()
  else {
    if (to.name === 'login') next()
    else if (to.name === 'register') next()
    else next({ name: 'login' })
  }
})

export default router
