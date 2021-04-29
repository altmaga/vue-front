<template>
  <main v-if="post">
      <form v-on:submit="getFormSubmit($event)">
      <label for="title">Titre</label>
      <input type="text" name="title" required minlength="5" :value="post.headline">

      <label for="content">Contenu</label>
      <textarea name="content" required minlength="5" :value="post.body"></textarea>
      <button type="submit">Modifier</button>
  </form>
  </main>
</template>

<script>
  export default {
    name: "UpdatePost",
    components: {
    },
    data(){
      return {
        post: undefined
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
    methods:{
      getFormSubmit(event){
        console.log(this.$route.params.id);
        event.preventDefault();
        this.$store.dispatch('fetchUpdatePost', { headline: this.post.headline, body: this.post.body }, this.$route.params.id)
      }
    },
    mounted(){},
    destroyed(){}
  };
</script>