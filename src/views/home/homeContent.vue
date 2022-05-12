<template>
  <div>
    <div class="icontainer-homepage">
      <div class="ihome-publicity">
        <div class="ipublicity-left">
          <div class="islogans">Get your Rewards, Any Time Any size Only at OpenPublish</div>
          <div class="ishares">
            <a href="https://twitter.com/OpenPublishNFT" target="_blank"><img src="../../assets/imgs/home-top-tg2.png" class="ihome-share" /></a>
            <a href="https://t.me/+YC_Eo3UDdZIzNGZk" target="_blank"><img src="../../assets/imgs/home-top-tw2.png" class="ihome-share" /></a>
            <a href="https://discord.gg/tKMbjCdVYf" target="_blank"><img src="../../assets/imgs/home-top-dis2.png" class="ihome-share" /></a>
          </div>
          <div class="imore">
            <a href="https://wiki.openpublish.io" target="_blank">
              <span class="imore-desc">{{$t('page.learnmoreaboutOpenPublish')}}</span>
              <img src="../../assets/imgs/arrow-right.png" class="ihome-more" />
            </a>
          </div>
        </div>
        <div class="ipublicity-right">
          <img src="../../assets/imgs/home-logo.png" class="ihome-logo" />
        </div>
      </div>

      <div class="ihome-panel">
        <div class="ipanel-header">
          <div class="ititle color_yellow">{{$t('page.roadMap')}}</div>
        </div>
        <div class="ipanel-body">
          <div class="ihistory-contain bg_lightgray">
            <img src="../../assets/imgs/history.png" class="ihistory" />
          </div>
        </div>
      </div>

      <div class="ihome-panel ">
        <div class="ipanel-header">
          <div class="ititle color_yellow">{{$t('page.howToGetInvolved')}}</div>
        </div>
        <div class="ipanel-body iinvote-contain">

          <div class="iinvote bg_lightgray">
            <div class="iinvote-title">NFTs</div>
            <div class="iinvote-content">{{$t('page.involvedNfts1')}} <br />{{$t('page.involvedNfts2')}}</div>
            <div class="ibtn ibtn-invote"><router-link :to="{name:'nfts'}"><span class="color_black">NFTs</span></router-link></div>
          </div>

          <div class="iinvote bg_lightgray">
            <div class="iinvote-title">{{$t('page.trading')}}</div>
            <div class="iinvote-content">{{$t('page.involvedTrading')}}</div>
            <!-- <div class="ibtn ibtn-invote color_black">NFTs</div> -->
          </div>

          <div class="iinvote bg_lightgray">
            <div class="iinvote-title">{{$t('page.staking')}}</div>
            <div class="iinvote-content">{{$t('page.involvedStaking1')}} <br />{{$t('page.involvedStaking2')}} <br />{{$t('page.involvedStaking3')}}</div>
            <div class="ibtn ibtn-invote"><router-link :to="{name:'rewards'}"><span class="color_black">{{$t('page.STAKE1')}}</span></router-link></div>
          </div>

          <div class="iinvote bg_lightgray">
            <div class="iinvote-title">{{$t('page.bonding')}}</div>
            <div class="iinvote-content">{{$t('page.involvedBonding1')}} <br />{{$t('page.involvedBonding2')}}<br />{{$t('page.involvedBonding3')}}</div>
            <div class="ibtn ibtn-invote color_black"><router-link :to="{name:'bond'}"><span class="color_black">{{$t('page.BOND1')}}</span></router-link></div>
          </div>

        </div>
      </div>

      <div class="ihome-panel">
        <div class="ipanel-header">
          <div class="ititle color_yellow">{{$t('page.aboutOpenPublish')}}</div>
        </div>
        <div class="ipanel-body">
          <div class="ihome-media-contain bg_lightgray">
            <iframe class="ivideo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen frameborder="0" sandbox="allow-same-origin allow-scripts allow-presentation"
              src="https://www.youtube.com/embed/7bS9bz-fDI8?autoplay=0&amp;controls=1&amp;loop=1&amp;modestbranding=1&amp;rel=0"
              title="Meet OpenSea"></iframe>
          </div>
        </div>
      </div>

      <div class="ihome-panel">
        <div class="ipanel-header">
          <div class="ititle color_yellow">FAQ</div>
        </div>
        <div class="ipanel-body">

          <div class="icollapse imargin-bottom-24">
            <div :class="open1?'icollapse-title-contain':'icollapse-title-contain icollapse-title-contain-close'">
              <div class="icollapse-title" @click="show(1)">
                <div class="ititle">{{$t('page.faqATitle1')}}</div>
                <div class="iarrow">
                  <img src="../../assets/imgs/arrow-down.png" class="icollepse-arrow" v-if="!open1" />
                  <img src="../../assets/imgs/arrow-up.png" class="icollepse-arrow" v-if="open1" />
                </div>
              </div>
            </div>
            <div :class="open1?'ibody-open':'ibody-close'">
              <div class="icontent">{{$t('page.faqAContant1')}}<br /><br /> {{$t('page.faqAContant2')}}</div>
            </div>
          </div>

          <div class="icollapse imargin-bottom-24 ">
            <div :class="open2?'icollapse-title-contain':'icollapse-title-contain icollapse-title-contain-close'">
              <div class="icollapse-title" @click="show(2)">
                <div class="ititle">{{$t('page.faqBTitle1')}}</div>
                <div class="iarrow">
                  <img src="../../assets/imgs/arrow-down.png" class="icollepse-arrow" v-if="!open2" />
                  <img src="../../assets/imgs/arrow-up.png" class="icollepse-arrow" v-if="open2" />
                </div>
              </div>
            </div>
            <div :class="open2?'ibody-open':'ibody-close'">
              <div class="icontent">{{$t('page.faqBContant1')}}</div>
            </div>
          </div>

          <div class="icollapse imargin-bottom-24 ">
            <div :class="open3?'icollapse-title-contain':'icollapse-title-contain icollapse-title-contain-close'">
              <div class="icollapse-title" @click="show(3)">
                <div class="ititle ititle-v2">{{$t('page.faqCTitle1')}}</div>
                <div class="iarrow">
                  <img src="../../assets/imgs/arrow-down.png" class="icollepse-arrow" v-if="!open3" />
                  <img src="../../assets/imgs/arrow-up.png" class="icollepse-arrow" v-if="open3" />
                </div>
              </div>
            </div>
            <div :class="open3?'ibody-open':'ibody-close'">
              <div class="icontent">
                <div class="ilittle_title">{{$t('page.faqCContant1')}}</div>
                <ul>
                  <li>{{$t('page.faqCContant2')}}</li>
                  <li>{{$t('page.faqCContant3')}}</li>
                  <li>{{$t('page.faqCContant4')}}</li>
                  <li>{{$t('page.faqCContant5')}}</li>
                  <li>{{$t('page.faqCContant6')}}</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="icollapse imargin-bottom-24">
            <div :class="open4?'icollapse-title-contain':'icollapse-title-contain icollapse-title-contain-close'">
              <div class="icollapse-title" @click="show(4)">
                <div class="ititle ititle-v2">{{$t('page.faqDTitle1')}}</div>
                <div class="iarrow">
                  <img src="../../assets/imgs/arrow-down.png" class="icollepse-arrow" v-if="!open4" />
                  <img src="../../assets/imgs/arrow-up.png" class="icollepse-arrow" v-if="open4" />
                </div>
              </div>
            </div>
            <div :class="open4?'ibody-open':'ibody-close'">
              <div class="icontent">
                <ul>
                  <li>{{$t('page.faqDContant1')}}</li>
                  <li>{{$t('page.faqDContant2')}}</li>
                  <li>{{$t('page.faqDContant3')}}</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'homecontent',
    data() {
      return {
        open1: false,
        open2: false,
        open3: false,
        open4: false,
      }
    },
    methods: {
      show(v) {
        if (v == 1) {
          this.open1 = !this.open1
        } else if (v == 2) {
          this.open2 = !this.open2
        } else if (v == 3) {
          this.open3 = !this.open3
        } else if (v == 4) {
          this.open4 = !this.open4
        }
      },
    }
  }
