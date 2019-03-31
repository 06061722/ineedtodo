export const routes = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'login' }
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
