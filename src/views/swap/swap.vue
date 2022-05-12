<template>
  <div class="icontainer-homepage">
    <div class="iswap-contain">
      <div class="iswap-title"></div>
      <div class="iswap-panel bg_lightgray">
        <div class="iswap-header">
          <div class="ititle color_yellow">Swap</div>
          <img src="../../assets/imgs/set.svg" class="iset"/>
        </div>

        <div class="iswap-body bg_darkgray">

          <div class="icell imargin-bottom-24">
            <div class="ivalue">
              <div class="ivalue-eth">0.001</div>
              <div class="ivalue-dol">$0.242306</div>
            </div>
            <div class="itype">
              <div class="ivalue-eth ivalue-eth-select">
                <div class="itype-select">
                  <select class="iinput ifrom-input ifrom-select" ref="blockchain">
                  	<option value="Eth">Eth</option>
                  </select>
                </div>
              </div>
              <div class="ivalue-dol">Balance: 0.00094</div>
            </div>
          </div>

          <div class="icell imargin-bottom-24">
            <div class="ivalue">
              <div class="ivalue-eth">0.001</div>
              <div class="ivalue-dol">$0.242306</div>
            </div>
            <div class="itype">
              <div class="ivalue-eth ivalue-eth-select">
                <div class="itype-select">
                  <select class="iinput ifrom-input ifrom-select" ref="blockchain">
                  	<option value="Eth">Eth</option>
                  </select>
                </div>
              </div>
              <div class="ivalue-dol">Balance: 0.00094</div>
            </div>
          </div>

          <div class="icell-equal">
            <img src="../../assets/imgs/swap-float.svg" class="iswap-float"/>
          </div>

          <div class="iswap-unit">
            <div class="iunit">
              <img src="../../assets/imgs/help-icon.svg" class="ihelp"/>
              <span class="iunit-conversions color_yellow">1 OPH=0.0004601 ETH</span>
              <span class="inuit-dol">($1.0983)</span>
            </div>

            <div class="iunit-select">
              <select class="iinput ifrom-input ifrom-select" ref="blockchain">
              	<option value="Eth">Eth</option>
              </select>
            </div>
          </div>

        </div>

      </div>
    </div>

    <div class="ibtn ibtn-swap color_black">Swap</div>

  </div>
</template>

<script>
  export default{
    name:'swap'
  }
</script>

<style scoped>
.iswap-contain{
  width: 66.6666rem;
  max-width: 1200px;
  margin:0 auto;
}

.iswap-title{
  width: 100%;
  height: 6.1111rem;
}

.iswap-panel{
  width: 46rem;
  border-radius: 0.8888rem;
  border: 0.1111rem solid #3C3C3C;
  margin: 0 auto;
  overflow: hidden;
}
.iswap-panel .iswap-header{
  width: 100%;
  height: 4.8888rem;
  padding: 0 1.7777rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.iswap-panel .iswap-header .ititle{
  height: 4.8888rem;
  line-height: 4.8888rem;
  font-size: 1.7777rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
}
.iswap-panel .iswap-header .iset{
  width: 1.7777rem;
  height: 1.7777rem;
}
.iswap-panel .iswap-header .iset:hover{
  opacity: 0.6;
}

.iswap-panel .iswap-body{
  width: 100%;
  padding: 1.7777rem;
}

.iswap-panel .iswap-body .icell{
  width: 100%;
  height: 7.4444rem;
  padding: 1rem 1.6666rem;
  background: #414242;
  border-radius: 0.8888rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.iswap-panel .iswap-body .icell .ivalue{
  width: 19.4444rem;
}
.iswap-panel .iswap-body .icell .itype{
  width: 19.4444rem;
  text-align: right;
}
.iswap-panel .iswap-body .icell .ivalue-eth{
  width: 100%;
  height: 3.3333rem;
  line-height: 3.3333rem;
  font-size: 2rem;
  color: #FFFFFF;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.iswap-panel .iswap-body .icell .ivalue-eth-select{
  display: flex;
  justify-content: flex-end;
}
.iswap-panel .iswap-body .icell .itype-select{
  width: 9.1111rem;
  height: 2.8888rem;
  line-height: 2.8888rem;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
  background: #636464;
  border-radius: 1.4444rem;
}
.iswap-panel .iswap-body .icell .ivalue-dol {
  line-height: 1.8333rem;
  font-size: 1.3333rem;
  color: #979797;
  margin-top: 0.7777rem;
}
.iswap-panel .iswap-body .iswap-unit{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.3333rem;

  line-height: 1.9444rem;
  font-size: 1.3333rem;
  font-weight: 400;
}
.iswap-panel .iswap-body .iswap-unit .iunit{
  display: flex;
  align-items: center;
}
.iswap-panel .iswap-body .iswap-unit .ihelp{
  width: 1rem;
  height: 1rem;
  margin-right: 0.4444rem;
}
.iswap-panel .iswap-body .iswap-unit .inuit-dol{
  color: #979797;
}

.icell-equal{
  width: 2.6666rem;
  height: 2.6666rem;
  overflow: hidden;
  position: absolute;
  margin-top: -10.7777rem;
  margin-left: 20.3333rem;
}
.icell-equal .iswap-float{
  width: 100%;
  height: 100%;
}

.ifrom-input {
	width: -webkit-calc(100% - 1.2rem);
	height: 2.8888rem;
	line-height: 2.8888rem;
	margin: 0 0.6rem;
	background-color: #FFFFFF00;
	border: 0;
	font-size: 0.64rem;
	font-weight: 400;
	color: #979797;
	font-family: Poppins-Light, Poppins !important;
}

/* .ifrom-select {
	background: url("../../assets/imgs/arrow-down.png") no-repeat scroll right center transparent;
	background-size: 0.34rem 0.2rem;
} */

.ibtn-swap{
  width: 21.2777rem;
  height: 4.4444rem;
  line-height: 4.4444rem;
  border-radius: 2.2222rem;
  margin: 6rem auto;
  font-size: 1.5555rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
}

</style>
