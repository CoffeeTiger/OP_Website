<template>
  <div>

    <div class="icontainer-subpage">
      <div class="ireward-contain">

        <rewardHeader></rewardHeader>

        <div class="ipanel-stake imargin-bottom-64" v-if="ustat">
          <div class="ipanel-header">
            <div class="ititle color_yellow">{{$t('page.stake')}}</div>
          </div>
          <div class="ipanel-body bg_darkgray">
            <div class="ipanel-contant">
              <div class="idesc">OPH {{$t('page.wallet')}}&ensp;:&ensp;{{stakenum}}</div>
              <div class="istake-contain">
                <div class="iinput-contain">
                  <input type="number" v-model="vmstakenum" ref="vmstakenum" min="1" max="99999999" size="lg"
                    :placeholder="$t('page.enteryournumber')" class="iinput iinput-stake" />
                  <span class="imax color_yellow" @click="maxset(0)">Max</span>
                </div>
                <div class="ibtn ibtn-stake color_black" @click="stake">{{$t('page.stake')}}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="ipanel-stake imargin-bottom-64" v-if="ustat">
          <div class="ipanel-header">
            <div class="ititle color_yellow">{{$t('page.unstake')}}</div>
          </div>
          <div class="ipanel-body bg_darkgray">
            <div class="ipanel-contant">
              <div class="idesc">veOPH&ensp;:&ensp;{{unstakenum}}</div>
              <div class="istake-contain">
                <div class="iinput-contain">
                  <input type="number" v-model="vmunstakenum" ref="vmunstakenum" min="1" max="99999999" size="lg"
                    :placeholder="$t('page.enteryournumber')" class="iinput iinput-stake" />
                  <span class="imax color_yellow" @click="maxset(1)">Max</span>
                </div>
                <div class="ibtn ibtn-stake color_black" @click="unStake">{{$t('page.unstake')}}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- nologin -->
        <div class="iconn-contain" v-if="!ustat">
          <div class="ibtn-desc">{{$t('page.stakeConnWalletDesc')}}</div>
          <div class="ibtn ibtn-connnect color_black" @click="connect">{{$t('page.connectwallet')}}</div>
        </div>
      </div>
    </div>

    <!-- modal -->
    <b-modal ref="modalApprove" :title="$t('page.approve')" centered no-stacking button-size="lg" @ok="handleOk">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group :label="$t('page.enterAmount')" label-for="amount-input" invalid-feedback="amount is required"
          label-class="ilabel-for-input">
          <b-form-input id="amount-input" v-model="amountApprove" type="number" required></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
    <b-modal ref="modalShow" centered no-stacking ok-only button-size="lg">
      <div class="ilabel-for-input">{{modalShowmMsg}}</div>
    </b-modal>

  </div>
</template>

