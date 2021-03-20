<template>
  <main>
    <p>Login</p>
    <FormLogin/>
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
    created(){},
    mounted(){},
    destroyed(){}
  };
</script>