import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/gnyq',
    component:()=>import('../views/index.vue'),
    children:[
      {
        path: '/gnyq',
        name: 'gnyq',
        meta:{
          til:"国内疫情"
        },
        component: () => import('../components/gnyq')
      },
      {
        path: '/gwyq',
        name: 'gwyq',
        meta:{
          til:"国外疫情"
        },
        component: () => import('../components/gwyq')
      },
      {
        path: '/hotsearch',
        name: 'hotsearch',
        meta:{
          til:"全民热搜"
        },
        component: () => import('../components/hotsearch')
      },
      {
        path: '/news',
        name: 'news',
        meta:{
          til:"实时新闻"
        },
        component: () => import('../components/news')
      },
      {
        path:'*',
        redirect:'/gnyq'
      }
    ]
  }]
//创建router对路由进行管理，它是由构造函数new vueRouter()创建，接受routes参数
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
