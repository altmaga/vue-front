export default {
    state: {
        isAuth: false,
        user: undefined
    },
    
    getters: {
        isAuthenticated: (state) => !!state.user,
        getUser: (state) => state.user 
    },

    mutations: {
        USER( state, payload ){ state.user = payload.data },
    },

    actions: {
        async setUser(context, data){
            // Commit changes
            await context.commit('USER', { data })
        },

        checkUser(context){
            // Fetch api/auth/login
            fetch( 'http://localhost:8769/auth/me', {
                method: "GET",
                credentials: "include"
            })
            .then(response => {
                return !response.ok
                ? console.log(response)
                : response.json(response)
            })
            .then(  async apiResponse => {
                // Commit changes
                await context.commit('USER', { data: apiResponse })
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
            .then( async apiResponse => {
                // Commit changes
                await context.commit('USER', { data: apiResponse.data })
            })
            .catch( apiError => console.log(apiError))
        }
    }
}