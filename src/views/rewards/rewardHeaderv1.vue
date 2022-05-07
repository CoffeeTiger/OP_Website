<template>
  <div class="irward-header-contain">
    <div class="irward-header-contain-inner">
      <div class="iup">Stake OPH, eran up to</div>
      <div class="imid"><span class="ifront">195.55% ARP</span></div>
      <div class="idown">
        <b-row>
          <b-col sx="12" sm="6" md="3"><b-button variant="primary" size="lg" block> Buy OPH</b-button></b-col>
          <b-col sx="12" sm="6" md="3"></b-col>
        </b-row>

      </div>
    </div>

  </div>
</template>

<script>
  export default{
    name:'rewardHeaderv1',
  }
</script>

<style scoped="scoped">
  .irward-header-contain{
    width: 100%;
    height: 360px;
    margin-top: -1rem;
    background: linear-gradient(180deg, #dee1ff 1%, #FFFFFF 100%);
  }
  .irward-header-contain-inner{
    width: 100%;
    height: 100%;
    background: url('../../assets/imgs/reward-top.png') 96% 4rem no-repeat;
    background-size: 360px 360px;
    padding-left: 60px;
    padding-right: 60px;
  }
  .irward-header-contain-inner .iup{
    padding-top: 90px;
    font-size: 2.56rem;
    background: linear-gradient(to right, #942d82, #404091);
    -webkit-background-clip: text;
    color: transparent;
  }
  .irward-header-contain-inner .imid{
    line-height: 6rem;
    font-size: 2.8rem;
    font-weight: 500;
  }
  .irward-header-contain-inner .ifront{
    background: linear-gradient(to right, #f74bd9, #5630df);
    -webkit-background-clip: text;
    color: transparent;
  }
  .irward-header-contain-inner .idown{

  }

</style>
