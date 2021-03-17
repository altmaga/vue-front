import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: undefined
    },
    
    getters: {
        getUser(state){ return state.user }
    },

    mutations: {
        USER( state, payload ){ state.user = payload.data }
    },

    actions: {
        checkUser(context){
            // Fetch api/auth/login
            fetch( 'http://localhost:8769/auth/me', {
                method: "GET",
                credentials: "include"
            })
            .then( response => {
                return !response.ok
                ? console.log(response)
                : response.json(response)
            })
            .then( apiResponse => {
                console.log(apiResponse)
                context.commit('USER', { data: apiResponse })
            })
            .catch( apiError => console.log(apiError))
        },

        logUser(context, data){
            // Fetch api/auth/login
            fetch( 'http://localhost:8769/auth/login', {
                method: "POST",
                body: JSON.stringify({ email: data.email, password: data.password }),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include"
            })
            .then( response => {
                return !response.ok
                ? console.log(response)
                : response.json(response)
            })
            .then( apiResponse => {
                console.log(apiResponse)
                context.commit('USER', { data: apiResponse.data })
            })
            .catch( apiError => console.log(apiError))
        }
    },
})