<template>
    <el-row class="footer" type="flex" justify="space-between">
      <el-col :span="4">
        <a href="http://localhost:8080/" class="link" @click="changpage()"><img src="../../../assets/homepage.png" alt="">首页</a>
      </el-col>
      <el-col :span="4">
        <a href="http://localhost:8080/console.html" class="active link" @click="changpage()"><img src="../../../assets/fenlei.png" alt="">分类</a>
      </el-col>
      <el-col :span="4">
        <a href="javascript:void (0)" class="link" @click="changpage()"><img src="../../../assets/pinggou.png" alt="">拼购</a>
      </el-col>
      <el-col :span="4">
        <a href="javascript:void (0)" class="link" @click="changpage()"><img src="../../../assets/shopcar.png" alt="">购物车</a>
      </el-col>
      <el-col :span="4">
        <a href="http://localhost:8080/login.html" class="link" @click="changpage()"><img src="../../../assets/admin.png" alt="">我的</a>
      </el-col>
    </el-row>
</template>

<script>
    export default {
        name: 'footer',
    }
</script>

<style lang="scss">
  .footer{
    position: fixed !important;
    bottom: 0;
    width:100%;
    height: 55px;
    background-color: #fff;
    box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.33);
    .link{
      display: inline-block;
      width: 100%;
      text-align: center;
      text-decoration: none;
      color: #000;
      font-size: 12px;
      img{
        height: 100%;
        display: block;
        margin: 3px auto;
      }
    }
    .active{
        color: red !important;
    }
  }
</style>
