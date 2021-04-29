export default {
  state: {
      // Define states
      commentList: undefined,
      singleComment: undefined,
  },

  getters: {
      // Define getters
      getCommentList: (state) => state.commentList,
      getSingleComment: (state) => state.singleComment,
  },

  mutations: {
      // Define mutations
      COMMENTLIST( state, payload ){ state.commentList = payload.data },
      SINGLECOMMENT( state, payload ){ state.singleComment = payload.data },
  },

  actions: {
      // [CRUD] GET Method to get post list
      fetchCommentList(context){
          fetch( `${process.env.VUE_APP_API_URL}/api/comment`, { method: `GET` }) //=> Fetch API
          .then( response => !response.ok ? console.log(response) : response.json(response)) //=> Check response
          .then( async (apiResponse) => await context.commit(`COMMENTLIST`, { data: apiResponse.data })) //=> Commit changes
          .catch( apiError => console.log(apiError)) //=> Catch error
      },

      //[CRUD] GET Method to get post data from ID
      fetchSingleComment(context, id){
          fetch( `${process.env.VUE_APP_API_URL}/api/comment/${id}`, { method: `GET` }) //=> Fetch API
          .then( response => !response.ok ? console.log(response) : response.json(response)) //=> Check response
          .then( async (apiResponse) => await context.commit(`SINGLECOMMENT`, { data: apiResponse.data })) //=> Commit changes
          .catch( apiError => console.log(apiError)) //=> Catch error
      }
  }
}