<template>
  <el-form v-model="form" label-position="top">
    <el-row>
      <el-col :sm="24" :md="8">
        <el-row>
          <el-col :span="24">
            <nav class="level">
              <div class="level-item has-text-centered">
                <div class="photo-container">
                  <img :src="$store.state.profilePhoto" class="rounded" style="height:180px;width:180px;" />
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
              <el-form-item label="First Name" :class="{ 'is-error': errors.find(error => error.field === 'name_first') }">
                <el-input v-model="form.name_first" />
                <span class="el-form-item__error" v-if="errors.find(error => error.field === 'name_first')">{{ errors.find(error => error.field === 'name_first').message }}</span>
              </el-form-item>
            </el-col>
          <el-col :sm="24" :md="8">
            <el-form-item label="Last Name" :class="{ 'is-error': errors.find(error => error.field === 'name_last') }">
              <el-input v-model="form.name_last" />
              <span class="el-form-item__error" v-if="errors.find(error => error.field === 'name_last')">{{ errors.find(error => error.field === 'name_last').message }}</span>
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
        <el-row :gutter="14">
          <el-col :sm="24">
            <el-row :gutter="14">
              <el-col :sm="24" :md="16">
                <el-row>
                  <el-col :sm="24">
                    <el-form-item label="Street Address" :class="{ 'is-error': errors.find(error => error.field === 'address_street_1') }">
                      <el-input v-model="form.address_street_1"></el-input>
                      <span class="el-form-item__error" v-if="errors.find(error => error.field === 'address_street_1')">{{ errors.find(error => error.field === 'address_street_1').message }}</span>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="14">
                  <el-col :sm="24" :md="8">
                    <el-form-item label="City">
                      <el-input v-model="form.address_city" :class="{ 'is-error': errors.find(error => error.field === 'address_city') }"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="24" :md="6">
                    <el-form-item label="State" :class="{ 'is-error': errors.find(error => error.field === 'address_state') }">
                      <el-select v-model="form.address_state" placeholder="Select state">
                        <el-option v-for="(value, key) in availableStates"
                                    :key="key"
                                    :value="value.key"
                                    :label="value.value"></el-option>
                      </el-select>
                      <span class="el-form-item__error" v-if="errors.find(error => error.field === 'address_state')">{{ errors.find(error => error.field === 'address_state').message }}</span>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="24" :md="10">
                    <el-form-item label="Postal Code" :class="{ 'is-error': errors.find(error => error.field === 'address_postal_code') }">
                      <el-input v-model="form.address_postal_code"></el-input>
                      <span class="el-form-item__error" v-if="errors.find(error => error.field === 'address_postal_code')">{{ errors.find(error => error.field === 'address_postal_code').message }}</span>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row :gutter="14">
              <el-col :sm="24" :md="8">
                <el-form-item label="Phone">
                  <el-input placeholder="Please input" v-model="form.contact_phone_value" class="input-with-select">
                    <el-select style="width:95px;" v-model="form.contact_phone_type" slot="prepend" placeholder="Select phone type">
                      <el-option label="Mobile" :value="1"></el-option>
                      <el-option label="Home" :value="2"></el-option>
                      <el-option label="Work" :value="3"></el-option>
                    </el-select>
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>

        </el-row>
        <el-row>
          <el-col :sm="24">
            <el-form-item>
              <el-button type="primary" @click="submitProfileForm" :loading="submitting">Save</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
  export default {
    name: 'CreateOrEditProfileForm',
    created() {

    },
    mounted() {

    },
    computed: {
      user() {
        return this.$store.state.user
      },
      availableStates: {
        get() {
          return this.$store.state.available_states
        }
      },
    },
    data() {
      return {

      }
    },
    methods: {
      submitProfileForm() {
        this.$bus.$emit('submit-profile')
      },
      displayUploadPhotoDialog() {
        this.$bus.$emit('show-dialog-photo-upload')
      }
    },
    watch: {

    },
    props: ['form', 'submitting', 'errors']
  }
</script>
