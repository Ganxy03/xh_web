import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/MainView.vue'),
    redirect: '/home',
    children: [
      { path: 'home', name: 'home', component: () => import('../views/HomeView.vue') },
      { path: 'xhkk', name: 'xhkk', component: () => import('../views/IntroView.vue') },
      { path: 'zxdt', name: 'zxdt', component: () => import('../views/DynamicView.vue') },
      { path: 'zxwd', name: 'zxwd', component: () => import('../views/QuestionView.vue') },
      { path: 'zxzx', name: 'zxzx', component: () => import('../views/DownloadView.vue') },
      { path: 'about', name: 'about', component: () => import('../views/AboutView.vue') },
      { path: '/admin', name: 'admin', redirect: '/admin/login' },
      { path: '/admin/login', name: 'login', component: () => import('../views/Admin/LoginView.vue') },
      { path: '/explore/motto', name: 'motto', component: () => import('../views/Explore/MottoView.vue') },
      { path: 'join', name: 'join', component: () => import('../views/JoinView.vue') },
      { path: 'apply', name: 'apply', component: () => import('../views/ApplyView.vue') },
      { path: 'appl', name: 'appl', component: () => import('../views/ApplView.vue') },
      { path: 'examwelcome', name: 'examwelcome', component: () => import('../views/Exam/ExamWelcome.vue') },
      { path: 'startexam', name: 'startexam', component: () => import('../views/Exam/StartExam.vue') },
    ],
  },
  { path: '/admin/manage', name: 'manage', component: () => import('../views/Admin/ManageView.vue') },

]

const router = new VueRouter({
  mode: 'history',
  base: '',
  routes
})

export default router
