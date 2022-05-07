<template>
  <div>

    <b-table responsive="sm"  :items="items" :fields="fields" caption-top hover @row-clicked="rowclicked" class="itable" empty-text="There are no records to show">

      <!-- <template #table-caption>
        <div class="ihome-list-caption">
          <div class="text-lg-left ihome-list-title">{{$t('page.list')}}</div>
          <div class="text-right imore" @click="more">{{$t('page.more')}} <b-icon icon="chevron-right" variant="Secondary"></b-icon> </div>
        </div>
      </template> -->

      <template #cell(nikename)="data">
        <div class="itable-cell-type1">
          <!-- <b-img class="itable-userheader" thumbnail rounded :src="data.item.header"></b-img> -->
          <span class="itable-index">{{data.item.index}}</span>
          <img  class="itable-userheader" :src="data.item.header"/>
          <span class="itable-nikename">{{data.item.nikename}}</span>
        </div>
      </template>

      <template #cell(price)="data">
        <div class="itable-cell-type2 itable-cell-type3">
          <div class="icell-up">
            <img class="ieth_logo" src="../../assets/imgs/eth.png"/>
            <span class="itable-nikename">{{data.item.price}}</span>
          </div>
          <div class="icell-down"></div>
        </div>
      </template>

      <template #cell(progress)="data">
        <div class="itable-cell-type2">
          <div class="icell-up">
            <span class="itable-nikename">{{data.item.sell}}/{{data.item.total}}</span>
          </div>
          <div class="icell-down progress-width60">
            <b-progress :value="data.item.progress" variant="primary" class="iprogress" ></b-progress>
          </div>
        </div>
      </template>

      <template #cell(saleend)="data">
        <div class="itable-cell-type2 ">
          <div class="icell-up">
            <span class="itable-nikename color-gray">{{data.item.saleenddate}}</span>
          </div>
          <div class="icell-down">{{data.item.saleendtime}}</div>
        </div>
      </template>

      <template #cell(prize)="data">

        <div class="itable-cell-type1" v-if="data.item.prizetype==1">
          <b-img class="itable-prize-img" src="img/nft/seal-nft.png"></b-img>
        </div>

        <div class="itable-cell-type1" v-if="data.item.prizetype==2">
          <b-img class="itable-prize-img" src="img/nft/eth-1.png"></b-img>
        </div>

        <div class="itable-cell-type1" v-if="data.item.prizetype==3">
          <b-img class="itable-prize-img" src="img/nft/eth-2.png"></b-img>
        </div>

        <div class="itable-cell-type2"  v-if="data.item.prizetype==0">
          <div class="icell-up">
            <span class="itable-nikename">{{data.item.prize}}</span>
          </div>
          <div class="icell-down">
            (Income)
          </div>
        </div>
      </template>

    </b-table>

  </div>
</template>

