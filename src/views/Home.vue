<template>
  <main>
    <ListPost :postCollection="postCollection" />
  </main>
</template>

<script>
  import ListPost from '../components/ListPost';

  export default {
    name: "Home",
    components: {
      ListPost
    },
    data(){
      return {
        postCollection: undefined
      }
    },
    methods:{},

    created(){
      // Fetch post from the API
      this.$store.dispatch('fetchPostList');

      // Subscribe to store mutations
      this.$store.subscribe((mutations) => {
        // Update post list
        if( mutations.type === "POSTLIST" ){ this.postCollection = mutations.payload.data }
      })
    },
    mounted(){},
    destroyed(){}
  };
</script>