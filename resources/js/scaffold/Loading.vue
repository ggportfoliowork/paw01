<template>
  <div class="el-loading-mask is-fullscreen" v-show="pageIsLoading">
    <svg class="svg" width="108px" height="128px" viewBox="0 0 54 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
      <defs></defs>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <path class="beat-loader" d="M0.5,38.5 L16,38.5 L19,25.5 L24.5,57.5 L31.5,7.5 L37.5,46.5 L43,38.5 L53.5,38.5" id="Path-2" stroke-width="2" sketch:type="MSShapeGroup"></path>
      </g>
    </svg>
  </div>
</template>

<script type="text/babel">
  export default {
    mounted() {

    },
    data() {
      return {}
    },
    methods: {},
    watch: {
      pageIsLoading(val) {

      }
    },
    props: ['pageIsLoading'],
    components: {},

  }
</script>

<style lang="sass">

</style>
