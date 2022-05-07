<template>
  <footer class="footer ifooter px-4">

    <div class="irow-footer-content">

      <div class="copyright text-center text-lg-left text-white-60">
        <b-nav class="nav-footer " align="left">
          <b-nav-item href="https://wiki.openpublish.io" target="_blank">
            <div class="ib-nav-item-content">{{$t('page.docs')}}</div>
          </b-nav-item>
          <b-nav-item href="https://github.com/CoffeeTiger" target="_blank">
            <div class="ib-nav-item-content">{{$t('page.github')}}</div>
          </b-nav-item>
          <b-nav-item :to="{name:'userpriv'}">
            <div class="ib-nav-item-content">{{$t('page.privacyPolicy')}}</div>
          </b-nav-item>
          <b-nav-item :to="{name:'userservice'}" >
            <div class="ib-nav-item-content">{{$t('page.termsofUse')}}</div>
          </b-nav-item>
          <b-nav-item href="https://openpublish.io" >
            <div class="ib-nav-item-content">{{$t('page.NFTMarketplace')}}</div>
          </b-nav-item>
          <b-nav-item href="https://openpublish.io" >
            <div class="ib-nav-item-content">{{$t('page.Blockchain')}}</div>
          </b-nav-item>
        </b-nav>
      </div>

      <div class="copyright text-center text-lg-left text-white-60">
        <b-nav class="nav-footer" align="right" >
          <b-nav-item href="https://twitter.com/OpenPublishNFT" target="_blank">
            <div class="ib-nav-item-content">
              <!-- <b-img fluid class="ilogo-social" src="img/icons/logo/twitter.png"></b-img><span></span> -->
              <b-img fluid class="ilogo-social" :src="require('../../assets/imgs/home-top-tw.png')"></b-img><span></span>
            </div>
          </b-nav-item>
          <b-nav-item href="https://t.me/+YC_Eo3UDdZIzNGZk" target="_blank">
            <div class="ib-nav-item-content">
              <!-- <b-img fluid class="ilogo-social" src="img/icons/logo/telegram.png"></b-img><span></span> -->
              <b-img fluid class="ilogo-social" :src="require('../../assets/imgs/home-top-tg.png')"></b-img><span></span>
            </div>
          </b-nav-item>
          <b-nav-item href="https://discord.gg/tKMbjCdVYf" target="_blank">
            <div class="ib-nav-item-content">
              <b-img fluid class="ilogo-social" :src="require('../../assets/imgs/home-top-dis.png')"></b-img><span></span>
            </div>
          </b-nav-item>

        </b-nav>
      </div>



    </div>
  </footer>
</template>
<script>
  export default {
    data() {
      return {
        year_end: new Date().getFullYear(),
        year_start: new Date().getFullYear() - 4
      };
    }
  };
</script>
<style>
  .irow-footer-content {
    width: 66.666666rem;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ifooter {
    width: 106.666666rem;
    max-width: 1920px;
    margin: 0 auto;
    background-color: #47418d;
  }

  .ihr-footer {
    border-top: 1px solid #625bb6 !important;
  }

  .irow-footer-up {
    color: #FFFF00;
  }

  .irow-footer-lists {
    width: 96%;
    margin: 0 0 0 auto;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .irow-footer-lists .irow-footer-list {
    width: 20%;
    max-width: 240px;
    min-width: 180px;
    text-align: left;
  }

  .irow-footer-lists .irow-footer-list .list_title {
    font-size: 1.6rem;
    font-weight: bold;
    color: #88a6f2 !important;
  }

  @media only screen and (min-width: 992px) {
    .irow-footer-lists .irow-footer-list .li_padding_left_3 {
      padding-left: 3rem;
    }

    .irow-footer-lists .irow-footer-list .li_padding_left_2 {
      padding-left: 1.5rem;
    }
  }

  @media only screen and (max-width: 640px) {
    .irow-footer-lists .irow-footer-list .li_padding_left_3 {
      padding-left: 0;
    }

    .irow-footer-lists .irow-footer-list .li_padding_left_2 {
      padding-left: 0;
    }
  }

  .ib-nav-item-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #B4C8FA;
    font-size: 1.111111rem;
    /* font-weight: 300; */
  }

  .ilogo-social {
    width: 1.44rem;
    height: 1.44rem;
    margin-right: 0.6rem;
    opacity: 0.6;
  }

  .ib-nav-item-content:hover img {
    opacity: 1;
  }

  .copyright {
    color: #b4c8fa;
  }

  .ifooter-btn-col {
    text-align: center;
  }

  .ifooter-btn {
    width: 11.2rem;
    margin: 1.2rem auto;
    color: #b4c8fa !important;
  }
</style>
