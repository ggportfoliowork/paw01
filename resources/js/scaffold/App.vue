<template>
  <div>
    <UserNavMenu></UserNavMenu>
    <section class="section">
      <div id="app-container" class="container">
        <router-view></router-view>
      </div>
    </section>
    <app-modals></app-modals>
  </div>
</template>

<script>

  import UserNavMenu from './UserNavMenu'
  import AppModals from '../components/AppModals'

  export default {
    created() {

    },
    components: {
      AppModals,
      UserNavMenu,

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
