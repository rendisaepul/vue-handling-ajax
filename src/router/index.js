import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Ajax from '@/components/AjaxHandling'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ajax',
      component: Ajax
    }
  ]
})
