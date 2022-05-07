<template>
  <div>
    <b-row class="irow icontainer-subpage">
      <!-- left -->
      <b-col xs="12" sm="6" lg="4">
        <tradeImg :nftid="id"></tradeImg>
        <b-card
            no-body
            style="max-width: 400px; margin: 1.2rem auto;border-radius: 0.64rem;">
            <template #header>
              <!-- <h5 class="mb-0"><b-icon icon="file-earmark-text"></b-icon> Descriptoin</h5> -->
              <h5 class="mb-0 ititle-img-contain"><img src="../../assets/imgs/description.png" class="ititle-img"/> {{$t('page.description')}}</h5>
            </template>

            <b-card-body class="itrade-card-body">
              <!-- <b-card-title>Card Title</b-card-title> -->
              <!-- <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title> -->
              <b-card-text>Create by you</b-card-text>
            </b-card-body>


            <b-card-header header-tag="header" class="p-1 inft-detail-secondheader" role="tab">
              <!-- <h5 class="mb-0"><b-icon icon="list-stars"></b-icon> Details</h5> -->
              <h5 class="mb-0 ititle-img-contain"><img src="../../assets/imgs/details.png" class="ititle-img"/> {{$t('page.details')}}</h5>
              <!-- <div class="icons-container" v-b-toggle.accordion-2 variant="outline-primary" @click="expandedClick">
                <b-icon v-if="expanded" icon="chevron-up" rotate="180"></b-icon>
                <b-icon v-else icon="chevron-down" rotate="-180"></b-icon>
              </div> -->
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel" visible>
              <b-card-body class="itrade-card-body">
                <b-card-text>

                  <b-row>
                    <b-col sm="12" md="6" lg="6" class="icontent-left">{{$t('page.contractAddress')}}</b-col>
                    <b-col sm="12" md="6" lg="6" class="icontent-right color-violet">0x8882***8887</b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="12" md="6" lg="5" class="icontent-left">{{$t('page.tokenId')}}</b-col>
                    <b-col sm="12" md="6" lg="7" class="icontent-right">0x8a82***881b</b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="12" md="6" lg="6" class="icontent-left">{{$t('page.tokenStand')}}</b-col>
                    <b-col sm="12" md="6" lg="6" class="icontent-right">ERC-721</b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="12" md="6" lg="5" class="icontent-left">{{$t('page.blockChain')}}</b-col>
                    <b-col sm="12" md="6" lg="7" class="icontent-right">Ethereum</b-col>
                  </b-row>


                </b-card-text>
              </b-card-body>
            </b-collapse>


          </b-card>
      </b-col>

      <!-- right -->
      <b-col xs="12" sm="6" lg="8">

        <div class="inft-base">
          <div class="inft-base-owner color-gray">{{$t('page.publishname')}}<span class="color-violet"></span> </div>
          <div class="inft-base-name">OP-20220314-1</div>

        </div>
        <b-card no-body style="margin: 1.2rem auto;border-radius: 0.64rem;">
          <b-card-body>
            <b-card-text>

              <b-form @submit="onSubmit">

                <!-- Blockchain -->
                <div class="ifrom-group">
                  <div class="ifrom-group-label">
                    <div class="ilable ilable-small color-gray">{{$t('page.blockChain')}}</div>
                  </div>
                  <div class="iinput-area">
                     <b-form-select v-model="form.blockchain" :options="blockchainoption" class="icustom-select"></b-form-select>
                  </div>
                </div>

                <div class="ifrom-group">
                  <div class="ifrom-group-label">
                    <div class="ilable ilable-small color-gray">{{$t('page.price')}}</div>
                  </div>
                  <div class="iinput-area iinputs-contain">
                    <b-form-input type="number" v-model="form.price" @input="changevalue" :placeholder="$t('page.pleaseenterprice')" min="0" max="999999" class="iinputs-contain-item1" required></b-form-input>
                    <b-form-select v-model="form.pricetype" :options="priceoption" class="icustom-select iinputs-contain-item2"></b-form-select>
                  </div>
                </div>

                <div class="ifrom-group">
                  <div class="ifrom-group-label">
                    <div class="ilable ilable-small color-gray">{{$t('page.totalcount')}}</div>
                  </div>
                  <div class="iinput-area">
                    <b-form-input type="number" v-model="form.totalcount" @input="changevalue" :placeholder="$t('page.pleaseentertotalcount')" min="0" max="999999" required></b-form-input>
                  </div>
                </div>

                <div class="ifrom-group">
                  <div class="ifrom-group-label">
                    <div class="ilable ilable-small color-gray">{{$t('page.income')}}</div>
                  </div>
                  <div class="iinput-area iinputs-contain">
                    <b-form-input type="number" v-model="form.income" placeholder="Income" disabled class="iinputs-contain-item1"></b-form-input>
                    <b-form-select v-model="form.pricetype" :options="priceoption" class="icustom-select iinputs-contain-item2"></b-form-select>
                  </div>
                </div>

                <div class="ifrom-group">
                  <div class="group-title">{{$t('page.activityinformation')}}</div>
                </div>

                <div class="ifrom-group">
                  <div class="ifrom-group-label">
                    <div class="ilable ilable-small color-gray">{{$t('page.prize')}}</div>
                    <b-icon icon="question-circle" class="iquestion-circle" variant="secondary" v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon>
                  </div>
                  <div class="iinput-area">
                     <b-form-select v-model="form.reward" :options="rewardoption" @change="rewardchange" class="icustom-select"></b-form-select>
                  </div>
                </div>

                <div class="ifrom-group" v-if="form.rateShow">
                  <div class="ifrom-group-label">
                    <div class="ilable ilable-small color-gray">{{$t('page.bounspoolrate')}}</div>
                    <b-icon icon="question-circle" class="iquestion-circle" variant="secondary" v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon>
                  </div>
                  <div class="iinput-area">
                     <b-form-select v-model="form.rate" :options="rateoption" class="icustom-select"></b-form-select>
                  </div>
                </div>

                <div class="ifrom-group">
                  <div class="ifrom-group-label">
                    <div class="ilable ilable-small color-gray">{{$t('page.duration')}}</div>
                    <b-icon icon="question-circle" class="iquestion-circle" variant="secondary" v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon>
                  </div>
                  <div class="iinput-area">
                     <b-form-select v-model="form.duration" :options="durationoption" class="icustom-select"></b-form-select>
                  </div>
                </div>

                <div class="ifrom-btn">
                  <b-button variant="primary" size="lg" type="submit">&ensp;&ensp; {{$t('page.publish')}} &ensp;&ensp;</b-button>
                </div>

              </b-form>

            </b-card-text>
          </b-card-body>
        </b-card>

      </b-col>
    </b-row>

  </div>
