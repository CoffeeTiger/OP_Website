<template>
  <div class="icontainer-subpage">
    <!-- <proifleUserinfo></proifleUserinfo> -->
    <userinfov2></userinfov2>
    <b-row class="irow user-business-navigation">
      <b-col sx="4" sm="4" md="4" class="navi-item" :class="naviChech=='original'?'navi-active':''"
        @click="naviSelect('original')">{{$t('page.original')}}</b-col>
      <!-- <b-col sx="12" sm="6" md="4" class="navi-item" :class="naviChech=='collected'?'navi-active':''" @click="naviSelect('collected')">Collected</b-col> -->
      <b-col sx="4" sm="4" md="4" class="navi-item" :class="naviChech=='activity'?'navi-active':''"
        @click="naviSelect('activity')">{{$t('page.bought')}}</b-col>
      <b-col sx="4" sm="4" md="4" class="navi-item" :class="naviChech=='listings'?'navi-active':''"
        @click="naviSelect('listings')">{{$t('page.sale')}}</b-col>

    </b-row>

    <div class="user-business">
      <FadeTransition :duration="200" mode="out-in">
        <router-view></router-view>
      </FadeTransition>
    </div>
  </div>
</template>

<script>
  import {
    FadeTransition,
  } from 'vue2-transitions'
  import proifleUserinfo from './profileUserinfo.vue'
  import userinfov2 from './userinfov2.vue'
  export default {
    name: 'profile',
    components: {
      FadeTransition,
      proifleUserinfo,
      userinfov2
    },
    data() {
      return {
        key: '1',
        naviChech: 'original',
      }
    },
    created() {

      /* execute it when you refresh the page */
      this.$router.push({
        name: 'original',
        param: {
          type: 'original',
          serial: (new Date).getTime()
        }
      })

    },
    methods: {
      naviSelect(v) {
        this.naviChech = v;
        if (v == 'original') {
          this.$router.push({
            name: 'original',
            param: {
              type: 'original'
            }
          })
        } else if (v == 'collected') {
          this.$router.push({
            name: 'original',
            param: {
              type: 'collected'
            }
          })
        } else if (v == 'activity') {
          this.$router.push({
            name: 'activity'
          })
        } else if (v == 'listings') {
          this.$router.push({
            name: 'listings'
          })
        }
      }
    },
  }
</script>

<style>
  @import url("../../assets/scss/com.css");

  .user-business-navigation {
    width: 100%;
    line-height: 3.2rem;
    padding: 0.78rem 0;
    display: flex;
    justify-content: space-around;
    font-size: 1.28rem;
    font-weight: 500;
  }

  .user-business-navigation .navi-item {
    width: 33.3%;
    border-bottom: 2px solid #eeeeee;
    text-align: center;
    color: #757373;
  }

  .user-business-navigation .navi-active {
    border-bottom: 2px solid #313131;
    color: #313131;
  }
</style>
