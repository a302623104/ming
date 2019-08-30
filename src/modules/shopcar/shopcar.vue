<template>
  <div class="shopcar">
    <shophead title="购物车"/>
    <div v-if="user">
      <logincar/>
    </div>
    <div v-else>
      <nologincar/>
    </div>
    <recommend title="可能你还想要"/>
  </div>
</template>

<script>
import shophead from '../login/components/header.vue'
import nologincar from './components/nologincar.vue'
import logincar from './components/logincar.vue'
import recommend from './components/recommend.vue'
  export default {
    components:{
      shophead,
      nologincar,
      logincar,
      recommend
    },
    data(){
      return{
        user:''
      }
    },
    created() {
      if(sessionStorage.getItem('user') !== ''){
        this.user = sessionStorage.getItem('user')
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/css/style.scss";
  .shopcar{
    background-color: #f7f7f7;
  }
</style>
