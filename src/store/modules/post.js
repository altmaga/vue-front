export default {
    state: {
        postList: undefined
    },
    
    getters: {
        getPostList: (state) => state.postList 
    },

    mutations: {
        POSTLIST( state, payload ){ state.postList = payload.data },
    },

    actions: {
        fetchPostList(context){
            // Fetch api/auth/login
            fetch( `${process.env.VUE_APP_API_URL}/v1/post`, {
                method: "GET"
            })
            .then( response => {
                return !response.ok
                ? console.log(response)
                : response.json(response)
            })
            .then( async (apiResponse) => {
                // Commit changes
                await context.commit('POSTLIST', { data: apiResponse.data })
            })
            .catch( apiError => console.log(apiError))
        }
    }
}