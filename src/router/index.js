import Vue from 'vue'
<<<<<<< HEAD
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
=======
import Router from 'vue-router'
import Home from '@/views/Home'
import Lxwm from '@/views/Lxwm'
import Main from '@/views/Main'
import Xzzx from '@/views/Xzzx'
import Zxdt from '@/views/Zxdt'
import Zxwd from '@/views/Zxwd'
import Xhjj from '@/views/xhgk/Xhjj'
import Xhzc from '@/views/xhgk/Xhzc'
import Ljgl from '@/views/xhgk/Ljgl'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect: 'home',
      children: [
        { path: 'home', name: 'Home', component: Home },
        { path: 'lxwm', name: 'Lxwm', component: Lxwm },
        { path: 'xzzx', name: 'Xzzx', component: Xzzx },
        { path: 'zxdt', name: 'Zxdt', component: Zxdt },
        { path: 'zxwd', name: 'Zxwd', component: Zxwd },
        { path: 'xhjj', name: 'Xhjj', component: Xhjj },
        { path: 'xhzc', name: 'Xhzc', component: Xhzc },
        { path: 'ljgl', name: 'Ljgl', component: Ljgl }
      ]
    }
  ]
})

>>>>>>> fbf3e649718801b744d4e107fd1d858b1e1f04b0
