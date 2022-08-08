import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingHTML from '../views/DataBindingHTML'
import DataBindingInput from '../views/DataBindingInput'
import DataBindingAttribue from '../views/DataBindingAttribue'
import DataBindingClass from '../views/DataBindingClass'
import DataBindingVFor from '../views/DataBindingVFor'
import DataBindingVif from '../views/DataBindingVif'
import DataBindingVOn from '../views/DataBindingVOn'
import DataBindingMock from '../views/DataBindingMock'

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
    path: '/dataBinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/dataBindingHTML',
    name: 'DataBindingHTML',
    component: DataBindingHTML
  },
  {
    path: '/dataBindingInput',
    name: 'DataBindingInput',
    component: DataBindingInput
  },
  {
    path: '/dataBindingAttribue',
    name: 'DataBindingAttribue',
    component: DataBindingAttribue
  },
  {
    path: '/dataBindingClass',
    name: 'DataBindingClass',
    component: DataBindingClass
  },
  {
    path: '/dataBindingVFor',
    name: 'DataBindingVFor',
    component: DataBindingVFor
  },
  {
    path: '/dataBindingVif',
    name: 'DataBindingVif',
    component: DataBindingVif
  },
  {
    path: '/dataBindingVOn',
    name: 'DataBindingVOn',
    component: DataBindingVOn
  },
  {
    path: '/dataBindingMock',
    name: 'DataBindingMock',
    component: DataBindingMock
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
