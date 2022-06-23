<template>
  <div>
    <div class="icontainer-subpage">

      <div class="ireward-contain">

        <div class="ibond-infos imargin-top-80">
          <div class="ibond-infos-title color_yellow">{{$t('page.bond')}}</div>
          <div class="ibond-infos-lists color_yellow">
            <div class="ibond-infos-item">
              <div class="iitem-desc">{{$t('page.treasuryBalance')}}</div>
              <div class="iitem-value">${{vualtBalanceUS}}</div>
            </div>
            <div class="ibond-infos-item">
              <div class="iitem-desc">OPH {{$t('page.price')}}</div>
              <div class="iitem-value">${{ophPriceUS}}</div>
            </div>
          </div>
        </div>

        <div class="ibond-contain">
          <div class="ibondlists">
            <table class="itable itable-bond bg_darkgray">
              <thead>
                <tr class="bg_lightgray">
                  <th class="ibond-th30 ipadding_left32">{{$t('page.bond')}}</th>
                  <th class="ibond-th25">{{$t('page.price')}}</th>
                  <th class="ibond-th25">{{$t('page.discount')}}</th>
                  <th class="ibond-th20">{{$t('page.duration')}}</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="item in lists">
                  <tr :key="item.bondInfoId">
                    <td colspan="4">
                      <router-link :to="{name:'buybonds', params:{id: item.bondInfoId}}">
                        <table class="itable itable-bond bg_darkgray">
                          <tr>
                            <td class="ibond-th30 ipadding_left32">{{item.name}}</td>
                            <td class="ibond-th25">${{item.marketPriceUSD}}</td>
                            <td class="ibond-th25">{{item.discount}}%</td>
                            <td class="ibond-th20">{{item.duration}}days</td>
                          </tr>
                        </table>
                      </router-link>
                    </td>
                  </tr>
                </template>

                <!-- <tr>
                  <td colspan="4">
                    <router-link :to="{name:'buybonds', params:{id:1}}">
                      <table class="itable itable-bond bg_darkgray">
                        <tr>
                          <td class="ibond-th30 ipadding_left32">OPH LP</td>
                          <td class="ibond-th25">$18.58</td>
                          <td class="ibond-th25">-0.85%</td>
                          <td class="ibond-th20">2days</td>
                        </tr>
                      </table>
                    </router-link>
                  </td>
                </tr> -->

              </tbody>
            </table>
          </div>
          <div class="ibuydesc"> {{$t('page.bond_buy_desc')}} </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import api from '../../util/network.js'
  import wallet from '../../util/wallet.js'
  /* import bondlistd from '../../components/nfts/bondlists.vue' */
  export default{
    name:'bond',
    data(){
      return{
        vualtBalanceUS: 0,
        ophPriceUS: 0,
        lists:[]
      }
    },
    created() {
      this.getBalance()
    },
    methods: {
      getBalance(){
        let that = this
        api.getAction('/unlogin/acc-bond/getVaultOverviewInfo', '', function(res) {
          if (res.code == 200) {
            that.vualtBalanceUS = wallet.USDollarFormat(res.result.vaultBalanceUSD)
            that.ophPriceUS = wallet.USDollarFormat(res.result.ophPriceUSD)
            let ids = res.result.bondInfoIdList
            for (let id of ids) {
              api.getAction('/unlogin/acc-bond/getBondSetInfoByid', 'bondInfoId=' + id, function(res1) {
                if (res.code == 200) {
                  res1.result.marketPriceUSD = wallet.USDollarFormat(res1.result.marketPriceUSD)
                  res1.result.discount = Number(res1.result.discount).valueOf() * 100
                  that.lists.push(res1.result)
                } else {
                  api.iToastServer(that, res1.code, 'secondary')
                }
              })
            }
          } else {
            api.iToastServer(that, res.code, 'secondary')
          }
        })
      },
      bond() {
        this.$router.push({name:'buybonds', params:{}})
      }
    },
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  .ibond-infos{
    width: 100%;
  }
  .ibond-infos .ibond-infos-title{
    line-height: 3.5555rem;
    font-size: 2.5555rem;
    font-family: Poppins-Bold, Poppins;
    font-weight: 500;
  }
  .ibond-infos .ibond-infos-lists{
    margin: 4.8888rem 0 5.9444rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .ibond-infos .ibond-infos-lists .ibond-infos-item{
    width: 26.111111rem;
  }
  .ibond-infos .ibond-infos-item{
    /* height: 6.4rem; */
    font-size: 1.2rem;
    margin: 0.5rem 0;
    font-size: 1.333333rem;
  }
  .ibond-infos .ibond-infos-item .iitem-value{
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    line-height: 3.1111rem;
    font-size: 2.2222rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 400;
    margin-top: 0.9444rem;
  }
  .ibond-infos .ibond-infos-item .iitem-desc{

    line-height: 2.1666rem;
    font-size: 1.5555rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 300;
    color: #979797;
  }

  .ibond-contain .ibuydesc{
    width: 39.2777rem;
    margin: 6.8333rem auto;
    line-height: 1.7777rem;
    font-size: 1.3333rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 300;
    color: #A0A0A0;
    text-align: center;
  }
  .ibond-contain .ibondlists{
    width: 100%;
    border-radius: 0.8888rem;
    overflow: hidden;
    border:0.1111rem solid #3C3C3C;
  }
</style>
