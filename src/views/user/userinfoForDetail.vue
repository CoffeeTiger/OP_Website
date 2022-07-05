<template>
  <div>
    <div class="iuserinfo ">

      <div class="iuser-up">
        <div class="iheader" >
          <router-link :to="{name:'set', params:{}}">
          <img :src="userheader" class="iheader-img" />
          </router-link>
        </div>
        <div class="ibaseinfos">
          <div class="inikename">
            <div class="iname color_yellow">{{username==''?'nickname':username}}</div>
            <img src="../../assets/imgs/level/level01.svg" class="iuseal" />
          </div>
          <div class="iaddress" @click="copytoken">
            <img src="../../assets/imgs/logo/eth3.png" class="icurrtype" />
            <div class="iname">{{address.substr(0, 6) +'...'+ address.substr(-4)}}</div>
          </div>
        </div>
      </div>
      <div class="iuser-down bg_lightgray">

        <div class="icell-balance">
          <div class="ititle">
            <div>
              <template v-if="showType=='all'">{{$t('page.balance')}}</template>
              <template v-if="showType=='oph'">OPH</template>
              <template v-if="showType=='veoph'">veOPH</template>
              <template v-if="showType=='coph'">veOPH (Reward)</template>
            </div>
          </div>
          <div class="ivalue">
            <div class="ivalue-oph">
              <template v-if="showType=='all'">{{OPH_total==0?'0.000000':OPH_total}}</template>
              <template v-if="showType=='oph'">{{OPH==0?'0.000000':OPH}}</template>
              <template v-if="showType=='veoph'">{{VEOPH==0?'0.000000':VEOPH}}</template>
              <template v-if="showType=='coph'">{{VEOPHReward==0?'0.000000':VEOPHReward}}</template>

            </div>
            <div class="inuit">
              <!-- <template v-if="showType=='oph'">OPH</template>
              <template v-if="showType=='veoph'">veOPH</template>
              <template v-if="showType=='coph'">cOPH</template> -->
            </div>
            <div class="ivalue-us"></div>
            <div class="ifund" v-if="showType=='coph'">
              <div class="ibtn ibtn-fund ibtn-fund-1 color_black" @click="deposit">{{$t('page.deposit')}}</div>
              <div class="ibtn ibtn-fund ibtn-fund-2 color_yellow" @click="withdraw">{{$t('page.withdraw')}}</div>
            </div>
          </div>
          <div class="ivalue">
            <div class="ivalue-us ivalue-us-v2">
              <template v-if="showType=='all'">${{OPH_total_US==0?'0.00':OPH_total_US}}</template>
              <template v-if="showType=='oph'">${{OPH_US==0?'0.00':OPH_US}}</template>
              <template v-if="showType=='veoph'">${{VEOPH_US==0?'0.00':VEOPH_US}}</template>
              <template v-if="showType=='coph'">${{VEOPHReward_US==0?'0.00':VEOPHReward_US}}</template>
            </div>
          </div>
        </div>

        <div class="ihr" v-if="showType=='all'"></div>

        <div class="idetails" v-if="showType=='all'">

          <div class="icell-balance icell-balance-v2">
            <div class="ititle">
              <div>OPH</div>
            </div>
            <div class="ivalue">
              <div class="inuit"><!-- $ --></div>
              <div class="ivalue-oph">{{OPH==0?'0.000000':OPH}} </div>
            </div>
            <div class="ivalue">
              <div class="ivalue-us ivalue-us-v2">${{OPH_US==0?'0.00':OPH_US}}</div>
            </div>
          </div>

          <div class="icell-balance icell-balance-v3">
            <div class="ititle">
              <div>veOPH</div>
            </div>
            <div class="ivalue">
              <div class="inuit"><!-- $ --></div>
              <div class="ivalue-oph">{{VEOPH==0?'0.000000':VEOPH}} </div>
            </div>
            <div class="ivalue">
              <div class="ivalue-us ivalue-us-v2">${{VEOPH_US==0?'0.00':VEOPH_US}}</div>
            </div>
          </div>

          <div class="icell-balance icell-balance-v4">
            <div class="ititle">
              <div>veOPH(Reward)</div>
            </div>
            <div class="ivalue">
              <div class="inuit"><!-- $ --></div>
              <div class="ivalue-oph">{{VEOPHReward==0?'0.000000':VEOPHReward}} </div>
            </div>
            <div class="ivalue">
              <div class="ivalue-us ivalue-us-v2">${{VEOPHReward_US==0?'0.00':VEOPHReward_US}}</div>
            </div>
          </div>

        </div>

      </div>

    </div>

    <!-- modal -->
    <b-modal ref="modalDeposit" title="Confirm" centered no-stacking @ok="handleOk">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Please enter the amount"
          label-for="amountDeposit-input"
          invalid-feedback="amount is required"
          label-class="ilabel-for-input"
        >
          <b-form-input
            id="amountDeposit-input"
            v-model="amountDeposit"
            type="number"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>

  </div>
