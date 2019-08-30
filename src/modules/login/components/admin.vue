<template>
    <div class="content">
      <div class="header">
          <a href="http://localhost:8080">
            <span class="icon before"></span>
          </a>
          <span class="text">我的京东</span>
        <a href="http://localhost:8080">
          <span class="icon after"></span>
        </a>
      </div>
      <div class="admin">
        <div class="userinfo">
          <div class="headimg"></div>
          <div class="info">
            <p>用户名:{{$store.state.user}}</p>
            <span class="notic">京享值 2560</span>
            <span class="notic">小白信用89.3</span>
          </div>
          <div class="logout" @click="logout()">
            退出
          </div>
        </div>
      </div>
      <div class="my_ceil">
        <div class="ceillist payment">
          <p>待付款</p>
        </div>
        <div class="ceillist collect">
          <p>待收货</p>
        </div>
        <div class="ceillist aftersale">
          <p>退换 / 售后</p>
        </div>
        <div class="ceillist order last">
          <p>全部订单</p>
        </div>
      </div>
      <div class="my_ceil">
        <div class="ceillist">
          <h4><span>0</span> 张</h4>
          <p>京东券</p>
        </div>
        <div class="ceillist">
          <h4><span>3000.00</span> 元</h4>
          <p>白条额度</p>
        </div>
        <div class="ceillist">
          <h4><span>348</span> 个</h4>
          <p>京豆</p>
        </div>
        <div class="ceillist">
          <h4><span>0</span> 元</h4>
          <p>红包</p>
        </div>
        <div class="ceillist assets last">
          <p>我的资产</p>
        </div>
      </div>
      <div class="my_ceil">
        <div class="ceillist">
          <h5><span>2</span></h5>
          <p>商品收藏</p>
        </div>
        <div class="ceillist">
          <h5><span>0</span></h5>
          <p>店铺收藏</p>
        </div>
        <div class="ceillist">
          <h5><span>8</span></h5>
          <p>我的足迹</p>
        </div>
      </div>
      <div class="my_ceil">
        <div class="toollist appointment">
          <p>我的预约</p>
        </div>
        <div class="toollist train">
          <p>京东火车票</p>
        </div>
        <div class="toollist application">
          <p>应用推荐</p>
        </div>
        <div class="toollist signal">
          <p>京东通信营业厅</p>
        </div>
        <div class="toollist welfare">
          <p>用户福利</p>
        </div>
        <div class="toollist plane">
          <p>京东机票</p>
        </div>
        <div class="toollist hotel">
          <p>京东酒店</p>
        </div>
      </div>
      <div class="service">
        客户服务
      </div>
      <recommend/>
    </div>
</template>

<script>
  import recommend from '../../client/login/components/Recommend.vue'
export default{
    components:{
      recommend
    },
    methods:{
      logout(){
        sessionStorage.removeItem('user');
        window.location.reload();
      }
    }
}
</script>

