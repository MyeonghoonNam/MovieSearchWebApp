import { createRouter, createWebHistory } from 'vue-router'
import MovieList from './MovieList'
import MovieInfo from './MovieInfo'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/movieList',
      name: 'MovieList',
      component: MovieList,
    },
    {
      path: '/movieList/:id',
      name: 'MovieInfo',
      component: MovieInfo
    }
  ]
})