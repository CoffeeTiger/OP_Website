<template>
  <div class="infts-thumbnail-lists">

    <router-link :to="{path:'/bought', params:{id: '1'}}">
      <activeImg pid="nft001.jpg"
      pname="OP-20220120-8851"
      pvalue="#002 #007 #009"
      waiting="0"
      winner="0"
      receive="0"
      timer="89:10:10"></activeImg>
    </router-link>

    <router-link :to="{path:'/bought', params:{id: '1'}}">
      <activeImg pid="nft002.jpg"
      pname="OP-20220120-8852"
      pvalue="#002 #007 #009"
      waiting="1"
      winner="1"
      receive="0"
      timer="00:00:00"></activeImg>
    </router-link>

    <router-link :to="{path:'/bought', params:{id: '1'}}">
      <activeImg pid="nft008.jpg"
      pname="OP-20220120-8853"
      pvalue="#002 #007 #009"
      waiting="1"
      winner="2"
      receive="0"
      timer="89:10:10"></activeImg>
    </router-link>

    <router-link :to="{path:'/bought', params:{id: '1'}}">
      <activeImg pid="nft005.jpg"
      pname="OP-20220120-8851"
      pvalue="#002 #007 #009"
      waiting="1"
      winner="1"
      receive="1"
      timer="89:10:10"></activeImg>
    </router-link>

    <router-link :to="{path:'/bought', params:{id: '1'}}">
      <activeImg pid="nft006.jpg"
      pname="OP-20220120-8851"
      pvalue="#002 #007 #009"
      waiting="0"
      winner="0"
      receive="0"
      timer="89:10:10"></activeImg>
    </router-link>

    <router-link :to="{path:'/bought', params:{id: '1'}}">
      <activeImg pid="nft007.jpg"
      pname="OP-20220120-8851"
      pvalue="#002 #007 #009"
      waiting="1"
      winner="0"
      receive="0"
      timer="89:10:10"></activeImg>
    </router-link>


  </div>
</template>

<script>
  import activeImg from './activeImg.vue'
  export default{
    name:'activeImgListThree',
    components: {
      activeImg
    },
    props: {
      propName: {
        type: Number,
        default: 1,
      },
    },
    methods: {
      name() {

      }
    },
  }
</script>

<style>
  @import url("../../assets/scss/com.css");
</style>
