<template>
  <div>
    <b-navbar toggleable="lg" class="ib-navbar ib-navbar-Purple" fixed="top">
      <div class="inavbar-contain">

        <b-navbar-brand href="/">
          <img src="../../assets/imgs/whitev5.png" class="brand-img" alt="Kitten">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/" class="inav-item" @click="title(1)">
              <span class=" nav-link-inner--text i-nav-link-font"
                :class="titlechk==1?'i-nav-link-font-check':''">{{$t('page.publish')}}</span>
            </b-nav-item>
            <b-nav-item to="/rewards" class="inav-item" @click="title(2)">
              <span class=" nav-link-inner--text i-nav-link-font"
                :class="titlechk==2?'i-nav-link-font-check':''">{{$t('page.stake')}}</span>
            </b-nav-item>
            <b-nav-item to="/bond" class="inav-item" @click="title(3)">
              <span class=" nav-link-inner--text i-nav-link-font"
                :class="titlechk==3?'i-nav-link-font-check':''">{{$t('page.bond')}}</span>
            </b-nav-item>
            <b-nav-item to="/swap" class="inav-item" @click="title(5)">
              <span class=" nav-link-inner--text i-nav-link-font"
                :class="titlechk==5?'i-nav-link-font-check':''">{{$t('page.swap')}}</span>
            </b-nav-item>
            <b-nav-item to="/create" class="inav-item" @click="title(4)">
              <span class=" nav-link-inner--text i-nav-link-font"
                :class="titlechk==4?'i-nav-link-font-check':''">{{$t('page.create')}}</span>
            </b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="">

            <b-nav-form @submit.prevent>
              <div class="isearch-outer">
                <div class="isearch-img">
                  <b-icon icon="search"></b-icon>
                </div>
                <input class="isearch-input" type="text" :placeholder="$t('page.search')" @focusout="search"
                  @keyup.enter="search" />
              </div>
            </b-nav-form>

            <b-nav-item class="">
              <b-nav-item-dropdown id="my-nav-dropdown" toggle-class="nav-link-custom" no-caret right>
                <template #button-content>
                  <img src="../../assets/imgs/lang.svg" class="iheader-img" />
                  <!-- <img src="../../assets/imgs/nflag/zh-circle.png" class="iheader-img" v-if="checklang=='zh'" />
                  <img src="../../assets/imgs/nflag/en-uk-cricle.png" class="iheader-img" v-if="checklang=='en-uk'" />
                  <img src="../../assets/imgs/nflag/en-us-cricle.png" class="iheader-img" v-if="checklang=='en-us'" /> -->
                </template>
                <b-dropdown-item @click="lang('en-us')" :class="checklang=='en-us'?changlangItem:''">
                  <div class="ilang-contain">
                    <img src="../../assets/imgs/nflag/en-us-squre.png" class="ilang-select" />
                    <span :class="checklang=='en-us'?'iselect-color':''">English(US)</span>
                  </div>
                </b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>

                <b-dropdown-item @click="lang('zh')" :class="checklang=='zh'?changlangItem:''">
                  <div class="ilang-contain">
                    <img src="../../assets/imgs/nflag/zh-squre.png" class="ilang-select" />
                    <span :class="checklang=='zh'?'iselect-color':''">简体中文</span>
                  </div>
                </b-dropdown-item>

              </b-nav-item-dropdown>
            </b-nav-item>

            <b-nav-item class="">
              <b-nav-item-dropdown id="my-nav-dropdown" toggle-class="nav-link-custom" no-caret right>
                <template #button-content>
                  <b-img :src="require('../../assets/imgs/userheader-mod.png')" v-if="userheader==''&& ustat"
                    class="iheader-img iheader-img-noacive"></b-img>
                  <b-img :src="userheader" v-if="userheader!=''&&ustat" class="iheader-img iheader-img-user"></b-img>
                  <b-img :src="require('../../assets/imgs/userheader.svg')" v-if="!ustat" class="iheader-img"></b-img>
                </template>
                <b-dropdown-item to="/profile" @click="profile">
                  <b-icon icon="person" scale="1.2" variant="Secondary"></b-icon>
                  <span>{{$t('page.profile')}} </span>
                </b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>
                  <b-icon icon="box-arrow-in-up-right" scale="1.2" variant="Secondary"></b-icon>
                  <span>{{$t('page.importfromOpensea')}}</span>
                </b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item to="/set" @click="profile">
                  <b-icon icon="gear" scale="1.2" variant="Secondary"></b-icon>
                  <span>{{$t('page.setting')}}</span>
                </b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item to="/message" @click="profile">
                  <b-icon icon="bell" scale="1.2" variant="Secondary"></b-icon>
                  <span>{{$t('page.messages')}}</span>
                  <b-badge variant="primary" class="fright">12</b-badge>
                </b-dropdown-item>

                <template v-if="ustat">
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item @click="logout">
                    <b-icon icon="box-arrow-right" scale="1.2" variant="Secondary"></b-icon>
                    <span>{{$t('page.logout')}}</span>
                  </b-dropdown-item>
                </template>

              </b-nav-item-dropdown>
            </b-nav-item>

            <b-nav-item class="iwallet-btn" v-b-toggle.sidebar-variant>
              <template v-if="!ustat">
                <img src="../../assets/imgs/wallet.svg" class="iheader-img"/>
              </template>
              <template v-else>
                <img src="../../assets/imgs/logo/metamask.png" class="iheader-img" v-if="walletType=='metamask'" />
                <img src="../../assets/imgs/logo/mathwallet.png" class="iheader-img" v-if="walletType=='mathwallet'" />
                <img src="../../assets/imgs/logo/tokenpocket.jpg" class="iheader-img" v-if="walletType=='tokenpocket'" />
                <img src="../../assets/imgs/logo/coinbase.png" class="iheader-img" v-if="walletType=='coinbase'" />
                <img src="../../assets/imgs/logo/tronlink.png" class="iheader-img" v-if="walletType=='tronlink'" />
                <img src="../../assets/imgs/logo/phantom.svg" class="iheader-img" v-if="walletType=='phantom'" />
              </template>
            </b-nav-item>

            <!-- <b-nav-item class="">
              <b-nav-item-dropdown id="my-nav-dropdown" toggle-class="nav-link-custom" no-caret right>
                <template #button-content>
                  <img src="../../assets/imgs/wallet.svg" class="iheader-img" v-if="!ustat" />
                  <img src="../../assets/imgs/logo/metamask.png" class="iheader-img" v-if="ustat" />
                </template>
                <b-dropdown-item @click="propertyIsOk" v-if="!ustat">
                  <b-icon icon="box-arrow-in-right" variant="Secondary"></b-icon>
                  <span>{{$t('page.login')}}</span>
                </b-dropdown-item>
                <b-dropdown-item @click="logout" v-if="ustat">
                  <b-icon icon="box-arrow-right" variant="Secondary"></b-icon>
                  <span>{{$t('page.logout')}}</span>
                </b-dropdown-item>

                <b-dropdown-item v-b-toggle.sidebar-variant>
                  <b-icon icon="box-arrow-right" variant="Secondary"></b-icon>
                  <span>XXX</span>
                </b-dropdown-item>

              </b-nav-item-dropdown>
            </b-nav-item> -->

          </b-navbar-nav>

        </b-collapse>

      </div>
    </b-navbar>

    <sidebar @connwallet="connwallet"></sidebar>

  </div>
