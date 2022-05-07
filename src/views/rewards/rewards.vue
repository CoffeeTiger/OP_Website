<template>
  <div>

    <div class="icontainer-subpage">
      <div class="ireward-contain">


        <rewardHeader></rewardHeader>

        <b-row>

          <b-col sm="12" md="12">
            <b-card no-body style="margin:0 auto;border-radius: 0.64rem;">

              <b-card-header header-tag="header" class="p-1 inft-detail-secondheader" role="tab">
                <h5 class="mb-0 ititle-img-contain">{{$t('page.stake')}}</h5>
                <!-- <div class="icons-container" variant="outline-primary" @click="expandedClick(1)">
                <b-icon v-if="expanded" icon="chevron-up" rotate="180"></b-icon>
                <b-icon v-else icon="chevron-down" rotate="-180"></b-icon>
              </div> -->
              </b-card-header>
              <div :class="expanded?'ishow':'iclose'">

                <b-card-body class="itrade-card-body" v-if="ustat">
                  <b-card-text>

                    <div sm="12" md="12" class="istake-top">
                      <div class="istake-contain-v2">
                        <div class="istake-name">OPH {{$t('page.wallet')}}&ensp;:&ensp;</div>
                        <div class="istake-value">{{stakenum}}</div>
                      </div>
                      <div class="ihelp">
                        <div class="istake-help-contain"><span>{{$t('page.whatisthis')}}</span>
                          <b-icon icon="question-circle" class="ihelp"
                            v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon>
                        </div>
                      </div>
                    </div>

                    <div class="istake-contain-title-row">
                      <div sm="12" md="12" class="istake-contain istake-contain-col-titlev2 ">
                        <div class="istake-col-1">
                          <b-form-input type="number" v-model="vmstakenum" min="0" size="lg"
                            :placeholder="$t('page.enteryournumber')" class="ireward-inputs"></b-form-input>
                          <b-button variant="light" size="lg" class="irewars-maxbtn" @click="maxset(0)">Max</b-button>
                        </div>
                        <div class="istake-col-3">
                          <b-button variant="primary" size="lg" block class="irewards-connect-btn" v-if="!approve">
                            Approve</b-button>
                          <b-button variant="primary" size="lg" block class="irewards-connect-btn"
                            v-if="ustat&&approve">{{$t('page.stake')}}</b-button>
                        </div>
                      </div>
                    </div>

                    <!-- <b-row>
                      <b-col sm="12" md="6" lg="6" class="icontent-left"></b-col>
                      <b-col sm="12" md="6" lg="6" class="icontent-right">
                        <div class="istake-help-contain"><span>{{$t('page.whatisthis')}}</span>
                          <b-icon icon="question-circle" class="ihelp"
                            v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon>
                        </div>
                      </b-col>
                    </b-row> -->

                  </b-card-text>
                </b-card-body>

                <!-- nologin -->
                <b-card-body class="itrade-card-body" v-if="!ustat">
                  <b-card-text>
                    <div class="istake-contain-title-row">
                      <div  class="istake-contain istake-contain-col-titlev2 irewards-connect-contain">
                        <div class="iconn-left">
                          <img src="../../assets/imgs/logo.png" class="ieth_logo" />
                          <!-- <div class="iconn-values">0.0OPH <span class="iconn-values-sub">($0.00)</span> </div> -->
                        </div>
                        <div class="iconn-right">
                          <b-button variant="primary" block size="lg" @click="connect" class="irewards-connect-btnv2">{{$t('page.connectwallet')}}</b-button>
                        </div>
                      </div>
                    </div>
                  </b-card-text>
                </b-card-body>

              </div>

            </b-card>

          </b-col>
        </b-row>

        <b-row>
          <b-col sm="12" md="12">
            <b-card no-body style="margin: 3.333333rem auto;border-radius: 0.64rem;" v-if="ustat">

              <b-card-header header-tag="header" class="p-1 inft-detail-secondheader" role="tab">
                <h5 class="mb-0 ititle-img-contain">Unstake</h5>
              </b-card-header>
              <div :class="expanded2?'ishow':'iclose'">
                <b-card-body class="itrade-card-body">
                  <b-card-text>

                    <!-- <b-row>
                      <b-col sm="12" md="12" class="istake-contain-v2">
                        <div class="istake-name">veOPH&ensp;:&ensp;</div>
                        <div class="istake-value">{{unstakenum}}</div>
                      </b-col>
                    </b-row> -->

                    <div class="istake-top">
                      <div class="istake-contain-v2">
                        <div class="istake-name">veOPH&ensp;:&ensp;</div>
                        <div class="istake-value">{{unstakenum}}</div>
                      </div>
                      <div class="ihelp">
                        <div class="istake-help-contain"><span>{{$t('page.whatisthis')}}</span>
                          <b-icon icon="question-circle" class="ihelp"
                            v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon>
                        </div>
                      </div>
                    </div>

                    <div class="istake-contain-title-row">
                      <div  class="istake-contain istake-contain-col-titlev2 ">
                        <div class="istake-col-1">
                          <b-form-input type="number" v-model="vmunstakenum" min="0" size="lg"
                            :placeholder="$t('page.enteryournumber')"  class="ireward-inputs"></b-form-input>
                          <b-button variant="light" size="lg" class="irewars-maxbtn" @click="maxset(1)">Max</b-button>
                        </div>
                        <div class="istake-col-3">
                          <b-button variant="primary" size="lg" block class="irewards-connect-btn" v-if="!approve">
                            Approve</b-button>
                          <b-button variant="primary" size="lg" block class="irewards-connect-btn"
                            v-if="ustat&&approve">{{$t('page.unstake')}}</b-button>
                        </div>
                      </div>
                    </div>

                    <!-- <b-row>
                      <b-col sm="12" md="6" lg="6" class="icontent-left"></b-col>
                      <b-col sm="12" md="6" lg="6" class="icontent-right">
                        <div class="istake-help-contain"><span>{{$t('page.whatisthis')}}</span>
                          <b-icon icon="question-circle" class="ihelp"
                            v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon>
                        </div>
                      </b-col>
                    </b-row> -->

                  </b-card-text>
                </b-card-body>
              </div>

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
  import rewardHeader from './rewardHeader.vue'
  export default {
    name: 'rewards',
    data() {
      return {
        ustat: false,
        approve: false,
        stakenum: 1000,
        unstakenum: 885,
        vmstakenum: '',
        vmunstakenum: '',
        expanded: true,
        expanded2: true,
        expanded3: true,
        expanded4: true,
        expanded5: true,
      }
    },
    created() {
      let t = api.getStore('token')
      if (api.empty(t)) {
        this.ustat = false
      } else {
        this.ustat = true
      }

      this.init()
    },
    components: {
      rewardHeader
    },
    methods: {
      init() {

        /* get approve status */
        this.approve = true

      },
      expandedClick(v) {
        if (v == 1) {
          this.expanded = !this.expanded
        } else if (v == 2) {
          this.expanded2 = !this.expanded2
        } else if (v == 3) {
          this.expanded3 = !this.expanded3
        } else if (v == 4) {
          this.expanded4 = !this.expanded4
        } else if (v == 5) {
          this.expanded5 = !this.expanded5
        }

      },
      connect() {
        if (!this.ustat) {
          ebus.$emit('emsg', 'relogin')
        }
      },
      maxset(type) {
        if (type == 1) {
          this.vmunstakenum = this.unstakenum
        } else {
          this.vmstakenum = this.stakenum
        }
      }

    },
    mounted() {
      ebus.$on('emsgreturn', (res) => {
        if (res == 'ok') {
          this.$router.go(0)
        }
      })
    }
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");

  .inft-detail-secondheader {
    width: 100%;
    padding: 0.75rem 1.25rem !important;
    /* border-top: 1px solid rgba(0, 0, 0, 0.125); */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .icons-container {
    width: 160px;
    max-width: 40%;
    text-align: right;
    font-size: 1rem;
  }

  .icons-container-rewards {
    display: flex;
    justify-content: flex-end;
    align-items: center;
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

  .itrade-card-body .istake-group-btns {
    width: 100%;
  }

  p {
    font-weight: 400 !important;
    line-height: 2rem;
  }

  .ititle-img-contain {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.333333rem;
  }

  .ititle-img-contain .ititle-img {
    width: 1.2rem;
    height: 1.2rem;
    margin: auto 0.4rem;
  }

  .ititle-con-mt {
    margin-top: 0.5rem;
  }

  .ishow {
    display: block;
    animation: .25s, 100ms;
  }

  .iclose {
    display: none;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .ititle {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .ititle .ititle-img {
    width: 1.6rem;
    height: 100%;
    margin-right: 1rem;
  }

  .ititle .ititle-img-margin {
    border-radius: 50%;
    background-color: #d7d7d7cf;
    margin-left: -1.6rem;
    margin-bottom: -0.6rem;
  }

  .istaking {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .istaking .istaking-v {
    font-size: 1.44rem;
    font-weight: 500;
  }

  .istake-values {
    font-size: 1.2rem;
    font-weight: 400;
  }

  .irewards {
    width: 100%;
  }

  .ihelp {
    opacity: .6;
    margin: 0.4rem;
  }

  .ihelp-opacity {
    opacity: .6;
  }

  .istake-contain {
    width: 100%;
    line-height: 2.56rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .istake-contain-col-title {
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.4rem;
    padding: 1rem;
  }

  .istake-contain-col-titlev2 {
    margin-bottom: 2.56rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .istake-contain-title-row {
    width: 100%;
    margin: 1rem auto;
  }

  .istake-contain-connect-row {
    width: 100%;
    padding: 1rem 0;
  }

  .istake-contain .istake-col-1 {
    /* width: 60%; */
    width: 36.333333rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 2px solid #EEEEEE;
  }

  .istake-contain .istake-col-2 {
    width: 10%;
  }

  .istake-contain .istake-col-3 {
    /* width: 30%; */
    width: 9.277777rem;
    text-align: center;
  }

  .istake-help-contain {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    opacity: 0.6;
    font-size: 1.222222rem;
    color: #9D9C9C !important;
  }

  .ireward-help-contain {
    opacity: 0.6;
    line-height: 1.44rem;
    font-size: 0.92rem;
  }

  .istake-line {
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }

  .iearn-desc {
    display: flex;
    justify-content: space-around;
  }

  .iearn-card-body .ieran-publish .ieran-publish-title {
    font-size: 2.4rem;
    font-weight: 500;
  }

  .iearn-card-body .ieran-publish .ieran-publish-subtitle {
    font-size: 1.44rem;
    color: #6875fd;
  }

  .iearn-card-body .ieran-publish .ieran-publish-text {
    margin: 1rem auto;
  }

  .iearn-card-body .ieran-staking {
    min-height: 260px;
  }

  .iearn-card-body .ieran-staking .iearn-staking-title {
    font-size: 1.6rem;
    color: #6875fd;
    font-weight: 500;
    padding: 1rem 0;
  }

  .iearn-card-body .ieran-staking .iearn-staking-text {
    margin: 1rem auto;
  }

  .ireward-bottom {
    margin: 2.56rem auto;
    text-align: center;
  }

  .ireward-bottom .ireward-bottom-title {
    font-size: 2rem;
    font-weight: 500;
    padding: 1rem 0;
  }

  .ireward-bottom .ilearn-more {
    font-size: 1.2rem;
    color: #6875fd;
    padding: 1rem 0;
    text-decoration: underline;
  }

  .ireward-bottom .ireward-bottom-text {
    text-align: left;
    color: #9a9696;
  }

  .irewards-connect-contain {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid rgba(0, 0, 0, 0.125);
    background-color: #FFFFFF; */
  }

  .irewards-connect-contain .iconn-left {
    /* width: 60%; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .irewards-connect-contain .iconn-left .iconn-values {
    font-size: 1.28rem;
    font-weight: bold;
  }

  .irewards-connect-contain .iconn-left .iconn-values-sub {
    font-size: 0.8rem;
    font-weight: 400;
    color: #6c757d;
  }

  .irewards-connect-contain .iconn-left .ieth_logo {
    margin-right: 0.6rem;
    width: 1.8rem;
    height: 100%;
  }

  .irewards-connect-contain .iconn-right {
    /* width: 30%; */
  }

  @media only screen and (min-width: 0px) and (max-width: 767px) {
    /* .irewards-connect-contain .iconn-right {
      width: 40%;
    } */
  }

  .irewards-connect-btn {
    /* margin-right: -15px; */
    /* background-color: #d7d6d6; */
    width: 9.277777rem;
    height: 4.833333rem;
    font-size: 1.444444rem;
  }
  .irewards-connect-btnv2{
    width: 14.444444rem;
    height: 4.833333rem;
    font-size: 1.444444rem;
  }

  /* version 2  */
  .istake-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .istake-contain-v2 {
    /* width: 100%; */
    /* margin: 1rem 0; */
    line-height: 6.666666rem;
    /* padding: 0 30px; */
    font-size: 1.444444rem;
    font-weight: 500;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .ireward-inputs{
    height: 4.833333rem;
    font-size: 1.333333rem;
    border-color: #ffffff00 !important;
  }
  .irewars-maxbtn{
    height: 4.833333rem;
    font-size: 1.388888rem;
    color: #6875FD;
    border-color: #ffffff00 !important;
  }
</style>
