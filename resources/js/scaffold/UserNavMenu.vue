<template>
  <nav class="navbar is-fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <h3 class="title">
           <!-- PawTrackers -->
          </h3>
        </a>
        <div class="navbar-burger burger" data-target="pawNav">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="pawNav" class="navbar-menu">
        <div class="navbar-start">
            <div class="navbar-item">
              <router-link class="button is-text" to="/">
                <span class="icon">
                  <i class="fal fa-home"></i>
                </span>
                      <span>
                  Dashboard
                </span>
              </router-link>
            </div>
            <div class="navbar-item">
              <router-link class="button is-text" to="/pets">
               <span class="icon">
                 <i class="fal fa-paw"></i>
               </span>
                <span>
                   Pets
               </span>
              </router-link>
            </div>
            <div class="navbar-item">
              <router-link class="button is-text" to="/tracks">
                <span class="icon">
                 <i class="fal fa-map-marked-alt"></i>
                </span>
                <span>
                   Tracks
                </span>
              </router-link>
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <form method="POST" action="/app/logout">
                <input type="hidden" name="_csrf" :value="csrf_token" />
                <button type="submit" class="button is-text">
                  <span class="icon">
                    <i class="fal fa-power-off"></i>
                  </span>
                  <span>
                    Logout
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  </nav>
</template>

<script>

    export default {
        created() {

        },
        components: {},
        computed: {},
        data() {
            return {
              csrf_token: document.querySelector("meta[name='csrf_token']").getAttribute("content")
            }
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
