<template>
  <div id="app">
    <HeaderApp/>
    <main>
      <router-view :key="$route.fullPath"></router-view>
    </main>

    <FooterApp/>
  </div>
</template>

<script>
  import HeaderApp from './statics/HeaderApp'
  import FooterApp from './statics/FooterApp'

  export default {
    name: 'App',
    components: {
      HeaderApp,
      FooterApp
    },
    data(){
      return{
        user: undefined
      }
    },
    created(){

      this.$store.subscribe((mutations,/*  state */) => {
        // Check mutation*/
        if( mutations.type === "USER" ){
            // Update display
            this.user = mutations.payload.data;
            console.log(this.user)
        }
      })
    }
  }
</script>