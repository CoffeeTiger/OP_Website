/**
 * wallet,contract
 * Versoin:v1.0
 * Date: 2022-06-16
 */
import Vue from 'vue'

export default {

  Property_URL: process.env.VUE_APP_URL,
  RPCUrl:process.env.VUE_APP_RPC_URL,
  RPCUrl_Uniswap:process.env.VUE_APP_RPC_URL_UNISWAP,
  /* Current wallet address */
  currentCount: '',
  contract: {
    path: '/unlogin/acc/static/i/a/h/contracts/',
    OPHConfig: {
      name: 'OPHConfig.abi',
      add: '0xf7c607f723D8f7F65Af6cd49aB2fC07C067946b6',
      obj: ''
    },
    OPH: {
      name: 'OPH.abi',
      add: '0xF24713d42660E2D515e2067D7342270111a930b6',
      obj: ''
    },
    WETH: {
      name: 'TestWETH.abi',
      add: '0xcD5E0421F59b40D9bA835775752e5561491A30A8',
      obj: ''
    },
    VAULT: {
      name: 'OPHVault.abi',
      add: '0xa82bcde3982B67D4d414334215D30A46490E280f',
      obj: ''
    },
    AIRDROP: {
      name: 'OPHAirDrop.abi',
      add: '0x0f4d69ab26A3B4b283457FA028A2C56fB5599BD2',
      obj: ''
    },
    AWARD: {
      name: 'OPHAward.abi',
      add: '0x6c69E6C28434bA96e6D3B63298cEB32B8dd6A7f5',
      obj: ''
    },
    BOND: {
      name: 'OPHBond.abi',
      add: '0x8509fAFaC74c4d8bAe40035139fC7Cd6ACc8F561',
      obj: ''
    },
    DAO: {
      name: 'OPHDAO.abi',
      add: '0x9F35A9Ae09CeB5C69957F282a5929DbC2BDD99Ab',
      obj: ''
    },
    EXCHANGE: {
      name: 'OPHExchange.abi',
      add: '0x1033764F8dC8f8D01b1fb2BB0caBA3C191D5A0D2',
      obj: ''
    },
    INTEREST: {
      name: 'OPHInterest.abi',
      add: '0x66C659d1daBC70Cf8C977Bb9Ce94C035906Ee0E8',
      obj: ''
    },
    NFT721: {
      name: 'OPHNFT721.abi',
      add: '0x2297030e3Dad47Bf735D2135fAA8618FB1e4Fd82',
      obj: ''
    },
    NFT1155: {
      name: 'OPHNFT1155.abi',
      add: '0x15b37bdb8F7605f9be7f8D31668Fdc0a7f53febE',
      obj: ''
    },
    PRIZE: {
      name: 'OPHPrize.abi',
      add: '0xB925671967d7c545A4cbCbb6409078a4F0AeFe42',
      obj: ''
    },
    STAKE: {
      name: 'OPHStake.abi',
      add: '0x6FF0E3B6D478C951310D8D4ba2C37ea777315D67',
      obj: ''
    },
    TEAM: {
      name: 'OPHTeam.abi',
      add: '0xC776e0aA8BD9C967630ac50F6CAB084B2c3Bcf0E',
      obj: ''
    },
    VEOPH: {
      name: 'veOPH.abi',
      add: '0x7ebCa8210BD2D28aaD2fA014662FAececf4A43FE',
      obj: ''
    },
    UniswapV2: {
      name: 'IUniswapV2Router01.abi',
      add: '0xf164fC0Ec4E93095b804a4795bBe1e041497b92a',
      obj: ''
    }

  },

  hello() {
    this.iToastCommom('hello', '')
  },

  async walletInit() {
    if (typeof window.ethereum !== 'undefined') {

      let b = ethereum.isConnected();
      if (b) {

        let accounts = await ethereum.request({
          method: 'eth_requestAccounts'
        }).then((accounts) => {

          if (!this.empty(accounts[0])) {
            this.currentCount = accounts[0]
          } else {
            this.iToastCommom('Failed to get wallet address', 'warning')
          }

        }).catch((err) => {
          if (err.code === 4001) {
            this.iToastCommom('Please link to wallet MetaMask', 'warning')
          }
          if (err.code === -32002) {
            this.iToastCommom('Please unlock MetaMask', 'warning')
          } else {
            this.iToastCommom(err, 'warning')
          }
        });

      } else {
        this.iToastCommom('Failed to link to MetaMask, please check the network', 'warning')
      }

    } else {
      this.iToastCommom('Please download and install MetaMask', 'warning')
      location.href = 'https://metamask.io/download/'
    }
  },


  /**
   * Common:contract initialization
   * @param {Object} conProperty
   * @param {Object} callback
   */
  Contract_Init(conProperty, callback) {
    if (this.empty(conProperty.obj)) {
      var Web3 = require('web3')
      /* var web3 = new Web3(Web3.givenProvider) */
      var web3 = new Web3(this.RPCUrl)
      let that = this
      Vue.axios.get(this.Property_URL + this.contract.path + conProperty.name).then((response) => {
        that.log(conProperty.name)
        that.log(response.data)
        conProperty.obj = new web3.eth.Contract(response.data, conProperty.add)
        callback(conProperty.obj)
      }).catch(function(error){
        that.log(error)
      })
    } else {
      callback(conProperty.obj)
    }
  },

  Contract_Init_IUniswap(conProperty, callback) {
    if (this.empty(conProperty.obj)) {
      var Web3 = require('web3')
      var web3 = new Web3(this.RPCUrl_Uniswap)
      let that = this
      Vue.axios.get(this.Property_URL + this.contract.path + conProperty.name).then((response) => {
        that.log(conProperty.name)
        that.log(response.data)
        conProperty.obj = new web3.eth.Contract(response.data, conProperty.add)
        callback(conProperty.obj, web3)
      }).catch(function(error){
        that.log(error)
      })
    } else {
      callback(conProperty.obj)
    }
  },


  /**
   * Common:Get the balance of the specified wallet address
   * @param {Object} add
   */
  GetBalance(add, callback){
    var Web3 = require('web3')
    var web3 = new Web3(Web3.givenProvider)
    web3.eth.getBalance(add).then(function(d){
      callback(d)
    })
  },

  /* -------OPH part------- */
  /**
   * Set OPH address configuration
   * @param {Object} add
   * @param {Object} callback
   */
  OPH_setConfigAdd(add, callback) {
    let that = this
    this.Contract_Init(this.contract.OPH, function(contract) {
      contract.methods.setConfigAddress(add).send({
        from: that.currentCount
      }, function(error, result) {
        callback(error, result)
      })
    })
  },
  /**
   * Get the amount of OPH in the Treasury Vault
   * @param {Object} callback
   */
  OPH_getBalanceOfOPH_Vault(callback) {
    let that = this
    this.Contract_Init(this.contract.OPH, function(contract) {
      contract.methods.balanceOf(that.contract.VAULT.add).call({
        from: that.currentCount
      }, function(error, result) {
        callback(error, result)
      })
    })
  },
  /**
   * Get the OPH quantity of the specified contract
   * @param {Object} contractName
   * @param {Object} callback
   */
  OPH_getBalanceOfOPH(add, callback) {
    let that = this
    this.Contract_Init(this.contract.OPH, function(contract) {
      contract.methods.balanceOf(add).call({
        from: add
      }, function(error, result) {
        callback(error, result)
      })
    })
  },

  /**
   * oph Decimals
   * @param {Object} callback
   */
  OPH_getDecimalsOfOPH(callback) {
    let that = this
    this.Contract_Init(this.contract.OPH, function(contract) {
      contract.methods.decimals().call({
        from: that.currentCount
      }, function(error, result) {
        callback(error, result)
      })
    })
  },

  /* -------TestWETH------- */
  /**
   * vault weth count
   * @param {Object} callback
   */
  WETH_getBalanceOfWETH_Vault(callback) {
    let that = this
    this.Contract_Init(this.contract.WETH, function(contract) {
      contract.methods.balanceOf(that.contract.VAULT.add).call({
        from: that.currentCount
      }, function(error, result) {
        callback(result)
      })
    })
  },
  /**
   * weth count
   * @param {Object} add
   * @param {Object} callback
   */
  WETH_getBalanceOfWETH(add, callback) {

    let that = this
    this.Contract_Init(this.contract.WETH, function(contract) {
      contract.methods.balanceOf(add).call({
        from: add
      }, function(error, result) {
        callback(error, result)
      })
    })
  },
  /**
   * WETH Decimals
   * @param {Object} callback
   */
  WETH_getDecimalsOfWETH(callback) {
    let that = this
    this.Contract_Init(this.contract.WETH, function(contract) {
      contract.methods.decimals().call({
        from: that.currentCount
      }, function(error, result) {
        callback(error, result)
      })
    })
  },


  /* ------- veOPH ------- */
  /**
   * Get the amount of veOPH on the specified contract
   * @param {Object} add
   * @param {Object} callback
   */
  veOPH_getBalanceOfveOPH(add, callback) {
    let that = this
    this.Contract_Init(this.contract.VEOPH, function(contract) {
      contract.methods.balanceOf(add).call({
        from: add
      }, function(error, result) {
        callback(error, result)
      })
    })
  },
  /**
   * WETH Decimals
   * @param {Object} callback
   */
  veOPH_getDecimalsOfveOPH(callback) {
    let that = this
    this.Contract_Init(this.contract.VEOPH, function(contract) {
      contract.methods.decimals().call({
        from: that.currentCount
      }, function(error, result) {
        callback(result)
      })
    })
  },

  /**
   * Exchange US Dollars
   * @param {Object} amount
   * @param {Object} weth/oph
   * @param {Object} usdc
   * @param {Object} add
   * @param {Object} callback
   */
  UniswapV2_getAmountsOut(amount, weth, usdc, add, callback){
    let that = this
    this.Contract_Init_IUniswap(this.contract.UniswapV2, function(contract, web3) {
      /* let _ETH1 = web3.utils.toWei('1', 'ether') */
      let _arr = new Array(weth, usdc)
      contract.methods.getAmountsOut(amount, _arr).call({
        from: add
      }, function(error, result) {
        callback(error, result)
      })
    })
  },


  /**
   * to wei
   * @param {Object} v
   * @param {Object} decimal
   */
  GeToWei(v, decimal){
    return Number(v * Math.pow(10, decimal)).toString()
  },
  /**
   * from wei
   * @param {Object} v
   * @param {Object} decimal
   */
  WeiToGe(v, decimal){
    return Number(Number(v).valueOf() / Math.pow(10, decimal)).toFixed(6)
  },

  USDollarFormat(v){
    return Number(v).toFixed(2)
  },

  empty(v) {
    switch (typeof v) {
      case 'undefined':
        return true;
      case 'string':
        if (v.trim().length == 0) return true;
        break;
      case 'boolean':
        if (!v) return true;
        break;
      case 'number':
        if (0 === v) return true;
        break;
      case 'object':
        if (null === v) return true;
        if (undefined !== v.length && v.length == 0) return true;
        for (var k in v) {
          return false;
        }
        return true;
        break;
    }
    return false;
  },

  guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  },

  log(s) {
    console.info(s)
  },

  iToastCommom(msg, variant){
    if(variant == 'warning'){
      Vue.$toast.warning(msg, {
        position: 'top-center',
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: 'button',
        icon: true,
        rtl: false
      })
    } else if(variant == 'error'){
      Vue.$toast.error(msg, {
        position: 'top-center',
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: 'button',
        icon: true,
        rtl: false
      })
    } else {
      Vue.$toast(msg, {
        position: 'top-center',
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: 'button',
        icon: true,
        rtl: false
      })
    }
  },

}
