<template>
  <form action="" v-on:submit="getFormSubmit($event)">
      <label for="email">Email</label>
      <input type="email" name="email" required minlength="5" v-model="loginEmail">

      <label for="password">Mot de passe</label>
      <input type="password" name="password" required minlength="5" v-model="loginPassword">

      <button type="submit">Login</button>
  </form>
</template>

<script>
/* import mapActions from 'vuex' */
  export default {
    name: "Home",
    components: {},

    data(){
      return {
       loginEmail: 'julien@dwsapp.io',
       loginPassword: 'azertyuiop'
      }
    },

    created(){
      this.$store.subscribe((mutations,/*  state */) => {
        // Check mutation*/
        if( mutations.type === "USER" ){
            // Redirect user
            this.$router.push('/user')
        }
      })
    },

    methods:{
      getFormSubmit(event){
        event.preventDefault();

        this.$store.dispatch('logUser', { email: this.loginEmail, password: this.loginPassword })
      }
    },

    mounted(){
      console.log( this.$store.state.user )
    },

    destroyed(){
    }
  };
</script>