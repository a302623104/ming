<template>
  <div class="recommend">
    <div class="title">
      <p>{{title}}</p>
    </div>
    <el-row class="recommend_bg">
      <el-col :span="12" class="recommendlist">
        <img src="https://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/71511/33/7775/148580/5d5bb3ffE8d8b4413/a1ea6a8f689d44ff.jpg!q70.dpg.webp" alt="">
        <div class="info">
          <p class="titletext">松下（Panasonic）蒸烤箱一体机家用台式蒸汽烤箱 双层大容量多功能智能电烤箱NU-SC300B</p>
          <p class="price">¥ <span class="pricenumber">3999</span></p>
        </div>
        <div class="like">看相似</div>
      </el-col>
      <el-col :span="12" class="recommendlist">
        <img src="https://img12.360buyimg.com/mobilecms/s372x372_jfs/t27460/317/1078051935/121917/2922a15d/5bc0552aNaf99683f.jpg!q70.dpg.webp" alt="">
        <div class="info">
          <p class="titletext">三星（SAMSUNG）512GB SSD固态硬盘 SATA3.0接口 860 PRO（MZ-76P512B</p>
          <p class="price">¥ <span class="pricenumber">1099</span></p>
        </div>
        <div class="like">看相似</div>
      </el-col>
      <el-col :span="12" class="recommendlist">
        <img src="https://img12.360buyimg.com/mobilecms/s372x372_jfs/t27460/317/1078051935/121917/2922a15d/5bc0552aNaf99683f.jpg!q70.dpg.webp" alt="">
        <div class="info">
          <p class="titletext">三星（SAMSUNG）512GB SSD固态硬盘 SATA3.0接口 860 PRO（MZ-76P512B</p>
          <p class="price">¥ <span class="pricenumber">1099</span></p>
        </div>
        <div class="like">看相似</div>
      </el-col>
      <el-col :span="12" class="recommendlist">
        <img src="https://img12.360buyimg.com/mobilecms/s372x372_jfs/t27460/317/1078051935/121917/2922a15d/5bc0552aNaf99683f.jpg!q70.dpg.webp" alt="">
        <div class="info">
          <p class="titletext">三星（SAMSUNG）512GB SSD固态硬盘 SATA3.0接口 860 PRO（MZ-76P512B</p>
          <p class="price">¥ <span class="pricenumber">1099</span></p>
        </div>
        <div class="like">看相似</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Recommend.vue",
    props:{
      title:{
        type:String
      }
    }
  }
</script>

<style lang="scss" scoped>
  .recommend{
    width: 100%;
    /*padding: 10px;*/
    margin-bottom: 50px;
    background-color: #fff;
    .title{
      width: 100%;
      background-color: #f7f7f7;
      text-align: center;
      font-size: 14px;
      height: 30px;
      color: #999;
      position: relative;
      p{
        position: relative;
        display: inline-block;
        background-color: #f7f7f7;
        width: 100px;
        z-index: 10;
        &:before{
          content: "";
          position: absolute;
          top: 50%;
          margin-top: -2px;
          width: 4px;
          height: 4px;
          background-color: #ccc;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
          left: 0;
        }
        &:after{
          content: "";
          position: absolute;
          top: 50%;
          margin-top: -2px;
          width: 4px;
          height: 4px;
          background-color: #ccc;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
          right: 0;
        }
      }
      &:after{
        content: "";
        transform: scaleY(.5);
        transform-origin: 50% 0;
        position: absolute;
        z-index: 1;
        pointer-events: none;
        background-color: #ccc;
        height: 1px;
        left: 10px;
        right: 10px;
        top: 34%;
      }
    }
    .recommendlist{
      padding: 10px 10px 30px;
      position: relative;
      background-color: #fff;
      border-right: 2px solid transparent;
      img{
        width: 100%;
      }
      .info{
        .titletext{
          height: 31px;
          font-size: 13px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-break: break-word;
          color: #232326;
          margin-top: 5px;
          line-height: 16px;
          margin-bottom: 3px;
          padding: 0 4px;
        }
        .price{
          color: red;
          margin-top: 10px;
        }
      }
      .like{
        position: absolute;
        bottom: 27px;
        right: 8px;
        font-size: 12px;
        padding: 5px;
        border: 1px solid #bfbfbf;
        color: #686868;
      }
    }
  }
</style>
