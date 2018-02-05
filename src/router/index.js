import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/Website/LandingPage'
import About from '@/components/Website/About'
import Service from '@/components/Website/Service'
import Register from '@/components/Users/Register'
import Login from '@/components/Users/Login'
import Profile from '@/components/Users/User/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/o-nas',
      name: 'About',
      component: About
    },
    {
      path: '/pakiety',
      name: 'Service',
      component: Service
    },
    {
      path: '/rejestracja',
      name: 'Register',
      component: Register
    },
    {
      path: '/logowanie',
      name: 'Login',
      component: Login
    },
    {
      path: '/profil',
      name: 'Profile',
      component: Profile
    }
  ],
  mode: 'history'
})
