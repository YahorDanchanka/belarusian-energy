import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'resources', path: '', component: () => import('pages/ResourcePage.vue') },
      { name: 'stations', path: 'stations', component: () => import('pages/StationPage.vue') },
    ],
  },
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
