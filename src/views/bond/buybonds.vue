<template>
  <div>
    <div class="icontainer-subpage">
      <div class="ireward-contain">

        <div class="ibond-infos imargin-top-80">
          <div class="ibond-infos-title color_yellow">{{show.name}}</div>
          <div class="ibond-infos-lists color_yellow">
            <div class="ibond-infos-item">
              <div class="iitem-desc">{{$t('page.bondPrice')}}</div>
              <div class="iitem-value">${{show.bondPrice}}</div>
            </div>
            <div class="ibond-infos-item">
              <div class="iitem-desc">{{$t('page.marketPrice')}}</div>
              <div class="iitem-value">${{show.marketPrice}}</div>
            </div>
          </div>
        </div>

        <div class="ibondinfo bg_lightgray imargin-bottom-24">
          <div class="ibondinfo-body">
            <ul>

              <li>
                <div class="ikey">{{$t('page.bond_yourBalance')}}</div>
                <div class="ivalue">{{show.balance}} OPH</div>
              </li>

              <li>
                <div class="ikey">{{$t('page.bond_youWillGet')}}</div>
                <div class="ivalue">{{show.willget}} OPH</div>
              </li>

              <li>
                <div class="ikey">{{$t('page.bond_maxYouCanBuy')}}</div>
                <div class="ivalue">{{show.canbuy}} OPH</div>
              </li>

              <li>
                <div class="ikey">{{$t('page.bond_discount')}}</div>
                <div class="ivalue">{{show.discount}}%</div>
              </li>

              <li>
                <div class="ikey">{{$t('page.bond_duration')}}</div>
                <div class="ivalue">{{show.duration}} days</div>
              </li>

            </ul>
          </div>
        </div>

        <div class="ibondinfo bg_lightgray" v-if="ustat&&approve">
          <div class="ibondinfo-body">
            <div class="istake-contain">
              <div class="iinput-contain">
                <input type="number" v-model="vmstakenum" min="1" max="99999999" size="lg"
                  :placeholder="$t('page.enteryournumber')" class="iinput iinput-stake" />
                <span class="imax color_yellow" @click="maxset(0)">Max</span>
              </div>
              <div class="ibtn ibtn-stake color_black" @click="buy">{{$t('page.bond')}}</div>
            </div>
          </div>
        </div>

        <div class="ibtn-contain" v-if="!ustat">
          <div class="ibtn-desc">{{$t('page.bondConnWalletDesc')}}</div>
          <div class="ibtn ibtn-connnect color_black" @click="connect">{{$t('page.connectwallet')}}</div>
        </div>

        <div class="ibtn-contain" v-if="ustat&&!approve">
          <div class="ibtn-desc">{{$t('page.bondApproveDesc')}}</div>
          <div class="ibtn ibtn-connnect color_black" @click="Approve">{{$t('page.approve')}}</div>
        </div>

      </div>
    </div>

    <!-- modal -->
    <b-modal ref="modalApprove" :title="$t('page.approve')" centered no-stacking button-size="lg" @ok="handleOk">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group :label="$t('page.enterAmount')" label-for="amount-input" invalid-feedback="amount is required"
          label-class="ilabel-for-input">
          <b-form-input id="amount-input" v-model="amountApprove" type="number" max="99999999" required></b-form-input>
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
  export default {
    name: 'buybonds',
    data() {
      return {
        bondInfoId: '',
        ustat: true,
        approve: true,
        show: {
          name: '',
          bondPrice: 0,
          marketPrice: 0,
          balance: '-',
          willget: '-',
          canbuy: '-',
          discount: '',
          duration: ''
        },
        vmstakenum: '',
        amountApprove: 0,
        modalShowmMsg: '',
      }
    },
    created() {
      this.bondInfoId = this.$route.params.id
      if (api.empty(this.bondInfoId)) {
        this.$router.push({
          name: 'bond'
        })
      }

      let t = api.getStore('token')
      if (api.empty(t)) {
        this.ustat = false
      } else {
        this.ustat = true
        this.approveInit()
        this.getUserbalance()
      }

      this.dataInit()

    },
    methods: {
      approveInit() {
        let that = this
        let add = api.getStore('acount')
        let constract = api.getStore('CONSTRACT')
        wallet.OPH_allowance(add, JSON.parse(constract).contract.STAKE, function(error, result) {
          if (result == undefined || result == '') {
            api.iToastClient(that, '90023', '');
          } else {
            let approveMax = wallet.WeiToGe(result, api.getStore('OPH_Decimals'))
            if (Number(approveMax).valueOf() == 0) {
              that.approve = false
            }
          }
        })
      },
      dataInit() {
        let that = this
        api.getAction('/unlogin/acc-bond/getBondSetInfoByid', 'bondInfoId=' + this.bondInfoId, function(res) {
          if (res.code == 200) {
            that.show.bondPrice = wallet.USDollarFormat(res.result.bondPriceUSD)
            that.show.marketPrice = wallet.USDollarFormat(res.result.marketPriceUSD)
            that.show.name = res.result.name
            that.show.discount = Number(res.result.discount).valueOf() * 100
            that.show.duration = res.result.duration

          } else {
            api.iToastServer(that, res.code, 'secondary')
          }
        })
      },
      getExpectedOPH(amount) {
        let that = this
        let pars = JSON.stringify({
          bondInfoId: this.bondInfoId,
          costTokenAmount: 0,
          discount: 0,
          sellUniswapOPHAmount: 0,
          tokenAmount: amount,
          tokenFee: 0,
          tokenFeeRatio: 0,
          uniswapOPHAmount: 0
        })
        api.postAction('/logined/acc-bond/getPriceOverviewByTokenAmount', pars, function(res) {
          if (res.code == 200) {
            that.show.willget = wallet.WeiToGe(res.result.sellUniswapOPHAmount, api.getStore('OPH_Decimals'))
          } else {
            api.iToastServer(that, res.code, 'secondary')
          }
        })
      },
      getUserbalance() {
        let that = this
        let add = api.getStore('acount')
        wallet.OPH_getBalanceOfOPH(add, add, function(error, result) {
          if (result == undefined || result == '') {
            api.iToastClient(that, '90011', '');
          } else {
            that.show.balance = wallet.WeiToGe(result, api.getStore('OPH_Decimals'))
            that.getExpectedOPH(result)
          }
        })

        let constract = api.getStore('CONSTRACT')
        wallet.OPH_getBalanceOfOPH(JSON.parse(constract).contract.BOND, add, function(error, result) {
          if (result == undefined || result == '') {
            api.iToastClient(that, '90011', '');
          } else {
            that.show.canbuy = wallet.WeiToGe(result, api.getStore('OPH_Decimals'))
          }
        })
      },
      connect() {
        if (!this.ustat) {
          ebus.$emit('emsg', 'relogin')
        }
      },
      maxset(type) {
        this.vmstakenum = this.show.canbuy
      },
      /*first-time license*/
      Approve() {
        this.$refs['modalApprove'].show()
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
        wallet.OPH_approve(JSON.parse(constract).contract.STAKE, amount, add, function(error, result) {
          if (result == undefined || result == '') {
            api.iToastClient(that, '90034', 'error');
          } else {
            that.$refs['modalApprove'].hide()
            that.modalShowmMsg = that.$i18n.t('page.bondAuthAmout') + ' ' + that.amountApprove + ' OPH'
            that.$refs['modalShow'].show()
            that.approve = true
          }
        })

      },
      handleOk(event) {
        event.preventDefault()
        this.handleSubmit()
      },
      buy() {
        if (api.empty(this.vmstakenum)) {
          api.iToastClient(this, '90035', '');
          return
        } else if (Number(this.vmstakenum).valueOf() <= 0) {
          api.iToastClient(this, '90035', '');
          return
        }

        let that = this
        let add = api.getStore('acount')
        let amount = wallet.GeToWei(this.vmstakenum, api.getStore('OPH_Decimals'))
        let pars = JSON.stringify({
          bondInfoId: this.bondInfoId,
          ophAmount: amount,
          orderId: '',
          sign: ''
        })
        api.postAction('/logined/acc-bond/userBuyOphA', pars, function(res) {
          if (res.code == 200) {

            wallet.sign(res.result.ordId, add, function(err) {
              let parsb = JSON.stringify({
                bondInfoId: that.bondInfoId,
                ophAmount: amount,
                orderId: res.result.ordId,
                sign: err
              })

              let loader = that.$loading.show({
                backgroundColor: '#313131',
                opacity: 0.5,
                canCancel: false
              })
              setTimeout(() => {
                loader.hide()
                api.postAction('/logined/acc-bond/userBuyOphB', parsb, function(resb) {
                  if (resb.code == 200) {
                    api.iToastClient(that, '90031', '');
                    that.getUserbalance()
                    that.dataInit()
                  } else {
                    api.iToastServer(that, resb.code, 'secondary')
                  }
                })
              }, 6000)

            })

          } else {
            api.iToastServer(that, res.code, 'secondary')
          }
        })

      }
    },
    mounted() {
      let that = this
      ebus.$on('emsgreturn', (res) => {
        if (res == 'ok') {
          that.ustat = true
          this.approveInit()
          this.dataInit()
          this.getUserbalance()
        }
      })
    }
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");

  .ibond-infos {
    width: 100%;
  }

  .ibond-infos .ibond-infos-title {
    line-height: 3.5555rem;
    font-size: 2.5555rem;
    font-family: Poppins-Bold, Poppins;
    font-weight: 500;
  }

  .ibond-infos .ibond-infos-lists {
    margin: 4.8888rem 0 5.9444rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .ibond-infos .ibond-infos-lists .ibond-infos-item {
    width: 26.111111rem;
  }

  .ibond-infos .ibond-infos-item {
    /* height: 6.4rem; */
    font-size: 1.2rem;
    margin: 0.5rem 0;
    font-size: 1.333333rem;
  }

  .ibond-infos .ibond-infos-item .iitem-value {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    line-height: 3.1111rem;
    font-size: 2.2222rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 400;
    margin-top: 0.9444rem;
  }

  .ibond-infos .ibond-infos-item .iitem-desc {
    line-height: 2.1666rem;
    font-size: 1.5555rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 300;
    color: #979797;
  }

  .ibondinfo {
    width: 100%;
    padding: 1.6666rem 2.5555rem;
    border-radius: 0.8888rem;
    overflow: hidden;
    border: 0.1111rem solid #3C3C3C;
  }

  .ibondinfo .ibondinfo-body {
    width: 100%;
    margin: 0 auto;
    line-height: 2.6666rem;
    font-size: 1.5555rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 300;
    color: #757373;
  }

  .ibondinfo .ibondinfo-body ul>li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ibtn-contain {
    width: 100%;
    margin: 3.5555rem auto;
    text-align: center;
  }

  .ibtn-contain .ibtn-desc {
    line-height: 1.7777rem;
    font-size: 1.4444rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 300;
    color: #A0A0A0;
    margin-bottom: 2.2222rem;
  }

  .ibtn-contain .ibtn-connnect {
    width: 21.2777rem;
    height: 4.4444rem;
    line-height: 4.4444rem;
    margin: 2.2222rem auto 0;
    font-size: 1.5555rem;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    border-radius: 2.2222rem;
  }

  .istake-contain {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .istake-contain .iinput-contain {
    width: 38.8888rem;
    height: 4.8888rem;
    padding: 0 1.6666rem;
    background: #414242;
    border-radius: 2.4444rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .istake-contain .ibtn-stake {
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
    font-weight: 400;
    color: #979797;
  }

  .iinput-contain .imax {
    width: 3.6111rem;
    font-size: 1.5555rem;
    font-weight: 400;
  }

  .iinput-contain .imax:active {
    opacity: 0.6;
  }


  .ibond-card-footer {
    background-color: #f7f8fc;
    font-size: 0.777777rem;
    line-height: 1.277777rem;
    color: #A0A0A0;
    text-align: center;
    border-bottom-left-radius: 0.64rem;
    border-bottom-right-radius: 0.64rem;
    overflow: hidden;
  }

  .ibond-card-footer .ibuydesc {
    width: 28.888888rem;
    margin: 0 auto;
  }

  .ibuy-bonds-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ibuy-bonds-info .ibbonds-cell {
    width: 100%;
    margin: 1.2rem 0;
    line-height: 2.56rem;
    font-size: 1.222222rem;
  }

  .ibbonds-cell .ibbonds-cell-desc {
    font-weight: 400;
    color: #7d7d7d;
  }

  .ibbonds-cell .ibbonds-cell-value {
    font-weight: 500;
  }

  .ibbond-btn {
    width: 12.166666rem;
    margin-top: 2rem;
    font-size: 1.333333rem;
    font-weight: 500;
  }


  .ibbond-info-lists {
    margin: 0.4rem auto;
    font-size: 1.12rem;
    font-weight: 400;
    color: #7d7d7d;
  }

  .ibbond-info-lists .iinfo-desc {}

  .ibbond-info-lists .iinfo-value {
    text-align: right;
  }

  @media only screen and (min-width: 0px) and (max-width: 767px) {
    .ibbond-info-lists .iinfo-value {
      text-align: start;
    }
  }
</style>
