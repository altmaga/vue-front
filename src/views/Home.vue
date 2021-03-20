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
      this.$store.dispatch('fetchPostList');

      this.$store.subscribe((mutations) => {
        // Check mutations
        if( mutations.type === "POSTLIST" ){
            // Update post list
            this.postCollection = mutations.payload.data;
        }
      })
    },
    mounted(){},
    destroyed(){}
  };
</script>