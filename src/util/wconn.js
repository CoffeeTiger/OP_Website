import Vue from 'vue'
import i18n from '../i18n'
import CoinbaseWalletSDK from '@coinbase/wallet-sdk'

export default {


  coinbase_init(){
    const APP_NAME = 'openpublish'
    const APP_LOGO_URL = '	https://openpublish.io/img/home-logo.0538bc19.png'
    const DEFAULT_ETH_JSONRPC_URL = 'https://mainnet.infura.io/v3/3049c3b336454c70a8e55e960518f612'
    const DEFAULT_CHAIN_ID = 1

    const coinbaseWallet = new CoinbaseWalletSDK({
    	appName: APP_NAME,
    	appLogoUrl: APP_LOGO_URL,
    	darkMode: false
    })

    // Initialize a Web3 Provider object
    const ethereum = coinbaseWallet.makeWeb3Provider(DEFAULT_ETH_JSONRPC_URL, DEFAULT_CHAIN_ID)

    return ethereum
  },

  coinbase_conn(callback){
    const ethereum = this.coinbase_init()
    //console.info(ethereum)
    let that = this
    ethereum.request({
    		method: 'eth_requestAccounts'
    	}).then((res) => {
    		if (res === null || res === undefined) {
          this.iToastCommom('Get acount failed from CoinBase Wallet', 'warning')
    		} else {
          callback(res)
    		}
    	}).catch(err => {
        this.iToastCommom('Get acount failed from CoinBase Wallet, Please check your wallet', 'error')
    	})
  },

  getChainId(ethereum, callback){
    ethereum.request({
      method: 'eth_chainId'
    }).then((chainId) => {
      callback(chainId)
    }).catch((err) => {
      this.log(err)
    });
  },

  tronlink_con(callback){
    if (window.tronWeb) {
    	let that = this
    	var obj = setInterval(async ()=>{
    		if (window.tronWeb.defaultAddress.base58) {
    			const address = window.tronWeb.defaultAddress.base58
    			clearInterval(obj)
          callback('0x'+window.tronWeb.address.toHex(address))
    		}
    	}, 100)
    } else {
      this.iToastCommom('TronWeb wallet is not installed', 'error')
    }
  },

  phantom_conn(callback){
    if (window.solana && window.solana.isPhantom) {
    	window.solana.connect({
    			onlyIfTrusted: true
    		})
    		.then(({publicKey}) => {
          callback(publicKey.toString())
    		}).catch((err) => {
    			console.info(err)
          if (err.code == 4001) {
            this.iToastCommom('User rejected the request', 'error')
          } else{
            this.iToastCommom('Please check your wallet', 'warning')
          }
    		})
    } else {
    	// window.open("https://phantom.app", "_blank");
      this.iToastCommom('Phantom wallet is not installed', 'error')
    }
  },


  log(s) {
    if (process.env.VUE_APP_MODE == 'development') {
      console.info(s)
    }
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
