<template>
  <el-form v-model="form" label-position="top">
    <el-row>
      <el-col :sm="24" :md="8">
        <el-row>
          <el-col :span="24">
            <nav class="level">
              <div class="level-item has-text-centered">
                <div class="photo-container">
                  <img :src="petPhotoImage" class="rounded" style="height:180px;width:180px;"  />
                </div>
              </div>
            </nav>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="has-text-centered" style="margin-top:10px;">
            <el-button type="default" @click="displayUploadPetPhotoDialog()">
              <i class="el-icon-picture"></i> Upload a Photo
            </el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :sm="24" :md="16">
        <el-row :gutter="24">
          <el-col :sm="24" :md="9">
            <el-form-item label="Name" :class="{ 'is-error': errors.find(error => error.field === 'name') }">
              <el-input v-model="form.name" />
              <span class="el-form-item__error" v-if="errors.find(error => error.field === 'name')">{{ errors.find(error => error.field === 'name').message }}</span>
            </el-form-item>
            <el-form-item label="Gender" :class="{ 'is-error': errors.find(error => error.field === 'gender') }">
              <el-radio-group v-model="form.gender" size="mini" style="width:100%;">
                <el-radio border label="m"><i class="fal fa-mars"></i> Male</el-radio>
                <el-radio border label="f"><i class="fal fa-venus"></i> Female</el-radio>
                <span class="el-form-item__error" v-if="errors.find(error => error.field === 'gender')">{{ errors.find(error => error.field === 'gender').message }}</span>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Species" :class="{ 'is-error': errors.find(error => error.field === 'species_id') }" style="width:100%;">
              <el-radio-group v-model="form.species_id" size="mini" style="width:100%;">
                <el-radio border :label="1">Dog</el-radio>
                <el-radio border :label="2">Cat</el-radio>
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
            <el-form-item label="Birthday" :class="{ 'is-error': errors.find(error => error.field === 'date_of_birth') }">
              <el-date-picker v-model="form.date_of_birth"
                              type="date"
                              placeholder="Pick a date"
                              format="M/d/yyyy"
                              value-format="yyyy-MM-dd"
                              style="width:100%;"
              />
              <span class="el-form-item__error" v-if="errors.find(error => error.field === 'date_of_birth')">{{ errors.find(error => error.field === 'date_of_birth').message }}</span>
            </el-form-item>
            <el-form-item label="Description" :class="{ 'is-error': errors.find(error => error.field === 'details_description') }">
              <el-input
                type="textarea"
                autosize
                v-model="form.details_description" />
              <span class="el-form-item__error" v-if="errors.find(error => error.field === 'details_description')">{{ errors.find(error => error.field === 'details_description').message }}</span>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="15">
              <el-form-item label="Does your pet get along with other animals (dogs, cats, etc)?" :class="{ 'is-error': errors.find(error => error.field === 'behavior_animals') }">
                <el-radio-group v-model="form.behavior_animals" size="mini" style="width:100%;">
                  <el-radio border :label="1">Yes</el-radio>
                  <el-radio border :label="0">No</el-radio>
                  <span class="el-form-item__error" v-if="errors.find(error => error.field === 'behavior_animals')">{{ errors.find(error => error.field === 'behavior_animals').message }}</span>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="Does your pet get along with other humans?" :class="{ 'is-error': errors.find(error => error.field === 'behavior_humans') }">
                <el-radio-group v-model="form.behavior_humans" size="mini" style="width:100%;">
                  <el-radio border :label="1">Yes</el-radio>
                  <el-radio border :label="0">No</el-radio>
                  <span class="el-form-item__error" v-if="errors.find(error => error.field === 'behavior_humans')">{{ errors.find(error => error.field === 'behavior_humans').message }}</span>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="Does your pet get along with children?" :class="{ 'is-error': errors.find(error => error.field === 'behavior_children') }">
                <el-radio-group v-model="form.behavior_children" size="mini" style="width:100%;">
                  <el-radio border :label="1">Yes</el-radio>
                  <el-radio border :label="0">No</el-radio>
                  <span class="el-form-item__error" v-if="errors.find(error => error.field === 'behavior_children')">{{ errors.find(error => error.field === 'behavior_children').message }}</span>
                </el-radio-group>
              </el-form-item>
            <el-form-item label="Is your pet house trained?" :class="{ 'is-error': errors.find(error => error.field === 'is_house_trained') }">
              <el-radio-group v-model="form.is_house_trained" size="mini" style="width:100%;">
                <el-radio border :label="1">Yes</el-radio>
                <el-radio border :label="0">No</el-radio>
                <span class="el-form-item__error" v-if="errors.find(error => error.field === 'is_house_trained')">{{ errors.find(error => error.field === 'is_house_trained').message }}</span>
              </el-radio-group>
            </el-form-item>
              <el-form-item label="Is your pet spayed / neutered?" :class="{ 'is-error': errors.find(error => error.field === 'is_spayed_neutered') }">
                <el-radio-group v-model="form.is_spayed_neutered" size="mini" style="width:100%;">
                  <el-radio border :label="1">Yes</el-radio>
                  <el-radio border :label="0">No</el-radio>
                  <span class="el-form-item__error" v-if="errors.find(error => error.field === 'is_spayed_neutered')">{{ errors.find(error => error.field === 'is_spayed_neutered').message }}</span>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="Is your pet microchipped?" :class="{ 'is-error': errors.find(error => error.field === 'is_microchipped') }">
                <el-radio-group v-model="form.is_microchipped" size="mini" style="width:100%;">
                  <el-radio border :label="1">Yes</el-radio>
                  <el-radio border :label="0">No</el-radio>
                  <span class="el-form-item__error" v-if="errors.find(error => error.field === 'is_microchipped')">{{ errors.find(error => error.field === 'is_microchipped').message }}</span>
                </el-radio-group>
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
          },
          petPhotoImage() {
            if(this.form.image !== null) {
              return this.form.image.base64
            }

            return this.$store.state.defaultPetPhoto
          }
        },
        data() {
            return {}
        },
        methods: {
          submitPetsForm() {
            this.$bus.$emit('submit-pets-form')
          },
          displayUploadPetPhotoDialog() {
            this.$bus.$emit('show-dialog-pet-photo-upload')
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
