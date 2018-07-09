<template>
  <el-row :gutter="24">
    <el-col :md="7">
      <profile-card></profile-card>
    </el-col>
    <el-col :md="17" id="step-2">
        <div class="timeline">
          <header class="timeline-header">
            <span class="tag is-medium is-primary">End</span>
          </header>
          <div class="timeline-item is-primary">
            <div class="timeline-marker is-icon">
              <i class="fa fa-exchange"></i>
            </div>
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <p class="heading">January 2016</p>
              <p>Timeline content - Can include any HTML element</p>
            </div>
          </div>
          <div class="timeline-item is-primary">
            <div class="timeline-marker is-icon">
              <i class="fa fa-exchange"></i>
            </div>
            <div class="timeline-content">
              <p class="heading">February 2016</p>
              <p>Timeline content - Can include any HTML element</p>
            </div>
          </div>
          <header class="timeline-header">
            <span class="tag is-medium is-primary">Start</span>
          </header>
        </div>
    </el-col>
  </el-row>
</template>

<script>

  import ProfileCard from '../../../components/Cards/ProfileCard'

  export default {
    created() {

    },
    components: {
      ProfileCard
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    data() {
      return {

      }
    },
    methods: {

    },
    mounted() {

    },
    props: [],
    watch: {

    },
  }


</script>

<style>

</style>
