/* 
Imports and config
*/
    import Vue from 'vue';
    import VueRouter from 'vue-router';
import store from '../store';
    Vue.use(VueRouter)
//

/* 
Router definitions
*/
    // Routes collection
    const routes = [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/Home.vue'),
        },
        {
            path: '/user',
            name: 'User',
            component: () => import('../views/User.vue'),
            meta: { 
                requiresAuth: true
            }
        }
    ]

    // Create router
    const router = new VueRouter({
        mode: 'history',
        routes
    })
//

/* 
Set up router Auth Guard
*/
    router.beforeEach((to, from, next) => {
        if (to.matched.some((record) => record.meta.requiresAuth)) {
            if (store.getters.isAuthenticated) {
                next();
                return;
            }

            next("/");
        } 
        else {
            next();
        }
    });
//

/* 
Export Router
*/
    export default router
//