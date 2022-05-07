<template>
  <div class="icontainer-subpage">
    <b-row class="irow">
      <b-col xs="12" sm="6" lg="3" class="iset-left">
        <div class="iset-leader-contain">
          <div class="iset-leader-title">{{$t('page.settings')}}</div>
          <div class="iset-leader-lists">

            <div class="ileader" :class="setactive==1?activeclass:''" @click="show(1)">
              <b-icon icon="person-bounding-box" class="ileader-img"></b-icon>
              <span class="ileader-name">{{$t('page.profile')}}</span>
            </div>
            <!-- <div class="ileader" :class="setactive==2?activeclass:''" @click="show(2)">
              <b-icon icon="globe2" class="ileader-img"></b-icon>
              <span class="ileader-name">{{$t('page.language')}}</span>
            </div> -->
            <!-- <div class="ileader" :class="setactive==3?activeclass:''" @click="show(3)">
              <b-icon icon="question-square" class="ileader-img"></b-icon>
              <span class="ileader-name">Profile</span>
            </div>
            <div class="ileader" :class="setactive==4?activeclass:''" @click="show(4)">
              <b-icon icon="question-square" class="ileader-img"></b-icon>
              <span class="ileader-name">Profile</span>
            </div> -->

          </div>
        </div>
      </b-col>
      <b-col xs="12" sm="6" lg="9" class="">
        <div class="iset-contect-contain">
          <router-view></router-view>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default{
    name:'set',
    data() {
      return {
        setactive: 1,
        activeclass:'ileader-active'
      }
    },methods: {
      show(v) {
        this.setactive = v
        if (v == 1) {
          this.$router.push({name:'setProfile'})
        } else if(v == 2){
          this.$router.push({name:'setLang'})
        }
      }
    },
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  .iset-left{
    /* background-color: #f7f8fc; */
  }
  .iset-leader-contain{
    width: 100%;
  }
  .iset-contect-contain{
    width: 100%;
    /* height: 100vh; */
  }
  .iset-leader-contain .iset-leader-title{
    width: 100%;
    line-height: 4.8rem;
    font-weight: 500;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
  .iset-leader-contain .iset-leader-lists .ileader{
    width: 100%;
    margin: 1rem 0;
    line-height: 3.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.2rem;
    color: #787878;
    font-weight: 500;
  }
  .iset-leader-contain .iset-leader-lists .ileader-active{
    color: #FFFFFF;
    background-color: #6976fe;
    border-radius: 0.4rem;
    animation: .25s, 100ms;
  }
  .iset-leader-contain .iset-leader-lists .ileader .ileader-img{
    margin: 0 1rem;
  }

</style>
