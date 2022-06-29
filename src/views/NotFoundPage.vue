<template>
  <div>
    <!-- Header -->
    <div class="header py-7 ">
      <b-container>
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center ierror-page-contain">
            <b-col xl="5" lg="6" md="6" class="px-5">
              <h1 class="ititle">Ooops!</h1>
              <p class="icont">Page not found. Don't worry though, we have plenty of other pages to explore</p>

              <router-link to="/" class="font-weight-bold mt-5 ibacktohome">Back to home</router-link>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <!-- <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div> -->
    </div>
    <!-- Page content -->
    <section>
      <b-container >
        <b-row align-v="center" class="row-grid">
          <b-col xs="12" sm="12" md="3"></b-col>
          <b-col xs="12" sm="12" md="6">
            <img src="../assets/imgs/error.png" class="inftex"/>
          </b-col>
          <b-col xs="12" sm="12" md="3"></b-col>
          <!-- <b-col md="6">
            <div class="pr-md-5">
              <h1 class="text-secondary">Explore NFT</h1>
              <p class="text-dark"></p>
            </div>
          </b-col> -->
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>

export default {
  name: 'not-found'
};
</script>
<style scoped="scoped">
  .bg-gradient-info{
    background: linear-gradient(87deg, #6976fe 0, #2e3ddf 100%) !important;
  }
  .ierror-page-contain .ititle{
    font-size: 4.714286rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 500;
    color: #F7B62D;
    line-height: 7.071429rem;
    margin-bottom: 1.428571rem;
  }
  .ierror-page-contain .icont{
    font-size: 1.428571rem;
    font-family: Poppins-Light, Poppins;
    font-weight: 300;
    color: #979797;
    line-height: 2.142857rem;
  }
  .ibacktohome{
    font-size: 2rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #F7B62D !important;
    line-height: 3rem;
  }
  .fill-default{
    fill: #FFF;
  }
  .inftex{
    width: 100%;
    height: auto;
  }

</style>
