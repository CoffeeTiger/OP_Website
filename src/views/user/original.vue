<template>
  <div class="irow">
    <!-- <div class="ifind-area">
      <b-form class="iform-find">
        <b-row class="ifind-panel">
          <b-col sm="6" lg="4">
            <b-form-input v-model="form.search" placeholder="Search..." size="lg" class="iform-control-lg"></b-form-input>
          </b-col>
          <b-col sm="6" lg="3">
            <b-form-group id="input-group-3" label-for="input-3" size="lg">
              <b-form-select id="input-3" v-model="form.sigle" :options="sigles" required size="lg" variant="primary" class="iform-control-lg"></b-form-select>
            </b-form-group>
          </b-col>
          <b-col sm="6" lg="3">
            <b-form-group id="input-group-4" label-for="input-4" size="lg">
              <b-form-select id="input-4" v-model="form.recive" :options="recives" required size="lg" variant="primary" class="iform-control-lg"></b-form-select>
            </b-form-group>
          </b-col>
          <b-col sm="6" lg="2" class="ibtns-sort">
            <b-button-group size="lg">
              <b-button variant="white" @click="listSHow(3)">
                <b-icon icon="grid-fill" variant="primary"></b-icon>
              </b-button>
              <b-button variant="white" @click="listSHow(4)">
                <b-icon icon="grid3x3-gap-fill" variant="primary"></b-icon>
              </b-button>
            </b-button-group>
          </b-col>
        </b-row>
      </b-form>
    </div> -->

    <div class="ifind-lists">
      <profileImgListThree></profileImgListThree>
      <!-- <template v-if="listshow==3">
        <profileImgListThree></profileImgListThree>
      </template>
      <template v-else>
        <profileImgListFour></profileImgListFour>
      </template> -->
    </div>

  </div>
</template>

<script>
  /* import profileImgListFour from '../../components/user/profileImgListFour.vue' */
  import profileImgListThree from '../../components/user/profileImgListThree.vue'
  export default {
    name: 'original',
    components: {
      profileImgListThree
    },
    data() {
      return {
        listshow:'3',
        form: {
          search: '',
          sigle: null,
          recive: null
        },
        sigles: [{
          text: ' Signle Items',
          value: null
        }, {
          text: 'sigle One',
          value: 'sigle1'
        }, {
          text: 'sigle two',
          value: 'sigle2'
        }],
        recives: [{
          text: ' Recently Receiived',
          value: null
        }, {
          text: 'recive One',
          value: 'recive1'
        }, {
          text: 'recive two',
          value: 'recive2'
        }],
      }
    },methods: {
      listSHow(v) {
        this.listshow = v
      }
    },
  }
</script>

<style>
  @import url("../../assets/scss/com.css");

  .iprofile-search {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .ibtns-sort {
    text-align: right;
  }


</style>
