/* 
Imports and config
*/
    // Vue
    import Vuex from "vuex";
    import Vue from "vue";
    import createPersistedState from "vuex-persistedstate";

    // Inner
    import auth from "./modules/auth";

    // Set up Vuex
    Vue.use(Vuex);
//



/* 
Export store
*/
    export default new Vuex.Store({
        modules: {
            auth,
        },
        plugins: [
            createPersistedState()
        ]
    });
//