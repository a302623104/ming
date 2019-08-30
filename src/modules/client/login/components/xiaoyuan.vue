<template>
    <div class="xiaoyuan">
      <div class="maintitle">
        <img src="https://m.360buyimg.com/mobilecms/s750x80_jfs/t1/80458/35/2250/24646/5d09044cEb3c6b467/e1af43a6ea0cb5fa.png!q70.jpg.dpg" alt="">
      </div>
      <div class="line">
        <el-row class="border-b">
          <el-col :span="12" class="border-r xylist">
            <div class="title">
              <span class="titletext blue">大一萌新</span>
              <p>踏进大学校门</p>
            </div>
            <div class="limg">
              <img src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t25027/279/1994410610/120964/18425cab/5bc05552N2aa18fd8.jpg!q70.jpg.dpg" alt="">
              <img src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t12391/320/1216333188/171521/651287d/5a1cd70fN72ba28f5.jpg!q70.jpg.dpg" alt="">
            </div>
          </el-col>
          <el-col :span="12" class="xylist">
            <div class="title">
              <span class="titletext blue">海边穿搭</span>
              <p>时尚穿搭风格</p>
            </div>
            <div class="limg">
              <img src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/65272/30/2068/119637/5d064c6eEe49cb7b0/accaf1c844e86651.jpg!q70.jpg.dpg" alt="">
              <img src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/18222/7/12346/118055/5c984db6Ebba21362/7fba15e4a1308ef3.jpg!q70.jpg.dpg" alt="">
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col class="border-r xylist" :span="6">
            <div class="title">
              <p class="titletext">爱屏主义</p>
              <p>视觉盛宴</p>
            </div>
            <div class="simg">
              <img src=https://m.360buyimg.com/mobilecms/s150x150_jfs/t23713/345/1055487386/252149/77642e5a/5b4ee0e7N4e9893ac.jpg!q70.jpg.dpg alt="">
            </div>
          </el-col>
          <el-col class="border-r xylist" :span="6">
            <div class="title">
              <p class="titletext">锻炼腹肌</p>
              <p>肚腩变腹肌</p>
            </div>
            <div class="simg">
              <img src=https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/30400/6/443/60112/5c3c28a5Eeb923796/75db7be6e9a2489a.jpg!q70.jpg.dpg alt="">
            </div>
          </el-col>
          <el-col class="border-r xylist" :span="6">
            <div class="title">
              <p class="titletext">爱动宝宝</p>
              <p>健康玩具</p>
            </div>
            <div class="simg">
              <img src=https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/40639/4/6559/100669/5d0350b3E7e7b92a7/ab29f355c84fbe0d.jpg!q70.jpg.dpg alt="">
            </div>
          </el-col>
          <el-col class="border-r xylist" :span="6">
            <div class="title">
              <p class="titletext">奇妙物语</p>
              <p>解压小玩具</p>
            </div>
            <div class="simg">
              <img src=https://m.360buyimg.com/mobilecms/s150x150_jfs/t14248/311/1009480620/212263/e3c2e3d1/5a4056d6N34171fdb.jpg!q70.jpg.dpg alt="">
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
    export default {
        name: "xiaoyuan.vue"
    }
</script>

<style lang="scss">
    .xiaoyuan{
      width: 100%;
      padding: 10px 10px 10px 10px;
      .maintitle{
        img{
          width: 100%;
        }
      }
      .border-b{
        border-bottom: 1px solid #f5f5f5;
      }
      .line{
        .xylist{
          background-color: #fff;
          padding-bottom: 10px;
        }
        width: 100%;
        .border-r{
          border-right: 1px solid #f5f5f5;
        }
        .title{
          font-size: 12px;
          padding-left: 10px;
          padding-top: 5px;
          .titletext{
            font-weight: 700;
            font-size: 18px;
          }
          .blue{
            background: linear-gradient(90deg, #45CAFF,#1471FB);
            color: transparent;
            -webkit-background-clip: text;
          }
        }
        .limg{
          margin-top: 10px;
          img{
            width: 34%;
            margin: 0 8%;
          }
        }
        .simg{
          margin-top: 10px;
          img{
            width: 70%;
            display: block;
            margin: 0 auto;
          }
        }
      }
    }
</style>
