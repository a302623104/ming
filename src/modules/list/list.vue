<template>
  <el-container>
    <el-header height="40px">
      <myHeader/>
    </el-header>
    <el-main>
        <listbody/>
    </el-main>
    <myFooter footindex='1'/>
  </el-container>
</template>

<script>
  import myHeader from './header.vue'
  import myFooter from '../footer.vue'
  import listbody from './components/listbody.vue'
    export default {
        name: 'console',
      components:{
        myFooter,
        myHeader,
        listbody
      }
    }
</script>

<style lang="scss">
@import '../../assets/css/style.scss';
.el-container{
  .el-header,.el-main,.el-footer{
    padding: 0;
  }
  .el-header{
    background-color: transparent;
    position: relative;
    z-index: 100;
  }
  .el-main{
    overflow: visible;
  }
}
</style>
