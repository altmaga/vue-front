/* 
Imports
*/
  // Vue
  import Vue from 'vue';
  import Vuex from 'vuex';

  // Inner
  import App from './App.vue';
  import store from './store/index';
  import router from "./router";
//


/* 
Set configuration
*/
  Vue.config.productionTip = false;
  Vue.use(Vuex);
//


/* 
Create app
*/
  new Vue({
    store,
    router,
    render: h => h(App),
  })
  .$mount('#app');
//