</template>

<script>
  import api from '../../util/network.js'

  import tradeImg from '../../components/user/tradeImg.vue'
  export default{
    name:'trade',
    components: {
      tradeImg
    },data() {
      return {
        id:'',
        expanded: true,
        form:{
          totalcount:'',
          blockchain:'Ethereum',
          pricetype:'veOPH',
          price:'',
          income: '',
          reward:'OPH',
          rate:'10%',
          rateShow: true,
          duration:'7days'
        },
        blockchainoption:[
          {value:'Ethereum', text:'Ethereum'}
        ],
        priceoption:[
          {value:'veOPH', text:'veOPH'},
          {value:'wETH', text:'wETH'}
        ],
        rewardoption:[
          {value:'OPH', text:'OPH'},
          {value:'NFT', text:'NFT'},
        ],
        rateoption:[
          {value:'5%', text:'5%'},
          {value:'10%', text:'10%'},
          {value:'15%', text:'15%'},
        ],
        durationoption:[
          {value:'7days', text:'7days'},
          {value:'10days', text:'10days'},
          {value:'14ays', text:'14days'},
        ],
      }
    },created(){
      let _id = this.$route.params.id
      if (!api.empty(_id)) {
        this.id = _id
      }

    }, methods: {
      publish(){
        this.$router.push({name:'publish', params:{id:'1243'}})
      },
      expandedClick() {
        this.expanded = !this.expanded
      },
      onSubmit(){

      },
      changevalue(){
        if (!api.empty(this.form.price) && !api.empty(this.form.totalcount)) {
          this.form.income = this.form.price * this.form.totalcount
        }
      },
      rewardchange(){
        if (this.form.reward =='veOPH') {
          this.form.rateShow = true
        } else {
           this.form.rateShow = false
        }
      }
    },
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  .btns-panel{
    width: 100%;
    padding: 1.2rem;
    background-color: #fbfbfb;
    text-align: right;
    border-bottom: 0.08rem solid #eeeeee;
  }
  .inft-detail-secondheader{
    width: 100%;
    padding: 0.75rem 1.25rem !important;
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icons-container{
    width: 4.8rem;
    max-width: 40%;
    text-align: right;
    font-size: 1rem;
  }
  .idetails-container > li{
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .itrade-card-body{
    background-color: #f7f8fc;
    font-weight: 400 !important;
    line-height: 2rem;
  }
  p{
    font-weight: 400 !important;
    line-height: 2rem;
  }

  /* right */
  .inft-base{
    width: -webkit-calc(100% - 30px);
    margin: 1.2rem auto;
  }
  .inft-base .inft-base-share{
    text-align: right;
  }
  .inft-base .inft-base-name{
    line-height: 2.56rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: #313131;
  }
  .inft-base .inft-base-owner{
    font-size: 1.28rem;
  }
  .ititle-img-contain{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .ititle-img-contain .ititle-img{
    width: 1.2rem;
    height: 1.2rem;
    margin: auto 0.4rem;
  }
  .ifrom-btn{
    width: 100%;
    padding: 3.84rem 0;
    text-align: center;
  }

</style>
