import Vue from 'vue';
import axios from 'axios'
import i18n from '../i18n'
import { Empty } from 'element-ui';

export default {

  Property_URL: process.env.VUE_APP_URL,
  // Property_URL: 'https://www.openpublish.io:8443',
  RPCUrl: process.env.VUE_APP_RPC_URL,

  setStore(key, value) {
    sessionStorage.setItem(key, value)
  },
  getStore(key) {
    return sessionStorage.getItem(key)
  },
  clearStore() {
    sessionStorage.clear()
  },

  post(cmd, bizno, url, callback) {
    axios.post(url).then(function(response) {
      callback(response)
    }).catch(function(error) {
      alert('get server err again ' + error.code)
    })
  },

  postAction(url, parameter, callback) {
    let that = this
    let TOKEN = this.getStore('token')
    axios({
      method: 'POST',
      url: this.Property_URL + url,
      data: parameter,
      timeout: 5000,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "X-Access-Token": (TOKEN == null ? '' : TOKEN),
        /* "cmd": cmd,
        "sig": sig,
        "ver": "1.0",
        "tok": usertok,
        "bizno": bizno,
        "usertoken": usertoken */
      }
    }).then(function(res) {
      if (res.status == 200) {
        callback(res.data)
      } else if (res.status != 200) {
        const vm = new Vue()
        /* vm.$bvToast.toast(i18n.t('networkMsg.10001'), {
          title: 'Hint',
          toaster: 'b-toaster-bottom-right',
          autoHideDelay: 6000
        }) */
        that.iToastCommom(vm, ' Network Error ', 'default')
      }
    }).catch(function(error) {
      const vm = new Vue()
      /* vm.$bvToast.toast(' Network Error ', {
        title: 'Hint',
        toaster: 'b-toaster-bottom-right',
        autoHideDelay: 6000
      }) */
      that.iToastCommom(vm, ' Network Error ', 'default')
    })
  },

  getAction(url, parameter, callback) {
    let that = this
    let TOKEN = this.getStore('token')
    axios({
      method: 'GET',
      url: this.Property_URL + url + '?' + parameter,
      /* data: parameter, */
      timeout: 5000,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "X-Access-Token": (TOKEN == null ? '' : TOKEN),
        /* "cmd": cmd,
        "sig": sig,
        "ver": "1.0",
        "tok": usertok,
        "bizno": bizno,
        "usertoken": usertoken */
      }
    }).then(function(res) {
      if (res.status == 200) {
        callback(res.data)
      } else if (res.status != 200) {
        const vm = new Vue()
        /* vm.$bvToast.toast(i18n.t('networkMsg.10001'), {
          title: 'Hint',
          toaster: 'b-toaster-bottom-right',
          autoHideDelay: 6000
        }) */
        that.iToastCommom(vm, ' Network Error ', 'default')
      }
    }).catch(function(error) {
      const vm = new Vue()
      /* vm.$bvToast.toast(' Network Error ', {
        title: 'Hint',
        toaster: 'b-toaster-bottom-right',
        autoHideDelay: 6000
      }) */
      that.iToastCommom(vm, ' Network Error ', 'default')
    })
  },

  getContractBaseInfo(){
    this.getAction('/logined/base-data/addrees', '', function(res) {
      this.setStore('CONSTRACT', JSON.stringify(res.result))
    })
  },

  log(v) {
    if (process.env.VUE_APP_MODE == 'development') {
      console.info(v)
    }
  },

  /**
   * @param {Object} obj current Object
   * @param {Object} content show content
   * @param {Object} variant  variant names
   */
  iToast(obj, content, variant) {
    obj.$bvToast.toast(content, {
      title: 'hint',
      variant: variant,
      toaster: 'b-toaster-bottom-right',
      autoHideDelay: 6000
    })
  },

  iToastServer(obj, code, variant) {
    /* let m = 'server.' + code;
    obj.$bvToast.toast(i18n.t('' + m + ''), {
      title: 'hint',
      variant: variant,
      toaster: 'b-toaster-bottom-right',
      autoHideDelay: 6000
    }) */
    let m = 'server.' + code;
    let msg = i18n.t('' + m + '');
    this.iToastCommom(obj, msg, variant)
  },

  iToastClient(obj, code, variant) {
    /* let m = 'client.' + code;
    obj.$bvToast.toast(i18n.t('' + m + ''), {
      title: 'hint',
      variant: variant,
      toaster: 'b-toaster-bottom-right',
      autoHideDelay: 6000
    }) */
    let m = 'client.' + code;
    let msg = i18n.t('' + m + '');
    this.iToastCommom(obj, msg, variant)
  },

  iToastCommom(obj, msg, variant){
    if ( variant == undefined || variant == '' ||variant == 'default') {
      obj.$toast(msg, {
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
    } else if(variant == 'success'){
      obj.$toast.success(msg, {
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
    } else if(variant == 'info'){
      obj.$toast.info(msg, {
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
    } else if(variant == 'warning'){
      obj.$toast.warning(msg, {
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
      obj.$toast.error(msg, {
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
      obj.$toast(msg, {
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

  strToNum(v){
    return Number(v).toFixed(6)
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

  contract_20() {
    return ''
  },
  contract_721() {
    return ''
  },
  contract_1155() {
    return ''
  },
  /**
   * @param {Object} url
   * @param {Object} type 0href，1winopen
   */
  redirect(url, type) {
    if (type == 1) {
      window.open(url, '_blank',
        'width=600, height=450, toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, copyhistory=no, top=100,left=350'
        )
    } else {
      location.href = url
    }
  },

}
