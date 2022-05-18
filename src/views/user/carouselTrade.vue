<template>

  <div class="icontainer-subpage">

    <div class="inftinfo-contain">
      <div class="inftinfo-left">
        <div class="inft-img">
          <img src="../../assets/imgs/nfts/nft000.jpg" class="iimg"/>
        </div>
        <div class="inft-details bg_lightgray">
          <div class="iheader">{{$t('page.description')}}</div>
          <div class="ibody">
            <div class="ibody-content">
              Stakers play an important role in the Openpublish ecosystem.
            </div>
          </div>
          <div class="iheader">{{$t('page.details')}}</div>
          <div class="ibody">
            <div class="ibody-content">
              <ul>
                <li class="ikv">
                  <div class="ikey">{{$t('page.contractAddress')}}</div>
                  <div class="ivalue">0x3e11…18fb</div>
                </li>
                <li class="ikv">
                  <div class="ikey">{{$t('page.tokenId')}}</div>
                  <div class="ivalue">0x883a***8887</div>
                </li>
                <li class="ikv">
                  <div class="ikey">{{$t('page.tokenStand')}}</div>
                  <div class="ivalue">ERC-721</div>
                </li>
                <li class="ikv">
                  <div class="ikey">{{$t('page.blockChain')}}</div>
                  <div class="ivalue">Ethereum</div>
                </li>
                <li class="ikv">
                  <div class="ikey">{{$t('page.number')}}</div>
                  <div class="ivalue">50/100</div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div class="inftinfo-right">
        <div class="iheader">
          <div class="ititle color_yellow">OP-20220120-9901</div>
          <div class="ifuns">
            <b-button-group>
              <b-dropdown v-b-popover.hover.top="'Share'" right no-caret variant="purple">
                <template #button-content>
                  <img src="../../assets/imgs/share.svg" class="ishare-img"/>
                </template>
                <b-dropdown-item>
                  <b-icon icon="link45deg" variant="Secondary"></b-icon>
                  <span>{{$t('page.copyLink')}}</span>
                </b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>
                  <b-icon icon="facebook" variant="Secondary"></b-icon>
                  <span>{{$t('page.shareon')}} Facebook</span>
                </b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>
                  <b-icon icon="twitter" variant="Secondary"></b-icon>
                  <span>{{$t('page.shareon')}} Twitter</span>
                </b-dropdown-item>
              </b-dropdown>
            </b-button-group>
          </div>
        </div>

        <a href="#">
         <div class="ioriginal-links">
           <span>View original</span>
           <img src="../../assets/imgs/circle-arrow-right.svg"/>
         </div>
        </a>


        <div class="ipanelv2 imargin-top-48 imargin-bottom-24">
          <div class="ipanelv2-body bg_lightgray">
            <div class="ibody-content itrade">
              <div class="isubtitle">{{$t('page.prize')}}</div>
              <div class="icontent">

                <!-- method 1 -->
                <img src="../../assets/imgs/seal-nft.png" class="ireward-nft" v-if="prizetype==1" />

                <!-- method 2 -->
                <template v-if="prizetype==0">
                <img src="../../assets/imgs/oph.png" class="ilogo-oph" />
                <span class="inum">20</span>
                <span class="idesc">(Highest)</span>
                </template>
              </div>
            </div>
          </div>
        </div>

        <div class="ipanelv2 imargin-bottom-24">
          <div class="ipanelv2-bodyv2 bg_lightgray">
            <div class="ibody-content">
              <div class="ibody-content itrade itrade-v2">
                <div class="isubtitle">{{$t('page.saleends')}} Match 5,2022 at 12:29an CST</div>
                <div class="icontent">
                  <div class="iend-time color-gray">
                    <div class="iend-time-item">
                      <span class="inum color_yellow">5</span><br /> {{$t('page.hours')}}
                    </div>
                    <div class="iend-time-item">
                      <span class="inum color_yellow">32</span><br />{{$t('page.minutes')}}
                    </div>
                    <div class="iend-time-item">
                      <span class="inum color_yellow">45</span><br />{{$t('page.seconds')}}
                    </div>
                  </div>
                </div>
              </div>
              <div class="ihr"></div>
              <div class="ibody-content itrade itrade-v2">
                <div class="isubtitle">{{$t('page.schedule')}}</div>
                <div class="icontent icontent-v2">
                  <div class="iprogress">
                  	<div class="iprogress-inner bg_yellow" :style="{width:progress+'%'}"></div>
                    <span class="iprogress-value"></span>
                  </div>
                  <div class="iprogress-valuev2 color_yellow">50/100</div>
                </div>
              </div>
              <div class="ihr"></div>
              <div class="ibody-content itrade itrade-v2">
                <div class="isubtitle">{{$t('page.price')}}</div>
                <div class="icontent">
                  <img src="../../assets/imgs/logo/eth3.png" class="ilogo-eth"/>
                  <span class="inum">0.02</span>
                  <span class="idesc">($81.85)</span>
                </div>
              </div>

              <div class="ibody-content itrade itrade-v2 ibuy-now">
                <div class="isubtitle ititle color-gray">{{$t('page.number')}}</div>
                <div class="icontent">
                <b-button-group>
                  <b-button variant="outline-secondary" class="ibtn ibtn-left-count" @click="num(0)">
                    <b-icon icon="dash" scale="1.2"></b-icon>
                  </b-button>
                  <b-button variant="outline-secondary" class="ibtn-nums"><span class="color_white">{{nums}}</span></b-button>
                  <b-button variant="outline-secondary" class="ibtn ibtn-right-count" @click="num(1)">
                    <b-icon icon="plus" scale="1.2"></b-icon>
                  </b-button>
                </b-button-group>
                </div>
              </div>

              <div class="ibody-content itrade itrade-v2 ibuy-now ">
                <div class="ibtn ibuy-now-btn color_black imargin-top-48"  @click="buyNow" v-if="astat">{{$t('page.buyNow')}}</div>
                <div class="ibtn ibuy-now-btn color_black imargin-top-48" v-if="!astat">{{$t('page.end')}}</div>
              </div>

            </div>
          </div>
        </div>


        <div class="inft-history-lists">
          <!-- <tradePriceLists></tradePriceLists> -->
          <table class="itable itable-bond itable-bond-v2 innertable bg_darkgray">
            <thead>
              <tr class="bg_lightgray">
                <th class="ibond-th25">Buyer</th>
                <th class="ibond-th25">Date</th>
                <th class="ibond-th25">Number</th>
                <th class="ibond-th25">Commodity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="ibond-th25">Grigo</td>
                <td class="ibond-th25">
                  <div class="td-cell">
                    Aug.29,2021<br /> 11h 22m 23s
                  </div>
                </td>
                <td class="ibond-th25">1</td>
                <td class="ibond-th25">#002</td>
              </tr>
              <tr>
                <td class="ibond-th25">Grigo</td>
                <td class="ibond-th25">
                  <div class="td-cell">
                    Aug.29,2021<br /> 11h 22m 23s
                  </div>
                </td>
                <td class="ibond-th25">1</td>
                <td class="ibond-th25">#002</td>
              </tr>

              <tr>
                <td class="ibond-th25">Grigo</td>
                <td class="ibond-th25">
                  <div class="td-cell">
                    Aug.29,2021<br /> 11h 22m 23s
                  </div>
                </td>
                <td class="ibond-th25">1</td>
                <td class="ibond-th25">#002</td>
              </tr>

              <tr>
                <td class="ibond-th25">Grigo</td>
                <td class="ibond-th25">
                  <div class="td-cell">
                    Aug.29,2021<br /> 11h 22m 23s
                  </div>
                </td>
                <td class="ibond-th25">1</td>
                <td class="ibond-th25">#002</td>
              </tr>

              <tr>
                <td class="ibond-th25">Grigo</td>
                <td class="ibond-th25">
                  <div class="td-cell">
                    Aug.29,2021<br /> 11h 22m 23s
                  </div>
                </td>
                <td class="ibond-th25">1</td>
                <td class="ibond-th25">#002</td>
              </tr>

              <!-- <tr>
                <td class="ibond-th20 ipadding_left32">minted</td>
                <td class="ibond-th20">$18.58</td>
                <td class="ibond-th20">-0.85%</td>
                <td class="ibond-th20">2days</td>
                <td class="ibond-th20">12 days ago</td>
              </tr> -->

            </tbody>
          </table>
        </div>

      </div>
    </div>



    <div class="itrade-contain" v-if="false">
      <!-- left -->
      <div xs="12" sm="6" lg="4" class="itrade-contain-left">
        <tradeImg :nftid="id"></tradeImg>
        <div class="inft-detail"></div>
        <b-card no-body style="width: 22.222222rem; margin: 1.2rem auto; border-radius: 0.64rem;">
          <template #header>
            <!-- <h5 class="mb-0"><b-icon icon="file-earmark-text"></b-icon> Descriptoin</h5> -->
            <h5 class="mb-0 ititle-img-contain"><img src="../../assets/imgs/description.png" class="ititle-img" />{{$t('page.description')}}</h5>
          </template>

          <b-card-body class="itrade-card-body color-gray">
            <!-- <b-card-title>Card Title</b-card-title> -->
            <!-- <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title> -->
            <b-card-text class="icard-text">
              Create by you
            </b-card-text>
          </b-card-body>


          <b-card-header header-tag="header" class="p-1 inft-detail-secondheader" role="tab">
            <!-- <h5 class="mb-0"><b-icon icon="list-stars"></b-icon> Details</h5> -->
            <h5 class="mb-0 ititle-img-contain"><img src="../../assets/imgs/details.png" class="ititle-img" /> {{$t('page.details')}}
            </h5>
            <!-- <div class="icons-container" v-b-toggle.accordion-2 variant="outline-primary" @click="expandedClick">
              <b-icon v-if="expanded" icon="chevron-up" rotate="180"></b-icon>
              <b-icon v-else icon="chevron-down" rotate="-180"></b-icon>
            </div> -->
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel" visible>
            <b-card-body class="itrade-card-body">
              <b-card-text class="icard-text">

                <b-row>
                  <b-col sm="12" md="6" lg="6" class="icontent-left">{{$t('page.contractAddress')}}</b-col>
                  <b-col sm="12" md="6" lg="6" class="icontent-right color-violet">
                    <router-link :to="{path:'/homoe'}">0xf842***697b</router-link>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col sm="12" md="6" lg="5" class="icontent-left">{{$t('page.tokenId')}}</b-col>
                  <b-col sm="12" md="6" lg="7" class="icontent-right">0x8a82***8887</b-col>
                </b-row>

                <b-row>
                  <b-col sm="12" md="6" lg="6" class="icontent-left">{{$t('page.tokenStand')}}</b-col>
                  <b-col sm="12" md="6" lg="6" class="icontent-right">ERC-721</b-col>
                </b-row>
                <b-row>
                  <b-col sm="12" md="6" lg="5" class="icontent-left">{{$t('page.blockChain')}}</b-col>
                  <b-col sm="12" md="6" lg="7" class="icontent-right">Ethereum</b-col>
                </b-row>
                <!-- <b-row>
                      <b-col sm="12" md="6" lg="5" class="icontent-left">Metadata</b-col>
                      <b-col sm="12" md="6" lg="7" class="icontent-right">Editable</b-col>
                    </b-row> -->


              </b-card-text>
            </b-card-body>
          </b-collapse>


        </b-card>
      </div>

      <!-- right -->
      <div xs="12" sm="6" lg="8" class="itrade-contain-right">

        <div class="inft-base">
          <div class="inft-base-name">OP-20220314-2</div>
          <div class="inft-base-share">
            <b-button-group>
              <!-- <b-button v-b-popover.hover.top="'Transfer'" v-b-modal.tranfer-dialog variant="purple">
                <img src="../../assets/imgs/transfer.png" class="share-img" />
              </b-button> -->
              <b-dropdown v-b-popover.hover.top="'Share'" right no-caret variant="purple">
                <template #button-content>
                  <img src="../../assets/imgs/share.png" class="share-img" />
                </template>
                <b-dropdown-item @click="share(0)">
                  <b-icon icon="link45deg" variant="Secondary"></b-icon>
                  <span>{{$t('page.copyLink')}}</span>
                </b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item @click="share(1)">
                  <b-icon icon="facebook" variant="Secondary"></b-icon>
                  <span>{{$t('page.shareon')}} Facebook</span>
                </b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item @click="share(2)">
                  <b-icon icon="twitter" variant="Secondary"></b-icon>
                  <span>{{$t('page.shareon')}} Twitter</span>
                </b-dropdown-item>
              </b-dropdown>
            </b-button-group>
          </div>
        </div>
        <div class="inft-base">
          <div class="inft-base-owner"><span class="color-violet">{{$t('page.vieworiginal')}} <b-icon icon="arrow-right-circle-fill">
              </b-icon> </span> </div>
        </div>

        <div class="icom-panel">
          <div class="ipanel-header">
            <div class="ipanel-title ipanel-title-1 ">{{$t('page.prize')}}</div>
          </div>
          <div class="ipanel-body">
            <!-- method 1 -->
            <img src="../../assets/imgs/seal-nft.png" class="ireward-nft" v-if="prizetype==1" />

            <!-- method 2 -->
            <div class="ireward-money" v-if="prizetype==2">
              <div class="inum"><span>50%</span><span class="idesc color-gray">(Income)</span></div>
              <div class="inum">
                <img src="../../assets/imgs/logo.png" class="ieth_logo_v2 ieth_logo_v3" />
                <div><span>20</span><span class="idesc color-gray">(Hightest)</span></div>
              </div>
            </div>

          </div>
        </div>

        <div class="icom-panel">
          <div class="ipanel-header">
            <div class="ipanel-title color-gray">{{$t('page.saleends')}} March 5,2022 at 12:29:01</div>
            <!-- <img src="../../assets/imgs/description.png" class="ieth_logo"/> -->
            <b-icon icon="question-circle" variant="secondary" class="iquestion-circle" v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon>
          </div>
          <div class="ipanel-body">
            <div class="iend-time color-gray">
              <div class="iend-time-item">
                <span class="inum">5</span><br /> {{$t('page.hours')}}
              </div>
              <div class="iend-time-item">
                <span class="inum">32</span><br />{{$t('page.minutes')}}
              </div>
              <div class="iend-time-item">
                <span class="inum">45</span><br />{{$t('page.seconds')}}
              </div>
            </div>
          </div>

          <div class="icom-segmentation">
            <div class="ipanel-header">
              <div class="ipanel-title color-gray">{{$t('page.progress')}}</div>
            </div>
            <div class="ipanel-body">
              <div class="iprogress">
                <b-progress :value="progress" variant="primary" class="iprogress-item"></b-progress>
                <span class="iprogress-item iprogress-item-v">{{progress}}</span>
              </div>
            </div>
          </div>

          <div class="icom-segmentation">
            <!-- <div class="ipanel-header">
              <div class="ipanel-title">Price</div>
            </div> -->
            <div class="ipanel-body">

              <div class="ibuy-now">
                <div class="ititle color-gray">{{$t('page.price')}}</div>
                <div class="iprices">
                  <!-- <img src="../../assets/imgs/eth.png" class="ieth_logo_v2" /> -->
                  <img src="../../assets/imgs/eth.png" class="ieth_logo_v2 ieth_logo_v3" />
                  <div><span class="iprices-v">0.02</span><span class="color-gray">($56.64)</span> </div>
                </div>
              </div>

              <div class="ibuy-now">
                <div class="ititle color-gray">{{$t('page.number')}}</div>
                <b-button-group>
                  <b-button variant="outline-secondary" class="ibtn" @click="num(0)">
                    <b-icon icon="dash" scale="1.2"></b-icon>
                  </b-button>
                  <b-button variant="outline-secondary" class="ibtn-nums">{{nums}}</b-button>
                  <b-button variant="outline-secondary" class="ibtn" @click="num(1)">
                    <b-icon icon="plus" scale="1.2"></b-icon>
                  </b-button>
                </b-button-group>
              </div>

              <div class="ibuy-now ibuy-now-v2">
                <b-button block variant="primary" size="lg" class="ibuy-now-btn" @click="buyNow" v-if="astat">{{$t('page.buyNow')}}</b-button>
                <b-button block variant="secondary" size="lg" class="ibuy-now-btn" v-if="!astat">{{$t('page.end')}}</b-button>
              </div>


            </div>
          </div>

        </div>

        <div class="inft-history-lists">
          <tradePriceLists></tradePriceLists>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
  import api from '../../util/network.js'

  import tradeImg from '../../components/user/tradeImg.vue'
  import tradePriceLists from '../../components/nfts/tradePriceLists.vue'
  export default {
    name: 'carouselTrade',
    components: {
      tradeImg,
      tradePriceLists
    },
    data() {
      return {
        id: '',
        expanded: true,
        form: {
          stat: 'All'
        },
        stats: [{
          text: 'All',
          value: 'All'
        }, {
          text: 'A months',
          value: 'a'
        }, {
          text: 'Two months',
          value: 'two'
        }],
        transferAddress: '',
        progress: '50',
        nums: 1,
        astat: true,
        prizetype: '0',
        sharelink: 'OpenPublish',
      }
    },
    created() {
      let _id = this.$route.params.id
      if (!api.empty(_id)) {
        this.id = _id
        api.log(_id)
      } else {
        this.id = 'nft001.jpg'
      }
    },
    methods: {
      expandedClick() {
        this.expanded = !this.expanded
      },
      share(type) {
        if (type == 0) {
          let that = this
          this.$copyText(this.sharelink).then(function(e) {
            api.iToastClient(that, '90008', 'Info')
          }, function(e) {})
        } else if (type == 1) {
          let shareUrl = ""
          let url = 'http://www.facebook.com/sharer.php?kid_directed_site=0&u=' + encodeURIComponent(shareUrl)
          // api.redirect(url, 0)
        } else if (type == 2) {
          let shareUrl = ""
          let url = 'https://twitter.com/share?url=' + encodeURIComponent(shareUrl)
          // api.redirect(url, 0)
        }

      },
      buyNow() {

      },
      num(type) {
        if (type == 0) {
          if (this.nums > 1) {
            this.nums--
          }
        } else {
          this.nums++
        }
      }
    },
  }
