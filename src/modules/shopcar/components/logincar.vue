<template>
    <div class="logincar">
      <div class="carlist"  v-if="isnull">
        <div class="area">
          <div class="location">
            <i class="el-icon-location-outline"></i>广州市番禺区
          </div>
          <div class="edit">
            编辑商品
          </div>
        </div>
        <div class="carlistbox">
          <dl>
            <dt>
              <i class="icon_select"></i>
              <i class="icon_shop"></i>
              <span>拾趣旗舰店<i class="icon_arrow"></i></span>
              <div class="more">优惠券</div>
            </dt>
            <dd>
              <div class="item">
                <i class="icon_select"></i>
              </div>
            </dd>
          </dl>
        </div>
      </div>

      <div class="emptycar" v-else>
        <img src="https://img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png" alt="">
        购物车空空如也，去逛逛吧~
      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          isnull: true,
          carlist:[
            {
              'shop':'',
              'shoplist':[
                {
                  'url':'',
                  'img':'',
                  'style':'',
                  'server':'',
                  'price':'',
                  'number':''
                }
              ]
            },

          ]
        }
      }
    }
</script>

<style scoped lang="scss">
.logincar{
  .carlist{
    .area{
      background-color: #fff;
      padding:0 15px;
      height: 45px;
      border-bottom: 1px solid #e5e5e5;
      .location{
        float: left;
        font-size: 14px;
        line-height: 45px;
      }
      .edit{
        float: right;
        line-height: 45px;
        font-size: 14px;
      }
    }
    .carlistbox{
      width: 100%;
      max-width: 1280px;
      dl{
        background-color: #fff;
        margin-bottom: 30px;
        dt{
          width: 100%;
          position: relative;
          height: 50px;
          padding: 5px 10px 5px 42px;
          vertical-align: top;
          .icon_shop{
            display: inline-block;
            vertical-align:top;
            margin-top: 10px;
            margin-right: 5px;
            background-image: url(https://wq.360buyimg.com/wxsq_trade/cart_vue/main/images/sprite.img_default_437_75a2ce3f.png);
            background-size: 116px 110px;
            background-position: -60px -48px;
            width: 20px;
            height: 20px;
          }
          span{
            display: inline-block;
            vertical-align:top;
            margin-top: 10px;
            font-size: 16px;
            font-weight: 700;
            .icon_arrow{
              width: 0;
              height: 0;
              display: inline-block;
              vertical-align:top;
              border: 8px solid transparent;
              border-left-color: #ccc;
              position: relative;
              margin-top: 2px;
              margin-left: 5px;
              &:after{
                content: '';
                display: block;
                position: absolute;
                width: 0;
                height: 0;
                border: 8px solid transparent;
                border-left-color: #fff;
                top: -8px;
                left: -10px;
              }
            }
          }
          .more{
            float: right;
            color: red;
            font-size: 12px;
            margin-top: 10px;
          }
        }
        dd{
          .item{
            z-index: 1;
            position: relative;
            min-height: 100px;
            padding: 0 0 20px 150px;
            background: #fff;
          }
        }
      }
      .select{
        .icon_select{
          &:after{
            background-position: -80px -40px;
          }
        }
      }
    }

    .icon_select{
      position: absolute;
      top: 0;
      left: 0;
      width: 42px;
      height: 100%;
      z-index: 1;
      display: block;
      &:after{
        position: absolute;
        top: 50%;
        left: 50%;
        content: "";
        margin-left: -10px;
        background-image: url(https://wq.360buyimg.com/wxsq_trade/cart_vue/main/images/sprite.img_default_437_75a2ce3f.png);
        background-position: 0 -48px;
        background-size: 116px 110px;
        width: 20px;
        height: 20px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        background-color: #fff;
      }
    }
  }
  .emptycar {
    text-align: center;
    padding: 50px 0;
    font-size: 16px;
    color: #333;
    img {
      display: block;
      width: 90px;
      margin: 0 auto 10px;
    }
  }
}
</style>