</script>

<style scoped>
  .ihome-publicity {
    width: 100%;
    height: 37.1111rem;
    display: flex;
    justify-content: space-between;
  }

  .ipublicity-left {
    width: 38.0555rem;
    z-index: 2;
  }

  .ipublicity-left .islogans {
    width: 38.0555rem;
    padding-top: 7.8888rem;
    line-height: 3.7777rem;
    font-size: 2.8888rem;
    font-family: Poppins-Bold, Poppins;
    font-weight: 600;
  }

  .ipublicity-left .ishares {
    width: 100%;
    margin: 2.2222rem auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .ipublicity-left .ishares .ihome-share {
    width: 2.2222rem;
    height: 2.2222rem;
    margin-right: 3.1111rem;
  }

  .ipublicity-left .ishares .ihome-share:hover {
    opacity: 0.6;
  }

  .ipublicity-left .imore {
    width: 100%;
  }

  .ipublicity-left .imore .imore-desc{
    line-height: 1.5555rem;
    font-size: 1rem;
    font-family: HelveticaNeue-Medium, HelveticaNeue;
    font-weight: 500;
    color: #A1730E !important;
  }

  .ipublicity-left .imore .ihome-more {
    width: 1.8333rem;
    height: 1.5555rem;
    margin-left: 1rem;
  }

  .ipublicity-left .imore:hover {
    opacity: 0.6;
  }

  .ipublicity-right .ihome-logo {
    width: 38.8888rem;
    height: 38.8888rem;
    margin-top: -1.8888rem;
    margin-left: -10.2777rem;
    z-index: 1;
  }

  .ihome-panel {
    width: 100%;
    margin-bottom: 6.1111rem;
  }

  .ihome-panel .ipanel-header .ititle {
    line-height: 3.8333rem;
    font-size: 2.3333rem;
    font-family: Poppins-Bold, Poppins;
    font-weight: 500;
  }

  .ihome-panel .ipanel-body {
    width: 100%;
    margin-top: 2.6666rem;
  }

  .ihistory-contain {
    width: -webkit-calc(100% - 0.2222rem);
    height: 36.2777rem;
    border-radius: 0.8888rem;
    border: 0.1111rem solid #3F4142;
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .ihistory-contain .ihistory {
    width: 65rem;
    height: 34.8333rem;
  }

  .iinvote-contain {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .iinvote-contain .iinvote {
    width: 32.7777rem;
    overflow: hidden;
    padding: 1.6666rem 1.3888rem;
    border: 0.1111rem solid #3F4142;
    border-radius: 0.8888rem;
    margin-bottom: 1.1111rem;
  }

  .iinvote-contain .iinvote .iinvote-title {
    width: 100%;
    line-height: 2.6666rem;
    font-size: 1.7777rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 400;
    margin-bottom: 0.5555rem;
  }

  .iinvote-contain .iinvote .iinvote-content {
    width: 100%;
    min-height: 15.5555rem;
    line-height: 2rem;
    font-size: 1.3333rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 300;
    color: #B4B4B4;
  }

  .iinvote-contain .iinvote .ibtn-invote {
    width: 8.2222rem;
    height: 2.7777rem;
    margin-top: 1.6666rem;
    line-height: 2.7777rem;
    border-radius: 1.3888rem;
    font-size: 1.5rem;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
  }

  .ihome-media-contain {
    /* width: 13.8rem;
  opacity: 0.9;
  overflow: hidden;
  background-color: #FFFFFF6e; */
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    /* border: 0.04rem solid #3F4142;
  border-radius: 0.36rem;
  overflow: hidden; */
  }

  .ihome-media-contain .ivideo {
    /* width: 100%;
  height: auto;
  margin: 0 auto; */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }


  .icollapse {
    width: 100%;
    border: 0.1111rem solid #3F4142;
    border-radius: 0.8888rem;
    overflow: hidden;
    font-family: Poppins-Regular, Poppins;
  }

  .icollapse .icollapse-title-contain {
    width: 100%;
    background-color: #252525;
    border-top-left-radius: 0.8888rem;
    border-top-right-radius: 0.8888rem;
  }

  .icollapse .icollapse-title-contain-close {
    border-bottom-left-radius: 0.8888rem;
    border-bottom-right-radius: 0.8888rem;
  }

  .icollapse .icollapse-title-contain .icollapse-title {
    height: 6.3888rem;
    width: -webkit-calc(100% - 3.3333rem);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5555rem;
    font-weight: 400;
  }

  .icollapse .icollapse-title-contain .icollapse-title .ititle {
    width: -webkit-calc(100% - 3.3333rem);
  }

  .icollapse .icollapse-title-contain .icollapse-title .ititle-v2 {
    line-height: 2.2222rem;
  }

  .icollapse .icollapse-title-contain .icollapse-title .icollepse-arrow {
    width: 1rem;
    height: 0.5555rem;
  }

  .ibody-open {
    width: 100%;
    /* min-height: 9.6rem;
		transition: min-height .5s; */
    background: #3a3a3a;
    border-radius: 0 0 0.8888rem 0.8888rem;
    overflow: hidden;
    /* font-family: OpenSans-Regular, OpenSans; */
  }

  .ibody-close {
    width: 100%;
    height: 0;
    /* height: 0;
		min-height: 0;
		transition: min-height .5s; */
    background: #3a3a3a;
    border-radius: 0 0 0.8888rem 0.8888rem;
    overflow: hidden;
  }

  .icollapse .icontent {
    width: -webkit-calc(100% - 3.3333rem);
    margin: 0 auto;
    padding: 1.6666rem 0;
    line-height: 2rem;
    font-size: 1.3333rem;
    font-weight: 300;
    color: #B4B4B4;
    font-family: Poppins-Regular, Poppins;
  }
  .icollapse  .ilittle_title{
    margin: 1.9444rem 0 1.6666rem;
  }
  .icollapse .icontent ul {
    width: 100%;
  }

  .icollapse .icontent ul>li {
    line-height: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0.6666rem auto;
  }
</style>
