import Home from '@/views/Home.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/Layout.vue'),
    children: [
      {
        path: '/todolist',
        name: 'todolist',
        component: () => import('@/views/Todolist')
      },
      {
        path: '/peer',
        name: 'peer',
        component: () => import('@/views/Peer')
      },
      {
        path: '/tide',
        name: 'tide',
        component: () => import('@/views/Tide')
      }
    ]
  }
]
