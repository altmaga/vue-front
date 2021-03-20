export default {
    state: {
        // Define states
        postList: undefined,
        singlePost: undefined,
    },
    
    getters: {
        // Define getters
        getPostList: (state) => state.postList,
        getSinglePost: (state) => state.singlePost,
    },

    mutations: {
        // Define mutations
        POSTLIST( state, payload ){ state.postList = payload.data },
        SINGLEPOST( state, payload ){ state.singlePost = payload.data },
    },

    actions: {
        // [CRUD] GET Method to get post list
        fetchPostList(context){
            fetch( `${process.env.VUE_APP_API_URL}/v1/post`, { method: `GET` }) //=> Fetch API
            .then( response => !response.ok ? console.log(response) : response.json(response)) //=> Check response
            .then( async (apiResponse) => await context.commit(`POSTLIST`, { data: apiResponse.data })) //=> Commit changes
            .catch( apiError => console.log(apiError)) //=> Catch error
        },

        //[CRUD] GET Method to get post data from ID
        fetchSinglePost(context, id){
            fetch( `${process.env.VUE_APP_API_URL}/v1/post/${id}`, { method: `GET` }) //=> Fetch API
            .then( response => !response.ok ? console.log(response) : response.json(response)) //=> Check response
            .then( async (apiResponse) => await context.commit(`SINGLEPOST`, { data: apiResponse.data })) //=> Commit changes
            .catch( apiError => console.log(apiError)) //=> Catch error
        }
    }
}