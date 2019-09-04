<template>
    <div class="mainContent">
      <banner/>
      <list/>
      <seckill/>
      <xiaoyuan/>
      <recommend/>
    </div>
</template>

<script>
import banner from './components/banner.vue'
import list from './components/list.vue'
import seckill from './components/sec_kill.vue'
import xiaoyuan from './components/xiaoyuan.vue'
import recommend from './components/Recommend.vue'
    export default {
      components: {
        banner,
        list,
        seckill,
        xiaoyuan,
        recommend
      }
    }
</script>

<style lang="scss" scoped>
.mainContent{
  background-color: rgb(246, 246, 246);
}
</style>