</template>

<script>
  import Web3 from 'web3'
  import {mapState,mapMutations,mapGetters} from "vuex"

  import api from '../../util/network.js'
  import ebus from '../../util/ebus.js'
  import wallet from '../../util/wallet.js'
  import wconn from '../../util/wconn.js'

  import sidebar from '../../components/user/sidebar.vue'

  export default {
    name: 'headerNavBar',
    components: {
      sidebar
    },
    data() {
      return {
        ustat: false,
        acount: '',
        userheader: '',
        chainid: '0x1',
        Ethereum: '',
        web3: '',
        titlechk: 0,
        checklang: 'en-us',
        changlangItem: 'ilang-select-item',
        walletType:'',
      }
    },
    computed: {
      ...mapState(['loginStatus'])
    },
    mounted() {
      ebus.$on('emsg', (res) => {
        if (res == 'relogin') {
          this.propertyIsOk()
        } else if (res == 'refresh') {
          let _userheader = api.getStore('userheader')
          if (!api.empty(_userheader)) {
            this.userheader = _userheader
          }
        }
      })
    },
    methods: {
      ...mapMutations(['setLoginStatus']),
      ...mapGetters(['getLoginStatus']),
      title(v) {
        this.titlechk = v
      },
      profile() {
        this.titlechk = 0
      },
      login() {
        if (api.empty(this.chainid)) {
          this.chainid = api.getStore('chain')
        }

        let networkIdHex = ''
        if (this.walletType == 'tronlink') {
          networkIdHex = Number(this.web3.toDecimal(this.chainid)).toString()
        } else{
          networkIdHex = this.web3.utils.hexToNumberString(this.chainid)
        }

        let that = this
        let pars = JSON.stringify({
          accAddress: this.acount,
          networkId: networkIdHex,
          nonce: '',
          sign: ''
        })
        api.postAction('/unlogin/acc/getNonce', pars, function(res) {
          api.log(res)
          if (res.code == 200) {

            if (that.walletType == 'tronlink') {

              that.web3.trx.sign(that.web3.toHex(res.result)).then((err) => {
                console.info(err)
                let pars1 = JSON.stringify({
                  accAddress: that.acount,
                  networkId: networkIdHex,
                  nonce: res.result,
                  sign: err
                })
                that.login_save(pars1)
              })

            } else if (that.walletType == 'phantom') {

              window.solana.signMessage(that.web3.toHex(res.result), "hex").then(res => {
              	console.info(res)
              	const signStr = web3.utils.bytesToHex(res.signature)
                let pars1 = JSON.stringify({
                  accAddress: that.acount,
                  networkId: networkIdHex,
                  nonce: res.result,
                  sign: signStr
                })
                that.login_save(pars1)
              })

            } else {

              that.web3.eth.personal.sign(that.web3.utils.utf8ToHex(res.result), that.acount).then((err) => {
                console.info(err)
                let pars1 = JSON.stringify({
                  accAddress: that.acount,
                  networkId: networkIdHex,
                  nonce: res.result,
                  sign: err
                })
                that.login_save(pars1)
              });

            }

          } else {
            api.iToastServer(that, res.code, 'secondary')
          }
        })


      },

      login_save(params){
        let that = this
        api.postAction('/unlogin/acc/login', params, function(res1) {
          api.log(res1)
          if (res1.code == 0) {
            that.ustat = true
            api.setStore('token', res1.result.token)
            api.setStore('user', JSON.stringify(res1.result))

            that.userheader = res1.result.headImgUrl
            if (that.userheader == 'default') {
              that.userheader = 'img/brand/userheader-mod.png'
            }
            api.setStore('userheader', that.userheader)
            api.setStore('acount', that.acount)

            that.setLoginStatus(true)

            ebus.$emit('emsgreturn', 'ok')
          } else {
            that.ustat = false
            api.iToastServer(that, res1.code, 'secondary')
          }
        })
      },

      initContractBaseInfo(){
        let that = this
        wallet.OPH_getDecimalsOfOPH(function(error, result){
          if (!api.empty(result)) {
            api.setStore('OPH_Decimals', result)
          }
        })

        wallet.WETH_getDecimalsOfWETH(function(error, result){
          if (!api.empty(result)) {
            api.setStore('WETH_Decimals', result)
          }
        })

        wallet.Config_getData('BANK_OUT_FEE', '',function(error, result){
          if (!api.empty(result)) {
            api.setStore('BANK_OUT_FEE', result)
          }
        })
      },
      getContractBaseInfo(){
        /* constract */
        api.getAction('/unlogin/base-data/addrees', '', function(res) {
          api.setStore('CONSTRACT', JSON.stringify(res.result))
        })
      },
      logout() {
        api.clearStore()
        this.ustat = false
        this.acount = ''
        this.userheader = ''
        this.setLoginStatus(false)
      },
      lang(v) {
        this.checklang = v
        localStorage.setItem("lang", v)
        this.$router.go(0)
      },
      search() {
        console.info('search')
      },
      initLoginStatus() {
        let token = api.getStore('token')
        if (!api.empty(token)) {
          this.ustat = true
          this.acount = api.getStore('acount')
          this.userheader = api.getStore('userheader')
          this.walletType = api.getStore('walletType')
        }
      },
      /**
       * Click on wallet to check the environment
       */
      async propertyIsOk() {
        if (typeof window.ethereum !== 'undefined'|| (typeof window.web3 !== 'undefined')) {
          const provider = window['ethereum'] || window.web3.currentProvider

          /* let b = provider.isConnected();
          if (b) { */
            let that = this
            provider.request({
              method: 'eth_requestAccounts'
            }).then((accounts) => {

              console.info(accounts)
              that.chainid = provider.chainId
              that.handleAccountsChanged(accounts)

            }).catch((err) => {
              if (err.code === 4001) {
                api.iToastClient(that, '90005', 'warning')
              }
              if (err.code === -32002) {
                api.iToastClient(that, '90004', 'warning')
              } else {
                api.log(err);
              }
            });

          /* } else {
            api.iToastClient(this, '90003', 'warning')
          } */

        } else {
          location.href = 'https://metamask.app.link/dapp/openpublish.io'
        }
      },
      /**
       * Get current account [current account or account after account changes]
       * @param {Object} accounts
       */
      handleAccountsChanged(accounts) {
        if (accounts.length === 0) {
          api.iToastClient(this, '90002', 'warning')
        } else {
          if (this.acount != accounts[0] || !this.ustat) {
            this.acount = accounts[0]
            this.login()
          }
        }
      },
      connwallet(type){
        api.setStore('walletType', type)
        this.walletType = type
        let that = this
        if (this.walletType == 'metamask' || this.walletType == 'mathwallet' || this.walletType == 'tokenpocket') {
          this.web3 = new Web3(Web3.givenProvider || api.RPCUrl);
          this.propertyIsOk()
        } else if(type == 'coinbase'){

          const ethereum = wconn.coinbase_init()
          this.web3 = new Web3(ethereum)

          wconn.coinbase_conn(function(res){
            that.acount = res[0]
            that.chainid = ethereum.chainId
            that.login()
          })
        } else if(this.walletType == 'tronlink'){
          /* This type of address is not yet supported on the server side */
          wconn.tronlink_con(function(res){
            that.acount = res
            that.web3 = window.tronWeb

            that.login()
          })
        } else if(this.walletType == 'phantom'){
          /* This type of address is not yet supported on the server side */
          wconn.phantom_conn(function(res){
            that.acount = res
            that.web3 = new Web3(Web3.givenProvider)

            that.login()
          })
        }

      }

    },
    created() {
      this.initLoginStatus()
      this.getContractBaseInfo()
      this.initContractBaseInfo()

      this.web3 = new Web3(Web3.givenProvider || api.RPCUrl);

      if (typeof window.ethereum !== 'undefined') {

        ethereum.on('accountsChanged', (d) => {
          if (this.ustat) {
            this.handleAccountsChanged(d)
          }
        });

        ethereum.on('disconnect', (error) => {
          if (this.ustat) {
            this.logout()
          }
        });

        ethereum.on('chainChanged', (chainId) => {
          this.chainid = chainId
          api.setStore('chain', this.chainid)
        });

      } else {
        api.log('wallet has not been installed')
      }

      let lang = localStorage.getItem("lang")
      if (!(lang == undefined || lang == '' || lang == null)) {
        this.checklang = lang
      }

    }
  }
