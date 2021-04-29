export default {
    state: {
        // Define states
        postList: undefined,
        singlePost: undefined,
        postAdded: false,
        postUpdated: false
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
        POSTADDED( state, payload ){ state.postAdded = payload.data },
    },

    actions: {
        // [CRUD] GET Method to get post list
        fetchPostList(context){
            fetch( `${process.env.VUE_APP_API_URL}/api/post`, { method: `GET` }) //=> Fetch API
            .then( response => !response.ok ? console.log(response) : response.json(response)) //=> Check response
            .then( async (apiResponse) => await context.commit(`POSTLIST`, { data: apiResponse.data })) //=> Commit changes
            .catch( apiError => console.log(apiError)) //=> Catch error
        },

        // [CRUD] POST Method to add post
        fetchAddPost(context, data){
            fetch( `${process.env.VUE_APP_API_URL}/api/post`, {
                method: "POST",
                body: JSON.stringify({ headline: data.headline, body: data.body }),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include"
            }) //=> Fetch API
            .then( response => !response.ok ? console.log(response) : response.json(response)) //=> Check response
            .then( async (apiResponse) => await context.commit(`POSTADDED`, { data: apiResponse.data })) //=> Commit changes
            .catch( apiError => console.log(apiError)) //=> Catch error
        },

        // [CRUD] PUT Method to add post
        fetchUpdatePost(context, data, id){
            fetch( `${process.env.VUE_APP_API_URL}/api/post/${id}`, {
                method: "PUT",
                body: JSON.stringify({ headline: data.headline, body: data.body }),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include"
            }) //=> Fetch API
            .then( response => !response.ok ? console.log(response) : response.json(response)) //=> Check response
            .then( async (apiResponse) => await context.commit(`SINGLEPOST`, { data: apiResponse.data })) //=> Commit changes
            .catch( apiError => console.log(apiError)) //=> Catch error
        },

        //[CRUD] GET Method to get post data from ID
        fetchSinglePost(context, id){
            fetch( `${process.env.VUE_APP_API_URL}/api/post/${id}`, { method: `GET` }) //=> Fetch API
            .then( response => !response.ok ? console.log(response) : response.json(response)) //=> Check response
            .then( async (apiResponse) => await context.commit(`SINGLEPOST`, { data: apiResponse.data })) //=> Commit changes
            .catch( apiError => console.log(apiError)) //=> Catch error
        },

        //[CRUD] Delete Method to get post data from ID
        fetchDeletePost(context, id){
            fetch( `${process.env.VUE_APP_API_URL}/api/post/${id}`, { method: `DELETE` }) //=> Fetch API
            .then( response => !response.ok ? console.log(response) : response.json(response)) //=> Check response
            .then( async (apiResponse) => await context.commit(`SINGLEPOST`, { data: apiResponse.data })) //=> Commit changes
            .catch( apiError => console.log(apiError)) //=> Catch error
        }
    }
}