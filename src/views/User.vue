<template>
  <h1>User</h1>
</template>

<script>
/* import mapActions from 'vuex' */
  export default {
    name: "User",
    components: {},
    methods:{},

    data(){
      return {}
    },
    created(){
      this.$store.subscribe((mutations,/*  state */) => {
        // Check mutation*/
        if( mutations.type === "USER" ){
          
            // Redirect user
            console.log(mutations.payload.data)
        }
      })
    },
    mounted(){},
    destroyed(){}
  };
</script>