<template>
  <div class="icontainer-subpage1">

    <div class="imsg-title color_yellow">Notification</div>
    <div class="imessages bg_lightgray">

      <div class="imessage">
        <img src="../../assets/imgs/message.svg" class="imsg-img" />
        <div class="icontent">
          <div class="ititle">Jan. 29,2022 11:34</div>
          <div class="iinfo">OIP-94: Interim Ranged Stability Policy Levers2 days ago Summary: Grant Policy Authority
            to: Use inverse bonds above backing </div>
        </div>
      </div>

      <div class="imessage">
        <img src="../../assets/imgs/message.svg" class="imsg-img" />
        <div class="icontent">
          <div class="ititle">Jan. 29,2022 11:34</div>
          <div class="iinfo">OIP-94: Interim Ranged Stability Policy Levers2 days ago Summary: Grant Policy Authority
            to: Use inverse bonds above backing </div>
        </div>
      </div>

      <div class="imessage">
        <img src="../../assets/imgs/message.svg" class="imsg-img" />
        <div class="icontent">
          <div class="ititle">Jan. 29,2022 11:34</div>
          <div class="iinfo">OIP-94: Interim Ranged Stability Policy Levers2 days ago Summary: Grant Policy Authority
            to: Use inverse bonds above backing </div>
        </div>
      </div>

      <div class="imessage">
        <img src="../../assets/imgs/message.svg" class="imsg-img" />
        <div class="icontent">
          <div class="ititle">Jan. 29,2022 11:34</div>
          <div class="iinfo">OIP-94: Interim Ranged Stability Policy Levers2 days ago Summary: Grant Policy Authority
            to: Use inverse bonds above backing </div>
        </div>
      </div>

      <div class="imessage">
        <img src="../../assets/imgs/message.svg" class="imsg-img" />
        <div class="icontent">
          <div class="ititle">Jan. 29,2022 11:34</div>
          <div class="iinfo">OIP-94: Interim Ranged Stability Policy Levers2 days ago Summary: Grant Policy Authority
            to: Use inverse bonds above backing </div>
        </div>
      </div>

      <div class="imessage">
        <img src="../../assets/imgs/message.svg" class="imsg-img" />
        <div class="icontent">
          <div class="ititle">Jan. 29,2022 11:34</div>
          <div class="iinfo">OIP-94: Interim Ranged Stability Policy Levers2 days ago Summary: Grant Policy Authority
            to: Use inverse bonds above backing </div>
        </div>
      </div>

      <div class="imessage">
        <img src="../../assets/imgs/message.svg" class="imsg-img" />
        <div class="icontent">
          <div class="ititle">Jan. 29,2022 11:34</div>
          <div class="iinfo">OIP-94: Interim Ranged Stability Policy Levers2 days ago Summary: Grant Policy Authority
            to: Use inverse bonds above backing </div>
        </div>
      </div>

      <div class="ipage-navig"></div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'message',
    data() {
      return {
        setactive: 1,
      }
    },
    methods: {},
  }
</script>

<style scope>
  .icontainer-subpage1 {
    width: 55.5555rem;
    margin: 0 auto;
    padding: 1.9rem 0;
  }

  .imsg-title {
    height: 2.8333rem;
    line-height: 2.8333rem;
    margin: 4.1667rem 0 2rem;
    font-size: 2.5555rem;
    font-weight: 500;
    font-family: Poppins-Medium, Poppins;
  }

  .imessages {
    width: 100%;
    padding: 0 2rem;
    min-height: 9.6667rem;
    border-radius: 0.8889rem;
    border: 0.1111rem solid #3C3C3C;
    overflow: hidden;
  }

  .imessage {
    width: 100%;
    height: 9.6667rem;
    padding: 1.6667rem 0;
    display: flex;
    justify-content: space-between;
   /* border-bottom: 0.1111rem solid #3F4142; */
  }

  .imessage:hover {
    opacity: 0.9;
    /* border-bottom: 0.1111rem solid #505050; */
    background-color: #434343;
    transition: all .2s ease;
  }
 /* .itable tr:hover {
    background-color: #212529;
    transition: all ease .1s;
  }

  .itable tr:active {
    background-color: #212529;
    transition: all ease .1s;
  } */

  .imessage .imsg-img {
    width: 2.7778rem;
    height: 2.7778rem;
    margin-top: 0.3889rem;
    margin-right: 1.5556rem;
  }

  .imessage .icontent {
    font-size: 1.3333rem;
    font-weight: 300;
    color: #979797;
  }

  .imessage .icontent .ititle {
    width: 100%;
    height: 1.8333rem;
    line-height: 1.8333rem;
    margin-bottom: 0.5556rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .imessage .icontent .iinfo {
    width: 100%;
    height: 3.9444rem;
    line-height: 1.9444rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ipage-navig {
    width: 100%;
    height: 3.5556rem;
  }
</style>
