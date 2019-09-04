<template>
  <div class="register">
    <div class="header">
      <router-link to="/login.html" class="back">
        <span class="icon before"></span>
      </router-link>
      <span class="text">京东注册</span>
    </div>
    <div class="main">
      <div class="inputgroup">
        <span class="importent">*</span>用户名<input type="text" placeholder="用户名/手机" v-model="username" @blur="checkname()" @focus="clearnote()">
        <span style="color: red;display: inline-block;width: 100%" v-show="userseen">用户名必须是11位手机或字母开头的6-12位</span>
        <span style="color: red;display: inline-block;width: 100%" v-show="repeatcheck">用户名已存在</span>
        <span class="importent">*</span>密码<input type="password"  placeholder="密码" maxlength="16" v-model="password">
        <span style="color: red;display: inline-block;width: 100%" v-show="pwseen">密码必须是包含数字和字母的8-16位</span>
      </div>
      <div class="container-fluid">
        <div class="form-row">
          <div class="col-12 center">
            <div class="slidercaptcha card">
              <div class="card-header">
                <span :style="{color:notecolor}">请完成安全验证</span>
              </div>
              <div class="card-body"><div id="captcha"></div></div>
            </div>
          </div>
        </div>
      </div>
      <button @click="regis()" class="regbutton">注册</button>
    </div>

  </div>
</template>

<script>
  import huakuai from '../../assets/verification.js';
  export default {
    data(){
      return{
        username:'',
        password:'',
        userseen:false,
        pwseen:false,
        imgcheck:false,
        repeatcheck:false,
        notecolor:'black'
      }
    },
    methods:{
      regis(){
        this.clearnote()
        let usercheck = /^[A-Za-z][A-Za-z0-9]{5,11}$/
        let phonecheck = /^[1][0-9]{10}$/
        let passcheck = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
        let userresult = usercheck.test(this.username) ? true : phonecheck.test(this.username)
        let passresult = passcheck.test(this.password)
        if(userresult === true && this.repeatcheck===false){
          if(passresult === true){
            if(this.imgcheck === true){
              let postsent = "username="+this.username+"&password="+this.password+""
              let ajax = new XMLHttpRequest();
              ajax.open('post','http://localhost/register.php',true);
              ajax.setRequestHeader('content-type','application/x-www-form-urlencoded');
              ajax.send(postsent);
              ajax.onreadystatechange = () =>{
                if(ajax.readyState == 4 && ajax.status == 200){
                  let result = ajax.responseText;
                  this.$router.push({ path: '/login.html' })
                  this.username =  ''
                  this.password =  ''
                }
              }
            }
            else{
              this.notecolor = 'red';
            }
          }else{
            this.open()
            this.pwseen = true
          }
        }
        else{
          this.open();
          this.userseen = true
        }
      },
      open() {
        this.$message.error('用户名或密码格式错误');
      },
      imgcheckfunc(){
        let that = this;
        $('#captcha').sliderCaptcha({
          repeatIcon: 'fa fa-redo',
          setSrc: function () {
            return 'http://images.sdgxgz.com/Pic' + Math.round(Math.random() * 136) + '.jpg';
          },
          onSuccess: function () {
            that.imgcheck = true;
          }
        });
      },
      checkname(){
        let postsent = "username="+this.username+""
        let ajax = new XMLHttpRequest();
        ajax.open('post','http://localhost/checkname.php',true);
        ajax.setRequestHeader('content-type','application/x-www-form-urlencoded');
        ajax.send(postsent);
        ajax.onreadystatechange = () =>{
          if(ajax.readyState == 4 && ajax.status == 200){
            let result = ajax.responseText;
            if(result != ''){
              this.repeatcheck = true;
            }else{
              this.repeatcheck = false;
            }
          }
        }
      },
      clearnote(){
        this.userseen = false;
        this.pwseen = false;
        this.notecolor = 'black';
      }
    },
    activated(){
      this.imgcheckfunc()
      this.username =  ''
      this.password =  ''
    }
  }
</script>

<style lang="scss">
  @import "../../assets/css/login";
.register {
  position: absolute;
  .header {
    width: 100%;
    text-align: center;
    padding: 5px;
    .icon {
      width: 20px;
      height: 20px;
      display: inline-block;
      vertical-align: baseline;
      float: left;
    }
    .before {
      margin: 5px 0 0 5px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzRCQTEyN0IzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzRCQTEyN0MzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NEJBMTI3OTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NEJBMTI3QTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PulQWg8AAAF/SURBVHja7Ni9SsRAEAfwnd1wldiIlqK1td4LiL7CFQaFCHZWgmVqH+GK4FejryA+gPcA9vZ2YnVkd5yAcBLOYJKZ3UWyRbIchPsxSzb/HUBEFfPQKvIxAP89MGn7wPHpuTLOtXoGMdl1WF4rUBug9cX25tpdnufRVHBssXxGhTu0Y6yjs1P6bRTLEo9Lp56ohquLasKcbk5sifvgAMBRRc5oWoau4FIcfRJOaPoQ+i1uwt2H3mZYcdxAdhwnUATHBRTDcQBFcX2B4rg+QC+4rsA9X7gunzpQ1j7S3QuudQWz7HKFjjBbNXNR4QhaYcMCi+LqkwxvtbSX0SWNJVGjAZhQ1T4W8Qk11e2GpkexRP5ZotVBHUmXWwlk122mCZnGAPwV+b3caQxAL0iOsCCK5IpbYkjOwCqC5I787EiJQxMrUurY2YScxNI8Woq0qKZtUpR062NmQB/+RALgqM3/+mgevRhI9imMvVIcewdtqtbH/M8BdOhRD8DA40uAAQDL2thNJDxLvAAAAABJRU5ErkJggg==) no-repeat;
      background-size: 100% 100%;
    }
    .text {
      margin: 5px 0 0 0;
      font-size: 18px;
    }
  }
  .main {
    width: 100%;
    padding: 0 20px;
    margin-top: 30px;
    .inputgroup {
      position: relative;
      .importent {
        color: red;
      }
      input {
        width: 100%;
        height: 40px;
        padding: 10px 0;
        background: #fff;
        line-height: normal;
        border-radius: 0;
        border: 0;
        outline: none;
        border-bottom: 1px solid #efefef;
        margin: 10px 0;
        font-size: 16px;
      }
      .checkpwd {
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
        border: 0;
      }
      .forget {
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
  }
  .regbutton {
    width: 100%;
    padding: 10px;
    color: #fff;
    margin-top: 20px;
    font-size: 16px;
    border-radius: 10px;
    background-image: linear-gradient(90deg,#fab3b3,#ffbcb3 73%,#ffcaba);
    outline: none;
    border: none;
    box-shadow: 0 10px 20px 0 rgba(255,62,62,.2);
  }
}
</style>
