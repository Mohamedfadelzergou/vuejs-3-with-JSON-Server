import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/blog'
import Show from '../views/blog/Show'
import Create from '../views/blog/Create'
import PageNotFound from '../views/PageNotFound'
import Edit from '../views/blog/Edit'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/blog'
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/posts',
    redirect:'/blog'
  },
  {
    path: '/blog/:id/:slug',
    name: 'post-show',
    component: Show,
    props:true
  },
  {
    path: '/create',
    name: 'post-create',
    component: Create,
  },
  {
    path: '/edit/:id',
    name: 'post-edit',
    component: Edit,
    props:true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/:catchAll(.*)',
    component:PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