</script>

<style scoped>
  @import url("../../assets/scss/nfts.css");

  .ioriginal-links{
    width: 100%;
    line-height: 1.8333rem;
    font-size: 1.3333rem;
    font-weight: 300;
    color: #6875FD;
    margin: 0.8888rem 0 auto;
  }
  .ioriginal-links > img{
    width: 1.1111rem;
    height: 1.1111rem;
    margin-left: 0.4444rem;
  }
  .itrade .isubtitle{
    width: 100%;
    line-height: 1.8333rem;
    font-size: 1.3333rem;
    font-weight: 300;
    color: #8E8A8A;
  }
  .itrade .icontent{
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    margin-top: 0.5555rem;
    font-size: 1.3333rem;
    font-weight: 300;
  }
  .itrade .icontent-v2{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .itrade .icontent .idesc{
    color: #8E8A8A;
  }
  .itrade .icontent .ilogo-oph{
    width: 1.4444rem;
    height: 1.4444rem;
    margin-right: 0.4444rem;
  }
  .itrade .icontent .ilogo-eth{
    width: 0.6666rem;
    height: 1.1111rem;
    margin-right: 0.4444rem;
  }
  .itrade .icontent .inum{
    line-height: 2.8333rem;
    font-size: 2rem;
    font-weight: 600;
    font-family: Poppins-SemiBold, Poppins;
  }
  .itrade-v2{
    width: 100%;
    padding: 0 1.3333rem;
  }
  .ihr{
    width: 100%;
    height: 0.1111rem;
    background: #3F4142;
    margin: 1.3333rem 0;
  }

  /* v2 */
  .itrade-contain{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .itrade-contain .itrade-contain-left{
    width: 22.222222rem;
  }
  .itrade-contain .itrade-contain-right{
    width: 40.555555rem;
  }

  .btns-panel {
    width: 100%;
    padding: 1.2rem;
    background-color: #fbfbfb;
    text-align: right;
    border-bottom: 0.08rem solid #eeeeee;
  }

  .inft-detail-secondheader {
    width: 100%;
    padding: 0.75rem 1.25rem !important;
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .icons-container {
    width: 4.8rem;
    max-width: 40%;
    text-align: right;
    font-size: 1rem;
  }

  .idetails-container>li {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .itrade-card-body {
    background-color: #f7f8fc;
    font-weight: 400 !important;
    line-height: 2rem;
    border-bottom-left-radius: 0.64rem;
    border-bottom-right-radius: 0.64rem;
  }

  p {
    font-weight: 400 !important;
    line-height: 2rem;
  }

  /* right */
  .inft-base {
    width: 100%;
    margin: 1.2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .inft-base .inft-base-share {
    text-align: right;
  }

  .inft-base .inft-base-name {
    line-height: 2.56rem;
    font-size: 1.777777rem;
    font-weight: 500;
    color: #313131;
  }

  .inft-base .inft-base-owner {
    font-size: 1.222222rem;
    color: #6875FD;
  }

  .ititle-img-contain {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.111111rem;
  }

  .ititle-img-contain .ititle-img {
    width: 1.2rem;
    height: 1.2rem;
    margin: auto 0.4rem;
  }

  .inft-history-lists {
    width: 100%;
    min-height: 12rem;
    margin: 1.2rem auto;
  }

  .share-img {
    width: 1.44rem;
    height: 1.44rem;
  }

  .ireward-nft {
    width: 2.8rem;
    height: 2.8rem;
  }

  .ireward-money .inum {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.92rem;
    font-weight: bold;
  }

  .ireward-money .idesc {
    font-size: 1rem;
    font-weight: 400;
  }

  .iend-time {
    width: 70%;
    display: flex;
    justify-content: flex-start;
  }
  @media only screen and (min-width: 0px) and (max-width: 767px){
    /* .iend-time {
      width: 100%;
      display: flex;
      justify-content: flex-start;
    } */
  }

  .iend-time .iend-time-item {
    width: 33.3%;
    color: #979797;
  }

  .iend-time .iend-time-item .inum {
    font-size: 1.5555rem;
    font-weight: 500;
    font-family: Poppins-Medium, Poppins;
  }

  /* .iprogress {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: baseline;
  }

  .iprogress .iprogress-item {
    width: 50%;
    font-size: 1.222222rem;
    height: 1rem;
  }

  .iprogress .iprogress-item-v {
    margin-top: -0.4rem;
    padding-left: 1rem;
  } */

  .iprogress {
    width: 17.2777rem;
    height: 1.3888rem;
    border-radius: 0.7222rem;
    background: #434648;
  }

  .iprogress .iprogress-inner {
    min-width: 1.3888rem;
    height: 1.3888rem;
    border-radius: 0.7222rem;
    text-align: center;
  }
  .iprogress .iprogress-value{
    width: 6.7777rem;
    height: 1.3888rem;
    line-height: 1.3888rem;
    position: absolute;
    font-size: 1.1111rem;
    font-weight: 500;
    margin-top: -1.3888rem;
    margin-left: 0.4444rem;
    color: #1C212B;
  }
  .iprogress-valuev2{
    line-height: 1.8333rem;
    font-size: 1.3333rem;
    font-weight: 300;
    margin: 0 0.6666rem;
  }


  .iprices {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

  }

  .iprices .iprices-v {
    font-size: 2rem;
    font-weight: bold;
  }

  .ibuy-now {
    margin: 1.44rem auto 1.44rem 0;
  }

  .ibuy-now-v2 {
    padding-top: 1rem;
  }

  .ibuy-now .ititle {
    /* margin-top: 1.2rem;
    line-height: 3.44rem;
    font-size: 1.2rem; */
  }

  .ibuy-now .ibtn-left-count {
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }
  .ibuy-now .ibtn-right-count {
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }

  .ibuy-now .ibtn-nums {
    width: 6rem !important;
    height: 3.111111rem !important;
    font-size: 1.444444rem !important;
  }

  .ibuy-now .ibuy-now-btn{
    width: 23.3888rem;
    height: 4.4444rem;
    line-height: 4.4444rem;
    border-radius: 2.2222rem;
    font-size: 1.5555rem;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
  }

  .ipanel-title {
    font-size: 1.222222rem;
  }

  .ipanel-title-1 {
    color: #313131;
    font-weight: 500;
  }

  .ieth_logo_v3 {
    margin-top: 0.16rem;
    margin-right: 0.6rem;
  }

  .icard-text{
    font-size: 1rem;
    color: #757373;
  }

  .iquestion-circle{
    width: 1.222222rem;
    height: 1.222222rem;
  }
</style>
