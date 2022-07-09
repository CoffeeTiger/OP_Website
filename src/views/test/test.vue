<template>
  <div>
    <!-- <b-button @click="makeToast()">Show Toast</b-button>
    <b-button @click="makeToast(true)">Show Toast (appended)</b-button>
    <b-button @click="toast('hhh', 'default')">Show Toast</b-button>
    <b-button @click="toast2()">Show Toast</b-button>

    <b-button @click="dateTest()"> dateTest </b-button>
    -->
<br />
    <br />
    <br />
    <br />
    <br />

    <!-- <vue-recaptcha ref="recaptcha" @verify="onVerify" @expired="onExpired"
      sitekey="6Lc7i18gAAAAAHXDQiBsIzx7y1PG6YY1Fd9kd8ZG">
      <button class="ibtn">Click me</button>
    </vue-recaptcha>
    <br /> -->


    <vue-recaptcha ref="recaptcha" @verify="onVerify" @expired="onExpired" sitekey="6LeHfl8gAAAAAFH26t3IKu6j9a6naZusSdAJQTOQ"></vue-recaptcha>

  </div>
</template>

<script>
  import API from '../../util/network.js'

  import date from '../../util/date.js'

  import {
    VueRecaptcha
  } from 'vue-recaptcha';
  export default {
    name: 'test',
    components: {
      'vue-recaptcha': VueRecaptcha
    },
    data() {
      return {
        key: '',
        toastCount: 0,
        names: ''
      }
    },
    watch: {
      names: function(val, oldVal) {
        console.log('new: %s, old: %s', val, oldVal)
      }
      /* names: {
        handler(newVal, oldVal) {
          console.info('names newVal=' + newVal + ';  oldVal=' + oldVal)
        },
        deep: true,
        immediate: true,
      }, */
    },
    methods: {
      onEvent() {
        this.$refs.recaptcha.execute();
      },
      onSubmit: function() {
        this.$refs.invisibleRecaptcha.execute()
      },
      onVerify: function(response) {
        console.log('token: ' + response)
        //add ajax send token to service
      },
      onExpired: function() {
        console.log('Expired')
      },
      resetRecaptcha() {
        this.$refs.recaptcha.reset()
      },


      makeToast() {
        this.toastCount++
        this.$bvToast.toast(`This is toast number ${this.toastCount}`, {
          title: 'hint',
          toaster: 'b-toaster-bottom-right',
          autoHideDelay: 5000
        })
      },
      toast(content, variant) {
        this.$bvToast.toast(content, {
          title: 'hint',
          variant: variant,
          toaster: 'b-toaster-bottom-right',
          autoHideDelay: 5000
        })
      },
      toast2() {
        API.iToast(this, 'hahha', 'default')
      },

      dateTest() {
        var s = '2020-10-09 09:10:01'
        var f = date.formatDate(new Date(s), 'MMMM d, yyyy<TZ>HH:mm:ss aaa');
        console.info(f)

        console.info(date.getUSDateString(s))
      }
    },
  }
</script>

<style>
</style>
