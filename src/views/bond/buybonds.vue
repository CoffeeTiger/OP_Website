<template>
  <div>
    <div class="icontainer-subpage">
      <div class="ireward-contain">


        <div class="ibond-infos">
          <div class="ibond-infos-title">OPH LP</div>
        </div>

        <b-row>
          <b-col>
            <b-card no-body style="max-width: 100%; margin: 0 auto;border-radius: 0.64rem;">

              <b-card-body class="ibond-card-body">
                <b-card-text>

                  <div class="ibuy-bonds-info">
                    <div class="ibbonds-cell">
                      <div class="ibbonds-cell-desc">{{$t('page.fixedTerm')}}</div>
                      <div class="ibbonds-cell-value">2 days</div>
                    </div>

                    <div class="ibbonds-cell">
                      <div class="ibbonds-cell-desc">{{$t('page.bondPrice')}}</div>
                      <div class="ibbonds-cell-value">$28.58</div>
                    </div>

                    <div class="ibbonds-cell">
                      <div class="ibbonds-cell-desc">{{$t('page.marketPrice')}}</div>
                      <div class="ibbonds-cell-value">$28.58</div>
                    </div>
                  </div>

                  <div class="ibuy-bonds-btns">
                    <b-button variant="primary" block size="lg" class="ibbond-btn" @click="connect" v-if="!ustat">{{$t('page.connectwallet')}} </b-button>
                    <b-button variant="primary" block size="lg" class="ibbond-btn" @click="Approve" v-if="ustat&&!approve">{{$t('page.approve')}} </b-button>
                    <b-button variant="primary" block size="lg" class="ibbond-btn" @click="buy" v-if="ustat&&approve">{{$t('page.buybond')}} </b-button>
                  </div>

                </b-card-text>
              </b-card-body>

              <b-card-header class="icard-header"></b-card-header>

              <b-card-body class="ibond-card-body">
                <b-card-text>
                  <b-row class="ibbond-info-lists">
                    <b-col md="6" class="iinfo-desc">{{$t('page.bond_yourBalance')}}</b-col>
                    <b-col md="6" class="iinfo-value">{{show.balance}} OPH</b-col>
                  </b-row>

                  <b-row class="ibbond-info-lists">
                    <b-col md="6" class="iinfo-desc">{{$t('page.bond_youWillGet')}}<b-icon icon="question-circle" class="iquestion-circle" variant="secondary" v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon></b-col>
                    <b-col md="6" class="iinfo-value">{{show.willget}} OPH</b-col>
                  </b-row>

                  <b-row class="ibbond-info-lists">
                    <b-col md="6" class="iinfo-desc">{{$t('page.bond_maxYouCanBuy')}}<b-icon icon="question-circle" class="iquestion-circle" variant="secondary" v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon></b-col>
                    <b-col md="6" class="iinfo-value">{{show.canbuy}} OPH</b-col>
                  </b-row>

                  <b-row class="ibbond-info-lists">
                    <b-col md="6" class="iinfo-desc">{{$t('page.bond_discount')}} <b-icon icon="question-circle" class="iquestion-circle" variant="secondary" v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon></b-col>
                    <b-col md="6" class="iinfo-value">{{show.discount}} </b-col>
                  </b-row>

                  <b-row class="ibbond-info-lists">
                    <b-col md="6" class="iinfo-desc">{{$t('page.bond_duration')}} <b-icon icon="question-circle" class="iquestion-circle" variant="secondary" v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon></b-col>
                    <b-col md="6" class="iinfo-value">{{show.duration}} days</b-col>
                  </b-row>

                </b-card-text>
              </b-card-body>

              <b-card-body class="ibond-card-footer">
                <b-card-text>
                  <div class="ibuydesc"> {{$t('page.bond_buy_desc')}} </div>
                </b-card-text>
              </b-card-body>

            </b-card>
          </b-col>
        </b-row>

      </div>
    </div>
  </div>
</template>

<script>
  import api from '../../util/network.js'
  import ebus from '../../util/ebus.js'
  export default{
    name:'buybonds',
    data() {
      return {
        ustat: true,
        approve:true,
        show:{
          balance:'',
          willget:'',
          canbuy:'',
          discount:'',
          duration:''
        }
      }
    },created(){
      let t = api.getStore('token')
      if (api.empty(t)) {
        this.ustat = false
      } else{
        this.ustat = true
      }

      this.init()
    },methods: {
      init(){

        /* get approve status */
        this.approve = true

        if (this.ustat) {
          this.show.balance = '0.000000'
          this.show.willget = '0.000'
          this.show.canbuy = '10000'
        }
        this.show.discount = '0.85%'
        this.show.duration = '2'
      },
      connect(){
        if (!this.ustat) {
          ebus.$emit('emsg', 'relogin')
        }
      },
      /*first-time license*/
      Approve(){

      },
      buy(){
        api.log('buy')
      }
    },mounted(){
      let that = this
      ebus.$on('emsgreturn',(res)=>{
        if (res == 'ok') {
          that.ustat = true
          that.init()
        }
      })
    }
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  .ibond-infos{
    /* padding: 3.84rem 0 1.2rem 0; */
    /* padding: 1rem 0 1.2rem 0; */
    margin: 5rem auto 2.777777rem;
  }
  .ibond-infos .ibond-infos-title{
    width: 100%;
    /* height: 6.4rem; */
    font-size: 1.8rem;
    font-weight: bold;
  }
  
  .ibond-card-footer{
      background-color: #f7f8fc;
      font-size: 0.777777rem;
      line-height: 1.277777rem;
      color: #A0A0A0;
      text-align: center;
      border-bottom-left-radius: 0.64rem;
      border-bottom-right-radius: 0.64rem;
      overflow: hidden;
  }
  .ibond-card-footer .ibuydesc{
    width: 28.888888rem;
    margin: 0 auto;
  }

  .ibuy-bonds-info{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ibuy-bonds-info .ibbonds-cell{
    width: 100%;
    margin: 1.2rem 0;
    line-height: 2.56rem;
    font-size: 1.222222rem;
  }
  .ibbonds-cell .ibbonds-cell-desc{
    font-weight: 400;
    color: #7d7d7d;
  }
  .ibbonds-cell .ibbonds-cell-value{
    font-weight: 500;
  }
  .ibbond-btn{
    width: 12.166666rem;
    margin-top: 2rem;
    font-size: 1.333333rem;
    font-weight: 500;
  }


  .ibbond-info-lists{
    margin: 0.4rem auto;
    font-size: 1.12rem;
    font-weight: 400;
    color: #7d7d7d;
  }
  .ibbond-info-lists .iinfo-desc{

  }
  .ibbond-info-lists .iinfo-value{
    text-align: right;
  }
  @media only screen and (min-width: 0px) and (max-width: 767px) {
    .ibbond-info-lists .iinfo-value{
      text-align: start;
    }
  }

</style>
