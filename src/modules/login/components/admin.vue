<template>
    <div class="content">
      <adminheader title="我的京东"/>
      <div class="admin">
        <div class="userinfo">
          <div class="headimg"></div>
          <div class="info">
            <p>用户名:{{usermessage.name}}<i @click="open()" class="changename"></i></p>
            <span class="notic">京享值 2560</span>
            <span class="notic">小白信用 {{usermessage.credit}}</span>
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
      <recommend title="为你推荐"/>
    </div>
</template>

<script>
  import adminheader from './header.vue'
  import recommend from './recommend.vue'
export default{
    components:{
      recommend,
      adminheader
    },
  data(){
    return{
      usermessage:'',
    }
  },
  props:{
      username:{
        type:String
      }
  },
    methods:{
      logout(){
        sessionStorage.removeItem('user');
        window.location.reload();
      },
      open() {
        this.$prompt('请输入昵称', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^[\u4e00-\u9fa5]{2,6}$|^[a-zA-Z0-9_]{4,12}$/,
          // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '昵称格式为中文2-6字，英文数字4-12字'
        }).then(({ value }) => {
          this.usermessage.name = value
          let postsent = "username="+this.username+"&name="+value+""
          let ajax = new XMLHttpRequest();
          ajax.open('post','http://localhost/changname.php',true);
          ajax.setRequestHeader('content-type','application/x-www-form-urlencoded');
          ajax.send(postsent);
        }).catch(() => {

        });
      }
    },
  created:function(){
    let postsent = "username="+this.username+"";
    let ajax = new XMLHttpRequest();
    ajax.open('post','http://localhost/getmessage.php',true);
    ajax.setRequestHeader('content-type','application/x-www-form-urlencoded');
    ajax.send(postsent);
    ajax.onreadystatechange = () =>{
      if(ajax.readyState == 4 && ajax.status == 200){
        let result = ajax.responseText;
        this.usermessage = JSON.parse(result)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  background-color: #f7f7f7;

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
        .changename{
          flex-shrink: 0;
          margin: 0 0 0 4px;
          width: 12px;
          height: 12px;
          display: inline-block;
          vertical-align: middle;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTP///////////////////////////////////////////////////////////////8/RimEAAAAQdFJOUwB3a5m4Veb3H6QDji7WgAgChXPEAAAApElEQVQoz3WSSwLDIAhEMUHBtkm4/2mL+Ld1VvGN4gQByGKHgehCxzCKI0lVHCzfsYp85YcsOsp++ZGd4anOaccp3RMnXgpHPbDw4jC4MQ8+apzp0wF2/v4EdYwLQugcQJ3MJQANXJ26pGYYf7WIVEstXEthzzlwvTzH5YVrXPvBa+VpZ1rfmmfisTTR39fUXWvitu37h9o/bRoG+TsMbXxCH58vmgwXoPcjyaAAAAAASUVORK5CYII=);
          background-size: 12px;
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
}
</style>
