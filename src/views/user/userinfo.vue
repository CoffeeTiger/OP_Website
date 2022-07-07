<template>
  <div>
    <div class="iuserinfo ">
      <div class="iuser-up">
        <div class="iheader">
          <router-link :to="{name:'set', params:{}}">
            <img :src="userheader" class="iheader-img" />
          </router-link>
        </div>
        <div class="ibaseinfos">
          <div class="inikename">
            <div class="iname color_yellow">{{username==''?'nickname':username}}</div>
            <img src="../../assets/imgs/level/level01.svg" class="iuseal" />
          </div>
          <div class="iaddressList">
            <div class="iaddress">
              <img src="../../assets/imgs/logo/eth3.png" class="icurrtype" />
              <div class="iname">{{address.substr(0, 6) +'...'+ address.substr(-4)}}</div>
            </div>
            <img @click="copytoken" class="icopy" src="../../assets/imgs/air-copy.svg" />
          </div>
        </div>
      </div>
      <div class="iuser-down bg_lightgray">
        <div class="icell-balance">
          <div class="ititle">
            <div>{{$t('page.balance')}}</div>
            <!-- <img src="../../assets/imgs/eye-close.svg" class="iuserinfo-eye" v-if="!open" @click="showdata()"/>
            <img src="../../assets/imgs/eye-open.svg" class="iuserinfo-eye" v-if="open" @click="showdata()"/> -->
          </div>
          <router-link :to="{name:'detail', params:{type:'all'}}">
            <div class="ivalue">
              <div :class="open?'ivalue-oph':'ivalue-dots'">
                <template v-if="open">{{balance_Total==0?'0.000000':balance_Total}} OPH</template>
                <template v-if="!open">***** </template>
              </div>
              <div class="inuit"></div>
              <!-- <div class="ivalue-us">$1002.28</div> -->
              <img src="../../assets/imgs/arrow-right.svg" class="iarr-img" />
            </div>
            <div class="ivalue">
              <div class="ivalue-us ivalue-us-v2">${{balance_Total_US==0?'0.00':balance_Total_US}} </div>
            </div>
          </router-link>
        </div>

        <div class="ihr"></div>

        <div class="idetails">

          <div class="icell-balance icell-balance-v2">
            <div class="ititle">
              <div>OPH</div>
            </div>
            <router-link :to="{name:'detail', params:{type:'oph'}}">
              <div class="ivalue">
                <div class="inuit">
                  <!-- $ -->
                </div>
                <div :class="open?'ivalue-oph':'ivalue-dots'">
                  <template v-if="open">{{balance_OPH==0?'0.000000':balance_OPH}}</template>
                  <template v-if="!open">***** </template>
                </div>
                <img src="../../assets/imgs/arrow-right.svg" class="iarr-img" />
              </div>
            </router-link>
            <div class="ivalue">
              <div class="ivalue-us ivalue-us-v2">${{balance_OPH_US==0?'0.00':balance_OPH_US}} </div>
            </div>
          </div>

          <div class="icell-balance icell-balance-v3">
            <div class="ititle">
              <div>veOPH</div>
            </div>
            <router-link :to="{name:'detail', params:{type:'veoph'}}">
              <div class="ivalue">
                <div class="inuit">
                  <!-- $ -->
                </div>
                <div :class="open?'ivalue-oph':'ivalue-dots'">
                  <template v-if="open">{{balance_VEOPH==0?'0.000000':balance_VEOPH}}</template>
                  <template v-if="!open">***** </template>
                </div>
                <img src="../../assets/imgs/arrow-right.svg" class="iarr-img" />
              </div>
            </router-link>
            <div class="ivalue">
              <div class="ivalue-us ivalue-us-v2">${{balance_VEOPH_US==0?'0.00':balance_VEOPH_US}} </div>
            </div>
          </div>

          <div class="icell-balance icell-balance-v4">
            <div class="ititle">
              <div>veOPH (Reward) </div>
            </div>
            <router-link :to="{name:'detail', params:{type:'coph', oph:balance_VEOPHReward}}">
              <div class="ivalue">
                <div class="inuit">
                  <!-- $ -->
                </div>
                <div :class="open?'ivalue-oph':'ivalue-dots'">
                  <template v-if="open">{{balance_VEOPHReward==0?'0.000000':balance_VEOPHReward}}</template>
                  <template v-if="!open">***** </template>
                </div>
                <img src="../../assets/imgs/arrow-right.svg" class="iarr-img" />
              </div>
            </router-link>
            <div class="ivalue">
              <div class="ivalue-us ivalue-us-v2">${{balance_VEOPHReward_US==0?'0.00':balance_VEOPHReward_US}} </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import api from '../../util/network.js'
  import wallet from '../../util/wallet.js'
  export default {
    name: 'userinfov2',
    data() {
      return {
        userheader: '',
        username: '',
        address: '',

        balance_Total: 0.000000,
        balance_Total_US: 0.00,

        balance_VEOPHReward: 0.000000,
        balance_VEOPHReward_US: 0.00,

        balance_VEOPH: 0.000000,
        balance_VEOPH_US: 0.00,

        balance_OPH: 0.000000,
        balance_OPH_US: 0.00,

        ydayreward: '0',
        open: true,
      }
    },
    watch: {
      balance_VEOPHReward_US(newVal, oldVal) {
        let sum = wallet.Sum(this.balance_Total_US, this.balance_VEOPHReward_US)
        this.balance_Total_US = wallet.USDollarFormat(sum)
      },
      balance_VEOPH_US(newVal, oldVal) {
        let sum = wallet.Sum(this.balance_Total_US, this.balance_VEOPH_US)
        this.balance_Total_US = wallet.USDollarFormat(sum)
      },
      balance_OPH_US(newVal, oldVal) {
        let sum = wallet.Sum(this.balance_Total_US, this.balance_OPH_US)
        this.balance_Total_US = wallet.USDollarFormat(sum)
      },

      balance_VEOPHReward(newVal, oldVal) {
        this.balance_Total = Number(this.balance_Total).valueOf() + Number(this.balance_VEOPHReward).valueOf()
      },
      balance_VEOPH(newVal, oldVal) {
        this.balance_Total = Number(this.balance_Total).valueOf() + Number(this.balance_VEOPH).valueOf()
      },
      balance_OPH(newVal, oldVal) {
        this.balance_Total = Number(this.balance_Total).valueOf() + Number(this.balance_OPH).valueOf()
      },
      balance_Total() {
        this.setBalanceData()
      },
      balance_Total_US() {
        this.setBalanceData()
      },

    },
    created() {
      let u = api.getStore('user')
      if (!(u == undefined || u == null || u == '')) {
        let _jsonStr = JSON.parse(u)
        this.userheader = _jsonStr.headImgUrl
        if (this.userheader == 'default') {
          this.userheader = 'img/brand/userheader-mod.png'
        }
        this.username = _jsonStr.nickName
        this.address = _jsonStr.address
      }

      this.init()
      this.getBalance()
    },
    methods: {
      init() {
        let that = this
        api.getAction('/logined/acc/getLoginAccInfo', '', function(res) {
          if (res.code == 200) {
            // that.balance = res.result.balance

            let _balance = res.result.balance
            if (_balance === undefined || _balance === '') {
              _balance = 0
              // that.balance_VEOPHReward = api.strToNum(wallet.WeiToGe(res.result.balance, api.getStore('OPH_Decimals')))
            }
            that.balance_VEOPHReward = api.strToNum(wallet.WeiToGe(_balance, api.getStore('OPH_Decimals')))
            if (Number(_balance).valueOf() > 0) {
              that.exchangeUSDollars(_balance, 'VEOPHReward')
            } else {
              that.balance_VEOPHReward_US = 0.00
            }

            that.username = res.result.nickName
            that.userheader = res.result.headImgUrl
            if (that.userheader == 'default') {
              that.userheader = 'img/brand/userheader-mod.png'
            }
            api.setStore('user', JSON.stringify(res.result))

          } else {
            api.iToastServer(that, res.code, 'secondary')
          }
        })
      },
      getBalance() {
        let that = this
        /* await wallet.walletInit() */
        let add = api.getStore('acount')
        wallet.OPH_getBalanceOfOPH(add, add, function(error, result) {

          if (result == undefined || result == '') {
            api.iToastClient(that, '90011', '');
          } else {
            that.balance_OPH = wallet.WeiToGe(result, api.getStore('OPH_Decimals'))

            if (Number(result).valueOf() > 0) {
              that.exchangeUSDollars(result, 'OPH')
            } else {
              that.balance_OPH_US = 0.00
            }
          }

        })

        wallet.veOPH_getBalanceOfveOPH(add, add, function(error, result) {
          if (result == undefined || result == '') {
            api.iToastClient(that, '90012', '');
          } else {
            that.balance_VEOPH = wallet.WeiToGe(result, api.getStore('OPH_Decimals'))

            if (Number(result).valueOf() > 0) {
              that.exchangeUSDollars(result, 'VEOPH')
            } else {
              that.balance_VEOPH_US = 0.00
            }
          }
        })

      },

      /**
       * get US dollars
       * @param {Object} amount wei
       * @param {Object} type OPH,VEOPH,VEOPHReward,Total
       */
      exchangeUSDollars(amount, type) {
        let add = api.getStore('acount')
        let constract = api.getStore('CONSTRACT')

        let usdc = ''
        let weth = ''
        if (process.env.Environment_Data == 'production') {
          usdc = JSON.parse(constract).contract.USDC
          weth = JSON.parse(constract).contract.OPH
        } else {
          usdc = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          weth = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
        }

        let that = this
        wallet.UniswapV2_getAmountsOut(amount, weth, usdc, add, function(error, result) {
          if (result == undefined || result == '') {
            api.iToastClient(that, '90014', '');
          } else {
            if (type == 'OPH') {
              that.balance_OPH_US = wallet.USDollarFormat(wallet.WeiToGe(result[1], 6))
            } else if (type == 'VEOPH') {
              that.balance_VEOPH_US = wallet.USDollarFormat(wallet.WeiToGe(result[1], 6))
            } else if (type == 'VEOPHReward') {
              that.balance_VEOPHReward_US = wallet.USDollarFormat(wallet.WeiToGe(result[1], 6))
            } else if (type == 'Total') {
              that.balance_Total_US = wallet.USDollarFormat(wallet.WeiToGe(result[1], 6))
            }
          }
        })

      },
      setBalanceData() {
        let v = JSON.stringify({
          OPH: this.balance_OPH,
          OPH_US: this.balance_OPH_US,
          VEOPH: this.balance_VEOPH,
          VEOPH_US: this.balance_VEOPH_US,
          VEOPHReward: this.balance_VEOPHReward,
          VEOPHReward_US: this.balance_VEOPHReward_US
        })
        api.setStore('balance', v)
      },
      editHeader() {
        this.$router.push({
          name: 'set'
        })
      },
      showdata(v) {
        this.open = !this.open
      },
      copytoken() {
        let that = this
        this.$copyText(this.address).then(function(e) {
          api.iToastClient(that, '90008', 'secondary')
        }, function(e) {})
      }
    },
  }
