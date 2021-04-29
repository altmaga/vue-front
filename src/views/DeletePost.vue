<template>
  <main v-if="post">
    <h1>{{post.headline}}</h1>
    <p>{{post.body}}</p>
    <p><i>© Author : </i>{{post.author.givenName}} {{post.author.familyName}}</p>
    <button type="submit" @click="click($event)">DELETE</button>
  </main>
</template>

<script>
  export default {
    name: "DeletePost",
    components: {
    },
    data(){
      return {
        post: undefined
      }
    },
    methods:{
      click(event){
        console.log(this.$route.params.id);
        event.preventDefault();
        this.$store.dispatch('fetchDeletePost', this.$route.params.id);
      }
    },

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