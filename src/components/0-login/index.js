const login = resolve => require.ensure([], () => resolve(require('./login.vue')), '0-login')

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      level: 0,
      title: window.baseName + '-登录',
      requireAuth: false
    }
  }
]
