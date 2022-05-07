<template>
  <div>
    <div class="iprofileimg-contain" @click="tradePage">
      <div class="iprofileimg">
        <!-- <img src="../../assets/imgs/list-img.png" class="ip-img"/> -->
        <img :src="require('../../assets/imgs/nfts/' + pid)" class="ip-img"/>
      </div>
      <ul class="ip-content">
        <li class="ip-name">OP-20220314-7</li>
        <li class="ip-value">{{$t('page.blockChain')}} : <span class="ivalue">Ethereum</span></li>
        <!-- <li class="ip-value">#88858</li> -->
        <!-- <li class="ip-name">CrpyAPI</li>
        <li class="ip-value">#88858</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    name:'publishImg',
    props: {
      pid: {
        type: String,
        default: ''
      },
      pname:{
        type:String,
        default:''
      },
      pvalue:{
        type:String,
        default:''
      }
    },methods: {
      tradePage() {
       this.$router.push({name:'publish', params:{id: this.pid}})
      }
    },
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  .iprofileimg-contain{
    width: 100%;
    max-width: 320px;
    margin: 0.64rem auto;
    border: 1px solid #f0f0f0;
    border-radius: 0.64rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .iprofileimg-contain:hover{
    filter: brightness(0.96);
  }
  .iprofileimg{
    width: 100%;
    max-width: 320px;
    height: 362px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fdfdfd;
  }
  .iprofileimg-contain .ip-img{
    width: 100%;
    height: auto;
    max-width: 320px;
    max-height: 360px;
    /* margin-top: 2px; */
  }
  .iprofileimg-contain .ip-content{
    width: -webkit-calc(100% - 1.2rem);
    margin: 0.6rem auto;
    line-height: 1.6rem;
    color: #787676;
  }
  .iprofileimg-contain .ip-content .ip-name{
    width: 100%;
    margin: 0.8rem auto;
    font-weight: bolder;
    color: #3b3b3b;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .iprofileimg-contain .ip-content .ip-value{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .iprofileimg-contain .ip-content .ip-value .ivalue{
    color: #3b3b3b;
  }
</style>
