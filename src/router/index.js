import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FistComponent from '../components/FistComponent'
import ListComponent from '../components/ListComponent'
import AddComponent from '../components/AddComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/first',
      name: 'FistComponent',
      component: FistComponent
    },
    {
      path: '/todolist',
      name: 'ListComponent',
      component: ListComponent
    },
    {
      path: '/addComp',
      name: 'AddComponent',
      component: AddComponent
    }
  ]
})
