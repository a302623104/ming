<template>
    <div v-if="user">
      <admin/>
      <myFoot footindex="4"/>
    </div>
    <div v-else>
      <transition name="fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
</template>

<script>
  import nologin from './components/no-login.vue'
  import admin from './components/admin.vue'
  import myFoot from '../footer.vue'
  export default {
     name: "login.vue",
      components:{
        nologin,
        admin,
        myFoot,
      },
    computed:{
       user(){
         return this.$store.state.user
       }
    },
  }
</script>

<style lang="scss">
  @import "../../assets/css/style.scss";
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
