<template>
  <div class="icontainer-homepage">

    <div class="iactivey-popular ipadding-top">
      <nftsBanner></nftsBanner>
    </div>

    <div class="iactivity-btns">
      <div class="ibtn ibtn-import bg_lightgray">{{$t('page.importfromOpensea')}}</div>

      <router-link :to="{name:'publishlist'}">
        <div class="ibtn ibtn-publish bg_yellow color_black">{{$t('page.publish')}}</div>
      </router-link>
    </div>

    <div class="iactivity-lists">
      <div class="iheader">
        <div class="ititle color_yellow">{{$t('page.list')}}</div>
        <router-link :to="{name:'explorelist'}">
          <div class="imore"> <span>{{$t('page.more')}}</span><img src="../../assets/imgs/arrow-right.svg"
              class="imore-img" /> </div>
        </router-link>
      </div>
      <homePublishLists></homePublishLists>
    </div>

  </div>
</template>

<script>
  import nftsBanner from './nftsBanner.vue'
  import homePublishLists from '../../components/nfts/homePublishLists.vue';

  export default {
    name: 'nfts',
    components: {
      nftsBanner,
      homePublishLists
    }
  }
</script>

<style scoped>
  .iactivey-popular {
    width: 100%;
  }

  .iactivity-btns {
    width: 100%;
    margin: 4.285714rem 0;
    font-size: 1.5555rem;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .iactivity-btns .ibtn-import {
    width: 17.214286rem;
    height: 3.571429rem;
    line-height: 3.571429rem;
    border-radius: 1.785714rem;
    border: 0.142857rem solid #3C3C3C;
    font-size: 1.428571rem;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  .iactivity-btns .ibtn-publish {
    width: 17.214286rem;
    height: 3.571429rem;
    line-height: 3.571429rem;
    border-radius: 1.785714rem;
    /* border: 0.142857rem solid #F7B62D; */
    margin-left: 1.714286rem;
    font-size: 1.428571rem;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    color: #313131;
  }

  .iactivity-lists {
    width: 100%;
  }

  .iactivity-lists .iheader {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.7777rem;
  }

  .iactivity-lists .iheader .ititle {
    line-height: 4.714286rem;
    font-size: 1.714286rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 500;
  }

  .iactivity-lists .iheader .imore {
    line-height: 2.642857rem;
    font-size: 1.428571rem;
    font-weight: 400;
    color: #979797;
  }

  .iactivity-lists .iheader .imore .imore-img {
    width: 0.714286rem;
    height: 1.285714rem;
    margin-left: 0.4444rem;
  }

  .ipadding-top {
    padding-top: 6rem;
  }
</style>
