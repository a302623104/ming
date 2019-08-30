<template>
  <el-col :span="18" class="rightbox" >
    <div @touchstart="touchStart" @touchmove="move" @touchend="touchend" class="sortlist" v-bind:style="{top:boxtop + 'px'}" ref="box">
      <dl v-for="value in sortData[$store.state.count-1]">
        <dt @touchstart="start"  @touchend="end">{{value.title}}</dt>
        <dd v-for="item in value.list">
          <img alt="" :src="item.url">
          <span>{{item.name}}</span>
        </dd>
      </dl>
    </div>
  </el-col>
</template>

<script>
  export default {
    name: "right.vue",
    data() {
      return {
        boxHeight:650,
        boxtop:0,
        sortData: [
          [
            {
              "title": "热门分类",
              "list": [
                {
                  "url": "https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
                  "name": "手机"
                },
                {
                  "url": "https://img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png",
                  "name": "耳机"
                },
                {
                  "url": "https://img14.360buyimg.com/focus/s140x140_jfs/t27400/283/1600620667/15106/a935e7bd/5be6f2e1Nfa8d9d6e.png",
                  "name": "路由器"
                },
                {
                  "url": "https://img30.360buyimg.com/focus/s140x140_jfs/t1/19730/14/9859/10199/5c8225eeE5e925911/054ccd7992f86199.png",
                  "name": "口红"
                },
                {
                  "url": "https://img11.360buyimg.com/focus/s140x140_jfs/t1/11731/9/10730/9518/5c822298Eb50b3275/33f88663e1c0284e.png",
                  "name": "保温杯"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                  "name": "微波炉"
                },
              ]
            },
            {
              "title": "家电热搜",
              "list": [
                {
                  "url": "https://img20.360buyimg.com/focus/s140x140_jfs/t21115/83/225125274/13856/5473fb3f/5b0567c1N59d53b27.png",
                  "name": "冰箱"
                },
                {
                  "url": "https://img14.360buyimg.com/focus/s140x140_jfs/t21664/15/237213959/24996/a3c6c7d6/5b0567c7N9cc1c355.png",
                  "name": "洗衣机"
                },
                {
                  "url": "https://img12.360buyimg.com/focus/s140x140_jfs/t18106/218/2672347202/29951/3618e960/5b0567cdN275fbcdd.png",
                  "name": "电视"
                },
              ]
            }
          ],
          [
            {
              "title": "热门品牌",
              "list": [
                {
                  "url": "https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                  "name": "小米"
                },
                {
                  "url": "https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
                  "name": "ipone"
                },
                {
                  "url": "https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
                  "name": "华为"
                },
                {
                  "url": "https://img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
                  "name": "荣耀"
                },
                {
                  "url": "https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png",
                  "name": "VIVO"
                },
                {
                  "url": "https://img20.360buyimg.com/focus/s140x140_jfs/t19387/332/664528115/8176/5eabe8cb/5a9fa5e0N6754e52a.jpg",
                  "name": "锤子手机"
                },
              ]
            },
            {
              "title": "相机",
              "list": [
                {
                  "url": "https://img14.360buyimg.com/focus/s140x140_jfs/t13765/295/926307178/7966/3228af24/5a1679f2Nc2f659b6.jpg",
                  "name": "单反相机"
                },
                {
                  "url": "https://img30.360buyimg.com/focus/s140x140_jfs/t12103/88/911420740/3644/5d80c2d9/5a1679e9Nc3e2dd28.jpg",
                  "name": "拍立得"
                },
                {
                  "url": "https://img30.360buyimg.com/focus/s140x140_jfs/t12859/213/903907037/4465/aad95a43/5a1679daNbea69778.jpg",
                  "name": "摄像机"
                },
                {
                  "url": "https://img30.360buyimg.com/focus/s140x140_jfs/t12154/164/880046972/2880/86b45b51/5a1679b9N42a5f8e5.jpg",
                  "name": "镜头"
                },
              ]
            }
          ],
          [
            {
              "title": "运营商",
              "list": [{"url": "javascript:void(0)", "name": "合约机"}, {"url": "javascript:void(0)", "name": "选好卡"}]
            },
            {
              "title": "手机配件",
              "list": [{"url": "javascript:void(0)", "name": "手机支架"}, {"url": "javascript:void(0)", "name": "充电器"}]
            }
          ]
        ],
        startCilck:0,
        movetop:0,
        save:0,
      }
    },
      methods: {
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
        change:function(){
          this.$nextTick(() => {
            console.log(1)
          })
        }
      }
  }
</script>

<style lang="scss" scoped>
  .rightbox {
    height: 650px;
    position: relative;
    overflow: hidden;
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
