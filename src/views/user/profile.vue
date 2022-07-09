<template>
  <div class="icontainer-subpage-v1">
    <!-- <proifleUserinfo></proifleUserinfo> -->
    <userinfo></userinfo>
    <div class="inavigation">
      <div class="inavi-contant">
        <div :class="naviChech=='original'?'navi-item navi-active':'navi-item'" @click="naviSelect('original')">
          {{$t('page.original')}}
        </div>
        <div :class="naviChech=='activity'?'navi-item navi-active':'navi-item'" @click="naviSelect('activity')">
          {{$t('page.bought')}}
        </div>
        <div :class="naviChech=='listings'?'navi-item navi-active':'navi-item'" @click="naviSelect('listings')">
          {{$t('page.sale')}}
        </div>
      </div>
      <div class="inavi-slider">
        <div id="islider" class="islider"></div>
      </div>
    </div>
    <div class="user-business">
      <FadeTransition :duration="300" mode="out-in">
        <!-- <router-view></router-view> -->
        <original v-if="originalShow"></original>
        <activity v-if="activityShow"></activity>
        <listings v-if="listingsShow"></listings>
      </FadeTransition>
    </div>
  </div>
</template>

<script>
  import {
    FadeTransition,
  } from 'vue2-transitions'
  import userinfo from './userinfo.vue'
  import original from './original.vue'
  import activity from './activity.vue'
  import listings from './listings.vue'
  export default {
    name: 'profile',
    components: {
      FadeTransition,
      userinfo,
      original,
      activity,
      listings
    },
    data() {
      return {
        key: '1',
        naviChech: 'original',
        sliderlength: 0,
        originalShow: true,
        activityShow: false,
        listingsShow: false
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
        var slider = document.getElementById('islider')
        this.naviChech = v;
        if (v == 'original') {
          this.sliderlength = 0
          this.originalShow = true
          this.activityShow = false
          this.listingsShow = false
        } else if (v == 'activity') {
          this.sliderlength = 30.2222
          this.originalShow = false
          this.activityShow = true
          this.listingsShow = false
        } else if (v == 'listings') {
          this.sliderlength = 58.4444
          this.originalShow = false
          this.activityShow = false
          this.listingsShow = true
        }
        slider.style.transform = 'translateX(' + this.sliderlength + 'rem)'
      }
    },
  }
</script>

<style scoped>
  @import url("../../assets/scss/com.css");
  @import url("../../assets/scss/profile.css");

  .icontainer-subpage-v1 {
    width: 85.714286rem;
    margin: 0 auto;
    padding: 2.9rem 0;
  }
</style>
