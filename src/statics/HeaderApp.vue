<template>
  <header class="flexBox flexColumn">
      <nav class="flexBox flexCenter">
          <h1>VueJS Boilerplate by <a href="https://dwsapp.io" target="_blank">dwsapp.io</a> <span v-if="subTitle">{{subTitle}}</span></h1>

          <router-link to="/" class="button"><i class="fas fa-list"></i></router-link>
          <button v-if="isAuth" type="button" class="button" v-on:click="logoutUser"><i class="fas fa-sign-out-alt"></i></button>
      </nav>
  </header>
</template>

<script>
    export default {
        name: 'HeaderApp',
        components: {},
        data(){
            return {
                isAuth: this.$store.getters.isAuthenticated,
                subTitle: undefined
            }
        },
        methods: {
            // Method to logout user with store action
            logoutUser(){ this.$store.dispatch('logoutUser') }
        },

        watch:{
            // Watch route value changes to display the header sub-title
            $route(to, from){
                // Switch route name
                switch(to.name){
                    case 'NotFound':
                        this.subTitle = 'Page introuvable'
                    break;

                    case 'Home':
                        this.subTitle = `Page d'accueil : privée`
                    break;

                    case 'Login':
                        this.subTitle = `Page login : public`
                    break;

                    case 'Post':
                        this.subTitle = `Page Article : public`
                    break;

                    default:
                        this.subTitle = undefined
                    break;
                }
            }
        },

        created(){
            // Subscribe to store mutations
            this.$store.subscribe((mutations) => {
                // Check mutations
                if( mutations.type === "USER" ){
                    // Set Auth navigation
                    this.isAuth = this.$store.getters.isAuthenticated;
                    
                    // Redirect user when connected
                    this.$router.push('/login').catch( () => {} )
                }
            })
        },
        mounted(){ }
    }
</script>
