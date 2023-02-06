import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/faqs',
    name: 'Faqs',
    component: () => import('../views/FaqsView.vue')
  },
  {
    path: '/out_focus',
    name: 'OurFocus',
    component: () => import('../views/OurFocusView.vue')
  },
  {
    path: '/lastest_news',
    name: 'LatestNews',
    component: () => import('../views/LatestNewsView.vue')
  },
  {
    path: '/meet_the_team',
    name: 'MeetTheTeam',
    component: () => import('../views/MeetTheTeamView.vue')
  },
  {
    path: '/business_assurance',
    name: 'BusinessAssurance',
    component: () => import('../views/BusinessAssuranceView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
