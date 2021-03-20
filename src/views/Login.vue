<template>
  <main>
    <FormLogin />
  </main>
</template>

<script>
  import FormLogin from '../components/FormLogin'
  export default {
    name: "Login",
    components: {
      FormLogin
    },
    data(){
      return {}
    },
    methods:{},

    created(){
      // Subscribe to store mutations
      this.$store.subscribe((mutations) => {
        // Redirect user when connected
        if( mutations.type === "USER" ){ this.$router.push('/').catch( () => {} ) }
      })
    },
    mounted(){},
    destroyed(){}
  };
</script>