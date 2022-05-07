<template>
  <div>
    <b-row class="irow">
      <b-col sx="12" sm="6" lg="4">
        <listingsImg pid="nft006.jpg"
        pname="OP-20220120-8851"
        progress="20"
        total="200"
        sold="40"
        price="0.03"
        timer="10:12:38"></listingsImg>
      </b-col>
      <b-col sx="12" sm="6" lg="4">
        <listingsImg pid="nft005.jpg"
        pname="OP-20220120-8855"
        progress="50"
        total="300"
        sold="150"
        price="0.01"
        timer="61:22:35"></listingsImg>
      </b-col>
      <b-col sx="12" sm="6" lg="4">
        <listingsImg pid="nft008.jpg"
        pname="OP-20220120-8851"
        progress="60"
        total="500"
        sold="300"
        price="0.01"
        timer="30:12:38"></listingsImg>
      </b-col>
      <b-col sx="12" sm="6" lg="4">
        <listingsImg pid="nft005.jpg"
        pname="OP-20220120-8851"
        progress="40"
        total="60"
        sold="24"
        price="0.01"
        timer="20:12:38"></listingsImg>
      </b-col>
      <b-col sx="12" sm="6" lg="4">
        <listingsImg pid="nft002.jpg"
        pname="OP-20220120-8851"
        progress="0"
        total="100"
        sold="0"
        price="0.01"
        timer="20:12:38"></listingsImg>
      </b-col>
      <b-col sx="12" sm="6" lg="4">
        <listingsImg pid="nft001.jpg"
        pname="OP-20220120-8851"
        progress="20"
        total="100"
        sold="20"
        price="0.01"
        timer="20:12:38"></listingsImg>
      </b-col>
    </b-row>

  </div>
</template>

<script>
  import listingsImg from './listingsImg.vue'
  export default{
    name:'profileImgListThree',
    components: {
      listingsImg
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