<script>
  import api from '../../util/network.js'
  import wallet from '../../util/wallet.js'
  import ebus from '../../util/ebus.js'
  import rewardHeader from './rewardHeader.vue'
  export default {
    name: 'rewards',
    data() {
      return {
        ustat: false,
        approve: false,
        stakenum: 0,
        stakenumLimit: 0,
        unstakenum: 0,
        vmstakenum: '',
        vmunstakenum: '',
        amountApprove: 0,
        modalShowmMsg: '',
        modalApproveType: 'stake',
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
        if (this.ustat) {
          this.getUserbalance()
        }
      },
      getUserbalance() {
        let that = this
        let add = api.getStore('acount')
        wallet.OPH_getBalanceOfOPH(add, add, function(error, result) {
          if (result == undefined || result == '') {
            api.iToastClient(that, '90011', '');
          } else {
            that.stakenum = wallet.WeiToGe(result, api.getStore('OPH_Decimals'))
          }
        })

        wallet.veOPH_getBalanceOfveOPH(add, add, function(error, result) {
          if (result == undefined || result == '') {
            api.iToastClient(that, '90012', '');
          } else {
            that.unstakenum = wallet.WeiToGe(result, api.getStore('OPH_Decimals'))
          }
        })
      },
      stake() {

        if (api.empty(this.vmstakenum)) {
          api.iToastClient(this, '90025', '');
          this.$refs['vmstakenum'].focus()
          return
        } else if (Number(this.vmstakenum).valueOf() <= 0) {
          api.iToastClient(this, '90025', '');
          this.$refs['vmstakenum'].focus()
          return
        }

        let that = this
        let add = api.getStore('acount')
        let constract = api.getStore('CONSTRACT')

        wallet.OPH_allowance(add, JSON.parse(constract).contract.STAKE, function(error, result) {
          if (result == undefined || result == '') {
            api.iToastClient(that, '90023', '');
          } else {
            that.stakenumLimit = wallet.WeiToGe(result, api.getStore('OPH_Decimals'))
            if (Number(that.stakenumLimit).valueOf() < Number(that.vmstakenum).valueOf()) {
              api.iToastClient(that, '90024', '');
              that.amountApprove = that.stakenum
              that.modalApproveType = 'stake'
              that.$refs['modalApprove'].show()
            } else {

              let amount = wallet.GeToWei(that.vmstakenum, api.getStore('OPH_Decimals'))
              let pars = JSON.stringify({
                ophAmount: amount,
                orderId: '',
                veophAmount: ''
              })
              api.postAction('/logined/acc_stake/userStakeA', pars, function(res) {
                if (res.code == 200) {

                  wallet.sign(res.result.orderId, add, function(err) {
                    let parsb = JSON.stringify({
                      ophAmount: amount,
                      orderId: res.result.orderId,
                      sign: err,
                      veophAmount: ''
                    })
                    api.postAction('/logined/acc_stake/userStakeB', parsb, function(res) {
                      if (res.code == 200) {
                        api.iToastClient(that, '90030', '');
                        that.getUserbalance()
                      } else {
                        api.iToastServer(that, res.code, 'secondary')
                      }
                    })
                  })

                } else {
                  api.iToastServer(that, res.code, 'secondary')
                }
              })

            }
          }
        })

      },
      unStake() {
        if (api.empty(this.vmunstakenum)) {
          api.iToastClient(this, '90026', '');
          this.$refs['vmunstakenum'].focus()
          return
        } else if (Number(this.vmunstakenum).valueOf() <= 0) {
          api.iToastClient(this, '90026', '');
          this.$refs['vmunstakenum'].focus()
          return
        }

        let that = this
        let add = api.getStore('acount')
        let constract = api.getStore('CONSTRACT')

        wallet.veOPH_allowance(add, JSON.parse(constract).contract.STAKE, function(error, result) {
          if (result == undefined || result == '') {
            api.iToastClient(that, '90023', '');
          } else {
            api.log(result)

            that.stakenumLimit = wallet.WeiToGe(result, api.getStore('OPH_Decimals'))
            if (Number(that.stakenumLimit).valueOf() < Number(that.vmunstakenum).valueOf()) {
              api.iToastClient(that, '90024', '');
              that.amountApprove = that.stakenum
              that.modalApproveType = 'unstake'
              that.$refs['modalApprove'].show()
            } else {

              let amount = wallet.GeToWei(that.vmunstakenum, api.getStore('OPH_Decimals'))
              let pars = JSON.stringify({
                ophAmount: '',
                orderId: '',
                veophAmount: amount
              })
              api.postAction('/logined/acc_stake/userUnstakeA', pars, function(res) {
                if (res.code == 200) {

                  wallet.sign(res.result.orderId, add, function(err) {
                    let parsb = JSON.stringify({
                      ophAmount: '',
                      orderId: res.result.orderId,
                      sign: err,
                      veophAmount: amount
                    })
                    api.postAction('/logined/acc_stake/userUnstakeB', parsb, function(res) {
                      if (res.code == 200) {
                        api.iToastClient(that, '90031', '');
                        that.getUserbalance()
                      } else {
                        api.iToastServer(that, res.code, 'secondary')
                      }
                    })
                  })

                } else {
                  api.iToastServer(that, res.code, 'secondary')
                }
              })

            }
          }
        })

      },
      connect() {
        if (!this.ustat) {
          ebus.$emit('emsg', 'relogin')
        }
      },
      maxset(type) {
        if (type == 1) {
          if (this.vmunstakenum == this.unstakenum) {
            this.vmunstakenum = ''
          } else {
            this.vmunstakenum = this.unstakenum
          }
        } else {
          if (this.vmstakenum == this.stakenum) {
            this.vmstakenum = ''
          } else {
            this.vmstakenum = this.stakenum
          }
        }
      },
      handleSubmit() {

        if (api.empty(this.amountApprove)) {
          api.iToastClient(this, '90027', '');
          return
        } else if (Number(this.amountApprove).valueOf() <= 0) {
          api.iToastClient(this, '90027', '');
          return
        }

        let that = this
        let add = api.getStore('acount')
        let constract = api.getStore('CONSTRACT')

        let amount = wallet.GeToWei(this.amountApprove, api.getStore('OPH_Decimals'))

        if (this.modalApproveType == 'stake') {
          wallet.OPH_approve(JSON.parse(constract).contract.STAKE, amount, add, function(error, result) {
            if (result == undefined || result == '') {
              api.iToastClient(that, '90029', 'error');
            } else { 
              that.$refs['modalApprove'].hide()
              //modalShow
              that.modalShowmMsg = that.$i18n.t('page.staleAuthAmout') + ' ' + that.amountApprove + ' OPH'
              that.$refs['modalShow'].show()
            }
          })
        } else {
          wallet.veOPH_approve(JSON.parse(constract).contract.STAKE, amount, add, function(error, result) {
            if (result == undefined || result == '') {
              api.iToastClient(that, '90033', 'error');
            } else { 
              that.$refs['modalApprove'].hide()
              //modalShow
              that.modalShowmMsg = that.$i18n.t('page.unStaleAuthAmout') + ' ' + that.amountApprove + ' OPH'
              that.$refs['modalShow'].show()
            }
          })
        }

      },
      handleOk(event) {
        event.preventDefault()
        this.handleSubmit()
      },

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
  .ipanel-stake {
    width: 100%;
    border-radius: 0.8888rem;
    background: #252525;
    border: 0.1111rem solid #3C3C3C;
    overflow: hidden;
    font-family: Poppins-Regular, Poppins;
  }

  .ipanel-stake .ipanel-header {
    width: -webkit-calc(100% - 3.3333rem);
    height: 4.8888rem;
    margin: 0 1.6666rem;
    display: flex;
    align-items: center;
  }

  .ipanel-stake .ipanel-header .ititle {
    font-size: 1.7777rem;
    font-weight: 400;
  }

  .ipanel-stake .ipanel-body {
    width: 100%;
    padding: 1.6666rem;
  }

  .ipanel-stake .ipanel-body .ipanel-contant {
    width: 100%;
  }

  .ipanel-contant .idesc {
    width: 100%;
    font-size: 1.5555rem;
    line-height: 2.2222rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 300;
    color: #979797;
    margin: 0.3888rem 0 2.3888rem;
  }

  .ipanel-contant .istake-contain {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4.8333rem;
  }

  .ipanel-contant .istake-contain .iinput-contain {
    width: 41rem;
    height: 4.8888rem;
    padding: 0 1.6666rem;
    background: #414242;
    border-radius: 2.4444rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ipanel-contant .istake-contain .ibtn-stake {
    width: 9.7222rem;
    height: 4.8888rem;
    line-height: 4.8888rem;
    border-radius: 2.4444rem;
    font-size: 1.7777rem;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
  }

  .iinput-contain .iinput-stake {
    width: 33.3333rem;
    height: 4.8888rem;
    line-height: 4.8888rem;
    font-size: 1.5555rem;
    font-weight: 300;
    color: #FFFFFF;
  }

  .iinput-contain .imax {
    width: 3.6111rem;
    font-size: 1.5555rem;
    font-weight: 300;
  }

  .iinput-contain .imax:active {
    opacity: 0.6;
  }



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

  .irewards-connect-btnv2 {
    width: 14.444444rem;
    height: 4.833333rem;
    font-size: 1.444444rem;
  }

  /* version 2  */
  .istake-top {
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

  .ireward-inputs {
    height: 4.833333rem;
    font-size: 1.333333rem;
    border-color: #ffffff00 !important;
  }

  .irewars-maxbtn {
    height: 4.833333rem;
    font-size: 1.388888rem;
    color: #6875FD;
    border-color: #ffffff00 !important;
  }

  .iconn-contain {
    width: 100%;
    margin: 3.5555rem auto;
    text-align: center;
  }

  .iconn-contain .ibtn-desc {
    height: 1.7777rem;
    line-height: 1.7777rem;
    font-size: 1.4444rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 300;
    color: #A0A0A0;
  }

  .iconn-contain .ibtn-connnect {
    width: 21.2777rem;
    height: 4.4444rem;
    line-height: 4.4444rem;
    margin: 2.2222rem auto 0;
    font-size: 1.5555rem;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    border-radius: 2.2222rem;
  }
</style>
