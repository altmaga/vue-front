<template>
  <div>
    <ul class="postList">
      <li v-for="item of postCollection" :key="item._id">
        <ul class="flexBox flexCenter spaceBetween">
          <li>{{item.headline}}</li>
          <li>
            <router-link :to="'/post/'+ item._id" class="button"><i class="fas fa-link"></i></router-link>
            <router-link :to="'/delete/post/'+ item._id" class="button"><i class="fas fa-trash"></i></router-link>
            <router-link :to="'/update/post/'+ item._id" class="button"><i class="fas fa-edit"></i></router-link>
          </li>
        </ul>
      </li>
    </ul>
    <router-link :to="'/add/post/'" class="button">ADD</router-link>
  </div>
</template>

<script>
/* import mapActions from 'vuex' */
  export default {
    name: "ListPost",
    components: {},

    // Bind parent component data with properties
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