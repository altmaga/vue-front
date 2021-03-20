<template>
  <header class="flexBox flexColumn">
      <nav class="flexBox flexCenter">
          <h1>VueJS Boiler plate by <a href="https://dwsapp.io" target="_blank">dwsapp.io</a></h1>

          <button v-if="isAuth" type="button" v-on:click="logoutUser"><i class="fas fa-sign-out-alt"></i></button>
      </nav>
  </header>
</template>

<script>
    export default {
        name: 'HeaderApp',
        components: {},
        data(){
            return {
                isAuth: this.$store.getters.isAuthenticated
            }
        },
        methods: {
            logoutUser(){
                this.$store.dispatch('logoutUser');
            }
        },

        created(){
            this.$store.subscribe((mutations) => {
                // Check mutations
                if( mutations.type === "USER" ){
                    // Set Auth navigation
                    this.isAuth = this.$store.getters.isAuthenticated;
                    
                    // Redirect user when connected
                    this.$router.push('/login').catch(()=>{})
                }
            })
        },
        mounted(){ }
    }
</script>
