<template>
  <div class="irward-header-contain">
    <div class="irward-header-contain-inner">
      <div class="iup">
        <!-- <b-row>
          <b-col sx="12" sm="6" md="4">{{$t('page.stake')}}  <b-button variant="primary" size=""> {{$t('page.buy')}}OPH</b-button></b-col>
          <b-col sx="12" sm="6" md="4"></b-col>
          <b-col sx="12" sm="6" md="4"><b-button variant="primary" size="lg" block> Buy OPH</b-button></b-col>
        </b-row> -->
        <div>{{$t('page.stake')}}</div>
        <b-button variant="primary" class="ireward-buy"> {{$t('page.buy')}}OPH</b-button>
      </div>
      <div class="imid">
        <!-- <b-row>
          <b-col xs="12" sm="12" md="4">
            <div class="imid-cell">
              <div class="imid-cell-desc">{{$t('page.APY')}}</div>
              <div class="imid-cell-value">180.1%</div>
            </div>
          </b-col>
          <b-col xs="12" sm="12" md="5">
            <div class="imid-cell">
              <div class="imid-cell-desc">{{$t('page.totalValueDeposited')}}</div>
              <div class="imid-cell-value">$125,898,323</div>
            </div>
          </b-col>
          <b-col xs="12" sm="12" md="3">
            <div class="imid-cell">
              <div class="imid-cell-desc">{{$t('page.currentIndex')}}</div>
              <div class="imid-cell-value">103.66 veOPH</div>
            </div>
          </b-col>
        </b-row> -->

        <div class="imid-cell">
          <div class="imid-cell-desc">{{$t('page.APY')}}</div>
          <div class="imid-cell-value">180.1%</div>
        </div>

        <div class="imid-cell">
          <div class="imid-cell-desc">{{$t('page.totalValueDeposited')}}</div>
          <div class="imid-cell-value">$125,898,323</div>
        </div>

        <div class="imid-cell">
          <div class="imid-cell-desc">{{$t('page.currentIndex')}}</div>
          <div class="imid-cell-value">103.66 veOPH</div>
        </div>

      </div>


    </div>

  </div>
</template>

<script>
  export default{
    name:'rewardHeader',
  }
</script>

<style scoped="scoped">
  .irward-header-contain{
    width: 100%;
  }
  .irward-header-contain-inner{
    width: 100%;
  }
  .irward-header-contain-inner .iup{
    /* margin-top: 1rem; */
    margin: 5rem auto;
    font-size: 2.333333rem;
    font-weight: 500;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .irward-header-contain-inner .imid{
    /* margin: 2.56rem; */
    font-size: 1.333333rem;
    /* min-height: 6.4rem; */
    /* margin: 0.5rem 0; */
    margin-bottom: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .irward-header-contain-inner .imid .imid-cell .imid-cell-value{
    font-weight: 500;
    line-height: 2.56rem;
  }
  .irward-header-contain-inner .imid .imid-cell .imid-cell-desc{
    font-weight: 400;
    color: #5d5d5d;
  }
  .irward-header-contain-inner .ifront{
    background: linear-gradient(to right, #f74bd9, #5630df);
    -webkit-background-clip: text;
    color: transparent;
  }
  .irward-header-contain-inner .idown{
    margin: 2.56rem auto;
  }
  .ireward-buy{
    width: 12.166666rem;
    height: 3.555555rem;
    margin-left: 2.777777rem;
    font-size: 1.333333rem;
    font-weight: 500;
  }

</style>
