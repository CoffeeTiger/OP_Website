<template>
  <div class="userinfo-contaner">
    <div class="userinfo-panel">
      <div class="iuserinfos">
        <div class="iheader" @click="editHeader">
          <img src="../../assets/imgs/header.png" class="iheader-img" />
        </div>
        <div class="inikename">
          <img src="../../assets/imgs/useals.png" class="iuseal" />
          <div class="iname">Touchar</div>
        </div>
        <div class="iaddress">
          <img src="../../assets/imgs/eth.png" class="icurrtype" />
          <div class="iname">0X823e...9218</div>
        </div>
        <div class="ijointime">Joined February 2020</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'proifleUserinfo',
    created(){

    },
    methods: {
      editHeader() {
        this.$router.push({name:'set'})
      }
    },
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  .userinfo-contaner{
    margin-top: -1rem;
  }
  .userinfo-panel{
    width: 100%;
    height: 400px;
    background: url(../../assets/imgs/userinfotop.png) no-repeat 0 0;
    background-size: 100% 200px;
  }
  .userinfo-panel .iuserinfos{
    width: 100%;
    padding-top: 136px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .userinfo-panel .iuserinfos .iheader{
    width: 128px;
    height: 128px;
    border-radius: 64px;
  }
  .userinfo-panel .iuserinfos .iheader:hover{
    filter: brightness(.8);
  }
  .userinfo-panel .iuserinfos .iheader .iheader-img{
    width: 128px;
    height: 128px;
  }
  .userinfo-panel .iuserinfos .inikename{
    line-height: 2.56rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.44rem;
    font-weight: bolder;
  }
  .userinfo-panel .iuserinfos .inikename .iuseal{
    width: 30px;
    height: 30px;
    margin: 0 4px 0 -20px;
  }
  .userinfo-panel .iuserinfos .ijointime{
    font-size: 1.2rem;
    color: #777575;
  }
  .userinfo-panel .iuserinfos .iaddress{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: #777575;
  }
  .userinfo-panel .iuserinfos .iaddress .icurrtype{
    width: 20px;
    height: 20px;
  }
</style>
