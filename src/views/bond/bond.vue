<template>
  <div>
    <div class="icontainer-subpage">

      <div class="ireward-contain">
        <!-- <b-row class="ibond-infos">
          <b-col>
            <div class="ibond-infos-title">{{$t('page.bond')}}</div>
            <b-row>
              <b-col xs="12" sm="6" md="4" class="ibond-infos-item">
                <div class="iitem-desc">{{$t('page.treasuryBalance')}}</div>
                <div class="iitem-value">$876,899,218,200</div>
              </b-col>
              <b-col xs="12" sm="6" md="4" class="ibond-infos-item">
                <div class="iitem-desc">OPH {{$t('page.price')}}</div>
                <div class="iitem-value">$28.58</div>
              </b-col>
            </b-row>
          </b-col>
        </b-row> -->

        <div class="ibond-infos">
          <div class="ibond-infos-title">{{$t('page.bond')}}</div>
          <div class="ibond-infos-lists">
            <div class="ibond-infos-item">
              <div class="iitem-desc">{{$t('page.treasuryBalance')}}</div>
              <div class="iitem-value">$876,899,218,200</div>
            </div>
            <div class="ibond-infos-item">
              <div class="iitem-desc">OPH {{$t('page.price')}}</div>
              <div class="iitem-value">$28.58</div>
            </div>

          </div>

        </div>

        <div class="ibond-table">

          <!-- <b-col>
            <b-card no-body style="max-width: 100%; margin: 1.2rem auto;border-radius: 0.64rem;">

                <b-card-header header-tag="header" class="p-3 ibond-card-header" role="tab">
                  <b-row >
                    <b-col xs="3" sm="3">Bond</b-col>
                    <b-col xs="2" sm="2">Price</b-col>
                    <b-col xs="2" sm="2">Discount</b-col>
                    <b-col xs="2" sm="2">Duration</b-col>
                    <b-col xs="3" sm="3"></b-col>
                  </b-row>
                </b-card-header>
                <b-card-body class="ibond-card-body">
                  <b-card-text>

                    <b-row class="ibond-table-tr">
                      <b-col sm="3">
                        <div class="ibond-table-cell">
                          <div class="icell-left">
                            <img src="../../assets/imgs/ethereum.png" class="icell-left-img" />
                          </div>
                          <div class="icell-right">
                            <div>OPH-DAILP</div>
                            <div>Get LP</div>
                          </div>
                        </div>
                      </b-col>
                      <b-col sm="2">
                        <div class="ibond-table-cell">
                          <div class="icell-center">$28.58</div>
                        </div>
                      </b-col>
                      <b-col sm="2">
                        <div class="ibond-table-cell">
                          <div class="icell-center color-red">-0.85%</div>
                        </div>
                      </b-col>
                      <b-col sm="2">
                        <div class="ibond-table-cell">
                          <div class="icell-center">2days</div>
                        </div>
                      </b-col>
                      <b-col sm="3">
                        <div class="ibond-table-cell">
                          <div class="icell-center">
                            <b-button variant="outline-primary" class="icell-btn-font" @click="bond"> Bond </b-button>
                          </div>
                        </div>
                      </b-col>
                    </b-row>

                  </b-card-text>
                </b-card-body>

                <b-card-body class="ibond-card-footer">
                  <b-card-text>
                  <div>Important: New bonds are auto-staked(accrue rebase rewards) and no longer<br>vest linearly. Simply claim as sOPH or gOPH at the end of the term. </div>
                  </b-card-text>
                </b-card-body>

              </b-card>
          </b-col> -->

          <!-- <b-col> -->

            <b-card no-body style="max-width: 100%; margin: 0rem auto;border-radius: 0.64rem;">

              <b-card-body class="ibond-card-body">
                <b-card-text>
                <bondlistd></bondlistd>
                </b-card-text>
              </b-card-body>

              <b-card-body class="ibond-card-footer">
                <b-card-text>
                <div class="ibuydesc"> {{$t('page.bond_buy_desc')}} </div>
                </b-card-text>
              </b-card-body>

            </b-card>
          <!-- </b-col> -->
        </div>


      </div>

    </div>

  </div>
</template>

<script>
  import bondlistd from '../../components/nfts/bondlists.vue'
  export default{
    name:'bond',
    components: {
      bondlistd
    },
    methods: {
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
    margin: 5rem auto 2.777777rem;
    font-size: 2.333333rem;
    font-weight: 500;
  }
  .ibond-infos .ibond-infos-lists{
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
    line-height: 2.56rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
  }
  .ibond-infos .ibond-infos-item .iitem-desc{
    color: #757373;
  }

  .ibond-card-header{
    background-color: #FFFFFF;
    color: #7d7d7d;
    font-weight: 500;
    text-align: center;
  }
  .ibond-card-body{
    background-color: #f7f8fc;
    line-height: 2rem;
    text-align: center;
    padding: 0;
    border-top-left-radius: 0.64rem;
    border-top-right-radius: 0.64rem;
    overflow: hidden;
  }
  .ibond-card-footer{
      background-color: #f7f8fc;
      font-size: 0.777777rem;
      line-height: 1.277777rem;
      color: #A0A0A0;
      text-align: center;
      border-bottom-left-radius: 0.64rem;
      border-bottom-right-radius: 0.64rem;
      overflow: hidden;
  }
  .ibond-card-footer .ibuydesc{
    width: 28.888888rem;
    margin: 0 auto;
  }
  .ibond-table{
    margin-top: 6.666666rem;
  }
  .ibond-table .ibond-table-tr:hover{
    background-color: #ffffff63;
  }
  .ibond-table .ibond-table-cell{
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 400;
    color: #313131;
  }
  .ibond-table .ibond-table-cell .icell-left .icell-left-img{
    width: 1.6rem;
    height: 1.6rem;
    margin: 0 0.8rem;
  }
  .ibond-table .ibond-table-cell .icell-center{

  }
  .ibond-table .ibond-table-cell .icell-right{
     text-align: left;
     margin: 0 0.8rem;
  }
  .ibond-table .ibond-table-cell .icell-btn-font{
    font-weight: bold;
    border: 2px solid #6976fe !important;
    padding-left: 20px;
    padding-right: 20px;
  }

</style>
