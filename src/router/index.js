import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = () => import('@/components/HelloWorld')
const Register = () => import('@/components/Register')
const Login = () => import('@/components/Login')
const Home = () => import('@/components/home/Index')
const Intro = () => import('@/components/home/Intro')
const Count = () => import('@/components/home/Count')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'intro',
          name: 'Intro',
          component: Intro
        },
        {
          path: 'count',
          name: 'Count',
          component: Count
        }
      ]
    }
  ]
})
