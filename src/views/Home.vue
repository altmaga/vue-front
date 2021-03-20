<template>
  <main>
    <h1>Home page</h1>
  </main>
</template>

<script>
/* import mapActions from 'vuex' */
  export default {
    name: "Home",
    components: {},
    data(){
      return {
        postList: undefined
      }
    },
    methods:{},

    created(){
      this.$store.subscribe((mutations) => {
        // Check mutations
        if( mutations.type === "POSTLIST" ){
            // Update post list
            this.postList = mutations.payload.data;

            console.log(this.postList)
        }
      })
    },
    mounted(){},
    destroyed(){}
  };
</script>