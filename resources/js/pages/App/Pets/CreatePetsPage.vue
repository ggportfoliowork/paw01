<template>
  <el-row :gutter="24">
    <el-col :sm="24" id="step-2">
      <el-card type="box">
        <el-row style="margin-bottom:10px;">
          <el-col :span="24">
            <h1 class="title">Add A Pet</h1>
          </el-col>
        </el-row>
        <create-or-edit-pets-form :form="petForm" :submitting="submitting" :errors="errors"></create-or-edit-pets-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>

    import CreateOrEditPetsForm from '../../../components/Forms/Pets/CreateOrEditPetsForm'

    export default {
        created() {
          this.$bus.$on('submit-pets-form', () => {
            this.submitPetsForm()
          })
        },
        beforeDestroy() {
          this.$bus.$off('submit-pets-form')
        },
        components: {
          CreateOrEditPetsForm
        },
        computed: {
          user() {
            return this.$store.state.user
          },
        },
        data() {
            return {
              submitting: false,
              errors: [],
              petForm: {
                name: null,
                species_id: null,
                breeds: null,
                date_of_birth: null,
                description: null,
                behavior_animals: null,
                behavior_humans: null,
                behavior_children: null,
              }
            }
        },

        methods: {
          submitPetsForm() {
            this.submitting = true
            this.$http.put('pets', this.petForm)
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
