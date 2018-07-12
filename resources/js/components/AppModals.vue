<template>
  <div>
    <upload-photo-modal></upload-photo-modal>
    <upload-pet-photo-modal></upload-pet-photo-modal>
  </div>
</template>

<script>
    import UploadPhotoModal from './Modals/UploadPhotoModal'
    import UploadPetPhotoModal from './Modals/UploadPetPhotoModal'

    export default {
        created() {

        },
        components: {
          UploadPhotoModal,
          UploadPetPhotoModal
        },
        computed: {},
        data() {
            return {}
        },
        directives: {},
        methods: {},
        mounted() {

        },
        props: [],
        watch: {},
    }


</script>

<style>

</style>
