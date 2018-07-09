<template>
  <el-row :gutter="24">
    <el-col :md="7">
      <quick-add-appointment-form></quick-add-appointment-form>
    </el-col>
    <el-col :md="17" id="step-2">
      <div>
        <h1 class="title">Dashboard Page</h1>
      </div>
    </el-col>
  </el-row>
</template>

<script>

  import QuickAddAppointmentForm from '../../../components/Forms/Appointment/QuickAddAppointmentForm'

  export default {
    created() {

    },
    components: {
      QuickAddAppointmentForm
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
