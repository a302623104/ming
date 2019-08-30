<template>
    <el-row>
      <el-col :span="6" class="leftBox" @click="demo()">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo leftlist"
          background-color="#f8f8f8"
          text-color="#000"
          active-text-color="#e93b3d"
          active-background="#fff">
          <el-menu-item :index="value.id" @click="resettop(value.id)" v-for="value in menulist" :data-id="value.id">
            <span slot="title">{{value.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18" class="rightbox" >
        <div @touchstart="touchStart" @touchmove="move" @touchend="touchend" class="sortlist" v-bind:style="{top:boxtop + 'px'}" ref="box">
            <dl v-for="value in sortData[index-1]">
              <dt @touchstart="start"  @touchend="end">{{value.title}}</dt>
              <dd v-for="item in value.list">
                <img alt="" :src="item.url">
                <span>{{item.name}}</span>
              </dd>
            </dl>
        </div>
      </el-col>
    </el-row>
</template>

<script>
  import $ from 'jquery'
    export default {
        name: "listbody.vue",
      data(){
          return{
            index:1,
            menulist:[
              {id:'1',name:'热门推荐'},
              {id:'2',name:'手机数码'},
              {id:'3',name:'家用电器'},
              {id:'4',name:'电脑办公'},
              {id:'5',name:'美妆护肤'},
              {id:'6',name:'个护清洁'},
              {id:'7',name:'汽车生活'},
              {id:'8',name:'京东超市'},
              {id:'9',name:'热门推荐'},
              {id:'10',name:'男装'},
              {id:'11',name:'男鞋'},
              {id:'12',name:'女装'},
              {id:'13',name:'女鞋'},
              {id:'14',name:'童装'},
              {id:'15',name:'运动户外'},
              {id:'16',name:'食品生鲜'},
              {id:'17',name:'二手产品'},
              {id:'18',name:'玩具乐器'},
              {id:'19',name:'钟表珠宝'},
            ],
            boxHeight:650,
            boxtop:0,
            sortData: [
              [
                {
                  "title": "热门分类",
                  "list": [
                    {"url": "https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png", "name": "手机"},
                    {"url": "https://img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png", "name": "耳机"},
                    {"url": "https://img14.360buyimg.com/focus/s140x140_jfs/t27400/283/1600620667/15106/a935e7bd/5be6f2e1Nfa8d9d6e.png", "name": "路由器"},
                    {"url": "https://img30.360buyimg.com/focus/s140x140_jfs/t1/19730/14/9859/10199/5c8225eeE5e925911/054ccd7992f86199.png", "name": "口红"},
                    {"url": "https://img11.360buyimg.com/focus/s140x140_jfs/t1/11731/9/10730/9518/5c822298Eb50b3275/33f88663e1c0284e.png", "name": "保温杯"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png", "name": "微波炉"},
                  ]
                },
                {
                  "title": "家电热搜",
                  "list": [
                    {"url": "https://img20.360buyimg.com/focus/s140x140_jfs/t21115/83/225125274/13856/5473fb3f/5b0567c1N59d53b27.png", "name": "冰箱"},
                    {"url": "https://img14.360buyimg.com/focus/s140x140_jfs/t21664/15/237213959/24996/a3c6c7d6/5b0567c7N9cc1c355.png", "name": "洗衣机"},
                    {"url": "https://img12.360buyimg.com/focus/s140x140_jfs/t18106/218/2672347202/29951/3618e960/5b0567cdN275fbcdd.png", "name": "电视"},
                  ]
                }
              ],
              [
                {
                  "title": "热门品牌",
                  "list": [
                    {"url": "https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png", "name": "小米"},
                    {"url": "https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg", "name": "ipone"},
                    {"url": "https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg", "name": "华为"},
                    {"url": "https://img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg", "name": "荣耀"},
                    {"url": "https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png", "name": "VIVO"},
                    {"url": "https://img20.360buyimg.com/focus/s140x140_jfs/t19387/332/664528115/8176/5eabe8cb/5a9fa5e0N6754e52a.jpg", "name": "锤子手机"},
                  ]
                },
                {
                  "title": "相机",
                  "list": [
                    {"url": "https://img14.360buyimg.com/focus/s140x140_jfs/t13765/295/926307178/7966/3228af24/5a1679f2Nc2f659b6.jpg", "name": "单反相机"},
                    {"url": "https://img30.360buyimg.com/focus/s140x140_jfs/t12103/88/911420740/3644/5d80c2d9/5a1679e9Nc3e2dd28.jpg", "name": "拍立得"},
                    {"url": "https://img30.360buyimg.com/focus/s140x140_jfs/t12859/213/903907037/4465/aad95a43/5a1679daNbea69778.jpg", "name": "摄像机"},
                    {"url": "https://img30.360buyimg.com/focus/s140x140_jfs/t12154/164/880046972/2880/86b45b51/5a1679b9N42a5f8e5.jpg", "name": "镜头"},
                  ]
                }
              ],
              [
                {
                  "title": "厨房小电",
                  "list": [
                    {"url": "https://img30.360buyimg.com/focus/s140x140_jfs/t12559/262/969294499/3436/8c0ce9c9/5a17f1d2N8078d5e6.jpg", "name": "电水壶"},
                    {"url": "https://img11.360buyimg.com/focus/s140x140_jfs/t14185/134/950962305/3800/eb1bafb8/5a17f224Nea1d3f59.jpg", "name": "电饭锅"}
                    ]
                },
                {
                  "title": "个护健康",
                  "list": [
                    {"url": "https://img14.360buyimg.com/focus/s140x140_jfs/t13981/225/965020395/7369/1740dbbb/5a17c20fN16e27ed9.png", "name": "电吹风"},
                    {"url": "https://img14.360buyimg.com/focus/s140x140_jfs/t11539/356/2296587411/5881/9d96908e/5a17c221Nf85c1934.jpg", "name": "剃须刀"}
                    ]
                }
              ]
            ],
            startCilck:0,
            movetop:0,
            save:0,
          }
      },
      methods:{
        start() {
          let that = this;
          this.longClick = 0;
          this.timeOutEvent = setTimeout(function () {
            that.longClick = 1;
            console.log("这是长按")
          }, 500);
        },
        touchStart(e){
          this.startCilck = e.touches[0].clientY
        },
        move(e) {
          clearTimeout(this.timeOutEvent);
          this.timeOutEvent = 0;
          e.preventDefault();
          if(this.$refs.box.offsetHeight < this.boxHeight){
            return false;
          }
          this.movetop = e.touches[0].clientY-this.startCilck;
          this.boxtop = this.save + this.movetop;
          if(this.boxtop > 0){
            this.boxtop = 0
          }
          if(this.boxtop < -this.boxHeight - 30){
            this.boxtop = -this.boxHeight - 30
          }
        },
        touchend(){
          this.save = this.boxtop;
        },
        end() {
          clearTimeout(this.timeOutEvent);
          if (this.timeOutEvent != 0 && this.longClick == 0) {
            //点击
            //此处为点击事件----在此处添加跳转详情页
            console.log("这是点击");
          }
          return false;
        },
        resettop(dataid){
          let that = this;
          this.boxtop = 0;
          $('.rightbox').css("opacity",0);
          setTimeout(function(){
            that.index = parseInt(dataid);
            $('.rightbox').css("opacity",1);
          },500);
        }

      }
    }
</script>

<style lang="scss" scoped>
  .leftBox{
    height: 650px;
    .leftlist{
      height: 100%;
      position: relative;
      overflow: hidden;
      li{
        height: 40px;
        line-height: 40px;
      }
      .is-active{
        background-color: #fff !important;
      }
    }
  }
  .rightbox {
    height: 650px;
    position: relative;
    overflow: hidden;
    transition:1s;
    .sortlist {
      padding: 10px;
      position: relative;
      dl {
        margin-top: 10px;

        dt {
          font-size: 14px;
          color: #333;
          font-weight: 700;
        }

        dd {
          width: 30%;
          display: inline-block;
          text-align: center;
          margin: 0 1%;
          padding: 2%;

          img {
            width: 100%;
          }

          span {
            font-size: 12px;
            color: #333;
          }
        }
      }
    }
  }
</style>
