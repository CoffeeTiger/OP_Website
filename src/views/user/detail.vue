<template>
  <div class="icontainer-subpage-v2">

    <userinfo :showType="type"></userinfo>

    <div class="ifunddetail bg_darkgray">

      <div class="ifunddetail-header bg_lightgray">
        <div class="iheader-contain">
          <div class="ifind-input-outer">
            <select class="iinput iinput-select" v-model="findType" @change="changeType">
              <option value="all">All</option>
              <option value="stake" v-if="type=='all' || type=='veoph' || type=='oph'">Stake</option>
              <option value="bond" v-if="type=='all' || type=='veoph' || type=='oph'">Bond</option>
              <option value="swap" v-if="type=='all' || type=='oph'">Swap</option>
              <option value="withdraw" v-if="type=='all' || type=='veoph' || type=='coph'">Withdraw</option>
              <option value="deposit" v-if="type=='all' || type=='veoph' || type=='coph'">Deposit</option>
              <option value="trade" v-if="type=='all' || type=='coph' || type=='oph'">Trade</option>
            </select>
          </div>
        </div>
      </div>

      <div class="ifunddetail-body">
        <template v-if="!dataEmpty">
          <div class="ibody-contain">
            <!-- <logs imgType="OPH" vType="OPH" pType="stake" pValue="0.01" redirectPath="0x935357"></logs> -->
            <template v-for="item in lists" >
              <logs :key="item.relatId" :imgType="item.operateCoin" :vType="item.operateCoin" :pType="item.relatDesc"
                :pValue="Number(item.operateValue).toString()" :redirectPath="item.relatId"></logs>
            </template>
          </div>
          <div class="ipage-navig">
            <div class="ipage-contain">
              <div class="ibtn ibtn-page prev color_black " :class="pageNo==1?'ibtn-disabled':''" @click="pageClick('prev')">Prev</div>
              <div class="curr-page">{{pageNo + '/' + pageMax}}</div>
              <div class="ibtn ibtn-page next color_black" :class="pageNo==pageMax?'ibtn-disabled':''" @click="pageClick('next')">next</div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="desc-nodata">No transactions as of now</div>
        </template>
      </div>
    </div>

  </div>
</template>

<script>
  import api from '../../util/network.js'
  import wallet from '../../util/wallet.js'

  import userinfo from './userinfoForDetail.vue'
  import logs from '../../components/user/logs.vue'
  export default {
    name: 'detail',
    components: {
      userinfo,
      logs
    },
    data() {
      return {
        type: 'all',
        findType: 'all',
        pageNo: 1,
        pageMax: 1,
        lists: [],
        dataEmpty: false,
      }
    },
    created() {
      let _type = this.$route.params.type
      if (!api.empty(_type)) {
        this.type = _type
      }

      /* if (this.type=='veoph' || this.type=='oph') {
        this.findType = 'Stake'
      } else if(this.type=='oph'){
        this.findType = 'Swap'
      } else if(this.type=='veoph' || this.type=='coph'){
        this.findType = 'Deposit'
      } */

      this.findType = 'all'


      this.getData()
    },
    methods: {
      getData() {
        let that = this
        let pars = 'filterType=' + this.findType + '&pageNo=' + this.pageNo + '&pageSize=20'
        api.getAction('/logined/acc/getAccOperateDetail', pars, function(res) {
          if (res.code == 200) {
            that.lists = res.result.records
            that.pageMax = res.result.pages

            if (res.result.records.length == 0 && that.pageNo == 1) {
              that.dataEmpty = true
            } else {
              that.dataEmpty = false

              let arr = new Array()
              for (let t of that.lists ) {
                if (t.operateCoin.toUpperCase().indexOf('OPH') != -1) {
                  t.operateValue = wallet.WeiToGe(t.operateValue, api.getStore('OPH_Decimals'))
                } else if(t.operateCoin.toUpperCase().indexOf('ETH') != -1){
                  t.operateValue = wallet.WeiToGe(t.operateValue, api.getStore('WETH_Decimals'))
                } else{
                  t.operateValue = t.operateValue
                }

                if (t.operateCoin.toUpperCase().indexOf('COPH') != -1) {
                  t.relatId = 'https://etherscan.io/address/' + t.relatId
                } else{
                  t.relatId = ''
                }

                arr.push(t)
              }
              that.lists = arr
            }


          }
        })
      },
      changeType(){
        this.pageNo = 1
        this.getData()
      },
      pageClick(type){
        if (type == 'prev' && this.pageNo > 1) {
          this.pageNo = this.pageNo - 1
          this.getData()
        } else if(type == 'next' && this.pageNo < this.pageMax){
          this.pageNo = this.pageNo + 1
          this.getData()
        }
      },

    }
  }
</script>

<style scope>
  .ifunddetail {
    width: 100%;
    min-height: 14.5556rem;
    margin: 1.3333rem auto;
    border-radius: 0.8889rem;
    border: 0.1111rem solid #3C3C3C;
    overflow: hidden;
  }

  .ifunddetail .ifunddetail-header {
    width: 100%;
    height: 5.1667rem;
  }

  .ifunddetail .ifunddetail-header .iheader-contain {
    width: 100%;
    padding: 1.1667rem 2rem;
  }

  .ifind-input-outer {
    width: 10rem;
    height: 2.7778rem;
  }

  .ifind-input-outer .iinput-select {
    min-width: 6.6667rem;
    height: 2.7778rem;
    line-height: 2.7778rem;
    font-size: 1.4444rem;
    font-weight: 400;
    color: #FFFFFF;
  }

  .ifunddetail .ifunddetail-body {
    width: 100%;
    padding: 0 2.2222rem;

  }

  .ifunddetail .ifunddetail-body .ibody-contain {
    width: 100%;
    margin: 0 auto;
  }

  .ifunddetail .ifunddetail-body .ipage-navig {
    width: 100%;
    height: 3.5556rem;
  }

  .desc-nodata {
    width: 100%;
    margin: 6.6667rem auto;
    text-align: center;
    font-size: 1.7778rem;
    color: #5e5e5e;
  }


</style>
