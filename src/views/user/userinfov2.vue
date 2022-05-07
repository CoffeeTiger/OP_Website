<template>
  <div>
    <div class="iuserinfo">

      <div xs="12" sm="12" md="4" class="iuserinfo-left-with">
        <b-card no-body class="userinfo-panel ">
          <b-card-body class="userinfo-panel-left">
            <b-card-text>
              <div class="iuserinfos">
                  <div class="iheader" @click="editHeader">
                    <img :src="userheader" class="iheader-img" />
                  </div>
                  <div class="inikename" @click="editHeader">
                    <img src="../../assets/imgs/useals.png" class="iuseal" />
                    <div class="iname">{{username==''?'nickname':username}}</div>
                  </div>
                  <div class="iaddress">
                    <img src="../../assets/imgs/eth.png" class="icurrtype" />
                    <div class="iname">{{address.substr(0, 6) +'...'+ address.substr(-4)}}</div>
                  </div>
                  <div class="ijoin">
                    <div class="ivalue">{{$t('page.joined')}} 02/25 2020</div>
                  </div>
              </div>
            </b-card-text>
          </b-card-body>
        </b-card>
      </div>

      <div xs="12" sm="12" md="8" class="iuserinfo-right-with">
        <b-card no-body  class="userinfo-panel userinfo-panel-purple">
          <b-card-body>
            <b-card-text>
              <div class="iuserinfos-right">
                <div class="iuserinfo-top">
                  <div>{{$t('page.myAccount')}}</div>
                  <img src="../../assets/imgs/eye-close.png" class="iuserinfo-top-img" v-if="!open" @click="showdata()"/>
                  <img src="../../assets/imgs/eye-open.png" class="iuserinfo-top-img" v-if="open" @click="showdata()"/>
                </div>
                <div class="iuserinfo-mid">
                  <b-row>
                    <b-col sm="12" md="5">
                      <div class="icell">
                        <div>{{$t('page.balance')}}(veOPH)</div>
                        <div>
                          <template v-if="open">{{balance}}</template>
                          <template v-if="!open">******</template>
                        </div>
                      </div>
                    </b-col>
                    <b-col sm="12" md="6">
                      <div class="icell">
                        <div>{{$t('page.yesterdaysreward')}}</div>
                        <div>
                          <template v-if="open">{{ydayreward}}</template>
                          <template v-if="!open">******</template>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                </div>
                <div class="iuserinfo-bot">
                  <b-button variant="outline-primary" size="lg" class="iuserinfo-btn">{{$t('page.deposit')}}</b-button>
                  <b-button variant="outline-primary" size="lg" class="iuserinfo-btn">{{$t('page.withdraw')}}</b-button>
                  <b-button variant="outline-primary" size="lg" class="iuserinfo-btn">{{$t('page.fundDetails')}}</b-button>
                  <b-button variant="outline-primary" size="lg" class="iuserinfo-btn">{{$t('page.income')}}</b-button>
                  <!-- <b-row>
                    <b-col sm="6" md="3"><b-button block variant="outline-primary" size="lg" class="iuserinfo-btn" >Deposit</b-button></b-col>
                    <b-col sm="6" md="3"><b-button block variant="outline-primary" size="lg" class="iuserinfo-btn" >Withdraw</b-button></b-col>
                    <b-col sm="6" md="3"><b-button block variant="outline-primary" size="lg" class="iuserinfo-btn" >Fund details</b-button></b-col>
                    <b-col sm="6" md="3"><b-button block variant="outline-primary" size="lg" class="iuserinfo-btn" >Income</b-button></b-col>
                  </b-row> -->
                </div>
              </div>
            </b-card-text>
          </b-card-body>
        </b-card>
      </div>

    </div>
  </div>
</template>

