<template>
  <ul class="postList">
      <li v-for="item of postCollection" :key="item._id">
          <ul class="flexBox flexCenter spaceBetween">
              <li>{{item.headline}}</li>
              <li>
                  <router-link :to="'/post/'+ item._id" class="button"><i class="fas fa-link"></i></router-link>
                  <a href="#" class="button"><i class="fas fa-trash-alt"></i></a>
              </li>
          </ul>
      </li>
  </ul>
</template>

<script>
/* import mapActions from 'vuex' */
  export default {
    name: "ListPost",
    components: {},
    props: ['postCollection'],
    data(){
      return {}
    },

    methods:{},

    created(){},
    mounted(){},
    destroyed(){}
  };
</script>