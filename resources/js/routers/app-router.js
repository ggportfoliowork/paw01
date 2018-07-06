import Vue from 'vue';
import VueRouter from 'vue-router'

import DashboardPage from '../pages/App/Dashboard/DashboardPage'

import PetsRouter from '../pages/App/Pets/PetsRouter'
import EditPetsPage from '../pages/App/Pets/EditPetsPage'
import ViewPetsPage from '../pages/App/Pets/ViewPetsPage'
import IndexPetsPage from '../pages/App/Pets/IndexPetsPage'
import CreatePetsPage from '../pages/App/Pets/CreatePetsPage'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'root',
    component: {
      template: '<router-view/>',
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: DashboardPage
      }
    ]
  },
  {
    path: '/pets',
    component: PetsRouter,
    name: 'root-pets',
    meta: {
      breadcrumb: 'Pets'
    },
    children: [
      {
        path: '',
        component: IndexPetsPage,
        name: '',
        meta: {
          breadcrumb: ''
        }
      },
      {
        path: 'create',
        name: 'create-pet',
        component: CreatePetsPage,
        meta: {
          breadcrumb: 'Add a Pet'
        }
      },
      {
        path: ':petId',
        name: 'view-pet',
        component: ViewPetsPage,
        meta: {
          breadcrumb: 'View Pet'
        },
        children: [
          {
            path: 'edit',
            name: 'edit-pet',
            component: EditPetsPage,
            meta: {
              breadcrumb: 'Edit Pet'
            }
          }
        ]
      }
    ]
  }
]

Vue.use(VueRouter)

const appRouter = new VueRouter({
  mode: 'history',
  routes,
  base: '/app/',
  linkActiveClass: 'active',
  router: true
})

export default appRouter
