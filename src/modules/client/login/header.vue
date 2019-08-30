<template>
    <el-row class="header-nav">
      <el-col :span="2">
      <a href="http://192.168.1.9:8080/console.html"><img src="../../../assets/menu.png" alt=""></a>
      </el-col>
      <el-col :span="18" class="search">
          <i class="jd-header-icon-jd"></i>
          <i class="el-icon-search"></i>
          <input type="text" class="search_input" placeholder="格兰仕空调">
      </el-col>
      <el-col :span="2" :offset="1  " class="right">
        <a href="http://localhost:8080/login.html"><img src="../../../assets/admin.png" alt=""></a>
      </el-col>
    </el-row>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
  .header-nav-fix{
    position: fixed!important;
    top: 0;
    width: 100%;
    background-color: rgb(228, 49, 48) !important;
    z-index: 888 !important;
  }
  .header-nav{
    height: 50px;
    padding:10px;
    background-color: transparent;
    a{
      display: inline-block;
      vertical-align:top;
    }
    .search{
      display: inline-block;
      vertical-align:top;
      height: 100%;
      margin: 0 0 0 5px;
      position: relative;

      .jd-header-icon-jd{
        width: 20px;
        height: 15px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAAAXNSR0IArs4c6QAAA/tJREFUWAnNmF9oU1ccx8/v5iZXov2nTVOloowJDjfYk4w1SW2xVdDik08iYw8Dqw9j4tsYFMZe3HAMBg593B5mVQSLD0abalL/FcUHNwTFvsjU/HFNW21N0tzfvifNiTf3pqajtc2B8Pv9vvec3/3c8+fec0KiSkm0hyIsuNNazaD6tY0jl8alFm8P/SEEH7Belz5BhJkSRBNw0gjjJOgesxh1Gfqd5kjkH3ubSrFeSVwKDVBgFPWCuR52I36f4EF3ytz5TE4kAsFrgumkb9vWC3TqVE7qlYpWSVwODT25A8BnEn8/fJwKhbrmu+eKAVqANpl5vhpvD57g/ftdFr3gvpchdmmugxjiWZPZTWw2YKybTKKtxGI7eu1DO0RxOnyTev5iFa4dtl5/L4DrWn0DdPZs1noj5SdCoS2c5z4i+oqZ1yhdWpNFHxbdmP9G9CelL/sQt0Sjj/03YkfZo3+KZXRHgby1/MN4V9cmFS87oLqxPxJ50rK+tROvnrtKK1pPLjv7ndJWDFACYBrMkNfYh+F+pYCK9otkd/cG6a8ooATwXbnyjEj8Jn1VMDd1nsnukvGKA0oIN3tOSmstLMxuGdcEYOPI1TEM81MrIDGFagZwDozLVzSJVu7v12qiB+cAKWHtQcxD11Qs1lRDgKKwO7JCZvN5Xy0BOr5qJj6XtQPItM7ae9J3C5GqHUAy26yAWNWzjcPDEwsBdGyBrImWwi9ss1h8bs2FHc5TQHJVQCbhsTaUfoM3V3GnYq+30DjxIvUZgOTOu1SwRRuWQVVA1PGXWkmH6A2Fw6/LtMUGPHvMngKAQ1J7JyD39nqJeXNZY+Z4WbzIIBns7MBGdp8tzbRhuC9L7Z2AyX8n9qLr5eGnVPBhv1UKFumkAzs/MDl/zn4PjcSv9UNDL2X6eQFlYxwVf3YyaGGn9v+VZKCjNyMyt3Hqa7a2Rm9MGobnuNIcL8epnp6Wmek3X2Y58y2erE5VnLMU93mNgXJt4VE6sKcpJ17txk7liMlmu70lVm2eNHFQ9Z68rieDoR9NU6zHim7DUbsNcJvld9DeWMaaxv0LWSDJ5/Hj8UAwj7nlxqJqwBGzEVPjowxPbqmUV2mof8QXjV5UsbS6aXJhBSHJXCk5xVgZEqd9sVjZxlJdsls84NdSK6Qs5psvbaEtUUoQH/LFouftueadg6oi5kQOXfc9zg99SlsqK78W6Nk/Vxvuj/2xmANO3scxB9XNASb/VxnQNfHL2uj1B0pfEktiDC+H3zWPfrrafzQ6IG5jMPDipUlAjeOp/sJ/Jvebm+pGaXBwuhqQptEjDN9NZ73CoE5BTzNTGi+ruCa0u6u8ntG6cLhs7+ds+1b5D7N0Tl8rtx1wAAAAAElFTkSuQmCC) no-repeat;
        background-size: 20px 15px;
        margin: 8px 8px 0 15px;
        position: relative;
        z-index: 1;
        float: left;
        &:after{
          content: "";
          position: absolute;
          border-right: 1px solid #ddd;
          top: 0;
          left: 26px;
          height: 16px;
        }
      }
      .el-icon-search{
        margin: 8px 8px 0 5px;
        z-index: 1;
        position: relative;
      }
      .search_input{
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        height: 30px;
        border-radius: 20px;
        border: 1px solid #ccc;
        font-size: 14px;
        padding-left: 70px;
        &:focus{
          outline: none;
        }
      }
    }
    .right{
      height: 100%;
      img{
        width: 80%;
      }
    }
  }
</style>
