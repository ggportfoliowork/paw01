<template>
  <vue-cropper
    ref="cropper"
    :guides="true"
    :view-mode="2"
    drag-mode="crop"
    :auto-crop-area="0.5"
    :min-container-width="90"
    :min-container-height="90"
    :background="true"
    :rotatable="true"
    :src="imgSrc"
    alt="Source Image"
    :img-style="{ width: '400px', 'height': '300px' }"
    :cropmove="cropImage">
  </vue-cropper>
</template>

<script>

    import VueCropper from 'vue-cropperjs'

    export default {
        created() {
          this.$bus.$on('set-pet-photo', () => {
            this.$bus.$emit('set-photo-thumbnail', {base64: this.cropImg})
          })
        },
        beforeDestroy() {
          this.$bus.$off('set-pet-photo')
        },
        components: {
          VueCropper
        },
        computed: {},
        data() {
            return {
              cropImg: null,
            }
        },
        methods: {
          cropImage () {
            this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
          },
        },
        mounted() {

        },
        props: ['imgSrc']
    }


</script>

<style>

</style>
