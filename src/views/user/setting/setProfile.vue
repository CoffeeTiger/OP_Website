<template>
  <div>
    <div class="isetting-profile">
      <div class="title">{{$t('page.setting')}} <b-icon icon="chevron-compact-right"></b-icon> {{$t('page.profile')}}</div>
      <div class="form-contain">
        <b-row>
          <b-col sm="12" md="8" lg="7">

            <b-form @submit="onSubmit">
              <b-form-group :label="$t('page.nickname')" label-for="input-1" class="iformgorup-setting">
                <b-form-input id="input-1" v-model="form.username" type="text" placeholder="Enter username">
                </b-form-input>
              </b-form-group>

              <b-form-group :label="$t('page.email')" label-for="input-2"
                description="We'll never share your email with anyone else." class="iformgorup-setting">
                <b-form-input id="input-2" v-model="form.email" type="email" placeholder="Enter email"></b-form-input>
              </b-form-group>

              <b-form-group :label="$t('page.bio')" label-for="input-3" class="iformgorup-setting">
                <b-form-textarea id="input-3" v-model="form.textarea" placeholder="Enter something..." rows="3"
                  max-rows="6"></b-form-textarea>
              </b-form-group>

              <b-input-group :label="$t('page.walletAddress')" label-for="input-4" class="iformgorup-setting">
                <b-form-input id="input-4" v-model="form.address" type="text" placeholder="Enter Wallet Address"
                  readonly></b-form-input>
                <b-input-group-append>
                  <b-button v-b-tooltip.hover title="Copy Wallet Address" variant="outline-primary"
                    @click="copyAddress">
                    <b-icon icon="files"></b-icon>
                  </b-button>
                </b-input-group-append>
              </b-input-group>

              <b-button type="submit" variant="primary" class="isetting-update">{{$t('page.update')}}</b-button>

            </b-form>

          </b-col>
          <b-col sm="12" md="4" lg="5">

            <b-row>
              <b-col>

                <div class="iuser-header" @click="showModal">
                  <div class="iuser-header-imgs">
                    <img :src="userheader" class="iuser-header-img" v-b-tooltip.hover title="Update the avatar" />
                  </div>
                  <div class="iuser-header-mask">
                    <b-icon icon="pencil-square" variant="primary" font-scale="1.6"></b-icon>
                  </div>
                </div>
                <div class="iuser-header-desc">{{$t('page.profileImage')}}</div>

                <b-modal ref="modal-1" @show="resetModal" @hidden="resetModal" hide-footer>
                  <b-row class="irow iuserheader-update">
                    <b-col xs="12" sm="8" lg="8">
                      <div class="iuserheader-update-simg">

                        <div class="cropper-content">
                          <div class="cropper-box">
                            <div class="cropper">
                              <vue-cropper ref="cropper" :img="option.img" :outputSize="option.outputSize"
                                :outputType="option.outputType" :info="option.info" :canScale="option.canScale"
                                :autoCrop="option.autoCrop" :autoCropWidth="option.autoCropWidth"
                                :autoCropHeight="option.autoCropHeight" :fixed="option.fixed"
                                :fixedNumber="option.fixedNumber" :full="option.full" :fixedBox="option.fixedBox"
                                :canMove="option.canMove" :canMoveBox="option.canMoveBox" :original="option.original"
                                :centerBox="option.centerBox" :height="option.height" :infoTrue="option.infoTrue"
                                :maxImgSize="option.maxImgSize" :enlarge="option.enlarge" :mode="option.mode"
                                @realTime="realTime" @imgLoad="imgLoad">
                              </vue-cropper>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-col>
                    <b-col xs="12" sm="4" lg="4">
                      <div class="iuserheader-update-timg">
                        <div class="show-preview">
                          <div :style="previews.div" class="preview">
                            <img :src="previews.url" :style="previews.img">
                          </div>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="12">
                      <div class="scope-btn">
                        <label class="btn iselect-img-btn" for="uploads">{{$t('page.selectImages')}}</label>
                        <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);"
                          accept="image/png, image/jpeg, image/gif, image/jpg, image/gif" @change="selectImg($event)">
                        <b-button variant="outline-primary" @click="changeScale(1)">+</b-button>
                        <b-button variant="outline-primary" @click="changeScale(-1)">-</b-button>
                        <b-button variant="outline-primary" @click="uploadImg('blob')">{{$t('page.upload')}}</b-button>
                      </div>
                    </b-col>
                  </b-row>
                </b-modal>

              </b-col>
            </b-row>
          </b-col>
        </b-row>

      </div>
    </div>
  </div>
</template>

