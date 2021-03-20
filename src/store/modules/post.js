export default {
    state: {
        postList: undefined,
        singlePost: undefined,
    },
    
    getters: {
        getPostList: (state) => state.postList,
        getSinglePost: (state) => state.singlePost,
    },

    mutations: {
        POSTLIST( state, payload ){ state.postList = payload.data },
        SINGLEPOST( state, payload ){ state.singlePost = payload.data },
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
        },

        fetchSinglePost(context, id){
            // Fetch api/auth/login
            fetch( `${process.env.VUE_APP_API_URL}/v1/post/${id}`, {
                method: "GET"
            })
            .then( response => {
                return !response.ok
                ? console.log(response)
                : response.json(response)
            })
            .then( async (apiResponse) => {
                // Commit changes
                await context.commit('SINGLEPOST', { data: apiResponse.data })
            })
            .catch( apiError => console.log(apiError))
        }
    }
}