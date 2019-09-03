<template>
  <div class="list">
    <el-row class="adv">
      <el-col :span="8"><img
        src="//m.360buyimg.com/mobilecms/s250x200_jfs/t1/55965/3/8365/32141/5d5e7e12E17938314/8506e90d4df6e650.png">
      </el-col>
      <el-col :span="8"><img
        src="https://m.360buyimg.com/mobilecms/s250x200_jfs/t1/78104/23/8004/36171/5d5e7e17E4f232c87/b1bb184123fcc624.png">
      </el-col>
      <el-col :span="8"><img
        src="https://m.360buyimg.com/mobilecms/s250x200_jfs/t1/59575/13/7966/34907/5d5e7e1bEc3995d21/accaab86153239a0.png"
        alt=""></el-col>
    </el-row>
    <div class="itembox" :style="{height:boxHeight + 'px'}" @touchstart="listtouchStart" @touchmove="listmove" @touchend="listtouchend">
      <el-row class="floor_item item1" justify="space-around" type="flex">
        <el-col :span="4" v-for="value,index in list[0]" :key="index">
          <a href="javascript:void (0)">
            <img alt="" :src="value.url">
            <span>{{value.name}}</span>
          </a>
        </el-col>
      </el-row>
      <el-row class="floor_item item2" justify="space-around" type="flex">
        <el-col :span="4" v-for="value,index in list[1]" :key="index">
          <a href="javascript:void (0)">
            <img alt="" :src="value.url">
            <span>{{value.name}}</span>
          </a>
        </el-col>
      </el-row>
      <ul class="contorl">
        <li class="active"></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list.vue',
    data(){
      return{
        boxHeight:160,
        list:[
          [
            {'name':'京东超市','url':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png'},
            {'name':'数码电器','url':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png'},
            {'name':'京东服饰','url':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png'},
            {'name':'京东生鲜','url':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png'},
            {'name':'京东到家','url':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png'},
            {'name':'充值缴费','url':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png'},
            {'name':'9.9元拼购','url':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png'},
            {'name':'领券','url':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png'},
            {'name':'赚钱','url':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png'},
            {'name':'PLUS会员','url':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png'},
          ],
          [
            {'name':'海囤全球','url':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/14555/23/1446/4195/5c120e71E947f3ca1/cdbad904f61e1fb7.png'},
            {'name':'京东拍卖','url':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/32245/22/2820/6521/5c6df9b3E1466dcd3/9f4cd68276f4e971.png'},
            {'name':'唯品会','url':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/25651/12/1391/4836/5c120c34Eb93a70fa/3a1735f6a79d0721.png'},
            {'name':'玩3C','url':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t28723/45/1332082024/6421/ead422d3/5cdd0be3Nfce1ba98.jpg.dpg'},
            {'name':'沃尔玛','url':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/19699/10/1440/6755/5c120ca6Eaa521f62/f9d57f39e55c7321.png'},
            {'name':'美妆馆','url':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/19745/21/1415/4886/5c120cbbEe58af0bf/4d19bf58d42fc9c4.png'},
            {'name':'京东旅行','url':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/27748/22/1419/4913/5c120d0eEa52ea62f/3c2b78a40edc97b2.png'},
            {'name':'拍拍二手','url':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/14996/29/2195/11094/5c1afdb7Ee54cf069/d6ab6a0f64fee068.png'},
            {'name':'物流查询','url':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t5842/205/151189300/13247/a6de2d/591d94edNc42fb94d.png'},
            {'name':'全部','url':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/28873/5/1455/6885/5c120bb9Eb6610bee/29d349f92aeb6eaf.png'},
          ]
        ],
        startCilck:0,
        moveleft:0
      }
    },
    methods:{
      getHeight(){
        let item = document.getElementsByClassName('item1');
        var img = item[0].getElementsByTagName('img');
        if(img[img.length-1].offsetHeight === 0){
          img[img.length-1].onload = ()=>{
            this.boxHeight = item[0].offsetHeight + 20
          }
        }else{
          this.boxHeight = item[0].offsetHeight + 20
        }
      },
      listtouchStart(e){
        this.startCilck = e.touches[0].clientX
      },
      listmove(e) {
        clearTimeout(this.timeOutEvent);
        this.timeOutEvent = 0;
        e.preventDefault();
        this.moveleft = e.touches[0].clientX-this.startCilck;
      },
      listtouchend(){
        let item1 = document.getElementsByClassName('item1');
        let item2 = document.getElementsByClassName('item2');
        let ul = document.getElementsByClassName('contorl');
        if(this.moveleft < -50){
          item1[0].style.left = '-100%'
          item2[0].style.left = '0%'
          ul[0].children[0].classList.remove('active')
          ul[0].children[1].classList.add('active')
        }
        if(this.moveleft > 50){
          item1[0].style.left = '0%'
          item2[0].style.left = '100%'
          ul[0].children[0].classList.add('active')
          ul[0].children[1].classList.remove('active')
        }
        // this.save = this.boxleft;
      },
    },
    mounted(){
      window.addEventListener('resize', this.getHeight);
      this.getHeight()
    }
  }
</script>

<style lang="scss" scoped>
  .list {
    position: relative;
    top: -10px;
    z-index: 15;
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
    .adv {
      img {
        width: 100%;
      }
    }

    .itembox {
      width: 100%;
      position: relative;
      height: 160px;
      overflow: hidden;

      .item1 {
        position: absolute;
        top: 0;
        left: 0%;
        width: 100%;
      }

      .item2 {
        position: absolute;
        top: 0;
        left: 100%;
        width: 100%;
      }

      .floor_item {
        flex-wrap: wrap;
        transition : .5s;
        .el-col {
          margin: 10px 5px 5px 5px;
        }

        a {
          width: 100%;
          display: block;
          color: #000;
          text-decoration: none;
          font-size: 14px;
          text-align: center;

          img {
            width: 60%;
            display: block;
            margin: 0 auto;
          }
        }
      }
      .contorl{
        position: absolute;
        bottom: 0;
        width:100%;
        text-align: center;
        li{
          display: inline-block;
          width: 8px;
          height: 8px;
          background-color: #ccc;
          margin: 0 5px;
          border-radius: 5px;
        }
        .active{
          background-color: red;
          width: 20px;
        }
      }
    }
  }
</style>