</template>

<script>
  import api from '../../util/network.js'
  import wallet from '../../util/wallet.js'

  export default{
    name:'userinfov2',
    props:{
      showType: {
        type: String,
        default:'all'
      },
    },
    data() {
      return {
        userheader: '',
        username:'',
        address:'',
        balance:'0.00',
        ydayreward:'0.00',
        open:true,

        OPH_total:0.000000,
        OPH_total_US:0.00,
        OPH:0.000000,
        VEOPH:0.000000,
        VEOPHReward:0.000000,
        OPH_US:0.00,
        VEOPH_US:0.00,
        VEOPHReward_US:0.00,

        amountDeposit:0,
        amountWidthdraw:0,
        operatorType:0,
      }
    }, created(){
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

      let b = api.getStore('balance')
      if (!(b == undefined || b == null || b == '')) {
        let t = JSON.parse(b)
        this.OPH = t.OPH
        this.VEOPH = t.VEOPH
        this.VEOPHReward = t.VEOPHReward
        this.OPH_US = t.OPH_US
        this.VEOPH_US = t.VEOPH_US
        this.VEOPHReward_US = t.VEOPHReward_US

        this.OPH_total = Number(this.OPH).valueOf() + Number(this.VEOPH).valueOf() + Number(this.VEOPHReward).valueOf()
        this.OPH_total_US = Number(this.OPH_US).valueOf() + Number(this.VEOPH_US).valueOf() + Number(this.VEOPHReward_US).valueOf()
      }

      this.init()
    },methods: {
      init(){
        let that = this
        api.getAction('/logined/acc/getLoginAccInfo', '', function(res) {
          if (res.code == 200) {
            that.balance = res.result.balance
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
      editHeader() {
        this.$router.push({name:'set'})
      },
      showdata(v){
        this.open = !this.open
      },
      copytoken(){
        let that =  this
        this.$copyText(this.address).then(function(e) {
          api.iToastClient(that, '90008', 'secondary')
        }, function(e) {})
      },

      handleOk(bvModalEvent) {
        bvModalEvent.preventDefault()
        this.handleSubmit()
      },
      handleSubmit(){

        let that = this
        let add = api.getStore('acount')

        if (this.operatorType == 0) {
          if (api.empty(this.amountDeposit)) {
            api.iToastClient(this, '90015', '');
            return
          } else if(this.amountDeposit > this.VEOPH){
            api.iToastClient(this, '90018', '');
            return
          }

          wallet.veOPH_bankIn(wallet.GeToWei(this.amountDeposit, api.getStore('OPH_Decimals')), add, function(error, result) {
            if (result == undefined || result == '') {
              api.iToastClient(that, '90016', '');
            } else {
              api.iToastClient(that, '90017', '');

              that.$refs['modalDeposit'].hide()
              that.$router.push({name:'original'})
            }
          })
        } else{
          if (api.empty(this.amountDeposit)) {
            api.iToastClient(this, '90019', '');
            return
          } else if(this.amountDeposit > this.VEOPHReward){
            api.iToastClient(this, '90020', '');
            return
          }

          //BANK_OUT_FEE
          let BANK_OUT_FEE = api.getStore('BANK_OUT_FEE')
          let stakeAdd = JSON.parse(api.getStore('CONSTRACT')).contract.STAKE

          wallet.Stake_bankOutApply(wallet.GeToWei(this.amountDeposit, api.getStore('OPH_Decimals')), BANK_OUT_FEE, add, stakeAdd, function(error, result) {
            if (result == undefined || result == '') {
              api.iToastClient(that, '90021', '');
            } else {
              api.iToastClient(that, '90022', '');

              that.$refs['modalDeposit'].hide()
              that.$router.push({name:'original'})
            }
          })

        }
      },
      deposit(){
        this.operatorType = 0
        this.amountDeposit = 0
        this.$refs['modalDeposit'].show()
      },
      withdraw(){
        this.operatorType = 1
        this.amountDeposit = 0
        this.$refs['modalDeposit'].show()
      },
      setBalanceData(){
        let v = JSON.stringify({
          OPH: this.OPH,
          OPH_US: this.OPH_US,
          VEOPH: this.VEOPH,
          VEOPH_US: this.VEOPH_US,
          VEOPHReward: this.VEOPHReward,
          VEOPHReward_US: this.VEOPHReward_US
        })
        api.setStore('balance', v)
      },
    },
  }
</script>
 
<style scoped="scoped">

  .iuserinfo{
    width: 100%;
  }
  .iuserinfo .iuser-up{
    width: 100%;
    height: 5.9444rem;
    margin: 3.1111rem auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .iuserinfo .iuser-up .iheader{
    width: 5.8889rem;
    height: 5.9444rem;
    background: url(../../assets/imgs/userheader-mod.png) center no-repeat;
    background-size: 100% 100%;
    border-radius: 50%;
    overflow: hidden;
  }
  .iuserinfo .iuser-up .iheader .iheader-img{
    width: 100%;
  }
  .iuserinfo .iuser-up .ibaseinfos{
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .iuserinfo .iuser-up .ibaseinfos .inikename{
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 1.7778rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 400;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .iuserinfo .iuser-up .ibaseinfos .inikename .iuseal{
    width: 1.7778rem;
    height: 2.1111rem;
    margin-left: 0.4444rem;
  }
  .iuserinfo .iuser-up .ibaseinfos .iaddress{
    margin-top: 0.8889rem;
    padding: 0 0.6666rem;
    line-height: 1.7777rem;
    font-size: 1.3333rem;
    font-weight: 300;
    border-radius: 1.1666rem;
    border: 0.1111rem solid #979797;
    color: #979797;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iuserinfo .iuser-up .ibaseinfos .iaddress:hover{
    transition: all .3s ease;
    border: 0.1111rem solid #e8d3a7;
    color: #e8d3a7;
  }
  .iuserinfo .iuser-up .ibaseinfos .iaddress .icurrtype{
    width: 0.6666rem;
    height: 1.1666rem;
    margin-right: 0.4444rem;
  }

  .iuserinfo .iuser-down{
    width: 100%;
    padding: 2rem;
    margin:0 auto;
    border-radius: 0.8888rem;
    border: 0.1111rem solid #3C3C3C;
  }
  .iuserinfo .iuser-down .icell-balance-v2{
    width: 33%;
    overflow: hidden;
  }
  .iuserinfo .iuser-down .icell-balance-v3{
    width: 33%;
    overflow: hidden;
    padding-left: 2rem;
  }
  .iuserinfo .iuser-down .icell-balance-v4{
    width: 33%;
    overflow: hidden;
    padding-left: 3.5556rem;
  }
  .iuserinfo .iuser-down .icell-balance .ititle{
    height: 2.1667rem;
    line-height: 2.1667rem;
    font-size: 1.5556rem;
    font-weight: 300;
    color: #979797;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .iuserinfo .iuser-down .icell-balance .ititle .iuserinfo-eye{
    width: 1.7777rem;
    height: 1.1666rem;
    margin-left: 0.4444rem;
  }
  .iuserinfo .iuser-down .icell-balance .ivalue{
    margin-top: 0.8333rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #FFFFFF;
  }
  .iuserinfo .iuser-down .icell-balance .ivalue .ivalue-oph{
    min-width: 5.5556rem;
    height: 2.8333rem;
    line-height: 2.8333rem;
    margin-right: 0.4444rem;
    font-size: 2rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 400;
  }
  .iuserinfo .iuser-down .icell-balance .ivalue .inuit{
    height: 2.8333rem;
    line-height: 2.8333rem;
    font-size: 2rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 400;
  }
  .iuserinfo .iuser-down .icell-balance .ivalue .ivalue-dots{
    min-width: 5.5556rem;
    height: 2.8333rem;
    line-height: 2.8333rem;
    padding-top: 0.2233rem;
  }
  .iuserinfo .iuser-down .icell-balance .ivalue .ivalue-us{
    font-size: 1.3333rem;
    font-weight: 300;
    margin: 0 0.4444rem;
    color: #979797;
  }
  .iuserinfo .iuser-down .icell-balance .ivalue .ivalue-us-v2{
    margin-left: 0;
  }
  .iuserinfo .iuser-down .icell-balance .ivalue .iarr-img{
    width: 0.6666rem;
    height: 1.1666rem;
    margin-left: 0.4444rem;
  }
  .iuserinfo .iuser-down .ihr{
    width: 100%;
    margin: 2.2222rem 0;
    height: 0.1111rem;
    background: #3F4142;
  }
  .iuserinfo .iuser-down .idetails{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .iuserinfo .iuser-down .icell-balance .ivalue .ifund{
    margin-left: 3.5556rem;
    margin-top: -0.8333rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .iuserinfo .iuser-down .icell-balance .ivalue .ifund .ibtn-fund{
    width: 11.4444rem;
    height: 2.9444rem;
    margin-right: 1.6667rem;
    border-radius: 1.4444rem;
    font-size: 1.5556rem;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
  }
  .iuserinfo .iuser-down .icell-balance .ivalue .ifund .ibtn-fund-1{
    line-height: 2.9444rem;
  }
  .iuserinfo .iuser-down .icell-balance .ivalue .ifund .ibtn-fund-2{
    line-height: 2.7222rem;
    border: 0.1111rem solid #F7B62D;
    background: #FFFFFF00;
  }



</style>
