<template>
  <div class="icontainer-subpage-v2">

    <userinfo :showType="type"></userinfo>

    <div class="ifunddetail bg_darkgray">

      <div class="ifunddetail-header bg_lightgray">
        <div class="iheader-contain">
          <div class="ifind-input-outer">
            <select class="iinput iinput-select">
              <option value="all" v-if="type=='all'">All</option>
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
        <div class="ibody-contain">
          <logs imgType="OPH" vType="OPH" pType="stake" pValue="0.01"></logs>
          <logs imgType="OPH" vType="OPH" pType="stake" pValue="0.02"></logs>
          <logs imgType="cOPH" vType="cOPH" pType="stake" pValue="0.03"></logs>
          <logs imgType="cOPH" vType="cOPH" pType="stake" pValue="0.04"></logs>
          <logs imgType="veOPH" vType="OPH" pType="stake" pValue="0.056"></logs>
          <logs imgType="veOPH" vType="veOPH" pType="bond" pValue="0.06"></logs>
          <logs imgType="veOPH" vType="veOPH" pType="stake" pValue="0.07"></logs>
          <logs imgType="veOPH" vType="OPH" pType="stake" pValue="100.02"></logs>
          <logs imgType="veOPH" vType="OPH" pType="swap" pValue="100.03"></logs>
        </div>
        <div class="ipage-navig"></div>
      </div>
    </div>

  </div>
</template>

<script>
  import api from '../../util/network.js'
  import userinfo from './userinfoForDetail.vue'
  import logs from '../../components/user/logs.vue'
  export default{
    name:'detail',
    components:{userinfo, logs},
    data() {
      return {
        type: 'all',
      }
    },created() {
      let _type = this.$route.params.type
      if (!api.empty(_type)) {
        this.type = _type
      }
      
    },methods:{

    }
  }
</script>

<style scope>
  .ifunddetail{
    width: 100%;
    min-height: 14.5556rem;
    margin: 1.3333rem auto;
    border-radius: 0.8889rem;
    border: 0.1111rem solid #3C3C3C;
    overflow: hidden;
  }
  .ifunddetail .ifunddetail-header{
    width: 100%;
    height: 5.1667rem;
  }
  .ifunddetail .ifunddetail-header .iheader-contain{
    width: 100%;
    padding: 1.1667rem 2rem;
  }
  .ifind-input-outer{
    width: 10rem;
    height: 2.7778rem;
  }
  .ifind-input-outer .iinput-select{
    min-width: 6.6667rem;
    height: 2.7778rem;
    line-height: 2.7778rem;
    font-size: 1.4444rem;
    font-weight: 400;
    color: #FFFFFF;
  }

  .ifunddetail .ifunddetail-body{
    width: 100%;
    padding: 0 2.2222rem;

  }
  .ifunddetail .ifunddetail-body .ibody-contain{
    width: 100%;
    margin: 0 auto;
  }

  .ifunddetail .ifunddetail-body .ipage-navig{
    width: 100%;
    height: 3.5556rem;
  }

</style>
