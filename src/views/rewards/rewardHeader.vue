<template>
  <div class="irward-header-contain imargin-top-80">
    <div class="irward-header-contain-inner">

      <div class="iup">
        <div class="color_yellow">{{$t('page.stake')}}</div>
        <!-- <b-button variant="primary" class="ireward-buy"> {{$t('page.buy')}}OPH</b-button> -->
      </div>

      <div class="imid color_yellow">

        <div class="imid-cell">
          <div class="imid-cell-desc">{{$t('page.totalValueDeposited')}}</div>
          <div class="imid-cell-value">${{stakeTotal_US}}</div>
        </div>

        <div class="imid-cell">
          <div class="imid-cell-desc">{{$t('page.currentIndex')}}</div>
          <div class="imid-cell-value">{{currentIndex}} OPH</div>
        </div>

        <div class="imid-cell">
          <div class="imid-cell-desc">{{$t('page.APY')}}</div>
          <div class="imid-cell-value">{{apy}}%</div>
        </div>

      </div>


    </div>

  </div>
</template>

<script>
  import api from '../../util/network.js'
  import wallet from '../../util/wallet.js'

  export default {
    name: 'rewardHeader',
    data() {
      return {
        stakeTotal: 0,
        stakeTotal_US: 0,
        currentIndex: 0,
        apy: 0,
      }
    },
    created() {
      this.getStakeData()
    },
    methods: {
      getStakeData() {
        let that = this
        api.getAction('/logined/acc-stake/getStakeOverviewInfo', '', function(res) {
          if (res.code == 200) {
            that.stakeTotal_US = wallet.USDollarFormat(res.result.stakeBalanceUSD)
            let t = api.getStore('OPH_Decimals')
            that.currentIndex = wallet.WeiToGe(res.result.totalIncomeAmount, api.getStore('OPH_Decimals'))
            that.apy = res.result.yearRatio
          } else {
            /* api.iToastServer(that, res.code, 'secondary') */
          }
        })
      },
    }
  }
</script>

<style scoped="scoped">
  .irward-header-contain {
    width: 100%;
  }

  .irward-header-contain-inner {
    width: 100%;
  }

  .irward-header-contain-inner .iup {
    line-height: 3.5555rem;
    font-size: 2.5555rem;
    font-family: Poppins-Bold, Poppins;
    font-weight: 500;
  }

  .irward-header-contain-inner .imid {
    width: 100%;
    margin: 1.714286rem 0 3.428571rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .irward-header-contain-inner .imid .imid-cell .imid-cell-value {
    line-height: 3.1111rem;
    font-size: 2rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 400;
    margin-top: 0.9444rem;
  }

  .irward-header-contain-inner .imid .imid-cell .imid-cell-desc {
    line-height: 2.1666rem;
    font-size: 1.285714rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 300;
    color: #979797;
  }

  .irward-header-contain-inner .ifront {
    background: linear-gradient(to right, #f74bd9, #5630df);
    -webkit-background-clip: text;
    color: transparent;
  }

  .irward-header-contain-inner .idown {
    margin: 2.56rem auto;
  }

  .ireward-buy {
    width: 12.166666rem;
    height: 3.555555rem;
    margin-left: 2.777777rem;
    font-size: 1.333333rem;
    font-weight: 500;
  }
</style>
