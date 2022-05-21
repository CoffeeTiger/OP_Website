<template>
  <div>

    <b-table responsive="sm" :items="items" :fields="fields" caption-top hover @row-clicked="rowclicked" class="itable">
      <!-- <template #table-caption>
        <div class="ihome-list-caption">
          <div class="text-lg-left ihome-list-title">{{$t('page.list')}}</div>
          <div class="text-right imore"></div>
        </div>
      </template> -->

      <template #cell(nikename)="data">
        <div class="itable-cell-type1 itable-cell-type4">
          <!-- <span class="itable-index">{{data.item.index}}</span> -->
          <!-- <b-img class="itable-userheader" thumbnail rounded src="img/nft/header.png"></b-img> -->
          <b-img class="itable-userheader" :src="data.item.header"></b-img>
          <span class="itable-nikename">{{data.item.nikename}}</span>
        </div>
      </template>

      <template #cell(price)="data">
        <div class="itable-cell-type2 itable-cell-type3 itable-cell-type4">
          <div class="icell-up">
            <img class="ieth_logo" src="../../assets/imgs/eth.png"/>
            <span class="itable-nikename">{{data.item.price}}</span>
          </div>
          <div class="icell-down"></div>
        </div>
      </template>

      <template #cell(progress)="data">
        <div class="itable-cell-type2 itable-cell-type4">
          <div class="icell-up">
            <span class="itable-nikename">{{data.item.sell}}/{{data.item.total}}</span>
          </div>
          <div class="icell-down progress-width60">
            <b-progress :value="data.item.progress" variant="primary" class="iprogress"></b-progress>
          </div>
        </div>
      </template>

      <template #cell(saleend)="data">
        <div class="itable-cell-type2 itable-cell-type4">
          <div class="icell-up">
            <span class="itable-nikename">{{data.item.saleenddate}}</span>
          </div>
          <div class="icell-down">{{data.item.saleendtime}}</div>
        </div>
      </template>

      <template #cell(luckyfellow)="data">
        <div class="itable-cell-type2 itable-cell-type3 itable-cell-type4">
          <div class="icell-up">
            <span class="itable-nikename">{{data.item.luckyfellow}}</span>
          </div>
          <div class="icell-down"></div>
        </div>
      </template>

      <template #cell(reword)="data">

        <div class="itable-cell-type1" v-if="data.item.prizetype==1">
          <b-img class="itable-prize-img" src="img/nft/seal-nft.png"></b-img>
        </div>

        <div class="itable-cell-type1" v-if="data.item.prizetype==2">
          <b-img class="itable-prize-img" src="img/nft/eth-1.png"></b-img>
        </div>

        <div class="itable-cell-type1" v-if="data.item.prizetype==3">
          <b-img class="itable-prize-img" src="img/nft/eth-2.png"></b-img>
        </div>

        <div class="itable-cell-type2" v-if="data.item.prizetype==0">
          <div class="icell-up">
            <span class="itable-nikename">{{data.item.reword}} </span>
          </div>
          <div class="icell-down">{{data.item.rewordcontent}}</div>
        </div>
      </template>

    </b-table>


    <template v-if="items.length == 0">
      <div class="inodata">
        <img src="../../assets/imgs/nodata.png" class="inodata-img" />
      </div>
    </template>

    <div class="ipages-contain">
      <b-button variant="outline-primary" disabled class="ipages-btn">
        <b-icon icon="chevron-left"></b-icon>
        <span>1-50  </span>
      </b-button>
      <b-button variant="outline-primary" class="ipages-btn">
        <span>  51-100</span>
        <b-icon icon="chevron-right"></b-icon>
      </b-button>
    </div>

  </div>
</template>

