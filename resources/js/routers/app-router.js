import Vue from 'vue';
import VueRouter from 'vue-router'

import DashboardPage from '../pages/App/Dashboard/DashboardPage'
import EditProfilePage from '../pages/App/Profile/EditProfilePage'

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
      component: DashboardPage,
      meta: {
        breadcrumb: 'Dashboard'
      }
  },
  {
    path: '/profile',
    name: 'profiles.edit',
    component: EditProfilePage,
    meta: {
      breadcrumb: 'Edit Profile'
    }
  },
  {
    path: '/pets',
    component: PetsRouter,
    name: 'root.pets',
    meta: {
      breadcrumb: 'Pets'
    },
    children: [
      {
        path: '',
        component: IndexPetsPage,
        name: 'pets.index',
        meta: {
          breadcrumb: ''
        }
      },
      {
        path: 'create',
        name: 'pets.create',
        component: CreatePetsPage,
        meta: {
          breadcrumb: 'Add a Pet'
        }
      },
      {
        path: ':petId',
        name: 'pets.view',
        component: ViewPetsPage,
        meta: {
          breadcrumb: 'View Pet'
        },
        children: [
          {
            path: '',
            name: 'pets.view',
            component: PetInfoPage,
            meta: {
              breadcrumb: 'View Pet'
            },
          },
          {
            path: 'edit',
            name: 'pets.edit',
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
  relative: true,
  base: '/app/',
  linkActiveClass: 'active',
  router: true,
  routes
})

export default appRouter