<script>
  import api from '../../../util/network.js'
  import ebus from '../../../util/ebus.js'
  import {
    VueCropper
  } from 'vue-cropper'
  export default {
    name: 'setProfile',
    components: {
      VueCropper
    },
    data() {
      return {
        userheader: '',
        form: {
          email: '',
          username: '',
          textarea: '',
          address: ''
        },
        previews: {},
        option: {
          img: 'img/brand/userheader-mod.png',
          outputSize: 1,
          outputType: 'jpeg',
          info: true,
          canScale: true,
          autoCrop: true,
          autoCropWidth: 120,
          autoCropHeight: 120,
          fixed: true,
          fixedNumber: [1, 1],
          full: false,
          fixedBox: true,
          canMove: false,
          canMoveBox: true,
          original: false,
          centerBox: false,
          height: true,
          infoTrue: false,
          maxImgSize: 400,
          enlarge: 1,
          mode: '320px 320px'
        },
        modleCurrentPage: ''
      }
    },
    created() {
      let u = api.getStore('user')
      if (!(u == undefined || u == null || u == '')) {
        let _jsonStr = JSON.parse(u)
        this.userheader = _jsonStr.headImgUrl
        if (this.userheader == 'default') {
          this.userheader = 'img/brand/userheader-mod.png'
        }
        this.form.email = _jsonStr.email
        this.form.username = _jsonStr.nickName
        this.form.address = _jsonStr.address
      }
      this.init()
    },
    methods: {
      init(){
        let that = this
        let pars = JSON.stringify({})
        api.getAction('/logined/acc/getLoginAccInfo', pars, function(res) {
          api.log(res)
          if (res.code == 200) {
            that.form.username = res.result.nickName
            that.form.email = res.result.email
            that.form.textarea = res.result.bio
            that.userheader = res.result.headImgUrl
            if (that.userheader == 'default') {
              that.userheader = 'img/brand/userheader-mod.png'
            }
            api.setStore('user', JSON.stringify(res.result))
          } else {
            api.iToastServer(that, res.code, 'info')
          }
        })
      },
      showModal() {
        this.$refs['modal-1'].show()
      },
      resetModal() {
        /* console.info('resetModal 22') */
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {},
      hideModal() {
        this.$refs['modal-1'].hide()
      },
      onSubmit(event) {
        event.preventDefault()
        let that = this
        let pars = JSON.stringify({
          nickName: this.form.username,
          email: this.form.email,
          bio: this.form.textarea
        })
        api.postAction('/logined/acc/updateInfo', pars, function(res) {
          api.log(res)
          if (res.code == 200) {
            api.iToast(that, 'Update successful.', 'info')
            that.$router.go(-1)
          } else {
            api.iToast(that, 'Update failed.', 'info')
          }
        })
      },
      copyAddress() {
        this.$copyText(this.form.address).then(function(e) {}, function(e) {})
      },

      /* vue-cropper */
      imgLoad(msg) {},
      changeScale(num) {
        num = num || 1
        this.$refs.cropper.changeScale(num)
      },
      realTime(data) {
        this.previews = data
      },
      selectImg(e) {
        let file = e.target.files[0]
        if (!/\.(jpg|jpeg|png|JPG|PNG|gif|GIF)$/.test(e.target.value)) {
          api.iToast(this, 'Required file format: jpeg、jpg、png、gif', 'info')
          return false
        }
        let reader = new FileReader()
        reader.onload = (e) => {
          let data
          if (typeof e.target.result === 'object') {
            data = window.URL.createObjectURL(new Blob([e.target.result]))
          } else {
            data = e.target.result
          }
          this.option.img = data
        }
        /* base64 */
        reader.readAsDataURL(file)
      },
      uploadImg(type) {
        let that = this;
        /* this.hideModal() */
        /* this.userheader = 'img/brand/userheader.png' */
        if (type === 'blob') {
          this.$refs.cropper.getCropBlob(async (data) => {
            let formData = new FormData();
            formData.append('file', data, "DX.jpg")
            api.postAction('/logined/acc/uploadHeadImg', formData, function(res) {
              api.log(res)
              if (res.code == 200) {
                that.userheader = res.result
                api.setStore('userheader', res.result)
                ebus.$emit('emsg', 'refresh')
                that.hideModal()
              } else {
                api.iToastServer(that, res.code, 'info')
              }
            })
          })
        }

      },
    },
  }
</script>

<style scoped="scoped" lang="scss">
  @import url("../../../assets/scss/com.css");

  .isetting-profile .title {
    width: 100%;
    text-align: left;
    line-height: 3.84rem;
    background-color: #f7f8fc;
    padding: 0 1rem;
  }

  .isetting-profile .form-contain {
    width: 100%;
    padding: 3.84rem 1rem 0 1rem;
  }

  .iformgorup-setting {
    padding: 1rem 0;
  }

  .isetting-update {
    margin-top: 3.84rem;
  }

  .iuser-header {
    width: 6.4rem;
    height: 6.4rem;
    margin: 0 auto;
    text-align: center;
    position: relative;
  }

  .iuser-header .iuser-header-imgs {
    width: 6.4rem;
    height: 6.4rem;
    position: absolute;
  }

  .iuser-header .iuser-header-img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 3.2rem;
    background-color: #f0f0f0;
  }

  .iuser-header .iuser-header-mask {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 3.2rem;
    position: absolute;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .iuser-header:hover .iuser-header-img {
    opacity: 0.6;
  }

  .iuser-header:hover .iuser-header-mask {
    opacity: 0.7;
  }

  .iuser-header-desc {
    margin: 0.4rem auto;
    text-align: center;
  }

  .iuserheader-update-simg {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
  }

  .iuserheader-update-timg {
    width: 100%;
    display: flex;
    justify-content: center;
  }


  .cropper-content {
    display: flex;
    display: -webkit-flex;
    justify-content: flex-end;

    .cropper-box {
      flex: 1;
      width: 100%;

      .cropper {
        width: 300px;
        height: 300px;
      }
    }
  }

  .show-preview {
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    justify-content: center;

    .preview {
      overflow: hidden;
      border: 1px solid #F0F0F0;
      background: #cccccc;
      border-radius: 50%;
    }
  }

  .scope-btn {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .iselect-img-btn {
    margin-top: 0.5rem;
    border: 1px solid #6976fe;
    color: #6976fe;
  }
</style>
