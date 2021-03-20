/* 
Imports and config
*/
    // Vue
    import Vue from 'vue';
    import VueRouter from 'vue-router';
    Vue.use(VueRouter);

    // Inner
    import store from '../store';
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
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '*',
            name: 'NotFound',
            component: () => import('../views/NotFound.vue')
        }
    ]

    // Create router
    const router = new VueRouter({
        mode: 'history',
        routes
    })
//


/* 
Set basic AuthGuard
*/
    router.beforeEach((to, from, next) => {
        // Set auth values
        const authenticatedUser = store.getters.isAuthenticated;
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

        // Check for protected route
        if (requiresAuth && !authenticatedUser) next({ path: '/login' })
        else next();
    });
//


/* 
Export Router
*/
    export default router
//