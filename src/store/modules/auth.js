export default {
    state: {
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
            fetch( `${process.env.VUE_APP_API_URL}/auth/me`, {
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
            fetch( `${process.env.VUE_APP_API_URL}/auth/login`, {
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
        },

        logoutUser(context){
            // Fetch api/auth/login
            fetch( `${process.env.VUE_APP_API_URL}/auth/logout`, {
                method: "GET"
            })
            .then( response => {
                return !response.ok
                ? console.log(response)
                : response.json(response)
            })
            .then( async (/* apiResponse */) => {
                // Commit changes
                await context.commit('USER', { data: undefined })
            })
            .catch( apiError => console.log(apiError))
        }
    }
}