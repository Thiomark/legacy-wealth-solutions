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
  },
  {
    path: '/medical_cover',
    name: 'MedicalCoverView',
    component: () => import('../views/MedicalCoverView.vue')
  },
  {
    path: '/employee_benefits',
    name: 'EmployeeBenefitsView',
    component: () => import('../views/EmployeeBenefitsView.vue')
  },
  {
    path: '/tailor_made_investing',
    name: 'TailorMadeInvestingView',
    component: () => import('../views/TailorMadeInvestingView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
