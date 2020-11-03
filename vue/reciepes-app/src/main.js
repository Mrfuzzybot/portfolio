import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { truncate } from '@/filters/truncate'

Vue.filter('truncate', truncate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