</script>

<style scoped="scoped">
  .iuserinfo {
    width: 100%;
  }

  .iuserinfo .iuser-up {
    width: 100%;
    height: 5.9444rem;
    margin: 3.1111rem auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 3.8rem;
    margin-bottom: 5.142857rem;
  }

  .iuserinfo .iuser-up .iheader {
    width: 7.571429rem;
    height: 7.642857rem;
    background: url(../../assets/imgs/userheader-mod.png) center no-repeat;
    background-size: 100% 100%;
    border-radius: 50%;
    overflow: hidden;
  }

  .iuserinfo .iuser-up .iheader .iheader-img {
    width: 100%;
  }

  .iuserinfo .iuser-up .ibaseinfos {
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .iuserinfo .iuser-up .ibaseinfos .inikename {
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 2.285714rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 500;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .iuserinfo .iuser-up .ibaseinfos .inikename .iuseal {
    width: 2.285714rem;
    height: 2.714286rem;
    margin-left: 0.4444rem;
  }

  .iuserinfo .iuser-up .ibaseinfos .iaddress {
    margin-top: 0.8889rem;
    padding: 0 0.6666rem;
    line-height: 1.7777rem;
    font-size: 1.714286rem;
    font-weight: 300;
    border-radius: 1.1666rem;
    border: 0.1111rem solid #979797;
    color: #979797;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .iuserinfo .iuser-up .ibaseinfos .iaddress:hover {
    transition: all .3s ease;
    border: 0.1111rem solid #e8d3a7;
    color: #e8d3a7;
  }

  .iuserinfo .iuser-up .ibaseinfos .iaddress .icurrtype {
    width: 0.6666rem;
    height: 1.1666rem;
    margin-right: 0.4444rem;
  }

  .iuserinfo .iuser-down {
    width: 100%;
    padding: 2rem;
    margin: 0 auto;
    border-radius: 0.8888rem;
    border: 0.1111rem solid #3C3C3C;
  }

  .iuserinfo .iuser-down .icell-balance-v2 {
    width: 33%;
    overflow: hidden;
  }

  .iuserinfo .iuser-down .icell-balance-v3 {
    width: 33%;
    overflow: hidden;
    padding-left: 2rem;
  }

  .iuserinfo .iuser-down .icell-balance-v4 {
    width: 33%;
    overflow: hidden;
    padding-left: 3.5556rem;
  }

  .iuserinfo .iuser-down .icell-balance .ititle {
    height: 2.1667rem;
    line-height: 2.1667rem;
    font-size: 2rem;
    font-weight: 300;
    color: #979797;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .iuserinfo .iuser-down .icell-balance .ititle .iuserinfo-eye {
    width: 1.7777rem;
    height: 1.1666rem;
    margin-left: 0.4444rem;
  }

  .iuserinfo .iuser-down .icell-balance .ivalue {
    margin-top: 0.8333rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #FFFFFF;
  }

  .iuserinfo .iuser-down .icell-balance .ivalue:hover {
    opacity: 0.86;
  }

  .iuserinfo .iuser-down .icell-balance .ivalue .ivalue-oph {
    min-width: 5.5556rem;
    height: 2.8333rem;
    line-height: 2.8333rem;
    margin-right: 0.4444rem;
    font-size: 2.571429rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 400;
  }

  .iuserinfo .iuser-down .icell-balance .ivalue .inuit {
    height: 2.8333rem;
    line-height: 2.8333rem;
    font-size: 2rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 400;
  }

  .iuserinfo .iuser-down .icell-balance .ivalue .ivalue-dots {
    min-width: 5.5556rem;
    height: 2.8333rem;
    line-height: 2.8333rem;
    padding-top: 0.2233rem;
  }

  .iuserinfo .iuser-down .icell-balance .ivalue .ivalue-us {
    font-size: 1.714286rem;
    font-weight: 300;
    margin: 0 0.4444rem;
    color: #979797;
  }

  .iuserinfo .iuser-down .icell-balance .ivalue .ivalue-us-v2 {
    margin-left: 0;
  }

  .iuserinfo .iuser-down .icell-balance .ivalue .iarr-img {
    width: 0.857143rem;
    height: 1.5rem;
    margin-left: 0.4444rem;
  }

  .iuserinfo .iuser-down .ihr {
    width: 100%;
    margin: 2.2222rem 0;
    height: 0.1111rem;
    background: #3F4142;
  }

  .iuserinfo .iuser-down .idetails {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .iaddressList {
    display: flex;
    align-items: flex-end
  }

  .icopy {
    margin-left: 0.714286rem;
    width: 1.571429rem;
    height: 1.571429rem;
    margin-bottom: 0.214286rem;
  }
</style>
