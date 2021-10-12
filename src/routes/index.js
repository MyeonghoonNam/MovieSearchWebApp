import { createRouter, createWebHistory } from 'vue-router'
import Movies from './Movies.vue'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Movies,
    },
    {
      path: '/:notFound(.*)',
    }
  ]
})