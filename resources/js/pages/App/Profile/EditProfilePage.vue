<template>
  <el-row :gutter="24">
    <el-col :sm="24" id="step-2">
        <el-card type="box">
          <el-row style="margin-bottom:10px;">
            <el-col :span="24">
              <h1 class="title">Edit My Profile</h1>
            </el-col>
          </el-row>
          <create-or-edit-profile-form :form="userProfile" :submitting="submitting" :errors="errors"></create-or-edit-profile-form>
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
        beforeDestroy() {
          this.$bus.$off('submit-profile')
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
              errors: []
            }
        },
        methods: {
          submitProfileForm() {
            this.submitting = true
            this.$http.put('users/'+this.user.id+'/profile', this.userProfile)
              .then(response => {
                if(response.data.success) {
                  this.errors = []
                  this.$bus.$emit('display-success', {
                    title: response.data.title,
                    message: response.data.message
                  })
                } else if(!response.data.success) {
                  this.errors = response.data
                }

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
