/**
 * wallet,contract
 * Versoin:v1.0
 * Date: 2022-06-16
 */
import Vue from 'vue'
import BigNumber from 'bignumber.js'

export default {

  Property_URL: process.env.VUE_APP_URL,
  RPCUrl: process.env.VUE_APP_RPC_URL,
  RPCUrl_Uniswap: process.env.VUE_APP_RPC_URL_UNISWAP,
  currentCount: '',
  contract: {
    path: '/unlogin/acc/static/i/a/h/contracts/',
    OPHConfig: {
      id: 'CONFIG',
      name: 'OPHConfig.abi',
      add: '',
      obj: ''
    },
    OPH: {
      id: 'OPH',
      name: 'OPH.abi',
      add: '',
      obj: ''
    },
    WETH: {
      id: 'WETH',
      name: 'TestWETH.abi',
      add: '',
      obj: ''
    },
    VAULT: {
      id: 'VAULT',
      name: 'OPHVault.abi',
      add: '',
      obj: ''
    },
    AIRDROP: {
      id: 'AIRDROP',
      name: 'OPHAirDrop.abi',
      add: '',
      obj: ''
    },
    AWARD: {
      id: 'AWARD',
      name: 'OPHAward.abi',
      add: '',
      obj: ''
    },
    BOND: {
      id: 'BOND',
      name: 'OPHBond.abi',
      add: '',
      obj: ''
    },
    DAO: {
      id: 'DAO',
      name: 'OPHDAO.abi',
      add: '',
      obj: ''
    },
    EXCHANGE: {
      id: 'EXCHANGE',
      name: 'OPHExchange.abi',
      add: '',
      obj: ''
    },
    INTEREST: {
      id: 'INTEREST',
      name: 'OPHInterest.abi',
      add: '',
      obj: ''
    },
    NFT721: {
      id: 'NFT721',
      name: 'OPHNFT721.abi',
      add: '',
      obj: ''
    },
    NFT1155: {
      id: 'NFT1155',
      name: 'OPHNFT1155.abi',
      add: '',
      obj: ''
    },
    PRIZE: {
      id: 'PRIZE',
      name: 'OPHPrize.abi',
      add: '',
      obj: ''
    },
    STAKE: {
      id: 'STAKE',
      name: 'OPHStake.abi',
      add: '',
      obj: ''
    },
    TEAM: {
      id: 'TEAM',
      name: 'OPHTeam.abi',
      add: '',
      obj: ''
    },
    VEOPH: {
      id: 'VEOPH',
      name: 'veOPH.abi',
      add: '',
      obj: ''
    },
    UniswapV2: {
      id: 'UNISWAP',
      name: 'IUniswapV2Router01.abi',
      add: '',
      obj: ''
    },
    UniswapPriceQuote: {
      id: 'UniswapPriceQuote',
      name: 'UniswapPriceQuote.abi',
      add: '',
      obj: ''
    },
    MATIC2USDCPool: {
      id: 'MATIC2USDCPool',
      name: 'MATIC2USDCPool.abi',
      add: '',
      obj: ''
    },
    MATIC2WETHPool: {
      id: 'MATIC2WETHPool',
      name: 'MATIC2WETHPool.abi',
      add: '',
      obj: ''
    },
    WETH2USDCPool: {
      id: 'WETH2USDCPool',
      name: 'WETH2USDCPool.abi',
      add: '',
      obj: ''
    }

  },

  hello() {
    this.iToastCommom('hi', '')
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
      var web3 = new Web3(Web3.givenProvider)
      /* var web3 = new Web3(this.RPCUrl) */
      let that = this
      Vue.axios.get(this.Property_URL + this.contract.path + conProperty.name).then((response) => {
        /* that.log(conProperty.name)
        that.log(response.data)
        that.log(that.getContractAddress(conProperty.id)) */
        conProperty.obj = new web3.eth.Contract(response.data, that.getContractAddress(conProperty.id))
        callback(conProperty.obj)
      }).catch(function(error) {
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
        /* that.log(conProperty.name)
        that.log(response.data) */
        conProperty.obj = new web3.eth.Contract(response.data, that.getContractAddress(conProperty.id))
        callback(conProperty.obj, web3)
      }).catch(function(error) {
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
  sign(dataToSign, owner, callback) {
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
  GetBalance(add, callback) {
    var Web3 = require('web3')
    var web3 = new Web3(Web3.givenProvider)
    web3.eth.getBalance(add).then(function(d) {
      callback(d)
    })
  },
  /**
   * get config data
   * @param {Object} key
   * @param {Object} add
   */
  Config_getData(key, add, callback) {
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
      /* contract.methods.balanceOf(that.contract.VAULT.add).call({ */
      contract.methods.balanceOf(this.getContractAddress(that.contract.VAULT.id)).call({
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
  OPH_allowance(owner, spender, callback) {
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
  OPH_approve(spender, amount, add, callback) {
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
      /* contract.methods.balanceOf(that.contract.VAULT.add).call({ */
      contract.methods.balanceOf(this.getContractAddress(that.contract.VAULT.add)).call({
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
  veOPH_bankIn(orderId, amount, add, callback) {
    let that = this
    this.Contract_Init(this.contract.VEOPH, function(contract) {
      contract.methods.bankIn(orderId, amount).send({
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
  veOPH_allowance(owner, spender, callback) {
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
  veOPH_approve(spender, amount, add, callback) {
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
  Stake_bankOutApply(orderId, amount, fee, fromAdd, toAdd, callback) {
    let that = this
    this.Contract_Init(this.contract.STAKE, function(contract) {
      contract.methods.bankOutApply(orderId, amount).send({
        from: fromAdd,
        to: toAdd,
        value: Number(fee).toString()
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
  Stake_getBalance(ownerAdd, callback) {
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
  UniswapV2_getAmountsOut(amount, weth, usdc, add, callback) {
    let that = this
    this.Contract_Init_IUniswap(this.contract.UniswapV2, function(contract, web3) {
      let _arr = new Array(weth, usdc)
      contract.methods.getAmountsOut(BigNumber(amount).toFixed(), _arr).call({
        from: add
      }, function(error, result) {
        callback(error, result)
      })
    })
  },

  /**
   * Exchange US Dollars
   * @param {Object} amount
   * @param {Object} add
   * @param {Object} callback
   */
  UniswapPriceQuote_getAmountsOut(amount, add, callback) {
    this.Contract_Init_IUniswap(this.contract.UniswapPriceQuote, function(contract, web3) {

      let poolAdd = '0xa374094527e1673a86de625aa59517c5de346d32'
      let baseToken = '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
      let quoteToken = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'

      contract.methods.getPrice(poolAdd, Number(10).valueOf(), BigNumber(amount).toFixed(), baseToken, quoteToken)
        .call({
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
  exchange_OPHToUSDollars(amount, callback) {
    let add = sessionStorage.getItem('acount')
    let constract = sessionStorage.getItem('CONSTRACT')

    /* let usdc = ''
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
    }) */

    this.UniswapPriceQuote_getAmountsOut(amount, add, function(error, result) {
      callback(error, result)
    })
  },

  /**
   * to wei
   * @param {Object} v
   * @param {Object} decimal
   */
  GeToWei(v, decimal) {
    return BigNumber(v * Math.pow(10, decimal)).toFixed()
  },
  /**
   * from wei
   * @param {Object} v
   * @param {Object} decimal
   */
  WeiToGe(v, decimal) {
    return BigNumber(BigNumber(v).valueOf() / Math.pow(10, decimal)).toFixed(6)
  },
  Sum(num0, num1) {
    let n0 = 0
    if (typeof(num0) === 'number') {
      n0 = num0
    } else if (typeof(num0) === 'string') {
      n0 = Number(num0.replace(/,/g, '')).valueOf()
    }

    let n1 = 0
    if (typeof(num1) === 'number') {
      n1 = num1
    } else if (typeof(num1) === 'string') {
      n1 = Number(num1.replace(/,/g, '')).valueOf()
    }

    return n0 + n1
  },
  USDollarFormat(v) {
    return this.USDFormat(Number(v).toFixed(2))
  },
  USDFormat(number) {
    let str = []
    if (typeof number === "number") {
      number = String(number)
    }

    let decimals = ''
    let arr = number.split('.')
    if (arr.length == 2) {
      number = arr[0]
      decimals = '.' + arr[1]
    }

    if (number.length <= 3) {
      return number + decimals
    } else {

      String(number).split('').reverse().forEach((item, index) => {
        if (index > 0 && index % 3 == 0) {
          str.push(',', item)
        } else {
          str.push(item)
        }
      })

      let s = ''
      let a = str.reverse()
      a.forEach((item, index) => {
        s += item
      })

      return s + (decimals == '' ? '' : decimals)
    }
  },

  getContractAddress(name) {
    let contract = sessionStorage.getItem('CONSTRACT')
    if (this.empty(contract)) {
      return ''
    } else {
      let jc = JSON.parse(contract)
      if (name == 'AWARD') {
        return jc.contract.AWARD
      } else if (name == 'BOND') {
        return jc.contract.BOND
      } else if (name == 'CONFIG') {
        return jc.contract.CONFIG
      } else if (name == 'DAO') {
        return jc.contract.DAO
      } else if (name == 'EXCHANGE') {
        return jc.contract.EXCHANGE
      } else if (name == 'INTEREST') {
        return jc.contract.INTEREST
      } else if (name == 'NFT721') {
        return jc.contract.NFT721
      } else if (name == 'NFT1155') {
        return jc.contract.NFT1155
      } else if (name == 'OPH') {
        return jc.contract.OPH
      } else if (name == 'STAKE') {
        return jc.contract.STAKE
      } else if (name == 'TEAM') {
        return jc.contract.TEAM
      } else if (name == 'UNISWAP') {
        return jc.contract.UNISWAP
      } else if (name == 'USDC') {
        return jc.contract.USDC
      } else if (name == 'VAULT') {
        return jc.contract.VAULT
      } else if (name == 'VEOPH') {
        return jc.contract.VEOPH
      } else if (name == 'WETH') {
        return jc.contract.WETH
      } else if (name == 'UniswapPriceQuote') {
        return jc.contract.UniswapPriceQuote
      } else if (name == 'MATIC2USDCPool') {
        return jc.contract.MATIC2USDCPool
      } else if (name == 'MATIC2WETHPool') {
        return jc.contract.MATIC2WETHPool
      } else if (name == 'WETH2USDCPool') {
        return jc.contract.WETH2USDCPool
      }
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
    if (process.env.VUE_APP_MODE == 'development') {
      console.info(s)
    }
  },

  iToastCommom(msg, variant) {
    if (variant == 'warning') {
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
    } else if (variant == 'error') {
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
