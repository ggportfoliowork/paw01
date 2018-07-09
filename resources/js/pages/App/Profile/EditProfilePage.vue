<template>
  <el-row :gutter="24">
    <el-col :sm="24" id="step-2">
        <h1 class="title">Edit My Profile</h1>
        <el-card type="box">
          <create-or-edit-profile-form :form="userProfile" :submitting="submitting"></create-or-edit-profile-form>
        </el-card>
    </el-col>
  </el-row>
</template>

<script>

    import CreateOrEditProfileForm from '../../../components/Forms/Profile/CreateOrEditProfileForm'
    export default {
        created() {
          this.$bus.$on('submit-profile', () => {
            this.submitProfileForm()
          })
        },
        components: {
          CreateOrEditProfileForm
        },
        computed: {
          user() {
            return this.$store.state.user
          },
          userProfile() {
            if(this.user)
              return this.user.profile

            return {}
          }
        },
        data() {
            return {
              submitting: false,
              errors: {}
            }
        },

        methods: {
          submitProfileForm() {
            this.submitting = true
            this.$http.put('users/'+this.user.id+'/profile', this.userProfile)
              .then(response => {
                console.log(response)
                this.submitting = false
            })
          }
        },
        mounted() {

        },
        props: [],
        watch: {},
    }


</script>

<style>

</style>
