import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'resources', path: '', component: () => import('pages/ResourcePage.vue') },
      { name: 'stations', path: 'stations', component: () => import('pages/StationPage.vue') },
      { name: 'people', path: 'people', component: () => import('pages/PeoplePage.vue') },
      { name: 'future', path: 'future', component: () => import('pages/FuturePage.vue') },
      { name: 'map', path: 'map', component: () => import('pages/MapPage.vue') },
    ],
  },
  {
    path: '/tests',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'collect-belarus', path: 'collect-belarus', component: () => import('pages/CollectBelarusPage.vue') },
      { name: 'find-the-station', path: 'find-the-station', component: () => import('pages/FindTheStationPage.vue') },
      {
        name: 'guess-the-station',
        path: 'guess-the-station',
        component: () => import('pages/GuessTheStationPage.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
