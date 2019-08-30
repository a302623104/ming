<template>
  <div class="sec_kill">
    <div class="title">
      <div class="title_img"></div>
      <strong class="timmer">18点场</strong>
      <span class="kill-time">{{date}}</span>
      <a href="javascript:void(0)" class="more"> 更多秒杀 <i></i></a>
    </div>
    <div class="kill-list">
      <ul v-bind:style="{left:boxleft + 'px',width:boxWidth + 'px'}" @touchstart="touchStart" @touchmove="move" @touchend="touchend">
        <li>
          <img src="https://img14.360buyimg.com/n1/s150x150_jfs/t1/25081/32/1314/338210/5c10cec4Ee8452155/21d8bd31f72bd8a5.jpg.dpg" alt="">
          <div class="money">
            <span class="now">¥178</span>
            <br>
            <span class="before">¥198</span>
          </div>
        </li>
        <li>
          <img src="https://img14.360buyimg.com/n1/s150x150_jfs/t1/25081/32/1314/338210/5c10cec4Ee8452155/21d8bd31f72bd8a5.jpg.dpg" alt="">
          <div class="money">
            <span class="now">¥178</span>
            <br>
            <span class="before">¥198</span>
          </div>
        </li>
        <li>
        <img src="https://img14.360buyimg.com/n1/s150x150_jfs/t1/25081/32/1314/338210/5c10cec4Ee8452155/21d8bd31f72bd8a5.jpg.dpg" alt="">
          <div class="money">
            <span class="now">¥178</span>
            <br>
            <span class="before">¥198</span>
          </div>
      </li>
        <li>
          <img src="https://img14.360buyimg.com/n1/s150x150_jfs/t1/25081/32/1314/338210/5c10cec4Ee8452155/21d8bd31f72bd8a5.jpg.dpg" alt="">
          <div class="money">
            <span class="now">¥178</span>
            <br>
            <span class="before">¥198</span>
          </div>
        </li>
        <li>
          <img src="https://img14.360buyimg.com/n1/s150x150_jfs/t1/25081/32/1314/338210/5c10cec4Ee8452155/21d8bd31f72bd8a5.jpg.dpg" alt="">
          <div class="money">
            <span class="now">¥178</span>
            <br>
            <span class="before">¥198</span>
          </div>
        </li>
        <li>
          <img src="https://img14.360buyimg.com/n1/s150x150_jfs/t1/25081/32/1314/338210/5c10cec4Ee8452155/21d8bd31f72bd8a5.jpg.dpg" alt="">
          <div class="money">
            <span class="now">¥178</span>
            <br>
            <span class="before">¥198</span>
          </div>
        </li>
        <li>
          <img src="https://img14.360buyimg.com/n1/s150x150_jfs/t1/25081/32/1314/338210/5c10cec4Ee8452155/21d8bd31f72bd8a5.jpg.dpg" alt="">
          <div class="money">
            <span class="now">¥178</span>
            <br>
            <span class="before">¥198</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          date: new Date().getHours() +':'+ new Date().getMinutes() +':'+ new Date().getSeconds(),
          startCilck:0,
          moveleft:0,
          boxleft:0,
          save:0,
          boxWidth:800,
        }
      },
      methods:{
        settime(){
          let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
          this.timer = setInterval(() => {
            let hour = new Date().getHours();
            hour = 17-hour;
            hour = hour < 10 ? ('0' + hour) : hour;
            let min = new Date().getMinutes();
            min = 60-min;
            min = min < 10 ? ('0' + min) : min;
            let second = new Date().getSeconds();
            second = 60-second;
            second = second < 10 ? ('0' + second) : second;
            let str = hour + ':' + min + ':' + second;
            _this.date = str; // 修改数据date
          }, 1000)
        },
        getwidth(){
          let li = document.getElementsByClassName('kill-list')[0].children[0].children;
          this.boxWidth = (li[0].offsetWidth * li.length) + 10*li.length
        },
        touchStart(e){
          this.startCilck = e.touches[0].clientX
        },
        move(e) {
          clearTimeout(this.timeOutEvent);
          this.timeOutEvent = 0;
          e.preventDefault();
          this.moveleft = e.touches[0].clientX-this.startCilck;
          this.boxleft = this.save + this.moveleft;
          if(this.boxleft > 0){
            this.boxleft = 0
          }
          let width = document.getElementsByClassName('kill-list')[0].offsetWidth
          if(this.boxleft < -this.boxWidth + width){
            this.boxleft = -this.boxWidth + width
          }
        },
        touchend(){
          this.save = this.boxleft;
        },
        test(){
          console.log(1)
        }
      },
      created() {
        this.settime()
      },
      mounted(){
        window.addEventListener('resize', this.getwidth);
        this.getwidth()
      }
    }
