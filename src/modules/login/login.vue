<template>
    <div v-if="user">
      <admin/>
      <myFoot/>
    </div>
    <div v-else>
      <nologin/>
    </div>
</template>

<script>
  import nologin from './components/no-login.vue'
  import admin from './components/admin.vue'
  import myFoot from './footer.vue'
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
</style>
