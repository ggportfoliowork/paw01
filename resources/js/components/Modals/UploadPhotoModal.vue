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

  import PhotoCropForm from '../Forms/Photos/PhotoCropForm'
  import PhotoUploadForm from '../Forms/Photos/PhotoUploadForm'

  export default {
    created() {
      let vm = this;
      let dialog = 'show-dialog-photo-upload';
      this.$bus.$on(dialog, function(args) {
        vm.dialogVisible = true
      });
      this.$bus.$on('set-image', function(imageUrl){
        vm.imageUrl = imageUrl
      })
      this.$bus.$on('submit-photos-form', function(image){
        vm.submitPhotosForm(image.image)
      })
    },
    mounted() {

    },
    beforeDestroy() {
      this.$bus.$off('show-dialog-photo-upload')
    },
    computed: {
      activeComponent() {
        if(this.imageUrl == null) {
          return PhotoUploadForm
        } else {
          return PhotoCropForm
        }
      }
    },
    data() {
      return {
        title: 'Upload Photo',
        dialogVisible: false,
        imageUrl: null,
        isSubmitting: false,
      }
    },
    methods: {
      confirmCroppedPhoto() {
        this.$bus.$emit('confirm-crop')
      },
      submitPhotosForm(imageFile) {
        this.isSubmitting = true
        this.$http.post('/photos/crop', {
          file: imageFile
        })
          .then(response => {
            console.log(response.data)
            this.isSubmitting = false
          })

        //this.$store.dispatch('SET_USER_PROFILE_PHOTO', res.data.fileName)
      }
    },
    watch: {
      dialogVisiable(val) {
        if(!val) {
          this.destroy()
        }
      }
    },
    props: [],
    components: {},

  }
</script>

<style lang="scss" scoped>

</style>
