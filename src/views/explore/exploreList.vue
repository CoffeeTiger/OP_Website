<template>
  <div class="icontainer-subpage">
    <b-row class="">



      <template v-if="findPanelOpen">
        <div class="iexplore-find-panel iborder iexplore-left">
          <div class="ifind-panel-header ifind-panel-header-flex" >
            <div class="ifind-panel-header-title">
              <img src="../../assets/imgs/filters.png" class="iexpansion-img" />
              <span>{{$t('page.filters')}}</span>
            </div>
            <img src="../../assets/imgs/expansion.png" class="iexpansion-img" @click="changPanel"/>
          </div>
          <div class="ifind-panel-body">
            <b-form class="iform-find">

              <b-form-group id="input-group-3" :label="$t('page.filters_state')" label-for="input-3">
                <b-form-select
                  id="input-3"
                  v-model="form.stat"
                  :options="stats"
                  required
                  class="icustom-select"
                ></b-form-select>
              </b-form-group>

              <b-form-group id="input-group-1" :label="$t('page.filters_price')">
                <div class="idate-select-contain">
                  <b-form-input
                  id="min"
                  v-model="form.min"
                  type="number"
                  :placeholder="$t('page.filters_to_min')"
                  required
                  class="icustom-select idate-select"></b-form-input>
                  <div class="iform-to">{{$t('page.filters_to')}}</div>
                  <b-form-input
                  id="max"
                  v-model="form.max"
                  type="number"
                  :placeholder="$t('page.filters_to_max')"
                  required
                  class="icustom-select idate-select"></b-form-input>
                </div>
              </b-form-group>

              <b-form-group id="input-group-3" :label="$t('page.filters_reward')" label-for="input-3">
                <b-form-select
                  id="input-3"
                  v-model="form.reward"
                  :options="rewards"
                  required
                  class="icustom-select"
                ></b-form-select>
              </b-form-group>

            </b-form>
          </div>
        </div>

        <div class="iexplore-right">
          <div class="ihome-list-caption">
            <div class="text-lg-left ihome-list-title">{{$t('page.list')}}</div>
            <div class="text-right imore"></div>
          </div>
          <exploreFindLists></exploreFindLists>
        </div>
      </template>

      <template v-else>
        <div class="iexplore-find-panel iexplore-left2">
          <div class="ifind-panel-header" @click="changPanel">
            <img src="../../assets/imgs/expansion.png" class="iexpansion-img transform-180" />
          </div>
        </div>
        <div class="iexplore-right2">
          <div class="ihome-list-caption">
            <div class="text-lg-left ihome-list-title">{{$t('page.list')}}</div>
            <div class="text-right imore"></div>
          </div>
          <exploreFindLists></exploreFindLists>
        </div>
      </template>

    </b-row>
  </div>
</template>

<script>
  import exploreFindLists from '../../components/nfts/exploreFindLists.vue'
  export default{
    name:'explorelist',
    components: {
      exploreFindLists
    },
    data() {
      return {
        findPanelOpen: true,
        form: {
          min: '',
          max: '',
          reward: 'All',
          stat: 'All',
        },
        stats: [{ text: this.$t('page.filters_state_all'), value: 'All'},
        { text: this.$t('page.filters_state_completed'), value: 'Completed'},
        { text: this.$t('page.filters_state_inprogress'), value:'In progress'},
        { text: this.$t('page.filters_state_reward'), value:'Reward'}],
        rewards: [{ text: this.$t('page.filters_reward_all'), value: 'All' },
        { text: this.$t('page.filters_reward_nft'), value: 'NFT' },
        { text: this.$t('page.filters_reward_eth'), value: 'ETH' }],
      }
    },created(){

    },methods: {
      changPanel() {
        this.findPanelOpen = !this.findPanelOpen
      }
    },
  }
</script>

<style>
  @import url("../../assets/scss/com.css");
  .iexplore-find-panel{
    width: 19.833333rem;
    height: 31.611111rem;
    background-color: #FBFBFB;
    border: 2px solid #EEEEEE;
    border-radius: 0.4rem;
  }

  @media only screen and (min-width: 0px) and (max-width: 767px) {
    /* .iexplore-find-panel{
      width: 100%;
      height: auto;
      padding: 2rem;
      background-color: #fbfbfb;
      border: 1px solid #F4F8F7;
    } */
  }

  .ifind-panel-header{
    width: 100%;
    height: 3.84rem;
    border-bottom: 1px solid #eeeeee;
  }
  .ifind-panel-header .iexpansion-img{
    width: 1.222222rem;
    height: 1.111111rem;
    margin: 1.111111rem;
  }
  .ifind-panel-header .iexpansion-img:hover{
    opacity: .6;
  }
  .ifind-panel-header .transform-180{
    transform: rotate(180deg);
    float: right;
  }
  .ifind-panel-header-title{
    height: 3.84rem;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.555555rem;
    font-weight: bold;
  }
  .ifind-panel-header-flex{
    display: flex;
    justify-content: space-between;
  }
  .iform-find{
    width: -webkit-calc(100% - 2rem);
    margin: 1rem;
    color: #4e5c69;
  }
  .iform-find .iform-to{
    font-size: 1.222222rem;
    color: #DAD9D9;
  }

  .iform-find label, legend{
    font-size: 1.111111rem !important;
    color: #C2C2C2;
  }

  .idate-select-contain{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .idate-select-contain .idate-select{
    width: 7.333333rem;
    height: 2.666666rem;
    border: 2px solid #EEEEEE;
  }

  .custom-select, .form-control{
    font-size: 1.333333rem;
  }

  .iexplore-left{
    width: 20.055555rem;
  }

  .iexplore-right{
    width: -webkit-calc(100% - 23.388888rem);
    margin: 0 auto;
  }

  .iexplore-left2{
    width: 3.666666rem;
    height: 3.666666rem;
  }
  /* 2+20+22+20+2, 100%-(2+20+22+20+2)-30-30 */
  .iexplore-right2{
    width: -webkit-calc(100% - 7rem);
    margin: 0 auto;
  }

</style>
