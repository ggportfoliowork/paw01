<template>
  <vue-cropper
    ref="cropper"
    :src="imageUrl"
    alt="Source Image"
    :cropmove="cropImage"
    :guides="true"
    :preserve-size="true"
    :keep-aspect="true"
    :view-mode="2"
    drag-mode="crop"
    :auto-crop-area="0.5"
    :min-container-width="400"
    :min-container-height="300"
    :cropped-width="300"
    :canvas-width="400"
    :canvas-height="300"
    :cropped-height="100"
    :width="400"
    :height="300"
    :rounded="true"
    :background="true"
    :rotatable="false"
  />
</template>

<script>
  import VueCropper from 'vue-cropperjs';

  export default {
        name: "photo-crop-form",
        mounted() {
          let vm = this
          this.$bus.$on('confirm-crop', function(){
            vm.confirmCrop()
          })
        },
        data() {
          return {
            cropImg: null,
          }
        },
        components: {
          VueCropper
        },
        methods: {
          cropImage() {
            this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
          },
          confirmCrop() {
            var byteString = atob(this.cropImg.split(',')[1]);
            var ab = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(ab);
            for (var i = 0; i < byteString.length; i++) {
              ia[i] = byteString.charCodeAt(i);
            }
            let image = new Blob([ab], { type: 'image/jpeg' });
            this.$bus.$emit('submit-photos-form', {image: image})
          }
        },
        watch: {
          imageUrl(val) {
            if (val !== null) {
              this.bindImage(val)
            }
          }
        },
        props: ['imageUrl']
    }
</script>

<style scoped>

</style>
