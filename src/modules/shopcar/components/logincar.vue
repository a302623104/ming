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
          <dl v-for="index in carlist">
            <dt>
              <i class="icon_select"></i>
              <i v-bind:class="[{'icon_jd':(index.shop == '京东自营')},{'icon_shop':(index.shop != '京东自营')}]"></i>
                <span>{{index.shop}}<i class="icon_arrow" v-if="index.shop !== '京东自营'"></i></span>
              <div class="more"></div>
            </dt>
            <dd v-for="item in index.shoplist">
              <div class="item">
                <i class="icon_select"></i>
                <img :src="item.img">
                <div class="content">
                  <div class="name">
                    {{item.text}} {{item.style}}
                  </div>
                  <div class="style_server">
                    <div class="style">
                      {{item.style}}
                    </div>
                    <div class="server">
                      {{item.server}}
                    </div>
                  </div>
                  <div class="messge">
                    {{item.message}}
                  </div>
                  <div class="price_line">
                    <div class="price">¥ {{item.price}}</div>
                    <div class="number"></div>
                  </div>
                  <div class="action">
                    <span class="action_item">移入关注</span>
                    <span  class="action_item">删除</span>
                  </div>
                </div>
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
      data () {
        return {
          isnull: true,
          carlist: [
            {
              'shop': '拾趣旗舰店',
              'shoplist': [
                {
                  'url': '',
                  'text':'拾趣（SHIQU） X6无线蓝牙音箱迷你家用音响便携小钢炮插卡手机低音炮户外运动登山骑行音乐车载电脑',
                  'img': 'https://img10.360buyimg.com/mobilecms/s117x117_jfs/t1/73786/27/4708/35683/5d2efa86E5348f6af/ec62eab3877790f2.jpg!q70.dpg.webp',
                  'style': '灰白色',
                  'server': '无服务',
                  'price': '119',
                  'number': '1',
                  'message':'已降价 ¥ 20'
                }
              ]
            },
            {
              'shop':'京东自营',
              'shoplist':[
                {
                  'url':'',
                  'text':'酷狗（KUGOU）M1L音乐有线耳机 线控运动耳机 入耳式手机耳机 通话清晰 K歌流畅 不缠绕 高弹性韧性好',
                  'img':'https://img10.360buyimg.com/mobilecms/s117x117_jfs/t1/306/35/10302/58757/5bc9bf77E96d691f5/0b9304a5061563a0.jpg!q70.dpg.webp',
                  'style': '星空灰',
                  'server': '无服务',
                  'price': '79',
                  'number': '1',
                  'message':''
                },
                {
                  'url':'',
                  'text':'酷狗（KUGOU）小酷M1无线运动蓝牙耳机 霍尔磁吸开关 入耳式 安卓苹果手机耳机 IPX4级防水 续航10h',
                  'img':'https://img10.360buyimg.com/mobilecms/s117x117_jfs/t6886/147/472036614/124090/966b1bdc/5976ec4cN703b48d1.jpg!q70.dpg.webp',
                  'style': '咖啡金',
                  'server': '无服务',
                  'price': '129',
                  'number': '1',
                  'message':''
                },
              ]
            }

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
          .icon_jd{
            display: inline-block;
            vertical-align:top;
            margin-top: 10px;
            margin-right: 5px;
            background-image: url(https://wq.360buyimg.com/wxsq_trade/cart_vue/main/images/sprite.img_default_437_75a2ce3f.png);
            background-size: 116px 110px;
            background-position: 0 -68px;
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
            padding: 20px 0 20px 150px;
            background: #fff;
          }
          &:not(:last-child){
            border-bottom: 1px solid #e5e5e5;
          }
          &:first-of-type{
            .item{
              padding-top: 0;
              img{
                top: 0;
              }
            }
          }
          img{
            position: absolute;
            left: 40px;
            top: 23px;
            display: block;
            width: 100px;
            height: 100px;
            box-shadow: 0 0 18px 0 rgba(0,0,0,.05);
            border-radius: 2px;
          }
          .content{
            .name{
              font-size: 14px;
              padding-right: 10px;
              margin-bottom: 3px;
              word-break: break-all;
              position: relative;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .style_server{
              display: flex;
              -webkit-box-align: center;
              -webkit-align-items: center;
              align-items: center;
              margin: 5px 10px 0 0;
              -webkit-box-pack: justify;
              -webkit-justify-content: space-between;
              justify-content: space-between;
              font-size: 10px;
            }
            .messge{
              color: #f2270c;
              margin: 5px 10px 0 0;
              font-size: 12px;
            }
            .price_line{
              position: relative;
              display: flex;
              align-items: center;
              margin: 5px 10px 0 0;
              justify-content: space-between;
              font-size: 12px;
              .price{
                color: #f2270c;
              }
            }
            .action{
              margin: 10px 10px 0 0;
              height: 15px;
              color: #999;
              text-align: right;
              .action_item{
                position: relative;
                padding: 0 10px;
                line-height: 15px;
                font-size: 10px;
              }
            }
          }
        }
      }
      .select{
        .icon_select{
          &:after{
            background-position: -80px -40px !important;
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
