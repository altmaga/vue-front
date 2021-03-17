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
                requireAuth: true
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
        // Check route meta
        if (to.meta.requireAuth){
            // Fetch api/auth/login
            fetch( 'http://localhost:8769/auth/me', {
                method: "GET",
                credentials: "include"
            })
            .then( response => {
                // Check API response: redirect to '/' if response not OK
                return !response.ok
                ? next({ name: 'Home', query: { redirect: to.fullPath } })
                : response.json(response)
            })
            .then( apiResponse => {
                // Commit store change
                store.dispatch('setUser', apiResponse.data)

                // Display protected vue
                return next();
            })
            .catch( () => next({ name: 'Home', query: { redirect: to.fullPath } }))
            
        }
        else{ return next() }
    })
//

/* 
Export Router
*/
    export default router
//