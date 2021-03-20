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
      // this.$store.dispatch('fetchPostList')
      /* this.$store.subscribe((mutations) => {
        // Check mutations
        if( mutations.type === "USER" ){
            // Update display
            this.user = mutations.payload.data;
        }
      }) */
    }
  }
</script>