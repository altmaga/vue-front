<template>
  <main>
    <h1>Login page</h1>
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
      this.$store.subscribe((mutations) => {
        // Check mutations
        if( mutations.type === "USER" ){
            // Redirect user when connected
            this.$router.push('/').catch(()=>{})
        }
      })
    },
    mounted(){},
    destroyed(){}
  };
</script>