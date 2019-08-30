<template>
    <div class="recommend">
      <div class="title">
        <img src="https://img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png" alt="">
      </div>
      <el-row>
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
        name: "Recommend.vue"
    }
</script>

<style lang="scss" scoped>
  .recommend{
    width: 100%;
    padding: 10px;
    margin-bottom: 50px;
    .title{
      width: 100%;
      img{
        width: 100%;
      }
    }
    .recommendlist{
      padding-bottom: 30px;
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