<script>
  import date from '../../util/date.js'
  export default {
    name:'homePublishLists',
    data() {
      return {
        fields: [
          { key: 'nikename', label: 'NFTs', thClass:'ith ith25'},
          { key: 'price', label: this.$t("page.table_th_price"), thClass:'ith ith15'},
          { key: 'progress', label: this.$t("page.table_th_progress"), thClass:'ith ith25'},
          { key: 'saleend', label: this.$t("page.table_th_saleend"), thClass:'ith ith25'},
          { key: 'prize', label: this.$t('page.table_th_prize'), thClass:'ith ith10'}],
        items: [
          {index:1, id:'nft000.jpg', header:'img/user/1.jpg', nikename:'Doodless', price:'0.1', progress:'14', total:'500', sell:'90', saleend:'2022-03-10 16:01:21', saleenddate:'April 11, 2022', saleendtime:'16:23:02', prize:'50%', prizetype:'1'},
          {index:2, id:'nft001.jpg', header:'img/user/2.jpg', nikename:'David', price:'1', progress:'90', total:'100', sell:'90', saleend:'2022-03-09 13:16:29', saleenddate:'March 11, 2022', saleendtime:'13:16:29', prize:'50%', prizetype:'1'},
          {index:3, id:'nft002.jpg',header:'img/user/3.jpg', nikename:'Zombio', price:'0.05', progress:'60', total:'1200', sell:'500', saleend:'2022-03-09 13:46:02', saleenddate:'March 11, 2022', saleendtime:'13:46:02', prize:'50%', prizetype:'2'},

          {index:4, id:'nft004.jpg',header:'img/user/4.jpg', nikename:'Wow Women', price:'0.2', progress:'40', total:'200', sell:'90', saleend:'2022-03-08 12:10:52', saleenddate:'March 12, 2022', saleendtime:'12:10:52', prize:'50%', prizetype:'2'},
          {index:5, id:'nft005.jpg', header:'img/user/5.jpg', nikename:'badman?', price:'0.18', progress:'90', total:'100', sell:'90', saleend:'2022-03-07 12:11:11', saleenddate:'March 13, 2022', saleendtime:'12:11:11', prize:'50%', prizetype:'3'},
          {index:6, id:'nft006.jpg', header:'img/user/6.jpg', nikename:'Bored...', price:'0.06', progress:'23', total:'500', sell:'190', saleend:'2022-03-07 12:01:16', saleenddate:'March 14, 2022', saleendtime:'12:01:16', prize:'50%', prizetype:'3'},

         /* {index:7, id:'nft006.jpg', header:'img/user/5.jpg', nikename:'liaos', price:'2', progress:'45', total:'200', sell:'90', saleend:'2022-03-07 12:01:03', saleenddate:'March 17, 2022', saleendtime:'12:01:16',  prize:'50%', prizetype:'0'},
          {index:8, id:'nft006.jpg',header:'img/user/6.jpg', nikename:'chalis', price:'0.1', progress:'90', total:'100', sell:'90', saleend:'2022-03-06 11:30:24', saleenddate:'March 18, 2022', saleendtime:'12:01:16', prize:'50%', prizetype:'0'},
          {index:9, id:'nft006.jpg', header:'img/user/7.jpg', nikename:'RTFKT', price:'1.8', progress:'25', total:'400', sell:'100', saleend:'2022-03-01 06:40:11',saleenddate:'March 20, 2022', saleendtime:'12:01:16',  prize:'50%', prizetype:'0'},

          {index:10, id:'nft006.jpg', header:'img/user/8.jpg', nikename:'aliba', price:'0.6', progress:'80', total:'100', sell:'80', saleend:'2022-03-01 12:31:36', saleenddate:'March 21, 2022', saleendtime:'12:01:16', prize:'50%', prizetype:'0'},
          {index:11, id:'nft006.jpg',header:'img/user/9.jpg', nikename:'Meixi', price:'0.02', progress:'93', total:'200', sell:'190', saleend:'2022-03-01 13:14:01', saleenddate:'March 21, 2022', saleendtime:'12:01:16',  prize:'50%', prizetype:'0'},
          {index:12, id:'nft006.jpg', header:'img/user/10.jpg', nikename:'liMei', price:'0.15', progress:'46', total:'500', sell:'180', saleend:'2022-03-01 16:42:21', saleenddate:'March 21, 2022', saleendtime:'12:01:16', prize:'50%', prizetype:'0' }, */


          /* {index:2, nikename:'Kara#123', price:'108', progress:'30/10', total:'100', sell:'90', saleend:'2021-10-01 11:11:11', prize:'3'},
          {index:3, nikename:'ENS#201', price:'108', progress:'50/200', total:'100', sell:'90', saleend:'2021-10-01 11:11:11', prize:'3'},
          {index:4, nikename:'Meixi007', price:'108', progress:'100/100', total:'100', sell:'90', saleend:'2021-10-01 11:11:11', prize:'4'},
          {index:5, nikename:'MeixiMeixiMeixiMeixiMeixiMeix', price:'108', total:'100', sell:'90', progress:'90/100', saleend:'2021-10-01 11:11:11', prize:'2'},
          {index:1, nikename:'Meixi', price:'108', progress:'70/100', total:'100', sell:'90', saleend:'2021-10-01 11:11:11', prize:'3'},
          {index:1, nikename:'Meixi', price:'108', progress:'9/100', total:'100', sell:'90',saleend:'2021-10-01 11:11:11', prize:'4'}, */
        ]
      }
    },created(){

    },methods: {
      rowclicked(item, index, event) {
        this.$router.push({name:'carouselTrade', params:{id: item.id}})
      },
      more(){
        this.$router.push({path:'/explorelist'})
      }
    },
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
</style>
