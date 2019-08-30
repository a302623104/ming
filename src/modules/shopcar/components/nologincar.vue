<template>
    <div class="nologincar">
      <div class="gologin">
        登录后可同步账户购物车中的物品
        <a href="http://localhost:8080/login.html">登录</a>
      </div>
      <div class="emptycar">
        <img src="https://img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png" alt="">
        登录后可同步购物车中商品
      </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
.nologincar{
  width: 100%;
  .gologin{
    width: 100%;
    background-color: #fff;
    text-align: center;
    font-size: 14px;
    position: relative;
    padding: 15px 0;
    color: #333;
    height: 60px;
    a{
      display: inline-block;
      margin-left: 10px;
      padding: 0 21px;
      height: 30px;
      border-radius: 4px;
      line-height: 30px;
      text-align: center;
      color: #fff;
      background-color: #f2270c;
      outline: 0;
      border: 0;
    }
  }
  .emptycar{
    text-align: center;
    padding: 50px 0;
    font-size: 16px;
    color: #333;
    img{
      display: block;
      margin: 0 auto;
      width: 90px;
      margin-bottom: 10px;
    }
  }
}
</style>
