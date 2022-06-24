/**
 * wallet,contract
 * Versoin:v1.0
 * Date: 2022-06-16
 */
import Vue from 'vue'
import BigNumber from 'bignumber.js'

export default {

  Property_URL: process.env.VUE_APP_URL,
  RPCUrl:process.env.VUE_APP_RPC_URL,
  RPCUrl_Uniswap:process.env.VUE_APP_RPC_URL_UNISWAP,
  currentCount: '',
  contract: {
    path: '/unlogin/acc/static/i/a/h/contracts/',
    OPHConfig: {
      name: 'OPHConfig.abi',
      add: '0x1728B5116Ba59a211b5C0b93f101EE82D253E432',
      obj: ''
    },
    OPH: {
      name: 'OPH.abi',
      add: '0xC16089B1dF0207a1B8dF8041d7a41C0dcb325927',
      obj: ''
    },
    WETH: {
      name: 'TestWETH.abi',
      add: '0x3d02AC7e57e154D22618FfDc669aa2a065f853D9',
      obj: ''
    },
    VAULT: {
      name: 'OPHVault.abi',
      add: '0xC4DBBfC4F54190598960d7d0ad0c291ab2E2a4Ea',
      obj: ''
    },
    AIRDROP: {
      name: 'OPHAirDrop.abi',
      add: '0x6B2F7cCB95148615BB04c14357148edf08f6b831',
      obj: ''
    },
    AWARD: {
      name: 'OPHAward.abi',
      add: '0xbFf2533519d92BEcEfAEBd529DE533C8FB4511fF',
      obj: ''
    },
    BOND: {
      name: 'OPHBond.abi',
      add: '0x6c4b0E7bE7552068b23D9D4815ac739f4cb05C51',
      obj: ''
    },
    DAO: {
      name: 'OPHDAO.abi',
      add: '0x0f62d77DE311A3Ef6cF36715c1D306b67741a21C',
      obj: ''
    },
    EXCHANGE: {
      name: 'OPHExchange.abi',
      add: '0x9ac738f4F2625389eB569140d63fa022fdf2a506',
      obj: ''
    },
    INTEREST: {
      name: 'OPHInterest.abi',
      add: '0x7396f4D1e5ba31D02Cc48530e25De06bF4EF16bE',
      obj: ''
    },
    NFT721: {
      name: 'OPHNFT721.abi',
      add: '0x44ab122d39607680Fe0DC6CeCA989D93A8D81CF3',
      obj: ''
    },
    NFT1155: {
      name: 'OPHNFT1155.abi',
      add: '0xC063e8366DDCE78377a27b501eaDC67882a1345F',
      obj: ''
    },
    PRIZE: {
      name: 'OPHPrize.abi',
      add: '0x4152Ea9156f5C0d0832a441826fdDC4ef7071709',
      obj: ''
    },
    STAKE: {
      name: 'OPHStake.abi',
      add: '0xcA9C42dFdDCbD225f0Ab23Db3fa44e705FE5512B',
      obj: ''
    },
    TEAM: {
      name: 'OPHTeam.abi',
      add: '0x6A6eF8e215d183D30D7216cd3A4C2aC6D7904B4F',
      obj: ''
    },
    VEOPH: {
      name: 'veOPH.abi',
      add: '0x594F8ac672F30b9C1a505449084a0745D0A49395',
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
   * get sign str
   * @param {Object} dataToSign
   * @param {Object} owner
   */
  sign(dataToSign, owner, callback){
    var Web3 = require('web3')
    var web3 = new Web3(Web3.givenProvider)
    web3.eth.personal.sign(web3.utils.utf8ToHex(dataToSign), owner).then((err) => {
      callback(err)
    })
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
  /**
   * get config data
   * @param {Object} key
   * @param {Object} add
   */
  Config_getData(key, add, callback){
    let that = this
    this.Contract_Init(this.contract.OPHConfig, function(contract) {
      contract.methods.getData(key).call({
        from: add
      }, function(error, result) {
        callback(error, result)
      })
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
   * Get the OPH quantity of the specified owner address
   * @param {Object} owner
   * @param {Object} add
   * @param {Object} callback
   */
  OPH_getBalanceOfOPH(owner, add, callback) {
    let that = this
    this.Contract_Init(this.contract.OPH, function(contract) {
      contract.methods.balanceOf(owner).call({
        from: add
      }, function(error, result) {
        callback(error, result)
      })
    })
  },
  /**
   * Obtain license amount
   * @param {Object} owner
   * @param {Object} spender
   * @param {Object} callback
   */
  OPH_allowance(owner, spender, callback){
    let that = this
    this.Contract_Init(this.contract.OPH, function(contract) {
      contract.methods.allowance(owner, spender).call({
        from: owner
      }, function(error, result) {
        callback(error, result)
      })
    })
  },
  /**
   * approve
   * @param {Object} spender
   * @param {Object} amount
   * @param {Object} add
   * @param {Object} callback
   */
  OPH_approve(spender, amount, add, callback){
    let that = this
    this.Contract_Init(this.contract.OPH, function(contract) {
      contract.methods.approve(spender, amount).send({
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
   * Get the amount of veOPH on the specified ownerAdd
   * @param {Object} ownerAdd
   * @param {Object} add
   * @param {Object} callback
   */
  veOPH_getBalanceOfveOPH(ownerAdd, add, callback) {
    let that = this
    this.Contract_Init(this.contract.VEOPH, function(contract) {
      contract.methods.balanceOf(ownerAdd).call({
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
   * deposit
   * @param {Object} amount
   * @param {Object} callback
   */
  veOPH_bankIn(amount, add, callback) {
    let that = this
    this.Contract_Init(this.contract.VEOPH, function(contract) {
      contract.methods.bankIn(amount).send({
        from: add
      }, function(error, result) {
        callback(error, result)
      })
    })
  },
  /**
   * Obtain license amount
   * @param {Object} owner
   * @param {Object} spender
   * @param {Object} callback
   */
  veOPH_allowance(owner, spender, callback){
    let that = this
    this.Contract_Init(this.contract.VEOPH, function(contract) {
      contract.methods.allowance(owner, spender).call({
        from: owner
      }, function(error, result) {
        callback(error, result)
      })
    })
  },
  /**
   * approve
   * @param {Object} spender
   * @param {Object} amount
   * @param {Object} add
   * @param {Object} callback
   */
  veOPH_approve(spender, amount, add, callback){
    let that = this
    this.Contract_Init(this.contract.VEOPH, function(contract) {
      contract.methods.approve(spender, amount).send({
        from: add
      }, function(error, result) {
        callback(error, result)
      })
    })
  },


  /** --------- OPHStake ---------- **/
  /**
   * widthdraw
   * @param {Object} amount
   * @param {Object} add
   * @param {Object} callback
   */
  Stake_bankOutApply(amount, fee, fromAdd, toAdd, callback){
    let that = this
    this.Contract_Init(this.contract.STAKE, function(contract) {
      contract.methods.bankOutApply(amount).send({
        from: fromAdd, to: toAdd, value: Number(fee).toString()
      }, function(error, result) {
        callback(error, result)
      })
    })
  },
  /**
   * getBalance
   * @param {Object} ownerAdd
   * @param {Object} callback
   */
  Stake_getBalance(ownerAdd, callback){
    let that = this
    this.Contract_Init(this.contract.STAKE, function(contract) {
      contract.methods.getBalance().call({
        from: ownerAdd
      }, function(error, result) {
        callback(error, result)
      })
    })
  },

   /** --------- OPHBond ---------- **/


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
      let _amount = '0'
      if (typeof(amount) == 'string') {
        _amount = amount
      } else{
        _amount = BigNumber(amount).toString()
      }
      contract.methods.getAmountsOut(_amount, _arr).call({
        from: add
      }, function(error, result) {
        callback(error, result)
      })
    })
  },
  /**
   * OPH/veOPh to $
   * @param {Object} amount
   */
  exchange_OPHToUSDollars(amount, callback){
    let add = sessionStorage.getItem('acount')
    let constract = sessionStorage.getItem('CONSTRACT')

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
    this.UniswapV2_getAmountsOut(amount, weth, usdc, add, function(error, result) {
      callback(error, result)
    })
  },

  /**
   * to wei
   * @param {Object} v
   * @param {Object} decimal
   */
  GeToWei(v, decimal){
    return BigNumber(v * Math.pow(10, decimal)).toFixed()
  },
  /**
   * from wei
   * @param {Object} v
   * @param {Object} decimal
   */
  WeiToGe(v, decimal){
    return BigNumber(BigNumber(v).valueOf() / Math.pow(10, decimal)).toFixed(6)
  },
  Sum(num0, num1){
    let n0 = 0
    if (typeof(num0) === 'number') {
      n0 = num0
    } else if(typeof(num0) === 'string'){
      n0 = Number(num0.replace(/,/g, '')).valueOf()
    }

    let n1 = 0
    if (typeof(num1) === 'number') {
      n1 = num1
    } else if(typeof(num1) === 'string'){
      n1 = Number(num1.replace(/,/g, '')).valueOf()
    }

    return n0 + n1
  },
  USDollarFormat(v){
    console.info(Number(v).toFixed(2))
    console.info(BigNumber(v).toFixed(2))
    return this.USDFormat(Number(v).toFixed(2))
  },
  USDFormat(number){
    let str = []
    if (typeof number === "number" ) {
      number = String(number)
    }

    let decimals = ''
    let arr = number.split('.')
    if(arr.length == 2){
      number = arr[0]
      decimals = '.' + arr[1]
    }

    if(number.length <= 3){
      return number + decimals
    } else {

      String(number).split('').reverse().forEach((item, index) => {
        if(index > 0 && index%3 ==0){
          str.push(',', item)
        } else {
          str.push(item)
        }
      })

      let s = ''
      let a = str.reverse()
      a.forEach((item, index) =>{
        s+= item
      })

      return s + (decimals==''?'':decimals)
    }
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
