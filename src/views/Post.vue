<template>
  <main v-if="post">
    <h1>{{post.headline}}</h1>
    <p>{{post.body}}</p>
    <p><i>© Author : </i>{{post.author.givenName}} {{post.author.familyName}}</p>
    <ul class="commentList">
      <h2>Commentaire(s)</h2>
      <li v-for="item of post.comments" :key="item._id">
        <div class="flexBox flexCenter spaceBetween">
          <p>{{item.creationDate}}</p>
          <p>{{item.content}}</p>
          <p>{{item._id}}</p>
        </div>
      </li>
  </ul>
  </main>
</template>

<script>
  export default {
    name: "Post",
    components: {
    },
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