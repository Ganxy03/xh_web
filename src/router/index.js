import Vue from 'vue'
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