<script>
  import date from '../../util/date.js'
  export default {
    name:'exploreFindLists',
    data() {
      return {
        fields: [
          { key: 'nikename', label: 'NFTs', thClass:'ith'},
          { key: 'price', label: this.$t("page.table_th_price"), thClass:'ith' },
          { key: 'progress', label: this.$t("page.table_th_progress"), thClass:'ith' },
          { key: 'saleend', label: this.$t("page.table_th_saleend"), formatter(value, item, index){}, thClass:'ith'},
          { key: 'luckyfellow', label: this.$t("page.table_th_luckyfellow"), thClass:'ith'},
          { key: 'reword', label: this.$t("page.table_th_prize"), thClass:'ith'}],
        items: [
          {index:1, header:'img/user/3.jpg', nikename:'Meixi', price:'0.1', progress:'90', total:'100', sell:'90', saleend:'2022-03-18 12:01:31', saleenddate:'April 11, 2022', saleendtime:'16:23:02', luckyfellow:'0x1e23***3179',reword:'NFT', rewordcontent:'Ethereum', prizetype:'1'},
          {index:1, header:'img/user/4.jpg', nikename:'Meixi', price:'0.28', progress:'10', total:'100', sell:'10', saleend:'2022-03-01 13:21:31', saleenddate:'April 11, 2022', saleendtime:'16:23:02',luckyfellow:'0x3e21***1839',reword:'NFT', rewordcontent:'Ethereum', prizetype:'1'},
          {index:1, header:'img/user/5.jpg', nikename:'Meixi', price:'1', progress:'20', total:'100', sell:'20', saleend:'2022-03-01 11:43:11', saleenddate:'April 11, 2022', saleendtime:'16:23:02',luckyfellow:'0x2a11***1009',reword:'veOPH', rewordcontent:'Ethereum', prizetype:'3'},

          {index:1, header:'img/user/6.jpg', nikename:'Meixi', price:'2', progress:'30', total:'100', sell:'30', saleend:'2022-03-01 09:10:11',saleenddate:'April 11, 2022', saleendtime:'16:23:02', luckyfellow:'0x3e31***2871',reword:'NFT', rewordcontent:'Ethereum', prizetype:'2'},
          {index:1, header:'img/user/7.jpg', nikename:'Meixi', price:'1.28', progress:'50', total:'200', sell:'50', saleend:'2022-03-01 09:10:11', saleenddate:'April 11, 2022', saleendtime:'16:23:02', luckyfellow:'0x4e11***2379',reword:'veOPH', rewordcontent:'Ethereum', prizetype:'3'},
          {index:1, header:'img/user/8.jpg', nikename:'Meixi', price:'1.08', progress:'90', total:'100', sell:'90', saleend:'2022-03-18  11:11:11', saleenddate:'April 11, 2022', saleendtime:'16:23:02', luckyfellow:'0x3111***1879',reword:'veOPH', rewordcontent:'Ethereum', prizetype:'1'},

         /* {index:1, header:'img/user/9.jpg', nikename:'Meixi', price:'0.2', progress:'90', total:'100', sell:'90', saleend:'2022-03-18  11:11:11',saleenddate:'April 11, 2022', saleendtime:'16:23:02', luckyfellow:'0x3213***1872',reword:'veOPH', rewordcontent:'Ethereum'},
          {index:1, header:'img/user/10.jpg', nikename:'Meixi', price:'0.8', progress:'30', total:'100', sell:'30', saleend:'2022-03-18  11:11:11', saleenddate:'April 11, 2022', saleendtime:'16:23:02',luckyfellow:'0x2362***3839',reword:'NFT', rewordcontent:'Ethereum'},
          {index:1, header:'img/user/1.jpg', nikename:'Meixi', price:'0.28', progress:'60', total:'100', sell:'60', saleend:'2022-03-18  11:11:11', saleenddate:'April 11, 2022', saleendtime:'16:23:02', luckyfellow:'0x2e1f***a839',reword:'veOPH', rewordcontent:'Ethereum'},

          {index:1, header:'img/user/2.jpg', nikename:'Meixi', price:'2', progress:'100', total:'200', sell:'100', saleend:'2022-03-18  11:11:11', saleenddate:'April 11, 2022', saleendtime:'16:23:02', luckyfellow:'0x1e21***d872',reword:'veOPH', rewordcontent:'Ethereum'},
          {index:1, header:'img/user/3.jpg', nikename:'Meixi', price:'1', progress:'80', total:'100', sell:'80', saleend:'2022-03-18  11:11:11', saleenddate:'April 11, 2022', saleendtime:'16:23:02', luckyfellow:'0x5e31***a479',reword:'veOPH', rewordcontent:'Ethereum'},
          {index:1, header:'img/user/4.jpg', nikename:'Meixi', price:'1.5', progress:'90', total:'100', sell:'90', saleend:'2022-03-18  11:11:11', saleenddate:'April 11, 2022', saleendtime:'16:23:02',luckyfellow:'0x1a31***1272',reword:'NFT', rewordcontent:'Ethereum'},

          {index:1, header:'img/user/5.jpg', nikename:'Meixi', price:'0.02', progress:'20', total:'100', sell:'20', saleend:'2022-03-18  11:11:11',saleenddate:'April 11, 2022', saleendtime:'16:23:02', luckyfellow:'0x3c1d***ff79',reword:'NFT', rewordcontent:'Ethereum'},
          {index:1, header:'img/user/6.jpg', nikename:'Meixi', price:'0.05', progress:'30', total:'100', sell:'30', saleend:'2022-03-18  11:11:11', saleenddate:'April 11, 2022', saleendtime:'16:23:02',luckyfellow:'0x7811***3e79',reword:'veOPH', rewordcontent:'Ethereum'},
          {index:1, header:'img/user/7.jpg', nikename:'Meixi', price:'0.5', progress:'50', total:'100', sell:'50', saleend:'2022-03-18  11:11:11', saleenddate:'April 11, 2022', saleendtime:'16:23:02', luckyfellow:'0x9121***e871',reword:'veOPH', rewordcontent:'Ethereum'},

          {index:1, header:'img/user/8.jpg', nikename:'Meixi', price:'0.6', progress:'50', total:'100', sell:'50', saleend:'2022-03-18  11:11:11', saleenddate:'April 11, 2022', saleendtime:'16:23:02',luckyfellow:'0x1a12***2873',reword:'veOPH', rewordcontent:'Ethereum'},
          {index:1, header:'img/user/9.jpg', nikename:'Meixi', price:'0.1', progress:'80', total:'100', sell:'80', saleend:'2022-03-18  11:11:11', saleenddate:'April 11, 2022', saleendtime:'16:23:02', luckyfellow:'0xcd11***187d',reword:'veOPH', rewordcontent:'Ethereum'},
          {index:1, header:'img/user/3.jpg', nikename:'Meixi', price:'0.1', progress:'40', total:'100', sell:'40', saleend:'2022-03-18  11:11:11', saleenddate:'April 11, 2022', saleendtime:'16:23:02', luckyfellow:'0x2f12***3e82',reword:'veOPH', rewordcontent:'Ethereum'},
 */


        ]
      }
    },created(){

    },methods: {
      rowclicked() {}
    },
  }
</script>

<style scoped>
  .iprogress {
    width: 8.3333rem;
    height: 1.6666rem;
    border-radius: 0.8333rem;
    background: #505050;
  }
  
  .iprogress .iprogress-inner {
    min-width: 1.6666rem;
    height: 1.6666rem;
    border-radius: 0.8333rem;
    text-align: center;
  }
  .iprogress .iprogress-value{
   width: 8.3333rem;
   height: 1.6666rem;
    line-height: 1.6666rem;
    position: absolute;
    font-size: 1.1111rem;
    /* font-family: OpenSans-Medium, OpenSans; */
    font-weight: 500;
    margin-top: -1.6666rem;
    margin-left: 0.4444rem;
    color: #1C212B;
  }
</style>
