import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import SettingsPage from '@/pages/SettingsPage.vue';
import RegistrationPage from '@/pages/RegistrationPage.vue';
import SignInPage from '@/pages/SignInPage.vue';
import CreatePostPage from '@/pages/CreatePostPage.vue';
import EventsPage from '@/pages/EventsPage.vue';
import TermsOfUsePage from '@/pages/TermsOfUsePage.vue';
import APIErrorPage from '@/pages/APIErrorPage.vue';
import TechnicalWorksPage from '@/pages/TechnicalWorksPage.vue';
 
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsPage
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationPage
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignInPage
  },
  {
    path: '/createPost',
    name: 'createPost',
    component: CreatePostPage
  },
  {
    path: '/events',
    name: 'events',
    component: EventsPage
  },
  {
    path: '/docs/termsOfUse',
    name: 'termsOfUse',
    component: TermsOfUsePage
  },
  {
    path: '/404',
    name: 'errorPage',
    component: APIErrorPage
  },
  {
    path: '/techWorks',
    name: 'techWorksPage',
    component: TechnicalWorksPage
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  }
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
