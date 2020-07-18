import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//手动配置elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
router.beforeEach((to,from,next)=>{
  document.title = to.meta.til||"实时数据"
  next()
})
//在router/index.js中配置router后，把router实例注入到vue根实例中
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
