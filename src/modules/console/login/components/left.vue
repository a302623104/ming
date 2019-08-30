<template>
  <el-col :span="6" class="leftBox" @click="demo()">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo leftlist"
      background-color="#f8f8f8"
      text-color="#000"
      active-text-color="#e93b3d"
      active-background="#fff">
      <el-menu-item :index="value.id" @click="setindex(value.id)" v-for="value in menulist">
          <span slot="title">{{value.name}}</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
  import { mapActions } from 'vuex'
export default{
  methods:mapActions([
    'setindex',
    'getindex',
  ]),
  data(){
    return{
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
    }
  },
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
</style>
