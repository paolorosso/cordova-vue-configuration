import Vue from 'vue'
import Router from 'vue-router'

import main from '@/views/Main'
import page1 from "@/views/Page1"
import page2 from "@/views/Page2"

Vue.use(Router)


export default new Router({

  mode: window.cordova ? '' : 'history',

  routes: [
    {
      path: '/',
      component: main,
      children: [
        { path: '/page1', component: page1 },
        { path: '/page2', component: page2 }
      ]
    },

  ]
})