<template>
  <div>
    <!-- <profileActivityLists></profileActivityLists> -->
    <activeImgListThree></activeImgListThree>
  </div>
</template>

<script>
  import profileActivityLists from '../../components/nfts/profileActivityLists.vue'
  import activeImgListThree from '../../components/user/activeImgListThree.vue'
  export default{
    name:'activity',
    components: {
      activeImgListThree
    },
  }
</script>

<style>
</style>
