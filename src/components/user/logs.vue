<template>
  <div>
    <div class="ilogs-contain">
      <div class="ilogs-left">
        <img  src="../../assets/imgs/detail-coph.png" class="ilog-img" v-if="imgType=='coph'"/>
        <img  src="../../assets/imgs/detail-oph.png" class="ilog-img" v-if="imgType=='oph'"/>
        <img  src="../../assets/imgs/detail-veoph.png" class="ilog-img" v-if="imgType=='veoph'"/>
        <div class="ititle"><span class="ivtype">{{vType}}</span><br />{{pType}}</div>
      </div>
      <div class="ilogs-right">
        <div class="ivalue">{{pValue}}</div>
        <template v-if="redirectPath==''">
          <a href="#"><img src="../../assets/imgs/more.svg" class="imore-img imore-img-no"/></a>
        </template>
        <template v-else>
          <a :href="redirectPath" target="_blank" ><img src="../../assets/imgs/more.svg" class="imore-img"/></a>
        </template>
      </div>
    </div>

  </div>
</template>

<script>
  export default{
    name:'logs'
    ,data() {
      return{
        redirect: 'https://etherscan.io/address/0xf842765b20B817D59c90e0faC013e3D37a66697b'
      }
    },props:{
      imgType: {
        type: String,
        default:'oph'
      },
      vType: {
        type: String,
        default:'OPH'
      },
      pType: {
        type: String,
        default:'Stake'
      },
      pValue: {
        type: String,
        default:'0.00'
      },
      redirectPath: {
        type: String,
        default:''
      },
    },methods:{
    }
  }
</script>

<style scope>
.ilogs-contain{
  width: 100%;
  height: 7.2222rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1111rem solid #3F4142;
}

.ilogs-contain:hover{
  opacity: 0.8;
  border-bottom: 0.1111rem solid #505050;
  transition: all .2s ease;
}
.ilogs-contain .ilogs-left{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.ilogs-contain .ilogs-left .ilog-img{
  width: 2.5556rem;
  height: 2.6111rem;
  margin-right: 1.6667rem;
}
.ilogs-contain .ilogs-left .ititle{
  line-height: 2rem;
  font-size: 1.4444rem;
  font-weight: 300;
  color: #979797;
}
.ilogs-contain .ilogs-left .ititle .ivtype{
  line-height: 2.3889rem;
  font-size: 1.6667rem;
  font-family: Poppins-Medium, Poppins;
  font-weight: 400;
  color: #FFFFFF;
}
.ilogs-contain .ilogs-right{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.ilogs-contain .ilogs-right .ivalue{
  font-size: 1.6667rem;
  font-family: Poppins-Medium, Poppins;
  font-weight: 400;
}
.ilogs-contain .ilogs-right .imore-img{
  width: 0.3333rem;
  height: 1.3333rem;
  margin-left: 1rem;
}
.ilogs-contain .ilogs-right .imore-img-no{
  opacity: 0.5;
}

</style>