<script>
  import api from '../../util/network.js'
  export default{
    name:'userinfov2',
    data() {
      return {
        userheader: '',
        username:'',
        address:'',
        balance:'0',
        ydayreward:'0',
        open:false,
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
      this.init()
    },methods: {
      init(){
        let that = this
        let pars = JSON.stringify({})
        api.getAction('/logined/acc/getLoginAccInfo', pars, function(res) {
          api.log(res)
          if (res.code == 200) {
            that.balance = res.result.balance
            that.username = res.result.nickName
            that.userheader = res.result.headImgUrl
            if (that.userheader == 'default') {
              that.userheader = 'img/brand/userheader-mod.png'
            }
            api.setStore('user', JSON.stringify(res.result))
          } else {
            api.iToastServer(that, res.code, 'info')
          }
        })
      },
      editHeader() {
        this.$router.push({name:'set'})
      },
      showdata(v){
        this.open = !this.open
      }
    },
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  .iuserinfo{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .iuserinfo-left-with{
    width: 19.5625rem;
    height: 20.3125rem;
    padding: 0 1rem 0 0;
    margin-bottom: 0.5rem;
  }
  .iuserinfo-right-with{
    width: 45.9375rem;
    height: 20.3125rem;
    padding:0 0 0 1rem;
    margin-bottom: 0.5rem;
  }
  @media only screen and (min-width: 0px) and (max-width: 767px){
    /* .iuserinfo{
      width: 100%;
      margin: 0 auto;
    }

    .iuserinfo-left-with{
      width: 100%;
      padding: 0;
    }
    .iuserinfo-right-with{
      width: 100%;
      padding: 0;
    } */
  }
  .userinfo-panel{
    width: 100%;
    /* margin:2rem auto 0; */
    /* margin-top: 2rem; */
    border-radius: 0.64rem;
    /* background-color: #acaedd; */
    overflow: hidden;
  }
  .userinfo-panel-left{
    background: url(../../assets/imgs/circle1.png) no-repeat;
    background-size: 14.375rem 12.5rem;
    background-position: 140% -140%;
  }
  .userinfo-panel .iuserinfos{
    width: 100%;
    height: 16rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .userinfo-panel .iuserinfos .iheader{
    /* width: 128px;
    height: 128px;
    border-radius: 64px; */
    width: 8rem;
    height: 8rem;
    border-radius: 4rem;
    border: 0.08rem solid #F0F0F0;
    overflow: hidden;
  }
  .userinfo-panel .iuserinfos .iheader:hover{
    filter: brightness(.8);
    border-color: #FFFFFF;
  }
  .userinfo-panel .iuserinfos .iheader .iheader-img{
    width: 100%;
    height: auto;
  }
  .userinfo-panel .iuserinfos .inikename{
    width: 10rem;
    line-height: 2.56rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 2rem;
    font-weight: 500;
  }
  .userinfo-panel .iuserinfos .inikename:hover{
    opacity: 0.8;
  }
  .userinfo-panel .iuserinfos .inikename .iuseal{
    width: 1.875rem;
    height: 1.875rem;
    margin-right: 0.25rem;
  }
  .userinfo-panel .iuserinfos .inikename .iname{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .userinfo-panel .iuserinfos .iaddress{
    width: 10rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 400;
  }
  .userinfo-panel .iuserinfos .iaddress .icurrtype{
    width: 1.25rem;
    height: 1.25rem;
  }
  .userinfo-panel .iuserinfos .ijoin{
    width: 100%;
    text-align: center;
  }
  .ivalue{
    width: 100%;
    font-size: 1.2rem;
    font-weight: 400;
  }

  .userinfo-panel-purple{
     /* background-color: #7955ff; */
  }

  .iuserinfos-right{
    width: 100%;
    height: 16rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .iuserinfo-top{
    width: 100%;
    line-height: 2.56rem;
    padding-bottom: 1.25rem;
    border-bottom: 2px solid #EEEEEE;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 500;
  }
  .iuserinfo-top .iuserinfo-top-img{
    width: 1.28rem;
    height: 0.68rem;
    margin: 0 1rem;
  }

  .iuserinfo-mid{
    width: 100%;
    margin: 1.2rem auto;
    font-size: 1.2rem;
    font-weight: 400;
  }

  .iuserinfo-bot{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .iuserinfo-btn{
    width: 22%;
    border-color: #313131;
    color: #313131;
    font-size: 1rem;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre;
  }
  .iuserinfo-btn:hover{
    background-color: #FFFFFF;
    border-color: #7955ff;
    color: #7955ff;
  }

  @media only screen and (min-width: 0px) and (max-width: 960px){
    .iuserinfo-btn{
      width: 22%;
      font-size: 0.8rem;
      font-weight: 500;
    }
  }

</style>
