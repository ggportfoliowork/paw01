import Vue from 'vue';
import VueRouter from 'vue-router'

import App from '../scaffold/App'

import DashboardPage from '../pages/App/Dashboard/DashboardPage'

import PetsRouter from '../pages/App/Pets/PetsRouter'
import PetInfoPage from '../pages/App/Pets/PetInfoPage'
import EditPetsPage from '../pages/App/Pets/EditPetsPage'
import ViewPetsPage from '../pages/App/Pets/ViewPetsPage'
import IndexPetsPage from '../pages/App/Pets/IndexPetsPage'
import CreatePetsPage from '../pages/App/Pets/CreatePetsPage'

const routes = [
  {
      path: '/',
      name: 'root',
      component: App,
      meta: {
        breadcrumb: 'Dashboard'
      },
      children: [
        {
          path: '',
          component: DashboardPage,
          name: 'dashboard',
          meta: {
            breadcrumb: ''
          }
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
        name: 'view-pet-root',
        component: ViewPetsPage,
        meta: {
          breadcrumb: 'View Pet'
        },
        children: [
          {
            path: '',
            name: 'view-pet',
            component: PetInfoPage,
            meta: {
              breadcrumb: 'View Pet'
            },
          },
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

const router = new VueRouter({
  mode: 'history',
  base: '/app/',
  linkActiveClass: 'active',
  router: true,
  routes
})

export default router
