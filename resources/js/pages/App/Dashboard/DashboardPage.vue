<template>
  <el-row :gutter="24">
    <el-col :md="7">
      <profile-card></profile-card>
    </el-col>
    <el-col :md="17" id="step-2">
      <div>
        <h1 class="title">Dashboard Page</h1>
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
