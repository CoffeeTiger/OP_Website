<template>
  <div>
    <b-sidebar id="sidebar-variant" title="Connect your wallet" bg-variant="dark" text-variant="light" no-header right backdrop shadow>
      <div class="">
        <div class="iwallet-contain">
          <div class="iheader">
            <h4 class="ititle color_yellow px-3">{{$t('page.connectyourwallet')}}</h4>
          </div>
          <div class="ibody px-3 py-2">
            <div class="idesc">{{$t('page.connectyourwalletdesc')}}</div>
            <div class="iwallet-lists ">

              <div class="list" @click="connect('metamask')" v-b-toggle.sidebar-variant>
                <div class="list-left">
                  <img src="../../assets/imgs/logo/metamask.png" class="iwallet-logo" />
                  <div class="names">MetaMask</div>
                </div>
                <div class="list-right"><span>Popular</span></div>
              </div>
              
              <div class="list" @click="connect('mathwallet')" v-b-toggle.sidebar-variant>
                <div class="list-left">
                  <img src="../../assets/imgs/logo/mathwallet.png" class="iwallet-logo" />
                  <div class="names">Mathwallet</div>
                </div>
                <div class="list-right"></div>
              </div>
              
              <div class="list" @click="connect('tokenpocket')" v-b-toggle.sidebar-variant>
                <div class="list-left">
                  <img src="../../assets/imgs/logo/tokenpocket.jpg" class="iwallet-logo" />
                  <div class="names">TokenPocket</div>
                </div>
                <div class="list-right"></div>
              </div>

              <div class="list" @click="connect('coinbase')" v-b-toggle.sidebar-variant>
                <div class="list-left">
                  <img src="../../assets/imgs/logo/coinbase.png" class="iwallet-logo" />
                  <div class="names">Coinbase</div>
                </div>
                <div class="list-right"></div>
              </div>

              <div class="list" @click="connect('tronlink')" v-b-toggle.sidebar-variant>
                <div class="list-left">
                  <img src="../../assets/imgs/logo/tronlink.png" class="iwallet-logo" />
                  <div class="names">TronLink</div>
                </div>
                <div class="list-right"></div>
              </div> 

              <div class="list" @click="connect('phantom')" v-b-toggle.sidebar-variant>
                <div class="list-left">
                  <img src="../../assets/imgs/logo/phantom.svg" class="iwallet-logo" />
                  <div class="names">Phantom</div>
                </div>
                <div class="list-right"></div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <template #footer="{ hide }">
       <div class="d-flex bg-dark text-center align-items-center px-3 py-2">
        <b-button size="lg" class="bg_yellow ibtn_wallet_contain_close" block @click="hide">Close</b-button>
       </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        hide: false
      }
    },
    props:{
      pid: {
        type: String,
        default:'sidebar-variant'
      },
    },methods:{
      connect(v){
        this.$emit('connwallet', v)
      }
    }
  }
</script>

<style scoped>
  .ibtn_wallet_contain_close{
    font-family: Poppins-Medium, Poppins;
    font-weight: 500;
    color: #313131 !important;
  }
  .iwallet-contain{
    width: 100%;
    height: auto;
  }
  .iwallet-contain .ititle{
    width: 100%;
    line-height: 4.5555rem;
    border-bottom: 0.1111rem solid #5e5d59;
  }
  .iwallet-contain .idesc{
    width: 100%;
    line-height: 1.3889rem;
    margin: 15px auto;
    font-size: 1.1111rem;
    color: #B4B4B4;
  }
  .iwallet-contain .iwallet-lists{
    width: 100%;
    margin: 1.6667rem auto;
    border-radius: 0.4444rem;
    background-color: #555555;
  }
  .iwallet-contain .iwallet-lists .list{
    width: 100%;
    height: 4.7778rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.1111rem solid #4c4c4c;
  }
  .iwallet-contain .iwallet-lists .list:hover{
    color: #F7B62D;
    background-color: #4c4c4c;
    transition: all 0.3s;
  }
  .iwallet-contain .iwallet-lists .list:last-child{
    border-bottom: 0.1111rem solid #B4B4B400;
  }
  .iwallet-contain .iwallet-lists .list .iwallet-logo {
    width: 2.2222rem;
    height: 2.2222rem;
    margin: auto 1rem;
  }
  .iwallet-contain .iwallet-lists .list .names{
    font-size: 1.1111rem;
  }
  .list .list-left{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .list .list-right > span{
    border-radius: 0.8333rem;
    background-color: #F7B62D;
    padding: 0.5556rem;
    margin-right: 0.5556rem;
    color: #000;
    font-size: 0.8rem;
  }
</style>
