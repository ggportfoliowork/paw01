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
                gender: null,
                breeds: null,
                file: null,
                date_of_birth: null,
                behavior_animals: null,
                behavior_humans: null,
                behavior_children: null,
                is_spayed_neutered: null,
                is_microchipped: null,
                is_house_trained: null,
                details_description: null,
              }
            }
        },

        methods: {
          submitPetsForm() {
            this.submitting = true
            this.$http.post('pets', this.petForm)
              .then(response => {
                this.submitting = false
                if(response.data.success) {
                  this.errors = []
                  this.$bus.$emit('display-success', {
                    title: response.data.title,
                    message: response.data.message
                  })
                } else if(!response.data.success) {
                  this.errors = response.data
                  console.errror(response.data)
                }
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
