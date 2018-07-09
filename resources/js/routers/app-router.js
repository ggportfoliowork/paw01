import Vue from 'vue';
import VueRouter from 'vue-router'

import App from '../scaffold/App'
import DashboardPage from '../pages/App/Dashboard/DashboardPage'
import EditProfilePage from '../pages/App/Profile/EditProfilePage'

import PetsRouter from '../pages/App/Pets/PetsRouter'
import PetInfoPage from '../pages/App/Pets/PetInfoPage'
import EditPetsPage from '../pages/App/Pets/EditPetsPage'
import ViewPetsPage from '../pages/App/Pets/ViewPetsPage'
import IndexPetsPage from '../pages/App/Pets/IndexPetsPage'
import CreatePetsPage from '../pages/App/Pets/CreatePetsPage'

import TracksRouter from '../pages/App/Tracks/TracksRouter'
import TrackInfoPage from '../pages/App/Tracks/TrackInfoPage'
import EditTracksPage from '../pages/App/Tracks/EditTrackPage'
import ViewTracksPage from '../pages/App/Tracks/ViewTracksPage'
import IndexTracksPage from '../pages/App/Tracks/IndexTracksPage'
import CreateTracksPage from '../pages/App/Tracks/CreateTracksPage'

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
          name: 'Dashboard',
          component: DashboardPage,
          meta: {
            breadcrumb: ''
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
        },
        {
          path: 'tracks',
          name: 'tracks.index',
          component: TracksRouter,
          meta: {
            breadcrumb: 'My Tracks'
          },
          children: [
            {
              path: '',
              component: IndexTracksPage,
              name: 'tracks.index',
              meta: {
                breadcrumb: ''
              }
            },
            {
              path: '',
              component: CreateTracksPage,
              name: 'tracks.create',
              meta: {
                breadcrumb: ''
              }
            },
            {
              path: ':trackId',
              name: 'tracks.view',
              component: ViewTracksPage,
              meta: {
                breadcrumb: 'View Track'
              },
              children: [
                {
                  path: '',
                  name: 'tracks.view',
                  component: TrackInfoPage,
                  meta: {
                    breadcrumb: ''
                  },
                },
                {
                  path: 'edit',
                  name: 'tracks.edit',
                  component: EditTracksPage,
                  meta: {
                    breadcrumb: 'Edit Track'
                  }
                }
              ]
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
