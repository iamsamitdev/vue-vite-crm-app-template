import { createRouter, createWebHistory } from 'vue-router'

// Import Frontend Layout
import FrontendLayout from '@/layouts/Frontend.vue'

// Import Backend Layout
import BackendLayout from '@/layouts/Backend.vue'

// Import Frontend Page
import About from '@/views/frontend/About.vue'
import Home from '@/views/frontend/Home.vue'
import Portfolio from '@/views/frontend/Portfolio.vue'
import Service from '@/views/frontend/Service.vue'
import Contact from '@/views/frontend/Contact.vue'
import Register from '@/views/frontend/Register.vue'
import Login from '@/views/frontend/Login.vue'
import ForgotPassword from '@/views/frontend/ForgotPassword.vue'

// Import Backend Page
import Dashboard from '@/views/backend/Dashboard.vue'
import Product from '@/views/backend/Product.vue'

// 404
import NotFound404 from '@/views/NotFound404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    // Frontend Route
    {
      path: '/',
      name: 'Frontend',
      component: FrontendLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: 'about',
          name: 'About',
          component: About
        },
        {
          path: 'portfolio',
          name: 'Portfolio',
          component: Portfolio
        },
        {
          path: 'service',
          name: 'Service',
          component: Service
        },
        {
          path: 'contact',
          name: 'Contact',
          component: Contact
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'forgotpassword',
          name: 'ForgotPassword',
          component: ForgotPassword
        },
      ],
    },

    // Backend Route
    {
      path: '/backend',
      name: 'Backend',
      component: BackendLayout,
      children: [
        {
          path: '',
          redirect: { name: 'Dashboard' }
        },
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'products',
          name: 'Products',
          component: Product
        }
      ]
    },

    // Error 404
    {
      path: "/:catchAll(.*)",
      component: NotFound404,
    },
    
  ]
  
})

export default router
