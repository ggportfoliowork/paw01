<template>
  <el-form v-model="form" label-position="top">
    <el-row>
      <el-col :sm="24" :md="8">
        <el-row>
          <el-col :span="24">
            <nav class="level">
              <div class="level-item has-text-centered">
                <div class="photo-container">
                  <img src="http://placehold.it/300x300" class="rounded" style="height:180px;width:180px;"  />
                </div>
              </div>
            </nav>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="has-text-centered" style="margin-top:10px;">
            <el-button type="primary" @click="displayUploadPhotoDialog">
              <i class="el-icon-picture"></i> Upload a Photo
            </el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :sm="24" :md="16">
        <el-row :gutter="14">
          <el-col :sm="24" :md="8">
            <el-form-item label="Name" :class="{ 'is-error': errors.find(error => error.field === 'name') }">
              <el-input v-model="form.name" />
              <span class="el-form-item__error" v-if="errors.find(error => error.field === 'name')">{{ errors.find(error => error.field === 'name').message }}</span>
            </el-form-item>
            <el-form-item label="Species" :class="{ 'is-error': errors.find(error => error.field === 'species_id') }" style="width:100%;">
              <el-radio-group v-model="form.species_id" size="mini" style="width:100%;">
                <el-radio border :label="1">Dog</el-radio>
                <el-radio border :label="2">Cat</el-radio>
                <el-radio border :label="3">Other</el-radio>
                <span class="el-form-item__error" v-if="errors.find(error => error.field === 'species_id')">{{ errors.find(error => error.field === 'species_id').message }}</span>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Breeds" :class="{ 'is-error': errors.find(error => error.field === 'breeds') }">
              <el-select
                  v-model="form.breeds"
                  placeholder="Select breeds"
                  :disabled="speciesIsSelected"
                  filterable
                  multiple
                  collapse-tags
                  style="width:100%;">
                    <el-option
                        v-for="(item, key) in availableBreeds"
                        :key="key"
                        :label="item.name"
                        :value="item.id">
                    </el-option>
              </el-select>
              <span class="el-form-item__error" v-if="errors.find(error => error.field === 'breeds')">{{ errors.find(error => error.field === 'breeds').message }}</span>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="8">
            <el-form-item label="Birthday" :class="{ 'is-error': errors.find(error => error.field === 'date_of_birth') }">
              <el-date-picker v-model="form.date_of_birth"
                              type="date"
                              placeholder="Pick a date"
                              format="M/d/yyyy"
                              value-format="yyyy-M-d"
              />
              <span class="el-form-item__error" v-if="errors.find(error => error.field === 'date_of_birth')">{{ errors.find(error => error.field === 'date_of_birth').message }}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :sm="24">
            <el-form-item>
              <el-button type="primary" @click="submitPetsForm" :loading="submitting">Save</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>

    export default {
        created() {

        },
        components: {

        },
        computed: {
          speciesIsSelected() {
              if(this.form.species_id == null || this.form.species_id == false || typeof this.form.species_id == 'undefined')
                return true

            return false
          },
          availableBreeds() {
            if(this.form.species_id !== null) {
              return _.filter(this.$store.state.available_breeds, (breed) => {
                return breed.species_id === this.form.species_id
              })
            }
            return []
          }
        },
        data() {
            return {}
        },
        methods: {
          submitPetsForm() {
            this.$bus.$emit('submit-pets-form')
          },
          displayUploadPhotoDialog() {
            this.$bus.$emit('show-dialog-photo-upload')
          }
        },
        mounted() {

        },
        props: ['submitting', 'errors', 'form'],
        watch: {},
    }


</script>

<style>

</style>
