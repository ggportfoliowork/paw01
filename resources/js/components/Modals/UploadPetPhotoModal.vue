<template>
  <el-dialog
    :visible.sync="dialogVisible"
    width="30"
    :close-on-click-modal="false"
    :title="title"
    top="4%">
    <span>
      <component :is="activeComponent" :imageUrl="imageUrl" />
    </span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="confirmCroppedPhoto()" v-loading="isSubmitting">Save</el-button>
    </span>
  </el-dialog>
</template>

<script type="text/babel">

  import PetPhotoCropForm from '../Forms/PetPhotos/PetPhotoCropForm'
  import PetPhotoUploadForm from '../Forms/PetPhotos/PetPhotoUploadForm'

  export default {
    created() {
      let vm = this;
      let dialog = 'show-dialog-pet-photo-upload';
      this.$bus.$on(dialog, function (args) {
        vm.dialogVisible = true
      });

      this.$bus.$on('set-photo-thumbnail', function(data){
        vm.addThumb(data)
      })

      this.$bus.$on('handle-preview', function(file){
        vm.$http.get(file.url,
          {
            responseType: 'arraybuffer',
            headers: {
              'Accept': '*/*',
              'Content-Type-Encoding': 'base64'
            }
          })
          .then(function(response){
            vm.imgSrc = vm.imageEncode(response.data)
          })
          .catch(function(error){
            console.error(error)
          })
      })
    },
    mounted() {

    },
    beforeDestroy() {
      this.$bus.$off('show-dialog-pet-photo-upload')
    },
    computed: {
      activeComponent() {
        if (!this.imgSrc) {
          return PetPhotoUploadForm
        } else {
          return PetPhotoCropForm
        }
      }
    },
    data() {
      return {
        title: 'Upload Photo',
        dialogVisible: false,
        imgSrc: false,
        isSubmitting: false,
      }
    },
    methods: {

      imageEncode(arrayBuffer) {
        let u8 = new Uint8Array(arrayBuffer)
        let b64encoded = btoa([].reduce.call(new Uint8Array(arrayBuffer),function(p,c){return p+String.fromCharCode(c)},''))
        let mimetype="image/jpeg"
        this.form = {photo: "data:"+mimetype+";base64,"+b64encoded}
        return "data:"+mimetype+";base64,"+b64encoded
      },

      addThumb(data) {
        this.form = {photo_thumb: data.base64}
      }



    },
    watch: {
      dialogVisible(val) {
        if(!val) {
          Object.assign(this.$data, this.$options.data())
        }
      }
    },
    props: [],
    components: {},

  }
</script>

<style lang="scss" scoped>

</style>
