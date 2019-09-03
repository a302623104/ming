<template>
  <div class="nologin">
    <div class="header">
      <a href="http://localhost:8080">
      <span class="icon before"></span>
      </a>
      <span class="text">京东登录</span>
    </div>
    <div class="main">
      <div class="inputgroup">
        <input type="text" class="admin" placeholder="用户名/已验证手机" v-model="username">
        <input :type="seen" class="password" placeholder="请输入密码" v-model="password">
        <button class="checkpwd" @click="changemode()"></button>
        <button class="forget">忘记密码</button>
      </div>
      <div class="loginbox">
        <el-button round class="loginbtn login" @click="setuser()">登 录</el-button>
        <el-button round class="loginbtn loginonce">一键登录</el-button>
        <a href="javascript:void(0)" class="messge">短信验证码登录</a>
        <router-link to="/login.html/register" class="phone">手机快速注册</router-link>
      </div>
    </div>
    <div class="otherlogin">

    </div>
  </div>
</template>

<script>
    export default {
        name: "no-login",
      data(){
          return{
            username:'',
            password:'',
            seen:'password'
          }
      },
      methods:{
          setuser(){
            let postsent = "username="+this.username+"&password="+this.password+""
            let ajax = new XMLHttpRequest();
            ajax.open('post','http://localhost/checklogin.php',true);
            ajax.setRequestHeader('content-type','application/x-www-form-urlencoded');
            ajax.send(postsent);
            ajax.onreadystatechange = () => {
              if(ajax.readyState == 4 && ajax.status == 200){
                let result = ajax.responseText;
                if(result){
                  sessionStorage.setItem('user',this.username);
                  return this.$store.commit('setuser',this.username)
                }
              }
            }
          },
        changemode(){
          let thisbtn = document.getElementsByClassName('checkpwd')[0];
            if(this.seen === 'password'){
              this.seen = 'text';
              thisbtn.style.backgroundImage = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB5UlEQVR4Ae1YJXQsQRD8zOYzmTD52Hgdjg2zDvp3571J3HkXZloKg40KM1NXOPMyO8fY9V4f7HZX1zC8YDAYDAaDEQ2YmJj4q+t6iaZp7WS9ZItku7Db3714Bx/4hoXopaWl9ySmikwjXND3pTt266shFhxBFz4zM/OOarKOhCxDkC8GDnCBMyjiKWE6mYnk/jRwgjvQ4iso2YFExCn6OX03Uo1m0e8kqtUvMPzGM7y79TmVcBwgR6DEN0tqbpfMOTU19dtdLvgiBrESzmZ/zzCtkkRtVMPfvOVFLDgkrdHqF/HU9DnPkG/T80K891OOInCKeZDbJ2LTNP8T0bpQ65uGYWTKYi4vL1+STxn5jtytA7e/y/BOFgdOcAuFWIcGX7qOSyA8RCK7xYxEdNrMNJ3wsSsEcghxLq/EW5YVTwnPBbJqu5qXihcKYdcSyCH4n0OLN7OOUyAaV/iXeTDnlym4xgV/pzfdp18gyVf4j7hbAPgqCpAv+Pd7U4DVxySqeV42p8vWDtU6IcSsRlIBsD78EQsQBV0oCgZxFEyjEbCQkc+RuJBF/lYiAjZzhbLNHG+nFQca2A69c3hxoHGoDjR8pJT014xAHerBHcz7oHp/XauAC9cq0X+xxVeLDAaDwWAw/IsraH8effh8nP4AAAAASUVORK5CYII=)'
            }else{
              this.seen = 'password';
              thisbtn.style.backgroundImage = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAl5JREFUaAXtlE1rE2EQx/PSQIkphQihHhcUklNIcilUihYEDx76FXwBBSt4LkIpiF/ACAq+XPwAPXhoEdoiBHrIC7mYgIUclYIBMYbSuIm/wa5s1s2TtY2IMA/MzjPPzPxn5r/PbiikSxlQBpQBZUAZUAaUAWVAGVAGlAFlQBlQBpSBf8FAeFzRSqUyT8zVSCTyNpfLlcbFT8Jfq9UW+v3+FbA2C4XCngnTOADNFwaDgQBMIXY4HF4G8I0J8LQ+al6j5gY4UeQ7NeepWRmFGxnlOD5fREvzsqIAv4adCz/NyT8FW2pIrWN0qS09jFzGAZh+CzlyZc/atr31N4YQTMGm1qxTT2pLD47tp40D5PP59zBy35NocT9L5XL5ouf8xKZgCSYAlhtEaksP7jPv3vgNOMHcyxeA3XBs0TDT56wYi8VWs9nsN7cv6L5er5/p9XqPwFoBa4hMzl5y92+Owwo0AODRarX6BH3bB/ATxYrxePxpJpP57OP/7ajRaJztdrt3wFvBOecNAO8ZzN9F216f1w40gJPEm1hjv0Zhv7xDCu7i3+aXW0I+sj9AZKW4IueQBfZL5F9CTyNDi/wBB+swvz7kMBh+jRjCQyHexCINPEcm+jei+Q/ILZh/Z2zA4/zjASS/1WpNt9vtBwwhV+DXX8ODHdT8QuPFZDL50LKsw6BJTtyJBnCSm83mTKfTuU4D9xjmvHMeRJOzT87jRCLxKp1Ofw2S4xdzqgHcgHwfMsAScpnGLHSKJlMSgy3fwgF2C72DbHPP99G6lAFlQBlQBpQBZUAZUAaUgf+YgR8RmtPGSJ6MGgAAAABJRU5ErkJggg==)'
            }
        }
      },
      created: function () {
        if (sessionStorage.getItem('user')) {
          this.$store.commit('setuser', sessionStorage.getItem('user'))
        }
        document.onkeyup = (e) => {
          if (e.keyCode === 13) {
            this.setuser()
          }
        }
      },
    }