</script>

<style lang="scss">
.sec_kill{
  margin: 10px 10px 10px;
  padding-bottom: 20px;
  background-color: #fff;
  border-radius: 5px;
    .title{
      height: 37px;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABYwAAACQBAMAAABZrTKvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUdwTO0PD+wQEOwVFewREekNDewQEOsQEC1iODQAAAAIdFJOUwB9YxIrs0VtoD6UjwAAA/1JREFUeNrt3cGO22QUBeAprsq2qSjdUks420gOsG0VK/sBjdiWEHnNmPeXsP94aIJEQExvmWt9n/oEZ46u72877s3NVa/vPrq9gZTOa3wnDnK6U2PUGJ7YUmE3Ro3h//LtWY1/FAc5fXdW45/EQU7Pzmr8Uhzk9Pysxu/EQfrl+GdhkH+rsFOQVvVwy+12IwzS+nKu8W+iILH3pcVfCYLU9q/vbn8VAwAAAAAAAJ/I88P9m+adHMjs+1XhQSqJvVjNPsiCrKq3DzV+tZEGSf2w+tPv0iDpML7/WOM3xjE5fbE68408SOmX8xp/LQ9S7hSrC7YKMnpxWeMPEiGhZ5c1fikREnp/WWM/7CX9Cc8Zj5zeXtb4lURI6P6yxm8kQkKrv5AI+WtsGmOpAEc8+G/ccGMBPP5gATyMZgG8GsQCeFGTxZ3xnPDIyY+YWMJW4SelLIAf+LOEcexzKyyAj1+xBD5FyBL4MCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkNtGBKQvcVvpMclV7UQOZG/xrt2Yx+ReKbbddtdWkiDxMK623WhnqyD1TtEVtmOS13g/1dhyTF7jZtwd97YKstd4P/XYNGYB07gzjUld4+PUY0sFdmOwG8NVVVVdfdD8cN/YNObp2pT3fjbXa2w15mnP4nZXJu2VkrZlHO+8G8TTncXj5lvOb5srTd9Oj6K1+HFJb8yBuGG87fpJd30cT7zh9qiLnle2I9Pt+sOhrqce/21NN9U/bM/8ixZ31y95PEK73ff1pDnurp3yKn+AR+ZcVjfzOGwY16ca90cRR+a8Hze3Y2czi5kS+0M99/ho4Ia1uCoXvWa85JkVIde6aRgPw9TjfqfGYcN4Xt16syIk324cxkO9Xq/HWdFJOCrm7XzROxzNipApMcY7dbhE7IIXetE7XfKE/OlNU2Jd1ophulchkKAad2UYj7tb76XtkBqfOrye9mM1jpwW80VPyBE723ixW0//hnLBk0jctFiXo7RLXlSNh3FMTNO46Xduakad8OoyjdemccyYKPfb6hKwhENjHoYSslkROI2n7dhSERpzWd0cQCKXtnU5RUs4cqkoB2khB+V7OAU8Tgqnj9BpMZwOIEIO0J7uG5d7QY3HH3E1Lg9LB9M4qMbdfENz3Np6D6MjYy5XvLrx+CPm8HEo71ScXg3S46CYu3J/fl033r8Kybc9Lcdevoo+g/ReDQq93PXzC8ee9odOCy9qhua7nWvce/cqclqM47iZWizkoB53/Vjkpul92yo25vlHTEKOmRPtww/8BRw6juevgYgiaq0YAz52fuwYHrMWx17vfEHhM8RcvvXh/ywODli+8TnLQMAAAADwWfwBKZghRTcFaz4AAAAASUVORK5CYII=);
      background-size: cover;
      padding-top: 7px;
      .title_img{
        float: left;
        display: inline-block;
        width: 80px;
        height: 30px;
        margin-right: .3rem;
        margin-left: .45rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAAeCAMAAAAsAgFtAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPArMAAAAAAAAAAAAGQaGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPErMPYzNfEsMfErMPErMPEsMfIsMPEvMQAAAE7DusUAAAAidFJOUwA6wVQnRSzvC4r2cv77nuUFfhMwYq3ZzxogixNa37c2QymPBWCJAAADvklEQVRIx5WXiZKrIBBFUeOGBkFcYszK/3/k62Y3o6m8rqkKEdMHerkwhARLkqQie3ZKkgs5tJ6bT5llWfz7fufdD/9npZJdn51S+T6tyutZWde1UqqI5tI045uXL6LLfyNKpSjfey5S+Ik6JCrViRCbfDybhZfB4BfUfxEmnjikSp3L2CidcJIpbeeeCHgoNbGHkV32qCdHva2+mfQ3nFIHZvY/HMyyQBSV2d5iiCpkQO9KqalJGMWB3fGBy7PJMfu2HsEy8JTZgPI/RJ0579Bn9bRvi52VUgoINnwU1vS0S6slwsJKskMkpJgtsa7IzwbuxqO5QJx2iDxLNU3HtGSurGS9Z9E6oaKGXZxI0eGUjlgk6R/iUpeGJB05HfhxcTRBF+Db5Wjz2jokjp9EXapqHkw0C4vPfyCCo9m2V/OFWHtitzjZoAy74QTPAVsNs/ULxLnamoidw3tin5g3DZQ/awacE46Y2oB0U2OkwRIxXIyii8buIbImcn6B9zMsTyDXvpQjmRrMagZLZJy8X9q9V2VPBCU4GfdTsbU6Iu4GvYsmu14Tc69yr/apYxNrmR/nhvgtj+Oh5KAG6grkGPkEiRRSeG3b1ebxQFi+Eyt6LIF8dnwYLEDsEsIfbXsnh8RULzRzBkkR8DGgSX8eOcPKcWPbj7Bm/JsIyDQn9XwhKwDbhymT3BqG3o1PP56P5Kg78FgRFIkllG6ld9i214/zPKoc05se7YgyWswCY7khhidMaSXPZ4jgZHUNkW8dG1SuKib6JyhA2YYoQm3oAqw3xFy5dmLM6KoEIcQEva438nZbRKmatnvEIzIxGbZHkyOeXIptqSYbIocCpSaPlVPyEmoGuuLePtf7LTSO2BJxJ9C9lfJHg8/jFDouDH0emRNa7s+OGYXt8eDta12JLyslt0RpFlEofzR4ovC55mcX1EDMVKgwS6zI+wmNeL+H69DoghpVzqQ3l+mLypYo/fqWcPh4IrbosCWS5/1K1ut1JbEc159Ecyg0IWehOyZXTFAmJf/sjtE7c8QbVOhte90rnbN+DEqOVwXMinFUpCFatct646q2Z0GIsnApoKo8aWGDvl8312aX/wWVsOP+4tvj0i9uh2q++FOYOXTudogiZsJ69qcNnY2Stq5Eo3O89hliVei1BLA2qJBPwcMtPLUBtEEFIutDVVA3qoywXdcPhcoodTURLuI8oTSDfzbstU3NRfyfhqkcmdiHaZeF2SUJarjeYYOvY3GU7PASJ/i3C13TH0w8b7cbJ/9h/wCzsZRNJjJk+QAAAABJRU5ErkJggg==) no-repeat;
        background-size: contain;
      }
       .timmer{
        font-size: 14px;
        color: #232326;
        font-weight: 700;
        display: inline-block;
        vertical-align: middle;
      }
      .kill-time{
        vertical-align: middle;
        font-size: 14px;
        font-weight: 700;
        margin: 0 0 0 10px;
      }
      .more{
        display: inline-block;
        color: #f23030;
        float: right;
        font-size: 10px;
        text-align: right;
        position: relative;
        padding-right: 1.1rem;
        margin-right: 10px;
        margin-top: 5px;
        i{
          display: inline-block;
          width: 13px;
          height: 13px;
          background: url(https://wq.360buyimg.com/wxsq_project/portal/m_jd_index/images/arrow_rt_2ccb8cd5.png) no-repeat;
          background-size: cover;
          position: absolute;
          right: 0;
          top: 2px;
        }
      }
    }
    .kill-list{
      width: 100%;
      overflow: hidden;
      padding: 0 5px;
      ul{
        position: relative;
        li{
          width: 80px;
          float: left;
          margin: 0 5px;
          img{
            width: 100%;
          }
          .money{
            text-align: center;
            font-size: 12px;
            .now{
              color: red;
              font-size: 13px;
              font-weight: 700;
            }
            .before{
              color: #ccc;
              text-decoration: line-through;
            }
          }
        }
      }
    }
}
</style>
