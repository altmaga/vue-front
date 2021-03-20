<template>
  <main v-if="post">
    <h1>{{post.headline}}</h1>
    <p>{{post.body}}</p>
  </main>
</template>

<script>
  export default {
    name: "Post",
    components: {},
    data(){
      return {
        post: undefined
      }
    },
    methods:{},
    
    created(){
      // Get post data from route param
      this.$store.dispatch('fetchSinglePost', this.$route.params.id);

      // Subscribe to store mutations
      this.$store.subscribe((mutations) => {
        // Set post data
        if( mutations.type === "SINGLEPOST" ){ this.post = mutations.payload.data }
      })
    },
    mounted(){},
    destroyed(){}
  };
</script>