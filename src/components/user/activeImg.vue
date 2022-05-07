<template>
  <div>
    <div class="iprofileimg-contain" @click="tradePage">
      <div class="iprofileimg">
        <img :src="require('../../assets/imgs/nfts/' + pid)" class="ip-img"/>
      </div>
      <ul class="ip-content">
        <li class="ip-name">{{pname}}</li>
        <li class="ip-value">{{$t('page.blockChain')}} : <span class="ivalue">Ethereum</span></li>
        <li class="ip-value">{{pvalue}}</li>
      </ul>
      <div class="ip-status">
        <div class="ip-status-left">
          <div class="istatus-Waiting" v-if="waiting==0">{{$t('page.waiting')}}</div>
          <div class="istatus-Winner" v-if="winner==1">{{$t('page.winner')}}</div>
        </div>
        <div class="ip-status-right">
          <b-button variant="primary" v-if="winner==1&&receive==0">{{$t('page.receive')}}</b-button>
          <b-button disabled v-if="winner==1&&receive==1">{{$t('page.received')}}</b-button>
          <div class="istatus-timer" v-if="waiting==0">
            <div class="itimer-cell">{{timer.split(':')[0]}}</div>:
            <div class="itimer-cell">{{timer.split(':')[1]}}</div>:
            <div class="itimer-cell">{{timer.split(':')[2]}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      pid: {
        type: String,
        default: ''
      },
      pname:{
        type:String,
        default:'CrpyAPI-20220120-8851'
      },
      pvalue:{
        type:String,
        default:'#8372 #2923'
      },
      waiting:{
        type:String,
        default:'0'
      },
      receive:{
        type:String,
        default:'1'
      },
      winner:{
        type:String,
        default:'1'
      },
      timer:{
        type:String,
        default:'00:01:01'
      }
    },methods: {
      tradePage() {
       this.$router.push({path:'/carouselTrade', params:{id: this.pid}})
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
    font-weight: 500;
    color: #313131;
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
  .iprofileimg-contain .ip-status{
    width: -webkit-calc(100% - 1.2rem);
    margin: 0.6rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .iprofileimg-contain .ip-status .istatus-Waiting{
    border: 0.12rem solid #737dd4;
    padding: 0.16rem 0.4rem;
    border-radius: 0.32rem;
    color: #737dd4;
  }
  .iprofileimg-contain .ip-status .istatus-Winner{
    border: 0.12rem solid #a923b8;
    padding: 0.16rem 0.4rem;
    border-radius: 0.32rem;
    color: #a923b8;
  }
  .iprofileimg-contain .ip-status .ip-status-right{
    font-size: 1.2rem;
  }
  .iprofileimg-contain .ip-status .ip-status-right .istatus-timer{
    display: flex;
    justify-content: center;
    align-items:center;
  }
  .istatus-timer .itimer-cell{
    border: 0.12rem solid #c8c6c7;
    padding: 0.2rem 0.4rem;
    border-radius: 0.32rem;
    margin: 0 0.2rem;
  }
  .istatus-timer .itimer-cell:hover{
    background-color: #c8c6c7;
    color: #FFF;
  }
</style>
