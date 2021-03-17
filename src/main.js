import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

import router from "./router";
import store from './store/index'

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