<style lang="scss">
.content{
  background-color: #f7f7f7;
  .header {
    width: 100%;
    text-align: center;
    padding: 5px;
    background-color: #fff;
    .icon {
      width: 20px;
      height: 20px;
      display: inline-block;
      vertical-align: baseline;
    }

    .before {
      margin: 5px 0 0 5px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzRCQTEyN0IzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzRCQTEyN0MzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NEJBMTI3OTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NEJBMTI3QTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PulQWg8AAAF/SURBVHja7Ni9SsRAEAfwnd1wldiIlqK1td4LiL7CFQaFCHZWgmVqH+GK4FejryA+gPcA9vZ2YnVkd5yAcBLOYJKZ3UWyRbIchPsxSzb/HUBEFfPQKvIxAP89MGn7wPHpuTLOtXoGMdl1WF4rUBug9cX25tpdnufRVHBssXxGhTu0Y6yjs1P6bRTLEo9Lp56ohquLasKcbk5sifvgAMBRRc5oWoau4FIcfRJOaPoQ+i1uwt2H3mZYcdxAdhwnUATHBRTDcQBFcX2B4rg+QC+4rsA9X7gunzpQ1j7S3QuudQWz7HKFjjBbNXNR4QhaYcMCi+LqkwxvtbSX0SWNJVGjAZhQ1T4W8Qk11e2GpkexRP5ZotVBHUmXWwlk122mCZnGAPwV+b3caQxAL0iOsCCK5IpbYkjOwCqC5I787EiJQxMrUurY2YScxNI8Woq0qKZtUpR062NmQB/+RALgqM3/+mgevRhI9imMvVIcewdtqtbH/M8BdOhRD8DA40uAAQDL2thNJDxLvAAAAABJRU5ErkJggg==) no-repeat;
      background-size: 100% 100%;
      float: left;
    }
    .after{
      margin: 5px 20px 5px 0;
      float: right;
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAMCAYAAAG2I8urAAAAAXNSR0IArs4c6QAAAddJREFUSA3VVr1OwzAQto0oqgQPABszD4BY4TVIfwR0aBgQb8ALIAbSoVD1J7wGrFRiAokVsbGwMSAVCXPn4PSSxklMGol6SM539913/jnbjEFzGu0j/GOTUvJACr5Owx0L5SBZVxtqDffbqbel7gNqG6K441ABglN3PyJ9YBHKk2qZXNVdzcJVJAwJzR92IvmgjlLH7RSrBhNPAwPohs508FqPf5wIjQVhOtg0xrgNA1GsQIW5yZ7ZFrVwTA+XIaLm/M4feHsRXUKnDOzSy+s7Lnclxrf59PhwFtPNdMvACn/orTGYEcpWXals0L5JLgOrtnGwx/k54+x51L/c4ZxPq8iUza9+3liss1vY57uUdzTwRJ6kysDi6RBJBhOrNY/vaYJGuQRscrlKtmVMIstQEJucEJenWbxGe0GsmKkodQZ1royExFAGVlVZq3Wy/jn5uknaT4ofkqxWlve73Ys3kk9hcRF4oerhtieXeeqoOWv5g3yrmRoHjIvCC6cQnM95m41vVkybWDa+c+YVeHllxQztNr4hyCDYxLLxNdCFaptY4CvwZo8/PcJgVIBzSPlSXQF5UXjDF716iTbdQ8b4AZxJwb2qZlv2Rn3vOs9L5C/z9d95fwDELzC7i+rQHQAAAABJRU5ErkJggg==") no-repeat 50%;
      background-size: 20px;
    }
    .text {
      margin: 5px 0 0 0;
      font-size: 18px;
    }
  }
  .admin{
    width: 100%;
    box-shadow: 0 2px 4px rgba(228, 57, 60, 0.4);
    position: relative;
    overflow: hidden;
    border-radius: 0 0 300px 300px / 0 0 20px 20px;
    background: linear-gradient(90deg, #eb3c3c, #ff7459);
    box-sizing: border-box;
    min-height: 110px;
    padding-top: 25px;
    .userinfo{
      width: 100%;
      padding: 0 30px;
      .headimg{
        width: 60px;
        height: 60px;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.4);
        border-radius: 60px;
        background: url(https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png) 0px 0px / 100% 100% no-repeat;
        float:left;
      }
      .info{
        float: left;
        margin: 5px 10px;
        font-size: 14px;
        color: #fff;
        .notic{
          display: inline-block;
          max-width: 150px;
          height: 16px;
          line-height: 16px;
          padding: 0 8px;
          margin: 20px 8px 0 0;
          border-radius: 10px;
          font-size: 12px;
          color: #fff;
          background: #c8483f;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .logout{
        width: 50px;
        height: 20px;
        background-color: #fff;
        position: absolute;
        top: 30px;
        right: 30px;
        text-align: center;
        line-height: 20px;
        border-radius: 30px;
      }
    }
  }

  .my_ceil{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    background: #fff;
    .ceillist{
      position: relative;
      flex: 1;
      text-align: center;
      height: 75px;
      background-position-y: 15px!important;
      h4{
        color: #e93b3d;
        font-size: 12px;
        font-weight: 400;
        position: absolute;
        top: 15px;
        width: 100%;
        span{
          font-size: 14px;
        }
      }
      h5{
        position: absolute;
        top: 15px;
        width: 100%;
        font-size: 16px;
      }
      p{
        width: 100%;
        position: absolute;
        top: 50px;
        color: #666666;
        font-size: 12px;
      }
    }
    .payment{
      background: url(https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14911/113/1615678148/168/7734f24f/5a53578eN0e2811b6.png) 50%/auto 20px no-repeat;
    }
    .collect{
      background:url("https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14608/2/1636876268/266/b4ebb3f2/5a535791N627c296c.png") 50%/auto 20px no-repeat
    }
    .aftersale{
      background: url(https://img11.360buyimg.com/jdphoto/s40x40_jfs/t15049/345/1573771240/492/7ef15694/5a5357eaNab882dcb.png) 50%/auto 20px no-repeat;
    }
    .order{
      background: url(https://img30.360buyimg.com/jdphoto/jfs/t14953/346/2113764063/185/1a1dcd24/5a6d7b8bN8431ea1a.png) 50%/auto 20px no-repeat;
    }
    .assets{
      background: url("https://img11.360buyimg.com/jdphoto/s40x40_jfs/t20329/11/1228908740/243/73a7934c/5b235f37Ne85fdb85.png") 50%/auto 20px no-repeat;
    }
    .last{
      &:before{
        position: absolute;
        z-index: 1;
        top: 0;
        left: -5px;
        width: 10px;
        height: 72px;
        background: url(https://img11.360buyimg.com/jdphoto/s20x144_jfs/t14743/330/1610539369/321/10d659d3/5a53580eNa26a8177.png);
        background-size: 10px;
        content: "";
      }
    }
    .toollist{
      position: relative;
      width: 25%;
      text-align: center;
      background-color: #fff!important;
      height: 65px;
      background-position-y: 15px!important;
      p{
        width: 100%;
        position: absolute;
        top: 43px;
        font-size: 12px;
        color: #666666;
      }
    }
    .appointment{
      background: url(https://img14.360buyimg.com/jdphoto/jfs/t1/24988/22/12030/2316/5c94d6d4E7cdcf995/c8fe8e84d89685f7.png) 50%/auto 20px no-repeat;
    }
    .train{
      background: url(https://img10.360buyimg.com/jdphoto/jfs/t12931/150/1327543095/1276/e9e67341/5a1e9ee2Nb5baf153.png) 50%/auto 20px no-repeat;
    }
    .application{
      background: url(https://img12.360buyimg.com/jdphoto/jfs/t13612/121/1346421356/1355/9014e74f/5a1e9f1cNab886864.png) 50%/auto 20px no-repeat;
    }
    .signal{
      background: url(https://img12.360buyimg.com/jdphoto/jfs/t7711/100/3983515381/1466/1049e625/5a1e9f28N2460c691.png) 50%/auto 20px no-repeat;
    }
    .welfare{
      background: url(https://img12.360buyimg.com/jdphoto/jfs/t12514/60/1318835455/1723/d6ae70f5/5a1e9e39Ndc5e9285.png) 50%/auto 20px no-repeat;
    }
    .plane{
      background: url(https://img12.360buyimg.com/jdphoto/jfs/t18940/299/476632277/2164/4453d9e4/5a813897N7c80dea2.png) 50%/auto 20px no-repeat;
    }
    .hotel{
      background: url(https://img12.360buyimg.com/jdphoto/jfs/t16390/157/2010422417/341/bb4c68c4/5a8138f2Nfd5de7b7.png) 50%/auto 20px no-repeat;
    }
  }

  .service{
    margin: 20px 0;
    width: 100%;
    padding:10px;
    font-size: 14px;
    color: #666;
    background-color: #fff;
  }
  .recommend{
    background-color: #fff !important;
  }
}
</style>