</script>

<style lang="scss" scoped>
.nologin{
  position: absolute;
  .header{
    width: 100%;
    text-align: center;
    padding: 5px;
    .icon{
      width: 20px;
      height: 20px;
      display: inline-block;
      vertical-align:baseline;
      float: left;
    }
    .before{
      margin: 5px 0 0 5px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzRCQTEyN0IzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzRCQTEyN0MzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NEJBMTI3OTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NEJBMTI3QTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PulQWg8AAAF/SURBVHja7Ni9SsRAEAfwnd1wldiIlqK1td4LiL7CFQaFCHZWgmVqH+GK4FejryA+gPcA9vZ2YnVkd5yAcBLOYJKZ3UWyRbIchPsxSzb/HUBEFfPQKvIxAP89MGn7wPHpuTLOtXoGMdl1WF4rUBug9cX25tpdnufRVHBssXxGhTu0Y6yjs1P6bRTLEo9Lp56ohquLasKcbk5sifvgAMBRRc5oWoau4FIcfRJOaPoQ+i1uwt2H3mZYcdxAdhwnUATHBRTDcQBFcX2B4rg+QC+4rsA9X7gunzpQ1j7S3QuudQWz7HKFjjBbNXNR4QhaYcMCi+LqkwxvtbSX0SWNJVGjAZhQ1T4W8Qk11e2GpkexRP5ZotVBHUmXWwlk122mCZnGAPwV+b3caQxAL0iOsCCK5IpbYkjOwCqC5I787EiJQxMrUurY2YScxNI8Woq0qKZtUpR062NmQB/+RALgqM3/+mgevRhI9imMvVIcewdtqtbH/M8BdOhRD8DA40uAAQDL2thNJDxLvAAAAABJRU5ErkJggg==) no-repeat;
      background-size: 100% 100%;
    }
    .text{
      margin: 5px 0 0 0;
      font-size: 18px;
    }
  }
  .main{
    width: 100%;
    padding: 0 20px;
    margin-top: 30px;
    .inputgroup{
      position: relative;
      input{
        width: 100%;
        height: 40px;
        padding: 10px 0;
        background: #fff;
        line-height: normal;
        border-radius: 0;
        border: 0;
        outline: none;
        border-bottom: 1px solid #efefef;
        margin:10px 0;
        font-size: 16px;
      }
      .checkpwd{
        position: absolute;
        display: block;
        width: 24px;
        height: 24px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAl5JREFUaAXtlE1rE2EQx/PSQIkphQihHhcUklNIcilUihYEDx76FXwBBSt4LkIpiF/ACAq+XPwAPXhoEdoiBHrIC7mYgIUclYIBMYbSuIm/wa5s1s2TtY2IMA/MzjPPzPxn5r/PbiikSxlQBpQBZUAZUAaUAWVAGVAGlAFlQBlQBpSBf8FAeFzRSqUyT8zVSCTyNpfLlcbFT8Jfq9UW+v3+FbA2C4XCngnTOADNFwaDgQBMIXY4HF4G8I0J8LQ+al6j5gY4UeQ7NeepWRmFGxnlOD5fREvzsqIAv4adCz/NyT8FW2pIrWN0qS09jFzGAZh+CzlyZc/atr31N4YQTMGm1qxTT2pLD47tp40D5PP59zBy35NocT9L5XL5ouf8xKZgCSYAlhtEaksP7jPv3vgNOMHcyxeA3XBs0TDT56wYi8VWs9nsN7cv6L5er5/p9XqPwFoBa4hMzl5y92+Owwo0AODRarX6BH3bB/ATxYrxePxpJpP57OP/7ajRaJztdrt3wFvBOecNAO8ZzN9F216f1w40gJPEm1hjv0Zhv7xDCu7i3+aXW0I+sj9AZKW4IueQBfZL5F9CTyNDi/wBB+swvz7kMBh+jRjCQyHexCINPEcm+jei+Q/ILZh/Z2zA4/zjASS/1WpNt9vtBwwhV+DXX8ODHdT8QuPFZDL50LKsw6BJTtyJBnCSm83mTKfTuU4D9xjmvHMeRJOzT87jRCLxKp1Ofw2S4xdzqgHcgHwfMsAScpnGLHSKJlMSgy3fwgF2C72DbHPP99G6lAFlQBlQBpQBZUAZUAaUgf+YgR8RmtPGSJ6MGgAAAABJRU5ErkJggg==);
        background-repeat: no-repeat;
        background-size: 100% auto;
        bottom: 20px;
        right: 70px;
        outline: 0;
        border:0;
      }
      .forget{
        position: absolute;
        height: 20px;
        line-height: 20px;
        right: 0;
        bottom: 20px;
        background-color: #fff;
        color: #222;
        font-size: .14rem;
        border: 0;
        outline: 0;
        border-radius: 2px;
        text-align: center;
        padding-left: 15px;
        border-left: 1px solid #ccc;
        -webkit-box-shadow: none;
        box-shadow: none;
      }
    }
    .loginbox{
      width: 100%;
      margin-top: 10px;
      .loginbtn{
        width:100%;
        margin:5px 0;
        font-size: 18px;
        padding:15px 23px;
        border-radius: 40px;
      }
      .login{
        background-image: linear-gradient(90deg,#fab3b3,#ffbcb3 73%,#ffcaba);
        color: #fff;
      }
      .loginonce{
        border: 1px solid #ff2000;
        color: #f23030;
        background: #fff;
      }
      a{
        margin-top: 20px;
        color: #999;
        font-size: 14px;
        display: inline-block;
      }
      .phone{
        float: right;
      }
    }
  }
}
</style>
