<template>
  <div class="block">
    <el-carousel trigger="click" :style="{height:boxHeight + 'px'}" class="banner-top" arrow="never">
      <el-carousel-item v-for="(value , index) in img" :key="index">
        <img :src="value.url" alt="" class="itemimg">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data(){
    return{
      img:[
        {url:'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/60194/5/8041/88373/5d5eed67E1dda3fc1/4422bbc34aa4844a.jpg!cr_1125x549_0_72!q70.jpg.dpg'},
        {url:'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/45822/37/1258/360866/5cefb71fE95298b80/052ef4b9d125778a.jpg!cr_1125x549_0_72!q70.jpg.dpg'},
        {url:'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39882/15/14870/51042/5d5edab2E26c7108d/c20d14b16571084a.jpg!cr_1125x549_0_72!q70.jpg.dpg'},
        {url:'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/53446/33/8365/90165/5d5ea867Eb1bc8918/ca49fa512d0b7a84.jpg!cr_1125x549_0_72!q70.jpg.dpg'},
        {url:'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39244/20/11655/282768/5d2d4acdEf9eeaab7/d7b3a83358911b47.jpg!cr_1125x549_0_72!q70.jpg.dpg'}
      ],
      boxHeight:200
    }
  },
  methods:{
    getHeight(){
      let img = document.getElementsByClassName('itemimg');
      if(img[0].offsetHeight === 0){
        img[0].onload = ()=>{
          this.boxHeight = img[0].offsetHeight
        }
      }else{
        this.boxHeight = img[0].offsetHeight
      }
    }
  },
  mounted(){
      window.addEventListener('resize', this.getHeight);
      this.getHeight();
  }
}
</script>

<style lang="scss">
  .block{
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
  }
  .el-carousel__container {
    height: 100% !important;
  }
    .el-carousel__item img {
    width: 100%;
    display: block;
  }
  .banner-top{
    ul{
      li{
        button{
          width:15px;
        }
      }
    }
  }
</style>
