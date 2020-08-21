import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fanger from '@/components/index.js'
import 'lib-flexible'

Vue.use(fanger)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
