<template>
  <el-container>
    <el-header height="50px">
      <myHeader/>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
      <myFooter/>
  </el-container>
</template>
<script>
  import myHeader from './login/header.vue'
  import myFooter from './login/footer.vue'
    export default {
        name: 'client',
        components: {
          myHeader,
          myFooter
        },
      mounted () {
        window.addEventListener('scroll', this.handleScroll)
      },
      methods: {
        handleScroll () {
          if (window.scrollY > 0) {
            document.getElementsByClassName('header-nav')[0].classList.add('header-nav-fix')
          } else {
            document.getElementsByClassName('header-nav')[0].classList.remove('header-nav-fix')
          }
        }
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
    position: absolute;
    width: 100%;
    z-index: 100;
  }
  .el-main{
    overflow: visible;
  }
}
</style>