</script>
<style>
  .dropdown-menu {
    /* background-color: #252525; */
    font-size: 1.1666rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 400;
    color: #000;
  }

  .dropdown-menu a:link,
  .dropdown-menu a:visited {
    color: #000000 !important;
  }
</style>
<style scoped="scoped">
  .inavbar-contain {
    width: 100%;
    max-width: 1920px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    font-family: Poppins-Regular, Poppins;
  }

  .inavbar-contain-samll-header {
    width: 100%;
  }

  .navbar {
    padding: 0.5rem 1rem;
  }

  @media only screen and (min-width: 0px) and (max-width: 992px) {
    .inavbar-contain {
      width: 100%;
      max-width: 1920px;
      display: block;
      margin: 0 auto;
    }

    .navbar-toggler {
      float: right;
      margin-top: 0.25rem;
    }

    .navbar-collapse {
      width: 100%;
      margin: 0.75rem auto;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    /* .navbar{
      padding: 0.5rem 0;
    } */
  }

  .ib-navbar {
    width: 100%;
    /* max-width: 1920px; */
    margin: 0 auto;
    /* border-bottom: 1px solid #f0f0f0; */
    /* background-color: #FFFFFF; */
    /* padding: 0.8rem 1rem !important; */
  }

  .ib-navbar-Purple {
    width: 100%;
    height: 4.5555rem;
    max-height: 82px;
    background: #393939;
    /* background: linear-gradient(100deg, #f2f2f2 0, #f2f2f2 100%) !important; */
    border-bottom: 0.1111rem solid #393939;
  }

  .navbar-collapse {
    position: relative !important;
    background-color: #26136e00;
  }

  .brand-img {
    width: 13.5555rem;
    height: 3.2777rem;
  }

  .i-nav-link-font {
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    font-size: 1.1666rem;
    font-weight: 500;
    font-family: Poppins-Medium, Poppins;
    color: #B4B4B4;
  }

  .i-nav-link-font:hover {
    color: #F7B62D;
  }

  .i-nav-link-font-check {
    color: #F7B62D;
  }

  .iwallet:hover {
    opacity: 0.8;
  }

  .nav-link {
    padding: 0 .5rem !important;
  }

  /* header search */
  .isearch-outer {
    width: 25.7222rem;
    height: 2.2222rem;
    line-height: 2.2222rem;
    min-width: 11.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.2rem 1.2rem;
    background: #605E5E;
    border-radius: 1.5rem;
    margin: 0 2.1111rem 0 3.0555rem;
    border: 0.0555rem solid #8A8A8A;
  }

  .isearch-outer .isearch-img {
    font-size: 1.3333rem;
    padding: 0 .6rem 0 0;
    color: #B4B4B4;
  }

  .isearch-outer .isearch-input {
    width: 18.8888rem;
    background-color: #FFFFFF00;
    font-size: 1.1666rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #ececec;
  }

  .isearch-outer:focus {
    color: #FFFFFF;
    border: 0.1111rem solid #FFFFFF;
  }

  @media only screen and (min-width: 0px) and (max-width: 992px) {
    .isearch-outer {
      margin: 0.4rem auto;
    }

    .inav-item {
      padding: 0.8rem 0;
    }

    .inav-item:hover {
      background-color: #FFFFFF;
      border-radius: 0.4rem;
    }

    .inav-item .i-nav-link-font {
      padding-left: 0 !important;
    }

  }

  .iheader-img {
    /* width: 2.56rem;
    height: 2.56rem;
    border-radius: 50%; */
    width: 1.8rem;
    height: 1.8rem;
    margin: 0.25rem;
  }

  .iheader-img-user {
    border-radius: 50%;
  }

  .iheader-img-noacive {
    /* opacity: 0.5;
    filter: grayscale(0.9); */
  }

  .iheader-img:hover {
    opacity: 0.8;
  }

  .ilang-contain {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ilang-contain .iselect-color {
    color: #313131;
  }

  .ilang-select {
    width: 2.08rem;
    height: 1.36rem;
    margin-right: 0.2222rem;
  }

  .ilang-select-item {
    background-color: #e4e4e4;
  }

  .iwallet-btn{
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
  }
</style>
