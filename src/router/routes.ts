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
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
