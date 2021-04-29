<template>
  <ul class="commentList">
    <li v-for="item of commentCollection" :key="item._id">
      <ul class="flexBox flexCenter spaceBetween">
        <li>{{item.content}}</li>
      </ul>
    </li>
  </ul>
</template>

<script>
/* import mapActions from 'vuex' */
  export default {
    name: "ListComment",
    components: {},

    // Bind parent component data with properties
    props: ['commentCollection'],

    data(){
      return {}
    },

    methods:{},

    created(){},
    mounted(){},
    destroyed(){}
  };
</script>