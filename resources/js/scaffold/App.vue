<template>
  <div>
    <router-link :to="{name: 'create-pet'}">ADD A PET</router-link>
  </div>
</template>

<script>

    export default {
        created() {
          console.log("MOUNTED")
        },
        components: {},
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
