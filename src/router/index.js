/* 
Imports and config
*/
    // Vue
    import Vue from 'vue';
    import VueRouter from 'vue-router';
    Vue.use(VueRouter)

    // Inner
    import store from '../store';
    console.log(store)
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
            path: '/add/post',
            name: 'AddPost',
            component: () => import('../views/AddPost.vue')
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
        console.log((to, from, next))
        
        if (to.matched.some((record) => record.meta.requiresAuth)) {
            console.log('requiresAuth: is not Authenticated', store.getters.isAuthenticated)
            if(store.getters.isAuthenticated === false){
                // next({ path: '/add/post' });
                next();
                return;
            }

            /* if (store.getters.isAuthenticated === false) {
                console.log('requiresAuth: is not Authenticated', store.getters.isAuthenticated)
                next({ name: 'Login' });
                return;
            }
            else{
                console.log('requiresAuth: is Authenticated', store.getters.isAuthenticated)
                
                next();
                return;
            } */
        }
    });
//

/* 
Export Router
*/
    export default router
//