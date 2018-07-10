<template>
  <vue-croppie
    ref=croppieRef
    :enableOrientation="false"
    :mouseWheelZoom="false"
    :showZoomer="false"
    :viewport="{ width: 180, height: 180, type: 'circle' }"
    :boundary="{width: 300, height: 300}">
  </vue-croppie>
</template>

<script>
    export default {
        name: "photo-crop-form",
        mounted() {
          let vm = this

          this.$refs.croppieRef.bind({
            url: '/profile-pics/'+this.imageUrl.imageUrl
          })

          this.$bus.$on('confirm-crop', function(){
            vm.crop()
          })
        },
        data() {
          return {

          }
        },
        methods: {
          bindImage(url) {
            this.$refs.croppieRef.bind({
              url: '/profile-pics'+url,
            });
          },
          crop() {
            let vm = this
            this.$refs.croppieRef.result({
              type : 'canvas',
              format : 'jpeg',
              quality: '0.9',
              size: {
                width: 300,
                height: 300
              }
            }).then(image => {
              console.log(image)
              vm.$bus.$emit('submit-photos-form', {image: image})
            });
          },
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
